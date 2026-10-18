// Monkey Academy, Module 1: Private Hire (TWM Colchester + OMB)
// Prices all include VAT. Update here AND re-record audio if anything changes.
(function () {
  const C = window.MA_CAPTIONS || {};
  const slide = (id, html) => ({ type: "slide", id, html, audio: id + ".mp3", caption: C[id] || "" });
  const q = (text, options, answer, why) => ({ type: "q", text, options, answer, why });
  const LOGO_TWM = "https://square-web-production-f.squarecdn.com/files/25b388ecfb25cbe936ff6088a4ee5648afbb6fdb/original.png";
  const LOGO_OMB = "https://square-web-production-f.squarecdn.com/files/8a28ce5a01133d6d918246513197c385b73305ef/original.png";
  const logos = `<div class="logos"><img src="${LOGO_TWM}" alt="Three Wise Monkeys" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'wordmark',textContent:'Three Wise Monkeys'}))"><img src="${LOGO_OMB}" alt="Other Monkey Brewing" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'wordmark',textContent:'Other Monkey Brewing'}))"></div>`;

  const items = [
    slide("s01", `
      ${logos}
      <p class="kicker">Module 1</p>
      <div class="s-title">Private Hire</div>
      <p class="muted">TWM Colchester and Other Monkey Brewing</p>
      <div class="grid">
        <div class="tile"><div class="lab">Who</div><div class="val">All staff</div><div class="sub">Compulsory</div></div>
        <div class="tile"><div class="lab">Time</div><div class="val">About 5 mins</div><div class="sub">Plus 14 questions</div></div>
        <div class="tile"><div class="lab">Pass mark</div><div class="val">12 out of 14</div><div class="sub">Logged to management</div></div>
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
      <p class="muted" style="margin:0">Three Wise Monkeys</p>
      <div class="building">
        <div class="floor yes">Top Floor <small>Hireable</small></div>
        <div class="floor no">Smokehouse restaurant <small>Not for hire</small></div>
        <div class="floor yes">Basement bar <small>Hireable</small></div>
      </div>
      <p class="muted" style="margin:14px 0 0">Other Monkey Brewing</p>
      <div class="building">
        <div class="floor yes">Upstairs <small>Hireable</small></div>
        <div class="floor no">Ground floor: Tap House / Taproom <small>Not for hire</small></div>
      </div>
      <div class="chips"><span class="chip warn">No lift to any hire space</span><span class="chip">Anything else: pass to a manager</span></div>`),

    slide("s04", `
      <p class="kicker">TWM Colchester</p>
      <h2>Top Floor</h2>
      <div class="big">£250</div><p class="muted">£350 in December. VAT included.</p>
      <div class="grid">
        <div class="tile"><div class="lab">Capacity</div><div class="val">200</div><div class="sub">60 seated</div></div>
        <div class="tile"><div class="lab">Days</div><div class="val">Any day</div><div class="sub">If free in Notion</div></div>
        <div class="tile"><div class="lab">Day hire</div><div class="val">11am to 4pm</div></div>
        <div class="tile"><div class="lab">Evening</div><div class="val">6pm to 12am</div><div class="sub">Fri and Sat to 1am</div></div>
      </div>
      <div class="chips"><span class="chip ok">Can be plug and play, no engineer needed</span><span class="chip warn">No lift</span></div>`),

    slide("s05", `
      <p class="kicker">Top Floor</p>
      <h2>Extras</h2>
      <p class="muted" style="margin:0 0 6px">No engineer needed unless their entertainment needs one.</p>
      <div class="price-row"><span>Using our sound desk or mics<br><small class="muted">Bands and live acts. In-house engineer is compulsory</small></span><b>£144</b></div>
      <div class="price-row"><span>Their own DJ<br><small class="muted">Only plugs in 2 XLRs. No tech support on audio, mics or projectors</small></span><b>Free</b></div>
      <div class="price-row"><span>Projector or simple setup (quizzes)<br><small class="muted">Engineer sets up, then takes down at the end</small></span><b>£72</b></div>
      <div class="price-row"><span>Our TWM DJ<br><small class="muted">Sound, setup and decks all included</small></span><b>£300</b></div>
      <div class="price-row"><span>Door or ticket person for events</span><b>£60</b></div>
      <div class="chips"><span class="chip warn">Engineer or DJ needed? Book it through the TWM Live email at least 30 days before</span></div>`),

    q("A customer rings asking for the Top Floor next Saturday. What do you do first?",
      ["Say yes and take their details", "Check the Notion calendar", "Check the gig listings on the website", "Tell them Saturdays are never available"], 1,
      "Always check Notion first. If it's not in Notion, it's not booked, and if it is, the date's gone."),
    q("A group wants the Top Floor in March for a party with their own playlist, plugged and played. What's the total?",
      ["£250", "£322", "£394", "£300"], 0,
      "£250. No engineer is needed unless their entertainment needs one."),
    q("A band wants the Top Floor and will use our sound desk and mics. What's the total in March?",
      ["£250", "£322", "£394", "£550"], 2,
      "£250 hire plus £144 for the in-house engineer. Anyone using our desk or mics must have our engineer."),
    q("A customer wants one of our DJs. When must it be booked, and how?",
      ["On the night, with the bar manager", "Through the TWM Live email, at least 30 days before", "A week before, by text", "Any time, through Stampede"], 1,
      "Engineers and DJs must be booked through the TWM Live email at least 30 days before the event."),
    q("Their DJ will plug two XLRs into our system and needs nothing else. What does that cost?",
      ["Free", "£72", "£144", "£300"], 0,
      "Free. Two XLRs in and that's it. No tech support on audio, mics or projectors."),
    q("What's the Top Floor hire fee on 12 December?",
      ["£250", "£300", "£350", "£375"], 2,
      "£350 in December. It's £250 the rest of the year."),
    q("A quiz night just needs the projector set up. What do you charge?",
      ["Nothing", "£72", "£144", "£300"], 1,
      "£72. An engineer comes in, sets it up, and takes it down at the end."),

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
      <h2>How to book</h2>
      <ol class="steps">
        <li>Enquiry comes in: Stampede, email or phone</li>
        <li>Phone call? Into Stampede and Notion straight after. Never on paper</li>
        <li>Check the Notion calendar</li>
        <li>Free? Put a hold on it in Notion</li>
        <li>Customer pays the hire fee (deposit) within 10 days to confirm</li>
        <li>Update Notion, then confirm with the customer</li>
      </ol>
      <div class="chips"><span class="chip warn">Not in Notion = not booked</span><span class="chip">Want a look round? Supervisor or manager, or book a time</span></div>`),

    slide("s09", `
      <p class="kicker">Money</p>
      <h2>Two rules</h2>
      <ul class="rules">
        <li><span class="n">1</span>The hire fee is the deposit. Non-refundable, no exceptions</li>
        <li><span class="n">2</span>All our prices include VAT. Never add anything on top</li>
      </ul>`),

    q("Someone phones to ask about hiring the Basement. What do you do with their details?",
      ["Write them on paper for the manager", "Put them into Stampede and Notion straight after the call", "Email them to AJ", "Remember them and add them later"], 1,
      "Phone enquiries go into Stampede and Notion straight after the call. Never on a bit of paper."),
    q("You've put a hold on a date. How long does the customer have to pay the hire fee?",
      ["24 hours", "10 days", "30 days", "They pay on the night"], 1,
      "10 days. Paying the hire fee (the deposit) is what confirms the booking."),
    q("A customer paid the Top Floor hire fee and cancels three weeks before. Do they get it back?",
      ["Yes, full refund", "Half back", "No. The hire fee is non-refundable", "Only if we rebook the date"], 2,
      "The hire fee is the deposit and it's non-refundable at any point. Tell them before they pay."),
    q("A customer walks in and asks to see the Top Floor. You're on the bar. What do you do?",
      ["Take them up yourself", "Take their details and get a supervisor or manager, or book them in for a time", "Tell them we don't do tours", "Let them go up on their own"], 1,
      "Tours are given by supervisors and managers only."),

    slide("s10", `
      <p class="kicker">Food and drink</p>
      <h2>Pre-order 10 days before</h2>
      <div class="price-row"><span>Sharing platter <small class="muted">serves 2</small><br><small class="muted">Smoked sausage, pulled pork, brisket, chicken wings, chicken thighs, seasoned fries, Asian slaw, corn nuggets</small></span><b>£45</b></div>
      <div class="price-row"><span>Vegan platter <small class="muted">serves 2</small><br><small class="muted">Vegan chicken sliders, vegan nachos, seasoned fries, corn nuggets</small></span><b>£35</b></div>
      <div class="chips"><span class="chip">Get dietary needs with the pre-order</span><span class="chip warn">Only outside food: a celebration cake</span></div>`),

    slide("s11", `
      <p class="kicker">House rules</p>
      <h2>Every hire</h2>
      <ul class="rules">
        <li><span class="n">9</span>Under-18s out by 9pm</li>
        <li><span class="n">ID</span>Challenge 25. Always check ID</li>
        <li><span class="n">18</span>No 18th birthday parties</li>
      </ul>`),

    q("When does the food and drink pre-order need to be in?",
      ["48 hours before", "7 days before", "10 days before", "On the night"], 2,
      "10 days before the event, with dietary requirements."),
  ];

  window.MA_MODULES = window.MA_MODULES || [];
  window.MA_MODULES.push({
    id: "M1",
    title: "Private Hire",
    blurb: "Spaces, prices, capacities and how to book. TWM Colchester and OMB.",
    items,
    endAudio: { pass: "pass.mp3", fail: "fail.mp3" },
  });
  window.MA_COMING_SOON = [];
})();
