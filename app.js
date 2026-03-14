// ===========================
// STORE DATA
// ===========================
const STORES = [
  // Floor 1
  { id: 1, name: "H&M", category: "fashion", floor: 1, icon: "👗", hours: "10:00 AM – 9:00 PM", desc: "Trendy, affordable fashion for men, women, and kids.", x: 85, y: 65 },
  { id: 2, name: "Zara", category: "fashion", floor: 1, icon: "👔", hours: "10:00 AM – 9:00 PM", desc: "Latest European fashion trends at accessible prices.", x: 235, y: 65 },
  { id: 3, name: "Sephora", category: "beauty", floor: 1, icon: "💄", hours: "10:00 AM – 8:00 PM", desc: "Premium beauty products, skincare, and makeup brands.", x: 375, y: 65 },
  { id: 4, name: "Apple Store", category: "electronics", floor: 1, icon: "🍎", hours: "10:00 AM – 9:00 PM", desc: "Apple's full lineup of iPhones, Macs, iPads, and accessories.", x: 635, y: 65 },
  { id: 5, name: "Nike", category: "sports", floor: 1, icon: "✔", hours: "10:00 AM – 9:00 PM", desc: "Athletic footwear, apparel, and gear for every sport.", x: 785, y: 65 },
  { id: 6, name: "Foot Locker", category: "sports", floor: 1, icon: "👟", hours: "10:00 AM – 8:00 PM", desc: "Top sneakers and athletic footwear for all ages.", x: 925, y: 65 },
  { id: 7, name: "Gap", category: "fashion", floor: 1, icon: "🧥", hours: "10:00 AM – 8:00 PM", desc: "Classic American style clothing for the whole family.", x: 85, y: 175 },
  { id: 8, name: "Pandora", category: "beauty", floor: 1, icon: "💍", hours: "10:00 AM – 8:00 PM", desc: "Handcrafted jewelry, charms, and personalized pieces.", x: 235, y: 175 },
  { id: 9, name: "Starbucks", category: "food", floor: 1, icon: "☕", hours: "7:00 AM – 9:00 PM", desc: "Your favorite coffee beverages, teas, and snacks.", x: 375, y: 175 },
  { id: 10, name: "Samsung", category: "electronics", floor: 1, icon: "📱", hours: "10:00 AM – 9:00 PM", desc: "Galaxy phones, TVs, home appliances, and wearables.", x: 635, y: 175 },
  { id: 11, name: "Adidas", category: "sports", floor: 1, icon: "🏃", hours: "10:00 AM – 8:00 PM", desc: "Iconic sports brand for athletes and streetwear fans.", x: 785, y: 175 },
  { id: 12, name: "Bath & Body Works", category: "beauty", floor: 1, icon: "🛁", hours: "10:00 AM – 8:00 PM", desc: "Fragrances, candles, lotions, and personal care gifts.", x: 925, y: 175 },
  { id: 13, name: "McDonald's", category: "food", floor: 1, icon: "🍔", hours: "8:00 AM – 10:00 PM", desc: "World-famous burgers, fries, and Happy Meals.", x: 85, y: 465 },
  { id: 14, name: "Subway", category: "food", floor: 1, icon: "🥖", hours: "9:00 AM – 9:00 PM", desc: "Fresh-made sandwiches and salads made your way.", x: 235, y: 465 },
  { id: 15, name: "AT&T", category: "services", floor: 1, icon: "📶", hours: "10:00 AM – 8:00 PM", desc: "Mobile plans, devices, and wireless services.", x: 375, y: 465 },
  { id: 16, name: "Chipotle", category: "food", floor: 1, icon: "🌯", hours: "10:00 AM – 10:00 PM", desc: "Mexican-inspired burritos, bowls, tacos, and salads.", x: 635, y: 465 },
  { id: 17, name: "GameStop", category: "entertainment", floor: 1, icon: "🎮", hours: "10:00 AM – 9:00 PM", desc: "Video games, consoles, accessories, and collectibles.", x: 785, y: 465 },
  { id: 18, name: "T-Mobile", category: "services", floor: 1, icon: "📡", hours: "10:00 AM – 8:00 PM", desc: "America's largest 5G network — phones and plans.", x: 925, y: 465 },
  { id: 19, name: "Panda Express", category: "food", floor: 1, icon: "🐼", hours: "10:00 AM – 9:00 PM", desc: "American Chinese cuisine with bold flavors.", x: 85, y: 575 },
  { id: 20, name: "Forever 21", category: "fashion", floor: 1, icon: "✨", hours: "10:00 AM – 9:00 PM", desc: "Trendy, affordable fashion for the young and young at heart.", x: 235, y: 575 },
  { id: 21, name: "Claire's", category: "beauty", floor: 1, icon: "🌸", hours: "10:00 AM – 8:00 PM", desc: "Accessories, jewelry, and beauty for teens and tweens.", x: 375, y: 575 },
  { id: 22, name: "Best Buy", category: "electronics", floor: 1, icon: "🖥", hours: "10:00 AM – 9:00 PM", desc: "Electronics, appliances, and technology for every need.", x: 635, y: 575 },
  { id: 23, name: "AMC Cinemas", category: "entertainment", floor: 1, icon: "🎬", hours: "11:00 AM – 11:00 PM", desc: "Latest blockbusters in premium large format screens.", x: 785, y: 575 },
  { id: 24, name: "UPS Store", category: "services", floor: 1, icon: "📦", hours: "9:00 AM – 7:00 PM", desc: "Shipping, printing, packing, and mailbox services.", x: 925, y: 575 },

  // Floor 2
  { id: 25, name: "Nordstrom", category: "fashion", floor: 2, icon: "👒", hours: "10:00 AM – 9:00 PM", desc: "Premium fashion, shoes, and luxury beauty brands.", x: 85, y: 65 },
  { id: 26, name: "Macy's", category: "fashion", floor: 2, icon: "⭐", hours: "10:00 AM – 9:00 PM", desc: "Department store with clothing, home goods, and more.", x: 235, y: 65 },
  { id: 27, name: "MAC Cosmetics", category: "beauty", floor: 2, icon: "💅", hours: "10:00 AM – 8:00 PM", desc: "Professional-quality makeup for every skin tone.", x: 375, y: 65 },
  { id: 28, name: "Microsoft Store", category: "electronics", floor: 2, icon: "🪟", hours: "10:00 AM – 9:00 PM", desc: "Surface devices, Xbox, and Microsoft software.", x: 635, y: 65 },
  { id: 29, name: "Under Armour", category: "sports", floor: 2, icon: "🏋️", hours: "10:00 AM – 8:00 PM", desc: "Performance athletic wear, shoes, and accessories.", x: 785, y: 65 },
  { id: 30, name: "New Balance", category: "sports", floor: 2, icon: "👠", hours: "10:00 AM – 8:00 PM", desc: "Engineered footwear and apparel for active lifestyles.", x: 925, y: 65 },
  { id: 31, name: "Levi's", category: "fashion", floor: 2, icon: "👖", hours: "10:00 AM – 8:00 PM", desc: "Iconic jeans and denim apparel since 1853.", x: 85, y: 175 },
  { id: 32, name: "Kiehl's", category: "beauty", floor: 2, icon: "🌿", hours: "10:00 AM – 8:00 PM", desc: "Natural skincare and beauty since 1851.", x: 235, y: 175 },
  { id: 33, name: "Din Tai Fung", category: "food", floor: 2, icon: "🥟", hours: "11:00 AM – 9:00 PM", desc: "World-famous Taiwanese dumplings and noodles.", x: 375, y: 175 },
  { id: 34, name: "Sony Store", category: "electronics", floor: 2, icon: "🎵", hours: "10:00 AM – 9:00 PM", desc: "PlayStation, TVs, headphones, and audio equipment.", x: 635, y: 175 },
  { id: 35, name: "REI", category: "sports", floor: 2, icon: "⛺", hours: "10:00 AM – 8:00 PM", desc: "Outdoor gear, apparel, and adventure equipment.", x: 785, y: 175 },
  { id: 36, name: "Lush", category: "beauty", floor: 2, icon: "🧼", hours: "10:00 AM – 8:00 PM", desc: "Fresh, handmade cosmetics and bath products.", x: 925, y: 175 },
  { id: 37, name: "Cheesecake Factory", category: "food", floor: 2, icon: "🍰", hours: "11:00 AM – 10:00 PM", desc: "Extensive menu with over 250 dishes and desserts.", x: 85, y: 465 },
  { id: 38, name: "P.F. Chang's", category: "food", floor: 2, icon: "🥢", hours: "11:00 AM – 10:00 PM", desc: "Asian-inspired dishes in a modern bistro setting.", x: 235, y: 465 },
  { id: 39, name: "Hair Cuttery", category: "services", floor: 2, icon: "✂️", hours: "9:00 AM – 8:00 PM", desc: "Affordable haircuts, color, and styling services.", x: 375, y: 465 },
  { id: 40, name: "Shake Shack", category: "food", floor: 2, icon: "🍟", hours: "10:00 AM – 10:00 PM", desc: "Premium burgers, frozen custard, and shakes.", x: 635, y: 465 },
  { id: 41, name: "Dave & Buster's", category: "entertainment", floor: 2, icon: "🕹", hours: "11:00 AM – Midnight", desc: "Arcade games, sports bar, and dining all in one.", x: 785, y: 465 },
  { id: 42, name: "Chase Bank", category: "services", floor: 2, icon: "🏦", hours: "9:00 AM – 5:00 PM", desc: "Full-service banking, ATM, and financial services.", x: 925, y: 465 },
  { id: 43, name: "Olive Garden", category: "food", floor: 2, icon: "🍝", hours: "11:00 AM – 10:00 PM", desc: "Unlimited breadsticks and Italian-American classics.", x: 85, y: 575 },
  { id: 44, name: "Anthropologie", category: "fashion", floor: 2, icon: "🌺", hours: "10:00 AM – 8:00 PM", desc: "Bohemian home décor, clothing, and accessories.", x: 235, y: 575 },
  { id: 45, name: "Nail Spa", category: "beauty", floor: 2, icon: "💅", hours: "9:00 AM – 8:00 PM", desc: "Manicures, pedicures, and nail art services.", x: 375, y: 575 },
  { id: 46, name: "iRepair", category: "services", floor: 2, icon: "🔧", hours: "10:00 AM – 8:00 PM", desc: "Phone, tablet, and laptop repair while you wait.", x: 635, y: 575 },
  { id: 47, name: "Escape Room", category: "entertainment", floor: 2, icon: "🔐", hours: "12:00 PM – 10:00 PM", desc: "Immersive puzzle experiences for groups of 2–8.", x: 785, y: 575 },
  { id: 48, name: "FedEx Office", category: "services", floor: 2, icon: "✈️", hours: "8:00 AM – 7:00 PM", desc: "Printing, shipping, and business center services.", x: 925, y: 575 },
];

const CATEGORY_LABELS = {
  food: "Food & Dining",
  fashion: "Fashion",
  electronics: "Electronics",
  beauty: "Beauty",
  sports: "Sports",
  entertainment: "Entertainment",
  services: "Services",
  all: "All Stores"
};

const CAT_COLORS = {
  food: "#fff3e0",
  fashion: "#fce4ec",
  electronics: "#e8f5e9",
  beauty: "#f3e5f5",
  sports: "#e3f2fd",
  entertainment: "#ede7f6",
  services: "#e0f7fa"
};

// ===========================
// STATE
// ===========================
let currentFloor = 1;
let currentCategory = "all";
let selectedStore = null;
let scale = 1;
let panX = 0, panY = 0;
let isPanning = false;
let startX, startY;

// ===========================
// DOM REFS
// ===========================
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const searchResults = document.getElementById("searchResults");
const storeList = document.getElementById("storeList");
const storeCount = document.getElementById("storeCount");
const panelTitle = document.getElementById("panelTitle");
const mapViewport = document.getElementById("mapViewport");
const storeDetail = document.getElementById("storeDetail");
const directionsPanel = document.getElementById("directionsPanel");
const floor1Stores = document.getElementById("floor1Stores");
const floor2Stores = document.getElementById("floor2Stores");
const pathOverlay = document.getElementById("pathOverlay");
const navPath = document.getElementById("navPath");
const destMarker = document.getElementById("destMarker");
const destLabel = document.getElementById("destLabel");

// ===========================
// INIT
// ===========================
function init() {
  updateTime();
  setInterval(updateTime, 1000);
  renderStoreList();
  bindEvents();
  applyStoreColors();
}

function updateTime() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes().toString().padStart(2, "0");
  const ampm = h >= 12 ? "PM" : "AM";
  document.getElementById("timeDisplay").textContent = `${h % 12 || 12}:${m} ${ampm}`;
}

function applyStoreColors() {
  STORES.forEach(store => {
    const zone = document.querySelector(`.store-zone[data-store="${store.id}"]`);
    if (!zone) return;
    const rect = zone.querySelector("rect");
    if (rect) rect.style.fill = CAT_COLORS[store.category] || "#fff";
  });
}

// ===========================
// RENDER STORE LIST
// ===========================
function renderStoreList(query = "") {
  const filtered = STORES.filter(s => {
    const matchFloor = s.floor === currentFloor;
    const matchCat = currentCategory === "all" || s.category === currentCategory;
    const matchQuery = !query || s.name.toLowerCase().includes(query.toLowerCase()) || s.category.toLowerCase().includes(query.toLowerCase());
    return matchFloor && matchCat && matchQuery;
  });

  panelTitle.textContent = CATEGORY_LABELS[currentCategory] || "All Stores";
  storeCount.textContent = `${filtered.length} stores`;

  storeList.innerHTML = filtered.map(store => `
    <div class="store-item ${selectedStore && selectedStore.id === store.id ? 'active' : ''}" data-id="${store.id}">
      <div class="store-item-icon" style="background:${CAT_COLORS[store.category]}">
        <span style="font-size:20px">${store.icon}</span>
      </div>
      <div class="store-item-info">
        <div class="store-item-name">${store.name}</div>
        <div class="store-item-meta">${CATEGORY_LABELS[store.category]} · Floor ${store.floor}</div>
      </div>
      <span class="store-item-arrow">›</span>
    </div>
  `).join("");

  storeList.querySelectorAll(".store-item").forEach(el => {
    el.addEventListener("click", () => {
      const id = parseInt(el.dataset.id);
      const store = STORES.find(s => s.id === id);
      if (store) openStoreDetail(store);
    });
  });
}

// ===========================
// STORE DETAIL
// ===========================
function openStoreDetail(store) {
  selectedStore = store;

  // Switch floor if needed
  if (store.floor !== currentFloor) {
    setFloor(store.floor);
  }

  // Highlight on map
  highlightStoreOnMap(store.id);

  // Populate detail card
  document.getElementById("detailIcon").style.cssText = `background:${CAT_COLORS[store.category]}`;
  document.getElementById("detailIcon").textContent = store.icon;
  document.getElementById("detailIcon").style.fontSize = "40px";
  document.getElementById("detailName").textContent = store.name;
  document.getElementById("detailCat").textContent = CATEGORY_LABELS[store.category];
  document.getElementById("detailFloor").textContent = `Floor ${store.floor}`;
  document.getElementById("detailHours").textContent = `Open today: ${store.hours}`;
  document.getElementById("detailDesc").textContent = store.desc;

  storeDetail.style.display = "flex";

  renderStoreList();
}

function closeStoreDetail() {
  storeDetail.style.display = "none";
}

// ===========================
// DIRECTIONS
// ===========================
function showDirections(store) {
  closeStoreDetail();

  document.getElementById("dirDestName").textContent = store.name;

  // Generate route steps
  const steps = generateDirectionSteps(store);
  document.getElementById("dirSteps").innerHTML = steps.map((s, i) => `
    <div class="dir-step">
      <span class="step-num">${i + 1}</span>
      ${s}
    </div>
  `).join("");

  const dist = Math.floor(Math.random() * 300 + 100);
  const mins = Math.ceil(dist / 60);
  document.getElementById("dirEta").textContent = `About ${mins} min walk · ${dist} ft`;

  directionsPanel.style.display = "block";

  // Draw path on map
  drawNavPath(store);
}

function generateDirectionSteps(store) {
  const steps = [];
  const kioskX = 500, kioskY = 350;
  const storeX = store.x, storeY = store.y;

  if (store.floor !== 1) {
    steps.push("Head to the elevator or escalator in the center corridor");
    steps.push(`Take escalator to Floor ${store.floor}`);
  }

  if (storeX < 440) {
    steps.push("Turn left and head west along the main corridor");
  } else if (storeX > 560) {
    steps.push("Turn right and head east along the main corridor");
  } else {
    steps.push("Continue straight through the center atrium");
  }

  if (storeY < 290) {
    steps.push("Turn into the North Wing");
  } else if (storeY > 410) {
    steps.push("Turn into the South Wing");
  }

  steps.push(`${store.name} will be on your ${storeX < 500 ? "left" : "right"}`);

  return steps;
}

function drawNavPath(store) {
  const kx = 500, ky = 350;
  const sx = store.x, sy = store.y;

  // Simple L-shaped path through corridor
  let pathD;
  if (sy < 290) {
    // North wing — go up through center
    pathD = `M ${kx} ${ky} L ${sx} ${ky} L ${sx} ${sy}`;
  } else if (sy > 410) {
    // South wing — go down through center
    pathD = `M ${kx} ${ky} L ${sx} ${ky} L ${sx} ${sy}`;
  } else {
    // Same corridor
    pathD = `M ${kx} ${ky} L ${sx} ${sy}`;
  }

  navPath.setAttribute("d", pathD);
  destMarker.setAttribute("cx", sx);
  destMarker.setAttribute("cy", sy);
  destLabel.setAttribute("x", sx);
  destLabel.setAttribute("y", sy);
  destLabel.textContent = store.id;

  pathOverlay.style.display = "block";
}

function closeDirections() {
  directionsPanel.style.display = "none";
  pathOverlay.style.display = "none";
  selectedStore = null;
  clearHighlights();
  renderStoreList();
}

// ===========================
// MAP HIGHLIGHTING
// ===========================
function highlightStoreOnMap(storeId) {
  clearHighlights();
  const zone = document.querySelector(`.store-zone[data-store="${storeId}"]`);
  if (zone) {
    zone.classList.add("selected");
    scrollToStoreOnMap(storeId);
  }
}

function clearHighlights() {
  document.querySelectorAll(".store-zone").forEach(z => {
    z.classList.remove("selected", "highlighted");
  });
}

function scrollToStoreOnMap(storeId) {
  // Pan map to show selected store
  const store = STORES.find(s => s.id === storeId);
  if (!store) return;
  const container = document.querySelector(".map-container");
  const cw = container.offsetWidth;
  const ch = container.offsetHeight;
  // Center on the store
  panX = (cw / 2) - store.x * scale;
  panY = (ch / 2) - store.y * scale;
  applyTransform();
}

function highlightCategory(cat) {
  clearHighlights();
  if (cat === "all") return;
  const floored = STORES.filter(s => s.floor === currentFloor && s.category === cat);
  floored.forEach(store => {
    const zone = document.querySelector(`.store-zone[data-store="${store.id}"]`);
    if (zone) zone.classList.add("highlighted");
  });
}

// ===========================
// FLOOR SWITCHING
// ===========================
function setFloor(floor) {
  currentFloor = floor;
  document.querySelectorAll(".floor-btn").forEach(btn => {
    btn.classList.toggle("active", parseInt(btn.dataset.floor) === floor);
  });
  floor1Stores.style.display = floor === 1 ? "" : "none";
  floor2Stores.style.display = floor === 2 ? "" : "none";
  renderStoreList();
  clearHighlights();
  pathOverlay.style.display = "none";
  directionsPanel.style.display = "none";
}

// ===========================
// MAP PAN & ZOOM
// ===========================
function applyTransform() {
  mapViewport.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
  mapViewport.style.transformOrigin = "0 0";
}

function zoomIn() {
  scale = Math.min(scale * 1.3, 3);
  applyTransform();
}

function zoomOut() {
  scale = Math.max(scale / 1.3, 0.5);
  applyTransform();
}

function resetView() {
  scale = 1;
  panX = 0;
  panY = 0;
  applyTransform();
}

// Touch/drag pan
function initMapDrag() {
  const container = document.querySelector(".map-container");

  let lastX, lastY;

  container.addEventListener("mousedown", e => {
    if (e.target.closest(".store-zone") || e.target.closest(".map-controls") || e.target.closest(".map-legend")) return;
    isPanning = true;
    lastX = e.clientX;
    lastY = e.clientY;
  });

  document.addEventListener("mousemove", e => {
    if (!isPanning) return;
    panX += e.clientX - lastX;
    panY += e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    applyTransform();
  });

  document.addEventListener("mouseup", () => { isPanning = false; });

  // Touch
  container.addEventListener("touchstart", e => {
    if (e.touches.length === 1) {
      isPanning = true;
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
    }
  }, { passive: true });

  container.addEventListener("touchmove", e => {
    if (!isPanning || e.touches.length !== 1) return;
    panX += e.touches[0].clientX - lastX;
    panY += e.touches[0].clientY - lastY;
    lastX = e.touches[0].clientX;
    lastY = e.touches[0].clientY;
    applyTransform();
  }, { passive: true });

  container.addEventListener("touchend", () => { isPanning = false; });

  // Scroll zoom
  container.addEventListener("wheel", e => {
    e.preventDefault();
    if (e.deltaY < 0) zoomIn();
    else zoomOut();
  }, { passive: false });
}

// ===========================
// SEARCH
// ===========================
function performSearch(query) {
  clearSearch.style.display = query ? "flex" : "none";
  if (!query.trim()) {
    searchResults.classList.remove("visible");
    return;
  }

  const matches = STORES.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    CATEGORY_LABELS[s.category].toLowerCase().includes(query.toLowerCase())
  ).slice(0, 8);

  if (!matches.length) {
    searchResults.innerHTML = `<div style="padding:16px;color:#6a7071;text-align:center;font-size:13px">No stores found for "${query}"</div>`;
    searchResults.classList.add("visible");
    return;
  }

  searchResults.innerHTML = matches.map(store => `
    <div class="search-result-item" data-id="${store.id}">
      <div class="result-icon" style="background:${CAT_COLORS[store.category]}">${store.icon}</div>
      <div class="result-info">
        <div class="result-name">${highlightMatch(store.name, query)}</div>
        <div class="result-sub">${CATEGORY_LABELS[store.category]} · Floor ${store.floor}</div>
      </div>
    </div>
  `).join("");

  searchResults.classList.add("visible");

  searchResults.querySelectorAll(".search-result-item").forEach(el => {
    el.addEventListener("click", () => {
      const id = parseInt(el.dataset.id);
      const store = STORES.find(s => s.id === id);
      if (store) {
        searchInput.value = "";
        clearSearch.style.display = "none";
        searchResults.classList.remove("visible");
        openStoreDetail(store);
      }
    });
  });
}

function highlightMatch(text, query) {
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return text.replace(regex, '<mark style="background:#00b7af22;color:#00b7af;border-radius:2px">$1</mark>');
}

// ===========================
// EVENT BINDINGS
// ===========================
function bindEvents() {
  // Search
  searchInput.addEventListener("input", e => performSearch(e.target.value));
  searchInput.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      searchInput.value = "";
      clearSearch.style.display = "none";
      searchResults.classList.remove("visible");
    }
  });
  clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    clearSearch.style.display = "none";
    searchResults.classList.remove("visible");
    renderStoreList();
  });

  // Close search results when clicking outside
  document.addEventListener("click", e => {
    if (!e.target.closest(".header-center")) {
      searchResults.classList.remove("visible");
    }
  });

  // Category buttons
  document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.cat;
      renderStoreList();
      highlightCategory(currentCategory);
    });
  });

  // Floor buttons
  document.querySelectorAll(".floor-btn").forEach(btn => {
    btn.addEventListener("click", () => setFloor(parseInt(btn.dataset.floor)));
  });

  // Map store click
  document.querySelectorAll(".store-zone").forEach(zone => {
    zone.addEventListener("click", () => {
      const id = parseInt(zone.dataset.store);
      const store = STORES.find(s => s.id === id);
      if (store) openStoreDetail(store);
    });
  });

  // Detail panel
  document.getElementById("closeDetail").addEventListener("click", closeStoreDetail);
  storeDetail.addEventListener("click", e => {
    if (e.target === storeDetail) closeStoreDetail();
  });

  document.getElementById("getDirections").addEventListener("click", () => {
    if (selectedStore) showDirections(selectedStore);
  });

  // Directions close
  document.getElementById("closeDirections").addEventListener("click", closeDirections);

  // Map controls
  document.getElementById("zoomIn").addEventListener("click", zoomIn);
  document.getElementById("zoomOut").addEventListener("click", zoomOut);
  document.getElementById("resetView").addEventListener("click", resetView);

  // Map drag
  initMapDrag();
}

// ===========================
// START
// ===========================
init();
