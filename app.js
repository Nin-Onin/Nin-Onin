class Icons {
  static location = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
  static download = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"/></svg>`;
  static mail = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>`;
  static check = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>`;
  static sun = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`;
  static moon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`;
  static phone = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;

  static social = {
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 10.27h-3v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.37v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.46 2 3.46 4.59v4.74z"/></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.23c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 0z"/></svg>`,
    kaggle: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352h-2.452c-.234 0-.351-.117-.351-.352V.353c0-.235.117-.352.351-.352h2.452c.234 0 .351.117.351.352v14.704l6.272-6.272c.165-.165.339-.247.524-.247h3.32c.117 0 .199.058.246.176.046.117.034.235-.035.351l-6.479 6.31 6.564 8.4c.085.106.117.2.085.247z"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.02 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.95h-1.51c-1.49 0-1.95.93-1.95 1.89v2.28h3.32l-.53 3.49h-2.79v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg>`,
  };
}

class ThemeManager {
  constructor({ lightBtn, darkBtn }) {
    this.lightBtn = lightBtn;
    this.darkBtn = darkBtn;
  }
  init() {
    this.lightBtn.addEventListener("click", () => this.setTheme("light"));
    this.darkBtn.addEventListener("click", () => this.setTheme("dark"));
  }
  setTheme(mode) {
    const html = document.documentElement;
    if (mode === "light") {
      html.setAttribute("data-theme", "light");
      this.lightBtn.classList.add("active");
      this.darkBtn.classList.remove("active");
    } else {
      html.removeAttribute("data-theme");
      this.darkBtn.classList.add("active");
      this.lightBtn.classList.remove("active");
    }
  }
}

class ProfileHeader {
  constructor(data) { this.data = data; }
  render() {
    const { name, photo, location, roles, resumeUrl, email } = this.data;
    return `
      <div class="ph-top">
        <div class="ph-id">
          <div class="avatar-frame">
            <div class="photo-wrap"><img src="${photo}" alt="${name}"></div>
          </div>
          <div class="ph-meta">
            <h1>${name}</h1>
            <div class="ph-location">${Icons.location}${location}</div>
            <div class="ph-roles">${roles}</div>
            <div class="ph-actions">
              <a href="${resumeUrl}" target="_blank" class="btn-pill">${Icons.download}Download CV</a>
              <a href="mailto:${email}" class="btn-pill outline">${Icons.mail}Send Email</a>
            </div>
          </div>
        </div>
        <div class="theme-toggle">
          <button id="lightBtn" aria-label="Light mode">${Icons.sun}</button>
          <button id="darkBtn" class="active" aria-label="Dark mode">${Icons.moon}</button>
        </div>
      </div>
    `;
  }
}

class AboutCard {
  constructor(paragraphs) { this.paragraphs = paragraphs; }
  render() {
    const body = this.paragraphs.map((p) => `<p>${p}</p>`).join("");
    return `<div class="card-label">About</div>${body}`;
  }
}

class EducationCard {
  constructor(data) { this.data = data; }
  render() {
    const { logo, school, degree, address, dates, credential } = this.data;
    return `
      <div class="card-label">Education</div>
      <div class="edu-top">
        <img src="${logo}" alt="${school} seal">
        <div>
          <h3>${school}</h3>
          <div class="deg">${degree}</div>
        </div>
      </div>
      <div class="edu-sub">${address}</div>
      <div class="edu-date">${dates}</div>
      <div class="cred-badge">${Icons.check}${credential}</div>
    `;
  }
}

class Chip {
  constructor(label) { this.label = label; }
  render() { return `<span class="chip">${this.label}</span>`; }
}

class TechGroup {
  constructor({ label, items }) {
    this.label = label;
    this.chips = items.map((i) => new Chip(i));
  }
  render() {
    const chipHtml = this.chips.map((c) => c.render()).join("");
    return `<div class="tech-group"><div class="g-label">${this.label}</div><div class="chip-row">${chipHtml}</div></div>`;
  }
}

class TechStackCard {
  constructor(groups) { this.groups = groups.map((g) => new TechGroup(g)); }
  render() {
    const body = this.groups.map((g) => g.render()).join("");
    return `<div class="card-label">Tech Stack</div><div class="tech-body">${body}</div>`;
  }
}

class ProjectCard {
  constructor(data) { this.data = data; }
  render() {
    const { title, badge, image, alt, desc, tags, repoUrl, paperUrl, appUrl, isKaggle } = this.data;
    const tagHtml = tags.map((t) => `<span class="mini-tag">${t}</span>`).join("");
    const badgeHtml = badge ? `<span class="thesis-badge">${badge}</span>` : "";

    const repoLink = isKaggle
      ? `<a href="${repoUrl}" target="_blank" class="repo-link kaggle-badge"><img src="https://img.shields.io/badge/Kaggle-Download%20Dataset-20BEFF?style=flat&amp;logo=kaggle&amp;logoColor=white" alt="Download on Kaggle"></a>`
      : `<a href="${repoUrl}" target="_blank" class="repo-link">View Repo 🔗</a>`;

    const links = [repoLink];
    if (paperUrl) links.push(`<a href="${paperUrl}" target="_blank" class="repo-link">Full Paper 📄</a>`);
    if (appUrl) links.push(`<a href="${appUrl}" target="_blank" class="repo-link">Download App 📥</a>`);
    const linksHtml = `<div class="link-row">${links.join("")}</div>`;

    return `
      <div class="work-item">
        <div class="thumb"><img src="${image}" alt="${alt}"></div>
        <div class="wi-body">
          <div class="wi-title-row"><h4>${title}</h4>${badgeHtml}</div>
          <div class="desc">${desc}</div>
          <div class="tag-stack">${tagHtml}</div>
          ${linksHtml}
        </div>
      </div>
    `;
  }
}

class WorkCard {
  constructor(projects) { this.projects = projects.map((p) => new ProjectCard(p)); }
  render() {
    const items = this.projects.map((p) => p.render()).join("");
    return `<div class="card-label">Selected Works</div><div class="work-grid">${items}</div>`;
  }
}

class CertificationRow {
  constructor(data) { this.data = data; }
  render() {
    const { name, issuer, link } = this.data;
    const right = link
      ? `<a href="${link}" target="_blank">View ↗</a>`
      : `<span class="no-link">—</span>`;
    return `
      <div class="cert-line">
        <div><div class="name">${name}</div><div class="issuer">${issuer}</div></div>
        ${right}
      </div>
    `;
  }
}

class CertificationsCard {
  constructor(items) { this.rows = items.map((i) => new CertificationRow(i)); }
  render() {
    const rows = this.rows.map((r) => r.render()).join("");
    return `<div class="card-label">Certifications</div><div class="certs-list">${rows}</div>`;
  }
}

class SocialRow {
  constructor(data) { this.data = data; }
  render() {
    const { platform, url, icon } = this.data;
    const svg = Icons.social[icon] || "";
    return `
      <a href="${url}" target="_blank" class="social-item">
        ${svg}<span>${platform}</span>
      </a>
    `;
  }
}

class SocialCard {
  constructor(items, phone, email) {
    this.rows = items.map((i) => new SocialRow(i));
    this.phone = phone;
    this.email = email;
  }
  render() {
    const rows = this.rows.map((r) => r.render()).join("");
    const phoneHtml = this.phone
      ? `<span class="social-item phone-item">${Icons.phone}<span>${this.phone}</span></span>`
      : "";
    const emailHtml = this.email
      ? `<a href="mailto:${this.email}" class="social-item email-item">${Icons.mail}<span>${this.email}</span></a>`
      : "";
    return `<div class="card-label">Social Links</div><div class="social-row">${rows}${emailHtml}${phoneHtml}</div>`;
  }
}

class FooterBar {
  constructor(profile) { this.profile = profile; }
  render() {
    const { name } = this.profile;
    const year = new Date().getFullYear();
    return `<span>© ${year} ${name}. All rights reserved.</span>`;
  }
}

class PortfolioApp {
  constructor(data) { this.data = data; }

  mount(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  init() {
    this.mount("profileHeader", new ProfileHeader(this.data.profile).render());
    this.mount("aboutCard", new AboutCard(this.data.about).render());
    this.mount("eduCard", new EducationCard(this.data.education).render());
    this.mount("techCard", new TechStackCard(this.data.techStack).render());
    this.mount("workCard", new WorkCard(this.data.work).render());
    this.mount("certsCard", new CertificationsCard(this.data.certifications).render());
    this.mount("socialCard", new SocialCard(this.data.social, this.data.profile.phone, this.data.profile.email).render());
    this.mount("footer", new FooterBar(this.data.profile).render());

    // theme buttons only exist after profileHeader has been mounted above
    const lightBtn = document.getElementById("lightBtn");
    const darkBtn = document.getElementById("darkBtn");
    new ThemeManager({ lightBtn, darkBtn }).init();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new PortfolioApp(portfolioData).init();
});
