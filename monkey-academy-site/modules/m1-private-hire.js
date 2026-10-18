// Monkey Academy, Module 1: Private Hire (TWM Colchester + OMB)
// Prices all include VAT. Update here AND re-record audio if anything changes.
(function () {
  const C = window.MA_CAPTIONS || {};
  const slide = (id, html) => ({ type: "slide", id, html, audio: "audio/" + id + ".mp3", caption: C[id] || "" });
  const q = (text, options, answer, why) => ({ type: "q", text, options, answer, why });

  const items = [
    slide("s01", `
      <p class="kicker">Module 1</p>
      <div class="s-title">Private Hire</div>
      <p class="muted">TWM Colchester and Other Monkey Brewing</p>
      <div class="grid">
        <div class="tile"><div class="lab">Who</div><div class="val">All staff</div><div class="sub">Compulsory</div></div>
        <div class="tile"><div class="lab">Time</div><div class="val">About 5 mins</div><div class="sub">Plus 10 questions</div></div>
        <div class="tile"><div class="lab">Pass mark</div><div class="val">8 out of 10</div><div class="sub">Logged to management</div></div>
      </div>`),

    slide("s02", `
      <p class="kicker">Remember these</p>
      <h2>The 4 golden rules</h2>
      <ul class="rules">
        <li><span class="n">1</span>Check Notion before offering any date</li>
        <li><span class="n">2</span>Never go over capacity</li>
        <li><span class="n">3</span>Quote the price sheet. Never guess</li>
        <li><span class="n">4</span>Tours: supervisors and managers only</li>
      </ul>`),

    slide("s03", `
      <p class="kicker">What we hire out</p>
      <h2>Three spaces</h2>
      <div class="building">
        <div class="floor yes">TWM Top Floor <small>Hireable</small></div>
        <div class="floor no">TWM Smokehouse <small>Not for hire</small></div>
        <div class="floor no">TWM Tap House <small>Not for hire</small></div>
        <div class="floor yes">TWM Basement bar <small>Hireable</small></div>
      </div>
      <div class="building">
        <div class="floor yes">OMB Upstairs <small>Hireable</small></div>
        <div class="floor no">OMB Taproom downstairs <small>Not for hire</small></div>
      </div>
      <div class="chips"><span class="chip warn">No lift to any hire space</span><span class="chip">Anything else: pass to a manager</span></div>`),

    slide("s04", `
      <p class="kicker">TWM Colchester</p>
      <h2>Top Floor</h2>
      <div class="big">£300</div><p class="muted">£350 in December. VAT included.</p>
      <div class="grid">
        <div class="tile"><div class="lab">Capacity</div><div class="val">200</div><div class="sub">60 seated</div></div>
        <div class="tile"><div class="lab">Days</div><div class="val">Any day</div><div class="sub">If free in Notion</div></div>
        <div class="tile"><div class="lab">Day hire</div><div class="val">12pm to 4pm</div></div>
        <div class="tile"><div class="lab">Evening</div><div class="val">6pm to 12am</div><div class="sub">Fri and Sat to 1am</div></div>
      </div>
      <div class="chips"><span class="chip ok">Stage, PA, lights, DJ booth, own bar</span><span class="chip warn">No lift</span></div>`),

    slide("s05", `
      <p class="kicker">Top Floor</p>
      <h2>Extras</h2>
      <div class="price-row"><span>Band, live act, mics or projector<br><small class="muted">In-house engineer is compulsory</small></span><b>£144</b></div>
      <div class="price-row"><span>Their own DJ, own decks and XLR leads<br><small class="muted">Bar staff plug in. No tech support</small></span><b>Free</b></div>
      <div class="price-row"><span>Set up and take down only<br><small class="muted">No tech on site after</small></span><b>£72</b></div>
      <div class="price-row"><span>Our TWM DJ<br><small class="muted">Covers all the sound</small></span><b>£300</b></div>
      <div class="price-row"><span>Door or ticket person</span><b>£60</b></div>`),

    q("A customer rings asking for the Top Floor next Saturday. What do you do first?",
      ["Say yes and take their details", "Check the Notion calendar", "Check the gig listings on the website", "Tell them Saturdays are never available"], 1,
      "Always check Notion first. If it's not in Notion, it's not booked, and if it is, the date's gone."),
    q("A band wants to hire the Top Floor in March. What's the total?",
      ["£300", "£420", "£444", "£360"], 2,
      "£300 hire plus £144 for the in-house engineer. A band always needs our engineer."),
    q("Their mate is DJing, bringing his own decks and XLR leads, and just needs plugging in. What does that cost?",
      ["Free", "£72", "£144", "£300"], 0,
      "Free. Bar staff plug them in and that's it. If they want set up and take down, that's £72."),
    q("What's the Top Floor hire fee on 12 December?",
      ["£300", "£375", "£420", "£350"], 3,
      "£350 in December. It's £300 the rest of the year."),

    slide("s06", `
      <p class="kicker">TWM Colchester</p>
      <h2>Basement bar</h2>
      <div class="big">£125</div><p class="muted">VAT included.</p>
      <div class="grid">
        <div class="tile"><div class="lab">Capacity</div><div class="val">50</div><div class="sub">Everyone in the room. 20 seated</div></div>
        <div class="tile"><div class="lab">Days</div><div class="val">Any day</div><div class="sub">If free in Notion</div></div>
        <div class="tile"><div class="lab">Day hire</div><div class="val">11am to 5pm</div></div>
        <div class="tile"><div class="lab">Evening</div><div class="val">To 12am</div><div class="sub">Fri and Sat to 1am</div></div>
      </div>
      <div class="chips"><span class="chip ok">Own bar, plug-and-play music</span><span class="chip warn">No lift</span></div>`),

    slide("s07", `
      <p class="kicker">Other Monkey Brewing</p>
      <h2>Upstairs</h2>
      <div class="big">£150</div><p class="muted">VAT included.</p>
      <div class="grid">
        <div class="tile"><div class="lab">Capacity</div><div class="val">55</div><div class="sub">Everyone in the room. 50 seated</div></div>
        <div class="tile"><div class="lab">Days</div><div class="val">Mon to Thu</div><div class="sub">Never Fri, Sat or Sun</div></div>
      </div>
      <div class="chips"><span class="chip warn">OMB stays open to the public at weekends</span><span class="chip warn">No lift</span></div>`),

    q("A party of 70 wants the Basement. What do you say?",
      ["Fine, as long as 20 of them sit down", "The Basement holds 50, so offer the Top Floor if it's free in Notion", "Fine, staff don't count", "Fine, if they pay extra"], 1,
      "50 is the limit for everyone in the room. Never go over. The Top Floor takes up to 200."),
    q("Someone wants OMB Upstairs on a Saturday night.",
      ["Book it, it's free in Notion", "Book it, but charge more", "OMB Upstairs is Monday to Thursday only. Offer a TWM space if it's free", "Book it for daytime only"], 2,
      "OMB has to stay open to the public at weekends, so Upstairs is Monday to Thursday only."),

    slide("s08", `
      <p class="kicker">Every booking</p>
      <h2>Five steps</h2>
      <ol class="steps">
        <li>Enquiry comes in on Stampede</li>
        <li>Check the Notion calendar</li>
        <li>Still deciding? Put a provisional hold in Notion</li>
        <li>Customer pays the hire fee (the deposit)</li>
        <li>Update Notion, then confirm with the customer</li>
      </ol>
      <div class="chips"><span class="chip warn">Not in Notion = not booked</span></div>`),

    slide("s09", `
      <p class="kicker">Money</p>
      <h2>Two rules</h2>
      <ul class="rules">
        <li><span class="n">1</span>The hire fee is the deposit. Non-refundable, no exceptions</li>
        <li><span class="n">2</span>All our prices include VAT. Never add anything on top</li>
      </ul>`),

    q("A customer paid the Top Floor hire fee and cancels three weeks before. Do they get it back?",
      ["Yes, full refund", "Half back", "No. The hire fee is non-refundable", "Only if we rebook the date"], 2,
      "The hire fee is the deposit and it's non-refundable at any point. Tell them before they pay."),
    q("A customer walks in and asks to see the Top Floor. You're on the bar. What do you do?",
      ["Take them up yourself", "Take their details and get a supervisor or manager", "Tell them we don't do tours", "Let them go up on their own"], 1,
      "Tours are given by supervisors and managers only."),

    slide("s10", `
      <p class="kicker">Food and drink</p>
      <h2>Pre-order 10 days before</h2>
      <div class="price-row"><span>Sharing platter <small class="muted">serves 2</small></span><b>£45</b></div>
      <div class="price-row"><span>Vegan platter <small class="muted">serves 2</small></span><b>£35</b></div>
      <div class="price-row"><span>December: Christmas platters <small class="muted">serve 2</small></span><b>£40</b></div>
      <div class="chips"><span class="chip">December: use the Christmas price sheet</span><span class="chip warn">Only outside food: a celebration cake</span><span class="chip">Get dietary needs with the pre-order</span></div>`),

    slide("s11", `
      <p class="kicker">House rules</p>
      <h2>Every hire</h2>
      <ul class="rules">
        <li><span class="n">9</span>Under-18s out by 9pm</li>
        <li><span class="n">ID</span>Challenge 25. ID checked from 8pm</li>
        <li><span class="n">18</span>No 18th birthday parties</li>
      </ul>`),

    q("When does the food and drink pre-order need to be in?",
      ["48 hours before", "7 days before", "10 days before", "On the night"], 2,
      "10 days before the event, with dietary requirements."),
    q("A customer wants to bring their own buffet. What do you say?",
      ["That's fine", "Fine, with a small fee", "Only a celebration cake can come in. Food comes from us", "Only in the Basement"], 2,
      "The only outside food allowed is a celebration cake."),
  ];

  window.MA_MODULES = window.MA_MODULES || [];
  window.MA_MODULES.push({
    id: "M1",
    title: "Private Hire",
    blurb: "Spaces, prices, capacities and how to book. TWM Colchester and OMB.",
    items,
    endAudio: { pass: "audio/pass.mp3", fail: "audio/fail.mp3" },
  });
  // Coming soon placeholders (shown greyed out on the home screen)
  window.MA_COMING_SOON = [];
})();
