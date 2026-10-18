(function () {
  const CFG = window.MA_CONFIG || {};
  const MODULES = window.MA_MODULES || [];
  const $ = (id) => document.getElementById(id);
  const audio = $("audio");
  const views = ["v-login", "v-home", "v-player", "v-q", "v-result"];
  const PREVIEW = !CFG.API_URL;

  let user = null;          // {pin, name, site, results:{M1:{status,score,total,date}}}
  let mod = null, idx = 0, score = 0, answered = [], ccOn = true;

  const store = {
    get(k) { try { return JSON.parse(sessionStorage.getItem(k)); } catch (e) { return null; } },
    set(k, v) { try { sessionStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
    del(k) { try { sessionStorage.removeItem(k); } catch (e) {} },
  };

  function show(v) {
    views.forEach((x) => ($(x).hidden = x !== v));
    window.scrollTo(0, 0);
  }

  async function api(payload) {
    const res = await fetch(CFG.API_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" }, // avoids CORS preflight
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Network error " + res.status);
    return res.json();
  }

  // ---------- LOGIN ----------
  $("preview-note").hidden = !PREVIEW;
  $("preview-go").onclick = () => { user = { pin: "", name: "Preview", site: "", results: {} }; home(); };

  $("login-form").onsubmit = async (e) => {
    e.preventDefault();
    const pin = $("pin").value.trim();
    const msg = $("login-msg");
    if (!/^\d{4}$/.test(pin)) { msg.textContent = "Your PIN is 4 numbers."; msg.className = "msg err"; return; }
    if (PREVIEW) { msg.textContent = "Preview mode: use 'Continue as preview' below."; msg.className = "msg err"; return; }
    msg.textContent = "Checking..."; msg.className = "msg";
    try {
      const r = await api({ action: "login", pin });
      if (!r.ok) { msg.textContent = r.error || "PIN not recognised. Check with your manager."; msg.className = "msg err"; return; }
      user = { pin, name: r.name, site: r.site, results: r.results || {} };
      store.set("ma_user", user);
      home();
    } catch (err) {
      msg.textContent = "Couldn't connect. Check your signal and try again."; msg.className = "msg err";
    }
  };

  $("logout").onclick = () => { store.del("ma_user"); user = null; $("pin").value = ""; $("who").textContent = ""; show("v-login"); };

  // ---------- HOME ----------
  function home() {
    audio.pause();
    $("who").textContent = user.name + (PREVIEW ? " (not saved)" : "");
    $("hello").textContent = "Hello " + user.name.split(" ")[0];
    const wrap = $("modules"); wrap.innerHTML = "";
    MODULES.forEach((m) => {
      const r = user.results[m.id];
      const st = r ? r.status : "todo";
      const label = st === "PASS" ? "Passed" : st === "FAIL" ? "Not passed yet" : "To do";
      const cls = st === "PASS" ? "pass" : st === "FAIL" ? "fail" : "todo";
      const el = document.createElement("div"); el.className = "mod";
      el.innerHTML = `<div><h3></h3><p class="muted" style="margin:0"></p></div>
        <div style="text-align:right"><span class="tag ${cls}">${label}</span><br>
        <button class="btn primary" style="margin-top:8px">${st === "PASS" ? "Do it again" : "Start"}</button></div>`;
      el.querySelector("h3").textContent = "Module " + m.id.slice(1) + ": " + m.title;
      el.querySelector("p").textContent = m.blurb + (r && r.score != null ? ` Last score: ${r.score}/${r.total}.` : "");
      el.querySelector("button").onclick = () => start(m);
      wrap.appendChild(el);
    });
    (window.MA_COMING_SOON || []).forEach((t) => {
      const el = document.createElement("div"); el.className = "mod";
      el.innerHTML = `<div><h3></h3><p class="muted" style="margin:0">Coming soon</p></div><span class="tag soon">Soon</span>`;
      el.querySelector("h3").textContent = t; wrap.appendChild(el);
    });
    show("v-home");
  }

  // ---------- PLAYER ----------
  const qTotal = (m) => m.items.filter((i) => i.type === "q").length;

  function start(m) { mod = m; idx = 0; score = 0; answered = []; m.items.forEach((i) => delete i.heard); render(); }

  function render() {
    const it = mod.items[idx];
    $("bar").style.width = Math.round((idx / mod.items.length) * 100) + "%";
    if (!it) return finish();
    if (it.type === "q") return renderQ(it);
    show("v-player");
    $("stage").innerHTML = it.html;
    $("caption").textContent = it.caption;
    $("caption").classList.toggle("off", !ccOn);
    $("b-back").disabled = idx === 0 || mod.items[idx - 1].type === "q";
    $("b-next").disabled = !it.heard;
    $("hint").hidden = !!it.heard;
    play(it);
  }

  function play(it) {
    audio.src = it.audio;
    audio.currentTime = 0;
    audio.onended = () => { it.heard = true; $("b-next").disabled = false; $("hint").hidden = true; };
    audio.onerror = () => { it.heard = true; $("b-next").disabled = false; $("hint").textContent = "Audio didn't load. Read the subtitles, then carry on."; };
    const p = audio.play();
    if (p && p.catch) p.catch(() => { $("hint").textContent = "Tap Replay to start the audio."; });
  }

  $("b-next").onclick = () => { idx++; render(); };
  $("b-back").onclick = () => { if (idx > 0) { idx--; render(); } };
  $("b-replay").onclick = () => play(mod.items[idx]);
  $("b-cc").onclick = () => {
    ccOn = !ccOn; $("caption").classList.toggle("off", !ccOn);
    $("b-cc").textContent = ccOn ? "Subtitles on" : "Subtitles off"; $("b-cc").setAttribute("aria-pressed", ccOn);
  };

  // ---------- QUESTIONS ----------
  function renderQ(it) {
    audio.pause();
    show("v-q");
    const n = mod.items.slice(0, idx + 1).filter((i) => i.type === "q").length;
    $("q-count").textContent = `Question ${n} of ${qTotal(mod)}`;
    $("q-text").textContent = it.text;
    $("q-fb").hidden = true; $("q-next").hidden = true;
    const box = $("q-opts"); box.innerHTML = "";
    it.options.forEach((o, i) => {
      const b = document.createElement("button"); b.className = "opt"; b.textContent = o;
      b.onclick = () => choose(it, i, b);
      box.appendChild(b);
    });
  }

  function choose(it, i) {
    const btns = [...$("q-opts").children];
    btns.forEach((b) => (b.disabled = true));
    const right = i === it.answer;
    btns[it.answer].classList.add("right");
    if (!right) btns[i].classList.add("wrong");
    if (right) score++;
    answered.push({ q: it.text, chosen: it.options[i], correct: right });
    const fb = $("q-fb"); fb.hidden = false;
    fb.innerHTML = `<b class="${right ? "good" : "bad"}">${right ? "Correct." : "Not quite."}</b> `;
    fb.appendChild(document.createTextNode(it.why));
    $("q-next").hidden = false;
  }
  $("q-next").onclick = () => { idx++; render(); };

  // ---------- RESULT ----------
  async function finish() {
    const total = qTotal(mod);
    const passed = score / total >= (CFG.PASS_MARK || 0.8);
    show("v-result");
    $("r-badge").textContent = passed ? "✅" : "🔁";
    $("r-title").textContent = passed ? "Passed" : "Not passed yet";
    $("r-score").textContent = `${score} out of ${total}`;
    audio.src = passed ? mod.endAudio.pass : mod.endAudio.fail; audio.play().catch(() => {});
    const save = $("r-save");
    user.results[mod.id] = { status: passed ? "PASS" : "FAIL", score, total, date: new Date().toISOString() };
    if (PREVIEW) { save.textContent = "Preview mode: this result was not saved."; save.className = "msg"; return; }
    save.textContent = "Saving your result..."; save.className = "msg";
    const payload = { action: "result", pin: user.pin, module: mod.id, moduleTitle: mod.title, score, total, passed, answers: answered };
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const r = await api(payload);
        if (r.ok) { save.textContent = "Saved. Management can see your result."; save.className = "msg ok"; store.set("ma_user", user); return; }
        throw new Error(r.error);
      } catch (e) { await new Promise((ok) => setTimeout(ok, 1500 * attempt)); }
    }
    save.textContent = "Couldn't save your result. Screenshot this screen and show your manager."; save.className = "msg err";
  }
  $("r-retry").onclick = () => start(mod);
  $("r-home").onclick = home;

  // ---------- BOOT ----------
  const saved = store.get("ma_user");
  if (saved && !PREVIEW) { user = saved; home(); } else show("v-login");
})();
