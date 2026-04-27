const clients = [
  { name: "WEtv", industry: "Media, Entertainment & Audio", credibility: "Delivered audience-facing creative in a national cable ecosystem." },
  { name: "IFC", industry: "Media, Entertainment & Audio", credibility: "Supported channel-aligned visuals with independent-culture tone." },
  { name: "AMC Networks", industry: "Media, Entertainment & Audio", credibility: "Produced campaign-ready design for a major network portfolio." },
  { name: "Playboy", industry: "Media, Entertainment & Audio", credibility: "Entertainment and lifestyle brand experience with strong cultural recognition." },
  { name: "Audible", industry: "Media, Entertainment & Audio", credibility: "Audio and entertainment platform brand experience connected to spoken-word content and digital media." },
  { name: "Florida On TV", industry: "Media, Entertainment & Audio", credibility: "Developed regional media creative supporting audience growth." },

  { name: "Unilever", industry: "Consumer Brands & Retail", credibility: "Contributed polished brand assets for global consumer marketing." },
  { name: "Shiseido USA & Spain", industry: "Consumer Brands & Retail", credibility: "Executed premium beauty visuals across US and Spain market contexts." },
  { name: "Nexxus", industry: "Consumer Brands & Retail", credibility: "Created haircare-forward content tuned for product credibility." },
  { name: "St. Ives", industry: "Consumer Brands & Retail", credibility: "Built approachable brand storytelling for broad retail audiences." },
  { name: "SC Johnson", industry: "Consumer Brands & Retail", credibility: "Consumer goods brand experience connected to household products and national retail awareness." },
  { name: "Glade", industry: "Consumer Brands & Retail", credibility: "Consumer fragrance brand experience connected to household products and lifestyle presentation." },
  { name: "Piaget", industry: "Consumer Brands & Retail", credibility: "Luxury brand experience connected to premium presentation, visual polish, and high-end audience positioning." },
  { name: "Samsung", industry: "Consumer Brands & Retail", credibility: "Contributed modern creative outputs for a global tech leader." },
  { name: "PetSmart", industry: "Consumer Brands & Retail", credibility: "Crafted customer-facing content for a major pet retail brand." },
  { name: "T-Mobile", industry: "Consumer Brands & Retail", credibility: "Telecommunications brand experience with mass-market consumer recognition." },
  { name: "Payless Shoes", industry: "Consumer Brands & Retail", credibility: "Retail brand experience connected to broad consumer reach and product-driven marketing." },

  { name: "Maxi Priest", industry: "Music, Artists & Entertainment", credibility: "Delivered artist media assets aligned to legacy reggae positioning." },
  { name: "Nelly", industry: "Music, Artists & Entertainment", credibility: "Designed campaign visuals for a chart-proven recording artist." },
  { name: "Ian Ziering", industry: "Music, Artists & Entertainment", credibility: "Created personality-led creative assets for entertainment outreach." },
  { name: "Donna D'Ericco", industry: "Music, Artists & Entertainment", credibility: "Produced polished brand visuals for public profile campaigns." },
  { name: "Darcey & Stacey Silva", industry: "Music, Artists & Entertainment", credibility: "Television personality and entertainment brand experience with audience recognition." },
  { name: "Universal Music Group", industry: "Music, Artists & Entertainment", credibility: "Major music industry brand experience connected to artists, entertainment, and global distribution." },
  { name: "Sony RCA Jive Records", industry: "Music, Artists & Entertainment", credibility: "Developed music-industry creative across iconic label entities." },
  { name: "Toots and the Maytals", industry: "Music, Artists & Entertainment", credibility: "Supported legendary artist branding with respectful, genre-aware visuals." },
  { name: "Katchafire", industry: "Music, Artists & Entertainment", credibility: "Created promotional content aligned with international touring identity." },
  { name: "Slightly Stoopid", industry: "Music, Artists & Entertainment", credibility: "Delivered high-energy assets matched to live-performance audiences." },
  { name: "Stashbox.com", industry: "Music, Artists & Entertainment", credibility: "Created digital-first brand materials for online commerce positioning." },
  { name: "The Ras Box", industry: "Music, Artists & Entertainment", credibility: "Designed brand-forward assets for local consumer visibility." },
  { name: "Tahiti Cora", industry: "Music, Artists & Entertainment", credibility: "Artist brand development connected to music, visuals, content, and audience growth." },

  { name: "Neurology Scottsdale", industry: "Business, Legal, Healthcare & Institutions", credibility: "Delivered trustworthy visual communication for a neurological practice." },
  { name: "Ohle & Ohle, P.A.", industry: "Business, Legal, Healthcare & Institutions", credibility: "Produced legal brand assets emphasizing authority and clarity." },
  { name: "Rosenberg Injury Law", industry: "Business, Legal, Healthcare & Institutions", credibility: "Created direct-response legal creative for injury law marketing." },
  { name: "Weight Loss Davie", industry: "Business, Legal, Healthcare & Institutions", credibility: "Built wellness campaign creative with clarity and trust cues." },
  { name: "Technology Resource Center", industry: "Business, Legal, Healthcare & Institutions", credibility: "Developed clear digital assets for technology resource messaging." },
  { name: "FIU", industry: "Business, Legal, Healthcare & Institutions", credibility: "University and institutional brand experience connected to education, outreach, and public visibility." },
  { name: "University of Miami Bascom Palmer", industry: "Business, Legal, Healthcare & Institutions", credibility: "Healthcare and academic medical brand experience connected to specialized institutional credibility." },
  { name: "The Blue Card", industry: "Business, Legal, Healthcare & Institutions", credibility: "Nonprofit brand work connected to fundraising, digital presentation, education, and mission-driven storytelling." },

  { name: "Room Mate Hotels USA, Spain, NYC & Miami", industry: "Hospitality, Tourism, Sports & Lifestyle", credibility: "Executed hospitality branding touchpoints across key travel markets." },
  { name: "Morgans Hotel Group", industry: "Hospitality, Tourism, Sports & Lifestyle", credibility: "Built refined design pieces supporting luxury hotel branding." },
  { name: "AtlanticBayResort.com", industry: "Hospitality, Tourism, Sports & Lifestyle", credibility: "Designed resort-focused visuals intended to boost booking confidence." },
  { name: "Seascape Marina and Resort", industry: "Hospitality, Tourism, Sports & Lifestyle", credibility: "Created destination branding elements for marina and resort appeal." },
  { name: "Real Sociedad OC Soccer Team", industry: "Hospitality, Tourism, Sports & Lifestyle", credibility: "Produced team-forward visuals for community sports identity building." },
  { name: "Golf Village", industry: "Hospitality, Tourism, Sports & Lifestyle", credibility: "Lifestyle and destination brand experience connected to sports, recreation, and community positioning." },
  { name: "City of West Palm Beach", industry: "Hospitality, Tourism, Sports & Lifestyle", credibility: "Municipal and civic brand work connected to public-facing digital presentation." },
  { name: "Kari Nautique", industry: "Hospitality, Tourism, Sports & Lifestyle", credibility: "Lifestyle and marine brand presentation connected to luxury, visual identity, and audience positioning." },

  { name: "Forbes Riley", industry: "Talent", credibility: "Developed public-facing creative supporting personal brand visibility." },
  { name: "Sona Pillow", industry: "Health", credibility: "Built product messaging creative for wellness-oriented conversion work." },
  { name: "Broadcom", industry: "Technology", credibility: "Provided clean B2B-oriented visuals for enterprise technology communication." },
  { name: "Uniforms4Class.net", industry: "Education", credibility: "Built practical conversion-focused creative for school uniform commerce." },
  { name: "Silverback Management", industry: "Management", credibility: "Built support materials for talent and brand management operations." },

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
  "Piaget": "Luxury brand experience connected to premium presentation, visual polish, and high-end audience positioning.",
  "Playboy": "Entertainment and lifestyle brand experience with strong cultural recognition.",
  "SC Johnson": "Consumer goods brand experience connected to household products and national retail awareness.",
  "T-Mobile": "Telecommunications brand experience with mass-market consumer recognition.",
  "Payless Shoes": "Retail brand experience connected to broad consumer reach and product-driven marketing.",
  "Glade": "Consumer fragrance brand experience connected to household products and lifestyle presentation.",
  "Universal Music Group": "Major music industry brand experience connected to artists, entertainment, and global distribution.",
  "Golf Village": "Lifestyle and destination brand experience connected to sports, recreation, and community positioning.",
  "City of West Palm Beach": "Municipal and civic brand work connected to public-facing digital presentation.",
  "FIU": "University and institutional brand experience connected to education, outreach, and public visibility.",
  "Darcey & Stacey Silva": "Television personality and entertainment brand experience with audience recognition.",
  "University of Miami Bascom Palmer": "Healthcare and academic medical brand experience connected to specialized institutional credibility.",
  "Tahiti Cora": "Artist brand development connected to music, visuals, content, and audience growth.",
  "Kari Nautique": "Lifestyle and marine brand presentation connected to luxury, visual identity, and audience positioning.",
  "Audible": "Audio and entertainment platform brand experience connected to spoken-word content and digital media.",
  "The Blue Card": "Nonprofit brand work connected to fundraising, digital presentation, education, and mission-driven storytelling.",
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
