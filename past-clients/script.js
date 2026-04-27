const clients = [
  { name: "WEtv", industry: "Media", credibility: "Delivered audience-facing creative in a national cable ecosystem." },
  { name: "IFC", industry: "Media", credibility: "Supported channel-aligned visuals with independent-culture tone." },
  { name: "AMC Networks", industry: "Media", credibility: "Produced campaign-ready design for a major network portfolio." },
  { name: "Unilever", industry: "Consumer Goods", credibility: "Contributed polished brand assets for global consumer marketing." },
  { name: "Shiseido USA & Spain", industry: "Consumer Goods", credibility: "Executed premium beauty visuals across US and Spain market contexts." },
  { name: "Nexxus", industry: "Consumer Goods", credibility: "Created haircare-forward content tuned for product credibility." },
  { name: "St. Ives", industry: "Consumer Goods", credibility: "Built approachable brand storytelling for broad retail audiences." },
  { name: "Forbes Riley", industry: "Talent", credibility: "Developed public-facing creative supporting personal brand visibility." },
  { name: "Maxi Priest", industry: "Music", credibility: "Delivered artist media assets aligned to legacy reggae positioning." },
  { name: "Nelly", industry: "Music", credibility: "Designed campaign visuals for a chart-proven recording artist." },
  { name: "Ian Ziering", industry: "Talent", credibility: "Created personality-led creative assets for entertainment outreach." },
  { name: "Donna D'Ericco", industry: "Talent", credibility: "Produced polished brand visuals for public profile campaigns." },
  { name: "Sona Pillow", industry: "Health", credibility: "Built product messaging creative for wellness-oriented conversion work." },
  { name: "Room Mate Hotels USA, Spain, NYC & Miami", industry: "Hospitality", credibility: "Executed hospitality branding touchpoints across key travel markets." },
  { name: "Samsung", industry: "Technology", credibility: "Contributed modern creative outputs for a global tech leader." },
  { name: "PetSmart", industry: "Retail", credibility: "Crafted customer-facing content for a major pet retail brand." },
  { name: "Morgans Hotel Group", industry: "Hospitality", credibility: "Built refined design pieces supporting luxury hotel branding." },
  { name: "Broadcom", industry: "Technology", credibility: "Provided clean B2B-oriented visuals for enterprise technology communication." },
  { name: "Sony RCA Jive Records", industry: "Music", credibility: "Developed music-industry creative across iconic label entities." },
  { name: "Stashbox.com", industry: "Retail", credibility: "Created digital-first brand materials for online commerce positioning." },
  { name: "Neurology Scottsdale", industry: "Healthcare", credibility: "Delivered trustworthy visual communication for a neurological practice." },
  { name: "Ohle & Ohle, P.A.", industry: "Legal", credibility: "Produced legal brand assets emphasizing authority and clarity." },
  { name: "Uniforms4Class.net", industry: "Education", credibility: "Built practical conversion-focused creative for school uniform commerce." },
  { name: "Toots and the Maytals", industry: "Music", credibility: "Supported legendary artist branding with respectful, genre-aware visuals." },
  { name: "Katchafire", industry: "Music", credibility: "Created promotional content aligned with international touring identity." },
  { name: "Silverback Management", industry: "Management", credibility: "Built support materials for talent and brand management operations." },
  { name: "Slightly Stoopid", industry: "Music", credibility: "Delivered high-energy assets matched to live-performance audiences." },
  { name: "AtlanticBayResort.com", industry: "Hospitality", credibility: "Designed resort-focused visuals intended to boost booking confidence." },
  { name: "Seascape Marina and Resort", industry: "Hospitality", credibility: "Created destination branding elements for marina and resort appeal." },
  { name: "Real Sociedad OC Soccer Team", industry: "Sports", credibility: "Produced team-forward visuals for community sports identity building." },
  { name: "Technology Resource Center", industry: "Technology", credibility: "Developed clear digital assets for technology resource messaging." },
  { name: "Rosenberg Injury Law", industry: "Legal", credibility: "Created direct-response legal creative for injury law marketing." },
  { name: "Weight Loss Davie", industry: "Health", credibility: "Built wellness campaign creative with clarity and trust cues." },
  { name: "The Ras Box", industry: "Local Business", credibility: "Designed brand-forward assets for local consumer visibility." },
  { name: "Florida On TV", industry: "Media", credibility: "Developed regional media creative supporting audience growth." },
  {
    name: "Don Pablo Coffee",
    industry: "Private Label Coffee Partnerships",
    credibility: "Private label coffee partnership development connected to premium coffee, cause marketing, and branded product presentation."
  },
  {
    name: "Never Thirst Coffee",
    industry: "Private Label Coffee Partnerships",
    credibility: "Private label coffee brand presentation with partnership development and custom packaging direction."
  },
  {
    name: "Navy SEAL Foundation Coffee",
    industry: "Private Label Coffee Partnerships",
    credibility: "Cause-based private label coffee concept with branded packaging and partnership positioning."
  },
  {
    name: "Blue Card Coffee",
    industry: "Private Label Coffee Partnerships",
    credibility: "Nonprofit-focused private label coffee concept with packaging presentation and cause-driven brand alignment."
  },
  {
    name: "Stephen Speaks Coffee",
    industry: "Private Label Coffee Partnerships",
    credibility: "Artist-connected private label coffee concept with branded packaging and partnership presentation."
  }
];

const spotlightDescriptions = {
  "Don Pablo Coffee": "Private label coffee partnership development connected to premium coffee, cause marketing, and branded product presentation.",
  "Never Thirst Coffee": "Private label coffee brand presentation with partnership development and custom packaging direction.",
  "Navy SEAL Foundation Coffee": "Cause-based private label coffee concept with branded packaging and partnership positioning.",
  "Blue Card Coffee": "Nonprofit-focused private label coffee concept with packaging presentation and cause-driven brand alignment.",
  "Stephen Speaks Coffee": "Artist-connected private label coffee concept with branded packaging and partnership presentation."
};

const sectionTargets = {
  quiltGrid: document.getElementById("quiltGrid"),
  marqueeOne: document.getElementById("marqueeOne"),
  marqueeTwo: document.getElementById("marqueeTwo"),
  marqueeThree: document.getElementById("marqueeThree"),
  industryGrid: document.getElementById("industryGrid"),
  spotlightGrid: document.getElementById("spotlightGrid"),
  museumGrid: document.getElementById("museumGrid"),
  directoryList: document.getElementById("directoryList")
};

const searchInput = document.getElementById("directorySearch");
const directoryCount = document.getElementById("directoryCount");

function renderQuilt() {
  sectionTargets.quiltGrid.innerHTML = clients
    .map((client) => `<article class="quilt-tile" role="listitem">${client.name}</article>`)
    .join("");
}

function marqueeLineHTML(items) {
  const chips = items.map((item) => `<span class="marquee-chip">${item.name}</span>`).join("");
  return chips + chips;
}

function renderMarquees() {
  sectionTargets.marqueeOne.innerHTML = marqueeLineHTML(clients.slice(0, 16));
  sectionTargets.marqueeTwo.innerHTML = marqueeLineHTML(clients.slice(10, 28));
  sectionTargets.marqueeThree.innerHTML = marqueeLineHTML(clients.slice(18));
}

function renderIndustryStacks() {
  const grouped = clients.reduce((acc, client) => {
    if (!acc[client.industry]) acc[client.industry] = [];
    acc[client.industry].push(client.name);
    return acc;
  }, {});

  sectionTargets.industryGrid.innerHTML = Object.entries(grouped)
    .sort((a, b) => b[1].length - a[1].length)
    .map(([industry, names]) => {
      const visible = names.slice(0, 5).map((name) => `<li>${name}</li>`).join("");
      const extra = names.length > 5 ? `<li>+ ${names.length - 5} more</li>` : "";
      return `
        <article class="industry-card">
          <h3>${industry}</h3>
          <ul>${visible}${extra}</ul>
        </article>
      `;
    })
    .join("");
}

function renderSpotlights() {
  sectionTargets.spotlightGrid.innerHTML = clients
    .map(
      (client, idx) => `
      <article class="spotlight-card">
        <span class="mini-label">Past Client</span>
        <span class="badge">#${String(idx + 1).padStart(2, "0")}</span>
        <h3>${client.name}</h3>
        <p>${spotlightDescriptions[client.name] || client.credibility}</p>
        <span class="proof-pill">Brand Proof</span>
      </article>
    `
    )
    .join("");
}

function renderMuseum() {
  sectionTargets.museumGrid.innerHTML = clients
    .map((client) => `<article class="museum-item" role="listitem">${client.name}</article>`)
    .join("");
}

function updateDirectory(filteredClients) {
  sectionTargets.directoryList.innerHTML = filteredClients
    .map(
      (client) => `
      <li class="directory-item">
        <strong>${client.name}</strong><br />
        <span>${client.industry}</span>
      </li>
    `
    )
    .join("");

  const count = filteredClients.length;
  directoryCount.textContent = `${count} ${count === 1 ? "Client" : "Clients"}`;
}

function initSearch() {
  updateDirectory(clients);

  searchInput.addEventListener("input", (event) => {
    const term = event.target.value.trim().toLowerCase();
    const filtered = clients.filter(({ name, industry, credibility }) =>
      `${name} ${industry} ${credibility}`.toLowerCase().includes(term)
    );

    updateDirectory(filtered);
  });
}

renderQuilt();
renderMarquees();
renderIndustryStacks();
renderSpotlights();
renderMuseum();
initSearch();
