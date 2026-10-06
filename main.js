(() => {
  const P = window.PROFILE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const svg = (p) => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`;
  const ICON = {
    github: svg('<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>'),
    linkedin: svg('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>'),
    mail: svg('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>'),
    arrow: svg('<path d="M7 17 17 7M8 7h9v9"/>')
  };

  const btn = (href, label, icon, primary, external) =>
    `<a class="btn${primary ? " primary" : ""}" href="${esc(href)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${icon || ""}${esc(label)}</a>`;
  const badges = (arr) => (arr || []).map((t) => `<span class="badge">${esc(t)}</span>`).join("");
  const mailHref = P.email ? `mailto:${P.email}` : "";

  // Head / brand / nav
  document.title = `${P.name} · ${P.title}`;
  $("brand").textContent = P.name;
  $("navSocial").innerHTML =
    (P.github ? `<a href="${esc(P.github)}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">${ICON.github}</a>` : "") +
    (P.linkedin ? `<a href="${esc(P.linkedin)}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${ICON.linkedin}</a>` : "");
  $("footName").textContent = P.name;
  $("copy").textContent = `© ${new Date().getFullYear()} ${P.name}`;
  $("footLinks").innerHTML =
    (P.github ? `<a href="${esc(P.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>` : "") +
    (P.linkedin ? `<a href="${esc(P.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>` : "") +
    (P.email ? `<a href="${esc(mailHref)}">Email</a>` : "");

  // Hero
  $("eyebrow").textContent = P.eyebrow;
  $("headline").textContent = P.headline;
  $("intro").textContent = P.intro;
  $("heroCta").innerHTML =
    btn("#work", "View my work", "", true) +
    (P.github ? btn(P.github, "GitHub", ICON.github, false, true) : "") +
    btn("#contact", "Contact me", "", false);
  if (P.status.show) $("status").textContent = P.status.text; else $("status").remove();

  // About
  $("aboutStatement").textContent = P.aboutStatement;
  $("bio").innerHTML = P.bio.map((p) => `<p>${esc(p)}</p>`).join("");
  $("current").innerHTML = badges(P.currentlyWith);

  // Skills
  $("skillGrid").innerHTML = P.skills.map((s) =>
    `<article class="card reveal"><h3>${esc(s.category)}</h3><div class="badges">${badges(s.items)}</div></article>`).join("");

  // Projects
  $("projectList").innerHTML = P.projects.map((p) => {
    const links = [
      p.github ? `<a href="${esc(p.github)}" target="_blank" rel="noopener noreferrer">${ICON.github} Source</a>` : "",
      p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener noreferrer">${ICON.arrow} Live demo</a>` : ""
    ].join("") || `<span class="private">Private / Enterprise Project</span>`;
    return `<article class="card proj reveal">
      <div><h3>${esc(p.name)}</h3><p class="summary">${esc(p.summary)}</p><div class="links">${links}</div></div>
      <div><dl><div><dt>Problem</dt><dd>${esc(p.problem)}</dd></div><div><dt>What I worked on</dt><dd>${esc(p.work)}</dd></div></dl>
      <div class="badges">${badges(p.tech)}</div><div class="badges" style="margin-top:8px">${(p.tags || []).map((t) => `<span class="badge" style="color:var(--accent)">${esc(t)}</span>`).join("")}</div></div>
    </article>`;
  }).join("");

  // Architecture
  $("sysIntro").textContent = P.systemsIntro;
  $("archGrid").innerHTML = P.architectures.map((a) => {
    const chain = a.steps.map((s, i) =>
      `<li class="node" style="--i:${i}">${esc(s)}</li>${i < a.steps.length - 1 ? `<li class="link" style="--i:${i}" aria-hidden="true"></li>` : ""}`).join("");
    return `<div class="card arch-card"><h3>${esc(a.title)}</h3><ol class="chain">${chain}</ol></div>`;
  }).join("");
  // observed per-card so each diagram activates when it enters view
  document.querySelectorAll(".arch-card").forEach((el) => el.classList.add("arch"));

  // Experience
  $("timeline").innerHTML = P.experience.map((e) =>
    `<li class="tl reveal"><span class="grp">${esc(e.group)}</span><h3>${esc(e.role)} · ${esc(e.company)}</h3><div class="dates">${esc(e.dates)}</div>
     <p>${esc(e.description)}</p>${e.responsibilities.length ? `<ul>${e.responsibilities.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>` : ""}
     <div class="badges">${badges(e.tech)}</div></li>`).join("");

  // GitHub
  $("ghBlurb").textContent = P.githubSection.blurb;
  const repoCard = (r) => {
    const inner = `<h3>${esc(r.name)}</h3><p>${esc(r.description || "No description.")}</p><span>${esc(r.language || "")}</span>`;
    return r.url
      ? `<a class="card repo reveal in" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${inner}</a>`
      : `<article class="card repo reveal">${inner}</article>`;
  };
  $("repoGrid").innerHTML = P.githubSection.placeholders.map(repoCard).join("");
  $("topTech").innerHTML = badges(P.githubSection.topTech);
  $("heat").innerHTML = Array.from({ length: 130 }, (_, i) => `<i class="${(i * 7 + (i % 5) * 3) % 11 === 0 ? "b" : (i * 5) % 7 === 0 ? "a" : ""}"></i>`).join("");
  if (P.githubUsername) {
    fetch(`https://api.github.com/users/${encodeURIComponent(P.githubUsername)}/repos?sort=updated&per_page=12`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((list) => {
        const repos = list.filter((r) => !r.fork).slice(0, 6);
        if (repos.length) $("repoGrid").innerHTML = repos.map((r) => repoCard({ name: r.name, description: r.description, language: r.language, url: r.html_url })).join("");
      })
      .catch(() => {}); // keep placeholders on any failure
  }

  // Interests
  $("interestGrid").innerHTML = P.interests.map((i) =>
    `<div class="interest reveal"><h3>${esc(i.name)}</h3><p>${esc(i.note)}</p></div>`).join("");

  // Contact
  $("h-contact").textContent = P.contact.heading;
  $("contactText").textContent = P.contact.text;
  const contactBtns =
    (P.email ? btn(mailHref, "Email me", ICON.mail, true) : "") +
    (P.github ? btn(P.github, "GitHub", ICON.github, false, true) : "") +
    (P.linkedin ? btn(P.linkedin, "LinkedIn", ICON.linkedin, false, true) : "");
  $("contactCta").innerHTML = contactBtns || `<p class="private">Add your email and social links in profile.js to show contact buttons.</p>`;

  // Mobile menu
  const burger = $("burger"), menu = $("menu");
  const setMenu = (open) => { menu.classList.toggle("open", open); burger.setAttribute("aria-expanded", open); };
  burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

  // Nav blur on scroll
  const nav = $("nav");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 10);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { threshold: 0.15 });
  document.querySelectorAll(".reveal, .arch").forEach((el) => io.observe(el));

  // Hero terminal
  const out = $("termOut");
  const first = "GET /api/policies";
  const rest = [
    "",
    '<span class="ok">200 OK</span>  <span class="c">42ms</span>',
    "",
    '{',
    '  <span class="k">"status"</span>: <span class="ok">"success"</span>,',
    '  <span class="k">"systems"</span>: <span class="ok">"connected"</span>',
    '}'
  ];
  if (reduce) {
    out.innerHTML = `<span class="c">$ </span>${first}\n${rest.join("\n")}`;
  } else {
    out.innerHTML = '<span class="c">$ </span><span id="typed"></span>';
    const typed = $("typed"); let i = 0;
    const type = () => {
      typed.textContent = first.slice(0, ++i);
      if (i < first.length) return setTimeout(type, 55);
      let n = 0;
      const next = () => { if (n < rest.length) { out.insertAdjacentHTML("beforeend", "\n" + rest[n++]); setTimeout(next, 170); } };
      setTimeout(next, 350);
    };
    setTimeout(type, 700);
  }

  // Easter egg: Ctrl + /
  const egg = $("egg");
  addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "/") { e.preventDefault(); egg.open ? egg.close() : egg.showModal(); }
  });
  egg.addEventListener("click", (e) => { if (e.target === egg) egg.close(); });
})();
