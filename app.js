const pages = [...document.querySelectorAll(".page")];
const mainNavLinks = [...document.querySelectorAll(".main-nav a")];
const brandLink = document.querySelector(".brand");
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const faqList = document.querySelector("#faqList");
const portalNav = document.querySelector("#portalNav");
const portalView = document.querySelector("#portalView");
const portalTitle = document.querySelector("#portalTitle");
const portalMessage = document.querySelector("#portalMessage");
const auditSlotInput = document.querySelector("#auditSlot");

let isLoggedIn = false;
let activePortalView = "dashboard";
let selectedAuditSlot = "";

const routeAliases = {
  "free-audit": "audit"
};

const pathRoutes = {
  "/": "home",
  "/services": "services",
  "/results": "results",
  "/about": "about",
  "/faq": "faq",
  "/free-audit": "audit",
  "/contact": "contact",
  "/privacy": "privacy",
  "/terms": "terms",
  "/login": "login"
};

const pageMeta = {
  home: [
    "Taylor In Socials | Digital Presence for Local Hospitality",
    "Premium hospitality content support, venue promotion, short-form content, social and web visibility, and online growth for restaurants, bars, cafés, pubs, and hospitality brands."
  ],
  services: [
    "Services | Taylor In Socials",
    "Hospitality content support, digital presence, short-form content, social and web visibility, and online growth for local venues and other local businesses."
  ],
  results: [
    "Results | Taylor In Socials",
    "Hospitality portfolio examples covering content planning, local visibility, offers, events, short-form content, and content consistency."
  ],
  about: [
    "About | Taylor In Socials",
    "Taylor In Socials helps local hospitality brands and other local businesses look active, polished, and trusted online."
  ],
  faq: [
    "FAQ | Taylor In Socials",
    "Answers for restaurants, bars, cafés, pubs, hospitality brands, and local businesses considering social and web content support."
  ],
  audit: [
    "Free Online Presence Audit | Taylor In Socials",
    "Request a free social and web presence audit for your restaurant, bar, café, pub, hospitality brand, or local business."
  ],
  contact: [
    "Contact | Taylor In Socials",
    "Contact Taylor In Socials about restaurant, bar, café, pub, hospitality, or local business social and web content support."
  ],
  privacy: [
    "Privacy Policy | Taylor In Socials",
    "Privacy information for Taylor In Socials website forms, booking requests, client portal data, and service workflows."
  ],
  terms: [
    "Terms | Taylor In Socials",
    "Terms information for Taylor In Socials services, retainers, approvals, portal use, and third-party platforms."
  ],
  login: [
    "Client Login | Taylor In Socials",
    "Private client portal access for Taylor In Socials plans, approvals, linked accounts, reports, and billing status."
  ],
  portal: [
    "Client Portal | Taylor In Socials",
    "Private Taylor In Socials client portal preview."
  ]
};

const faqs = [
  {
    question: "What happens during the free audit?",
    answer: "Taylor In Socials reviews your digital presence, local profile, website content, current brand content, short-form content, offers, menus, events, reviews, and obvious quick wins, then gives you practical recommendations."
  },
  {
    question: "Do you work with restaurants, bars, cafés, and pubs?",
    answer: "Yes. Hospitality is the main focus: restaurants, bars, cafés, pubs, food and drink venues, and local hospitality brands. Taylor In Socials can also support other local businesses that need regular content."
  },
  {
    question: "Can you help with menus, offers, and events?",
    answer: "Yes. Content can be planned around menu launches, specials, happy hours, seasonal offers, quiz nights, live music, private hire, and local events."
  },
  {
    question: "Which platforms can you support?",
    answer: "We support all major social platforms including Instagram, Facebook, TikTok, Google Business Profile and more. Depending on what the venue needs, support can also include website/CMS content, short-form content, stories, captions, scheduling support, review prompts, and local engagement ideas."
  },
  {
    question: "Do we need professional photos first?",
    answer: "Not always. Good venue photos help, but Taylor In Socials can also plan content around your food, drinks, atmosphere, team, events, reviews, and behind-the-scenes moments."
  },
  {
    question: "Can you help if we are not a hospitality business?",
    answer: "Yes. Hospitality is the clear focus, but other local businesses can still be supported if they need a consistent social and web presence."
  },
  {
    question: "How do approvals work?",
    answer: "In this preview, clients can review planned posts, leave comments, approve content, or request changes before anything is scheduled. A real portal would need secure production setup first."
  },
  {
    question: "Is the client portal ready for real client data?",
    answer: "Not yet. The portal in this launch build is a preview of the client experience. Real client data should only be added after authentication, permissions, secure storage, and production workflows are built."
  }
];

const portalItems = [
  ["dashboard", "Dashboard"],
  ["content", "Content Plan"],
  ["approvals", "Approvals"],
  ["accounts", "Linked Accounts"],
  ["credentials", "Credentials"],
  ["reports", "Reports"],
  ["billing", "Billing"],
  ["settings", "Settings"]
];

const contentItems = [
  {
    title: "New summer menu short-form content",
    channel: "Short-form content",
    date: "10 May",
    status: "Pending",
    note: "Needs a final check on menu names and dish order."
  },
  {
    title: "Friday drinks offer post",
    channel: "Social + local search",
    date: "14 May",
    status: "Approved",
    note: "Approved for the weekend offer push."
  },
  {
    title: "Live music story set",
    channel: "Stories",
    date: "17 May",
    status: "Changes",
    note: "Client asked to update the event time on slide 2."
  },
  {
    title: "Sunday roast booking update",
    channel: "Website + social",
    date: "22 May",
    status: "Pending",
    note: "Awaiting approval on booking link and cut-off time."
  }
];

const contactEmail = "taylorkinsella@taylorinsocials.com";

const calendarPreview = [
  ["Mon 13", "Menu teaser clip", "Short-form", "Draft"],
  ["Thu 16", "Quiz night reminder", "Stories", "Approval"],
  ["Fri 17", "Drinks offer post", "Social + local search", "Ready"],
  ["Sat 18", "Weekend atmosphere reel", "Short-form", "Planned"]
];

const nextActions = [
  ["Approve", "Sunday roast booking copy"],
  ["Send", "Two clear menu photos"],
  ["Confirm", "Live music start time"],
  ["Review", "Weekend offer wording"]
];

const assetRequests = [
  ["Menu photo", "Needed for launch post"],
  ["Terrace image", "Suggested for Friday story"],
  ["Event details", "Date, time, ticket or booking link"]
];

const reports = [
  ["Local visibility", "Clearer", "Short-form content shows dishes, drinks, and atmosphere more consistently."],
  ["Engagement", "Focused", "Offer and event posts are easier for customers to understand and act on."],
  ["Offer interest", "Tracked", "Weekend promo links and profile actions are reviewed in plain English."],
  ["Reviews prompted", "Active", "Review reminders are planned around positive customer moments."]
];

const projectMessages = [
  ["Taylor In Socials", "The summer menu reel is drafted. Can you confirm the dish names before Friday?"],
  ["Client", "Yes, the pasta special is called lemon herb linguine. Please keep the cocktail clip near the start."],
  ["Taylor In Socials", "Perfect. I will update the caption and keep the first frame focused on food and drinks."]
];

function showPage(pageName) {
  let targetPage = routeAliases[pageName] || pageName || "home";

  if (targetPage === "portal" && !isLoggedIn) {
    targetPage = "login";
  }

  pages.forEach((page) => {
    page.classList.toggle("active", page.dataset.page === targetPage);
  });

  mainNavLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${targetPage}`);
  });

  mainNav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");

  if (targetPage === "portal") {
    renderPortal();
  }

  const meta = pageMeta[targetPage] || pageMeta.home;
  document.title = meta[0];
  document.querySelector('meta[name="description"]').setAttribute("content", meta[1]);

  window.scrollTo({ top: 0, behavior: "auto" });
}

function handleRoute() {
  const hashRoute = window.location.hash.replace("#", "");
  const pathRoute = pathRoutes[window.location.pathname] || "home";
  const route = hashRoute || pathRoute;
  showPage(route);
}

function renderFaqs() {
  faqList.innerHTML = faqs
    .map((item, index) => `
      <article class="faq-item ${index === 0 ? "open" : ""}">
        <button type="button" aria-expanded="${index === 0}">
          <span>${item.question}</span>
          <span>${index === 0 ? "-" : "+"}</span>
        </button>
        <p>${item.answer}</p>
      </article>
    `)
    .join("");

  faqList.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const item = button.closest(".faq-item");
    const isOpen = item.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
    button.lastElementChild.textContent = isOpen ? "-" : "+";
  });
}

function statusClass(status) {
  return status.toLowerCase() === "approved"
    ? "approved"
    : status.toLowerCase() === "changes"
      ? "changes"
      : "pending";
}

function contentRows(includeActions = false) {
  return `
    <div class="table">
      <div class="table-row header">
        <span>Content</span><span>Channel</span><span>Date</span><span>Status</span>
      </div>
      ${contentItems.map((item, index) => `
        <div class="table-row">
          <div><strong>${item.title}</strong><br><span>${item.note}</span></div>
          <span>${item.channel}</span>
          <span>${item.date}</span>
          <div>
            <span class="content-status ${statusClass(item.status)}">${item.status}</span>
            ${includeActions ? `
              <div class="portal-actions">
                <button class="mini-button" type="button" data-approve="${index}">Approve</button>
                <button class="mini-button" type="button" data-change="${index}">Request changes</button>
              </div>
            ` : ""}
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderDashboard() {
  const pendingCount = contentItems.filter((item) => item.status !== "Approved").length;
  const approvedCount = contentItems.filter((item) => item.status === "Approved").length;

  return `
    <div class="portal-grid">
      <article class="portal-card metric-box">
        <span>Content calendar</span>
        <strong>Mapped</strong>
        <p>Brand content, short-form content, stories, offers, and event promos organised for the month.</p>
      </article>
      <article class="portal-card metric-box">
        <span>Approvals queue</span>
        <strong>${pendingCount}</strong>
        <p>Items Taylor In Socials needs you to check before they are scheduled or published.</p>
      </article>
      <article class="portal-card metric-box">
        <span>Ready to post</span>
        <strong>${approvedCount}</strong>
        <p>Content you have approved, ready for scheduling or publishing.</p>
      </article>
      <article class="portal-card metric-box">
        <span>Offer interest</span>
        <strong>Tracked</strong>
        <p>Recent venue offers are reviewed for clicks, replies, and customer actions in the real setup.</p>
      </article>
      <article class="portal-card full">
        <h3>Content Calendar Preview</h3>
        <p class="card-intro">Demo-only monthly view showing how posts, local profile updates, stories, and venue moments can be planned together.</p>
        <div class="portal-calendar">
          ${calendarPreview.map((item) => `
            <div class="calendar-item">
              <span>${item[0]}</span>
              <strong>${item[1]}</strong>
              <small>${item[2]} - ${item[3]}</small>
            </div>
          `).join("")}
        </div>
      </article>
      <article class="portal-card wide">
        <h3>Next Actions</h3>
        <p class="card-intro">A simple task list so venue owners know exactly what Taylor needs next.</p>
        <div class="task-list">
          ${nextActions.map((task) => `
            <div><strong>${task[0]}</strong><span>${task[1]}</span></div>
          `).join("")}
        </div>
      </article>
      <article class="portal-card wide">
        <h3>Approvals Queue</h3>
        <p class="card-intro">Hospitality content waiting for a final check before it moves into the schedule.</p>
        ${contentRows(true)}
      </article>
      <article class="portal-card full project-chat">
        <h3>Messages Preview</h3>
        <p class="card-intro">Demo-only message area for discussing planned posts, changes, questions, or problems. This is not real messaging.</p>
        <div class="chat-list">
          ${projectMessages.map((message) => `
            <div class="chat-message">
              <strong>${message[0]}</strong>
              <p>${message[1]}</p>
            </div>
          `).join("")}
        </div>
      </article>
      <article class="portal-card wide">
        <h3>Upcoming Posts</h3>
        <p class="card-intro">What is planned next across the venue's platforms, local profile, and website content.</p>
        ${contentRows(false)}
      </article>
      <article class="portal-card wide upload-preview">
        <h3>Upload Requests</h3>
        <p class="card-intro">Preview area for the assets Taylor may need from a hospitality client. This is not a live upload tool.</p>
        <div class="request-list">
          ${assetRequests.map((request) => `
            <div><strong>${request[0]}</strong><span>${request[1]}</span></div>
          `).join("")}
        </div>
        <div class="request-dropzone" aria-label="Upload request preview area">
          Upload request preview
        </div>
      </article>
    </div>
  `;
}

function renderContentPlan() {
  return `
    <div class="portal-grid">
      <article class="portal-card full">
        <h3>May Content Plan</h3>
        <p>Demo list of upcoming venue content: brand content, short-form ideas, stories, offers, menus, events, approvals, and notes.</p>
        ${contentRows(true)}
      </article>
    </div>
  `;
}

function renderApprovals() {
  const pending = contentItems
    .map((item, index) => ({ ...item, index }))
    .filter((item) => item.status !== "Approved");
  return `
    <div class="portal-grid">
      <article class="portal-card wide">
        <h3>Pending approvals</h3>
        <p class="card-intro">Items waiting for the client to approve or request changes.</p>
        ${pending.length ? pending.map((item) => `
          <div>
            <strong>${item.title}</strong>
            <p>${item.note}</p>
            <div class="portal-actions">
              <button class="mini-button" type="button" data-approve="${item.index}">Approve</button>
              <button class="mini-button" type="button" data-change="${item.index}">Request changes</button>
            </div>
          </div>
        `).join("") : "<p>Everything is approved for now.</p>"}
      </article>
      <article class="portal-card wide">
        <h3>Recent comments</h3>
        <p class="card-intro">Example notes between Taylor In Socials and the client.</p>
        <div class="timeline">
          <article><strong>Taylor</strong><p>Updated the drinks offer caption and added the booking link.</p><span>Today</span></article>
          <article><strong>Client</strong><p>Can we swap the first photo for the terrace shot?</p><span>Yesterday</span></article>
        </div>
      </article>
    </div>
  `;
}

function renderAccounts() {
  const accounts = [
    ["Instagram", "Connected", "Checked 5 May"],
    ["Facebook", "Connected", "Checked 5 May"],
    ["TikTok", "Requested", "Awaiting client invite"],
    ["Google Business Profile", "Reconnect needed", "Permission expired"]
  ];

  return `
    <div class="portal-grid">
      ${accounts.map((account) => `
        <article class="portal-card">
          <span>${account[2]}</span>
          <h3>${account[0]}</h3>
          <p>${account[1]}</p>
          <button class="mini-button" type="button">Manage</button>
        </article>
      `).join("")}
      <article class="portal-card full">
        <h3>Access note</h3>
        <p>We support all major social platforms including Instagram, Facebook, TikTok, Google Business Profile and more. OAuth or delegated platform access should be used wherever possible. Sensitive passwords should not be stored in this preview or in plain text.</p>
      </article>
    </div>
  `;
}

function renderCredentials() {
  return `
    <div class="portal-grid">
      <article class="portal-card wide">
        <h3>Credential requests</h3>
        <div class="timeline">
          <article><strong>Major social platform access</strong><br><span>Connected through delegated access</span></article>
          <article><strong>Short-form platform access</strong><br><span>Requested - awaiting venue invite</span></article>
          <article><strong>Local profile access</strong><br><span>Reconnect needed for review visibility notes</span></article>
        </div>
      </article>
      <article class="portal-card wide">
        <h3>Secure workflow</h3>
        <p>The production portal should use secure delegated access or a proper vault. This preview shows request status only.</p>
      </article>
    </div>
  `;
}

function renderReports() {
  return `
    <div class="portal-grid">
      <article class="portal-card full">
        <h3>May Report Preview</h3>
        <p>In a real report, Taylor In Socials would summarise what supported venue visibility, which offers were promoted, and what should be planned earlier next month.</p>
      </article>
      ${reports.map((report) => `
        <article class="portal-card">
          <span>${report[0]}</span>
          <strong>${report[1]}</strong>
          <p>${report[2]}</p>
        </article>
      `).join("")}
      <article class="portal-card full">
        <h3>Example content notes</h3>
        <div class="table">
          <div class="table-row header"><span>Content</span><span>Channel</span><span>Focus</span><span>Why it matters</span></div>
          <div class="table-row"><strong>Summer menu video</strong><span>Short-form content</span><span>Menu launch</span><span>Clear food visuals and simple booking prompt</span></div>
          <div class="table-row"><strong>Friday drinks offer</strong><span>Social + local search</span><span>Quieter weekday</span><span>Easy offer and strong local timing</span></div>
        </div>
      </article>
    </div>
  `;
}

function renderBilling() {
  return `
    <div class="portal-grid">
      <article class="portal-card"><span>Retainer</span><strong>Growth Support</strong><p>Venue content planning and reporting</p></article>
      <article class="portal-card"><span>Status</span><strong>Active</strong><p>Demo billing status for the current month</p></article>
      <article class="portal-card"><span>Next invoice</span><strong>1 Jun</strong><p>Example reminder, not real billing</p></article>
      <article class="portal-card"><span>Plan review</span><strong>30 Jun</strong><p>Review content rhythm, offers, and events</p></article>
      <article class="portal-card full">
        <h3>Billing notes</h3>
        <p>This area can later connect to Stripe, Xero, QuickBooks, or manual invoice links. In this launch preview, it is demo information only.</p>
      </article>
    </div>
  `;
}

function renderSettings() {
  return `
    <div class="portal-grid">
      <article class="portal-card wide">
        <h3>Profile</h3>
        <label>Name<input value="Willow & Vale Studio"></label>
        <label>Primary contact<input value="client@taylorinsocials.com"></label>
        <button class="button small" type="button">Save</button>
      </article>
      <article class="portal-card wide">
        <h3>Notifications</h3>
        <p>Approval reminders, report notifications, credential request updates, and billing alerts are enabled.</p>
        <button class="mini-button" type="button">Manage preferences</button>
      </article>
    </div>
  `;
}

const portalRenderers = {
  dashboard: renderDashboard,
  content: renderContentPlan,
  approvals: renderApprovals,
  accounts: renderAccounts,
  credentials: renderCredentials,
  reports: renderReports,
  billing: renderBilling,
  settings: renderSettings
};

function renderPortal() {
  portalNav.innerHTML = portalItems
    .map(([key, label]) => `<button type="button" data-view="${key}" class="${key === activePortalView ? "active" : ""}">${label}</button>`)
    .join("");

  const activeLabel = portalItems.find(([key]) => key === activePortalView)[1];
  portalTitle.textContent = activeLabel;
  portalView.innerHTML = portalRenderers[activePortalView]();
}

function setPortalMessage(message) {
  portalMessage.textContent = message;
}

function updateContentStatus(index, status) {
  const item = contentItems[index];
  if (!item) return;

  item.status = status;
  item.note = status === "Approved"
    ? "Approved by the client in this portal preview."
    : "Changes requested by the client in this portal preview.";

  renderPortal();
  setPortalMessage(`${item.title} marked as ${status.toLowerCase()}.`);
}

const formFieldLabels = {
  name: "Name",
  businessName: "Business name",
  businessType: "Business type",
  preferredContactMethod: "Preferred contact method",
  contactDetail: "Contact detail",
  websiteOrSocialLink: "Website or social link",
  helpNeeded: "What they want help with",
  preferredAuditTime: "Preferred audit time",
  alternativeAuditTime: "Alternative audit time",
  email: "Email",
  enquiryType: "Enquiry type",
  message: "Message"
};

function getFormValues(form) {
  return [...new FormData(form).entries()].reduce((values, [key, value]) => {
    const cleanValue = String(value).trim();
    if (cleanValue) values[key] = cleanValue;
    return values;
  }, {});
}

function formatFormSection(values, fieldOrder) {
  return fieldOrder
    .map((key) => {
      const value = values[key];
      if (!value) return "";
      return `${formFieldLabels[key] || key}: ${value}`;
    })
    .filter(Boolean)
    .join("\n");
}

function buildAuditEmail(form) {
  const values = getFormValues(form);
  const fieldOrder = [
    "name",
    "businessName",
    "businessType",
    "preferredContactMethod",
    "contactDetail",
    "websiteOrSocialLink",
    "helpNeeded",
    "preferredAuditTime",
    "alternativeAuditTime"
  ];

  return [
    "New Taylor In Socials free audit request",
    "",
    "A venue or local business has requested a no-pressure digital presence audit.",
    "",
    formatFormSection(values, fieldOrder),
    "",
    "Suggested reply:",
    "Thank them, confirm the best audit time, review their public links, and send practical recommendations for content, venue promotion, online visibility, and web/social presence."
  ].join("\n");
}

function buildContactEmail(form) {
  const values = getFormValues(form);
  const fieldOrder = ["name", "email", "businessName", "enquiryType", "message"];

  return [
    "New Taylor In Socials website enquiry",
    "",
    "A potential client has sent a general enquiry from the website.",
    "",
    formatFormSection(values, fieldOrder),
    "",
    "Suggested reply:",
    "Reply personally with the clearest next step: answer their question, suggest the free audit, or recommend the most suitable support package."
  ].join("\n");
}

function openEmailDraft(subject, body) {
  const href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
}

function bindForms() {
  document.querySelector(".slot-preview").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-slot]");
    if (!button) return;

    selectedAuditSlot = button.dataset.slot;
    auditSlotInput.value = selectedAuditSlot;
    document.querySelectorAll(".slot-preview button").forEach((slotButton) => {
      slotButton.classList.toggle("selected", slotButton === button);
      slotButton.setAttribute("aria-pressed", String(slotButton === button));
    });
    document.querySelector("#auditMessage").textContent = `${selectedAuditSlot} selected as your preferred audit window. Add your details and Taylor In Socials will reply to confirm a specific time.`;
  });

  document.querySelector("#auditForm").addEventListener("submit", (event) => {
    event.preventDefault();
    // Future upgrade point: replace this mailto handoff with a form provider,
    // Vercel Function, CRM, or booking workflow when the site is ready for it.
    const body = buildAuditEmail(event.currentTarget);
    openEmailDraft("Taylor In Socials free audit request", body);
    document.querySelector("#auditMessage").textContent = "Your email draft has opened. If nothing appeared, please email Taylor directly at taylorkinsella@taylorinsocials.com.";
    event.currentTarget.reset();
    selectedAuditSlot = "";
    auditSlotInput.value = "";
    document.querySelectorAll(".slot-preview button").forEach((slotButton) => {
      slotButton.classList.remove("selected");
      slotButton.setAttribute("aria-pressed", "false");
    });
  });

  document.querySelector("#contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    // Future upgrade point: send this to a real form endpoint or CRM rather
    // than opening an email draft once Taylor In Socials is ready to automate.
    const body = buildContactEmail(event.currentTarget);
    openEmailDraft("Taylor In Socials website enquiry", body);
    document.querySelector("#contactMessage").textContent = "Your email draft has opened. If nothing appeared, please email Taylor directly at taylorkinsella@taylorinsocials.com.";
    event.currentTarget.reset();
  });

  document.querySelector("#loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    isLoggedIn = true;
    activePortalView = "dashboard";
    window.location.hash = "portal";
  });

  document.querySelector("#logoutButton").addEventListener("click", () => {
    isLoggedIn = false;
    window.location.hash = "login";
  });
}

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

brandLink.addEventListener("click", (event) => {
  event.preventDefault();
  mainNav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  window.location.hash = "home";
  showPage("home");
});

portalNav.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-view]");
  if (!button) return;
  activePortalView = button.dataset.view;
  setPortalMessage("");
  renderPortal();
});

portalView.addEventListener("click", (event) => {
  const approveButton = event.target.closest("button[data-approve]");
  const changeButton = event.target.closest("button[data-change]");

  if (approveButton) {
    updateContentStatus(Number(approveButton.dataset.approve), "Approved");
  }

  if (changeButton) {
    updateContentStatus(Number(changeButton.dataset.change), "Changes");
  }
});

window.addEventListener("hashchange", handleRoute);
renderFaqs();
bindForms();
handleRoute();
