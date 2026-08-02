/**
 * ==========================================================================
 * FARHANG CLOTHING COMPANY — SEATTLE, WA
 * Editorial Fashion Magazine & Luxury Streetwear Engine
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 01. GARMENT & ATELIER CATALOG DATA
// --------------------------------------------------------------------------
const PRODUCTS = [
  {
    id: 1,
    title: "Pioneer Square Oversized Trench",
    category: "Outerwear",
    price: 580,
    color: "Deep Olive",
    tag: "380GSM WAXED COTTON",
    description: "Architectural double-breasted trench coat constructed from heavy 380gsm waxed organic cotton. Designed in Seattle with storm flaps, raglan sleeves, and custom brushed silver hardware.",
    fabric: "100% Organic Waxed Cotton (380 GSM)",
    primaryImg: "/src/assets/images/farhang_hero_model_1785644897227.jpg",
    secondaryImg: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85",
    thumbs: [
      "/src/assets/images/farhang_hero_model_1785644897227.jpg",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85"
    ]
  },
  {
    id: 2,
    title: "Elliott Bay Raw Denim Hoodie",
    category: "Tops",
    price: 290,
    color: "Charcoal Black",
    tag: "14OZ JAPANESE SELVEDGE",
    description: "Heavyweight indigo denim hoodie with double-lined hood, dropped shoulders, and deep front kangaroo pocket. Finished with copper aglets and Seattle Atelier woven label.",
    fabric: "14oz Japanese Selvedge Cotton & 450GSM Loopback Terry",
    primaryImg: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85",
    secondaryImg: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=85",
    thumbs: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=85"
    ]
  },
  {
    id: 3,
    title: "Architectural Wool Trousers",
    category: "Bottoms",
    price: 340,
    color: "Stone Gray",
    tag: "TAILORED VIRGIN WOOL",
    description: "High-waisted, fluid straight-leg trousers woven from premium Virgin Wool blend. Features front double pleats, horn buttons, and tailored crease for a refined drape.",
    fabric: "85% Virgin Wool, 15% Silk Weave (320 GSM)",
    primaryImg: "/src/assets/images/farhang_lookbook_spread_1785644912304.jpg",
    secondaryImg: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85",
    thumbs: [
      "/src/assets/images/farhang_lookbook_spread_1785644912304.jpg",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85"
    ]
  },
  {
    id: 4,
    title: "Rain-Proof Heavyweight Shell",
    category: "Outerwear",
    price: 620,
    color: "Brushed Silver",
    tag: "3-LAYER WATERPROOF WOOL",
    description: "Technical weatherproof shell jacket designed for extreme weather adaptability. Seam-sealed construction with storm visor hood and magnetic closure pockets.",
    fabric: "3-Layer Waterproof Wool Laminate (420 GSM)",
    primaryImg: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85",
    secondaryImg: "/src/assets/images/farhang_hero_model_1785644897227.jpg",
    thumbs: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85",
      "/src/assets/images/farhang_hero_model_1785644897227.jpg"
    ]
  },
  {
    id: 5,
    title: "Pike Place Boxy Merino Knit",
    category: "Tops",
    price: 310,
    color: "Warm Sand",
    tag: "100% EXTRA-FINE MERINO",
    description: "Sculptural boxy knit sweater with thick 7-gauge ribbed collar and cuffs. Exceptionally soft, insulating, and naturally temperature-regulating.",
    fabric: "100% Extra-Fine Australian Merino Wool (390 GSM)",
    primaryImg: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=85",
    secondaryImg: "/src/assets/images/farhang_lookbook_spread_1785644912304.jpg",
    thumbs: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=85",
      "/src/assets/images/farhang_lookbook_spread_1785644912304.jpg"
    ]
  },
  {
    id: 6,
    title: "Pacific Noir Scarf & Beanie Set",
    category: "Accessories",
    price: 180,
    color: "Copper Accent",
    tag: "CASHMERE & MERINO BLEND",
    description: "Luxurious cold-weather set comprising a ribbed knit beanie and wide fringed scarf. Dyed in signature Seattle Pacific Fog and Copper tones.",
    fabric: "70% Extra-fine Merino, 30% Cashmere",
    primaryImg: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=800&q=85",
    secondaryImg: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=85",
    thumbs: [
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=800&q=85"
    ]
  },
  {
    id: 7,
    title: "Seattle Atelier Minimal Overcoat",
    category: "Outerwear",
    price: 680,
    color: "Charcoal Black",
    tag: "HEAVY RECYCLED WOOL",
    description: "Clean single-breasted overcoat with hidden button placket and deep side welt pockets. Tailored in an oversized silhouette for effortless winter layering.",
    fabric: "100% Recycled Heavy Wool (480 GSM)",
    primaryImg: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85",
    secondaryImg: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85",
    thumbs: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85"
    ]
  },
  {
    id: 8,
    title: "Pioneer Square Raw Denim Trousers",
    category: "Bottoms",
    price: 260,
    color: "Muted Beige",
    tag: "UNBLEACHED SELVEDGE",
    description: "Straight-cut unbleached organic cotton denim trousers with vintage selvedge ID stitch, brass hardware, and reinforced seat construction.",
    fabric: "13.5oz Organic Unbleached Cotton Selvedge",
    primaryImg: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=85",
    secondaryImg: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85",
    thumbs: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=85"
    ]
  }
];

// Currency Symbols & Rates
const CURRENCY = {
  USD: { symbol: "$", rate: 1.0 },
  EUR: { symbol: "€", rate: 0.92 },
  GBP: { symbol: "£", rate: 0.78 },
  JPY: { symbol: "¥", rate: 152.5 }
};

let currentCurrency = "USD";
let cart = JSON.parse(localStorage.getItem("farhang_cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("farhang_wishlist") || "[]");
let activePromo = null;

// Initial Customer Gallery Data
let GALLERY_ITEMS = [
  { id: 101, name: "Alexander V., Paris", item: "Pioneer Square Oversized Trench", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=85" },
  { id: 102, name: "Marcus K., Tokyo", item: "Elliott Bay Raw Denim Hoodie", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=85" },
  { id: 103, name: "Elena S., London", item: "Architectural Wool Trousers", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=85" },
  { id: 104, name: "Kai Chen, Seattle", item: "Pike Place Boxy Merino Sweater", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=85" }
];

// --------------------------------------------------------------------------
// 02. INITIALIZATION ON DOM LOADED
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initPreloader();
  initCustomCursor();
  initHeaderAndScroll();
  initLookbookSlider();
  initCurrencySelector();
  initProductsGrid();
  initFabricInspector();
  initShippingCalculator();
  initAccordion();
  initGalleryMasonry();
  initDrawersAndModals();
  initVipPassGenerator();
  initAudioAmbience();
  updateBadgesAndCart();
});

// --------------------------------------------------------------------------
// 03. PRELOADER ENGINE
// --------------------------------------------------------------------------
function initPreloader() {
  const preloader = document.getElementById("preloader");
  const progress = document.getElementById("preloaderProgress");
  const counter = document.getElementById("preloaderCounter");

  if (!preloader) return;

  let val = 0;
  const interval = setInterval(() => {
    val += Math.floor(Math.random() * 15) + 10;
    if (val >= 100) {
      val = 100;
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add("fade-out");
      }, 300);
    }
    progress.style.width = val + "%";
    counter.textContent = (val < 10 ? "0" : "") + val + "%";
  }, 60);
}

// --------------------------------------------------------------------------
// 04. CUSTOM CURSOR ENGINE
// --------------------------------------------------------------------------
function initCustomCursor() {
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  const cursorText = document.getElementById("cursorText");

  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
  });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover Effect targets
  document.querySelectorAll("a, button, .product-card, .hotspot-pin, .lookbook-slide").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      ring.classList.add("active-hover");
      if (el.classList.contains("product-card") || el.classList.contains("hotspot-pin")) {
        cursorText.textContent = "SHOP";
      } else if (el.classList.contains("lookbook-slide")) {
        cursorText.textContent = "VIEW";
      } else {
        cursorText.textContent = "";
      }
    });

    el.addEventListener("mouseleave", () => {
      ring.classList.remove("active-hover");
      cursorText.textContent = "";
    });
  });
}

// --------------------------------------------------------------------------
// 05. HEADER & SCROLL BEHAVIOR
// --------------------------------------------------------------------------
function initHeaderAndScroll() {
  const header = document.getElementById("siteHeader");
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  backToTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Mobile drawer toggle
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileClose = document.getElementById("mobileDrawerClose");

  mobileToggle?.addEventListener("click", () => mobileDrawer?.classList.add("open"));
  mobileClose?.addEventListener("click", () => mobileDrawer?.classList.remove("open"));

  document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => mobileDrawer?.classList.remove("open"));
  });
}

// --------------------------------------------------------------------------
// 06. INTERACTIVE LOOKBOOK SLIDER
// --------------------------------------------------------------------------
function initLookbookSlider() {
  const slides = document.querySelectorAll(".lookbook-slide");
  const prevBtn = document.getElementById("lookbookPrev");
  const nextBtn = document.getElementById("lookbookNext");
  const counter = document.getElementById("lookbookCounter");
  const track = document.getElementById("lookbookTrack");

  if (!slides.length) return;
  let currentIndex = 0;

  function updateSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentIndex);
    });
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    counter.textContent = `0${currentIndex + 1} / 0${slides.length}`;
  }

  prevBtn?.addEventListener("click", () => updateSlide(currentIndex - 1));
  nextBtn?.addEventListener("click", () => updateSlide(currentIndex + 1));

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") updateSlide(currentIndex - 1);
    if (e.key === "ArrowRight") updateSlide(currentIndex + 1);
  });
}

// --------------------------------------------------------------------------
// 07. CURRENCY SELECTOR ENGINE
// --------------------------------------------------------------------------
function initCurrencySelector() {
  const select = document.getElementById("currencySelect");
  if (!select) return;

  select.addEventListener("change", (e) => {
    currentCurrency = e.target.value;
    updateAllPricesOnPage();
  });
}

function formatPrice(usdAmount) {
  const { symbol, rate } = CURRENCY[currentCurrency];
  const converted = Math.round(usdAmount * rate);
  if (currentCurrency === "JPY") {
    return `${symbol}${converted.toLocaleString()}`;
  }
  return `${symbol}${converted.toFixed(2)}`;
}

function updateAllPricesOnPage() {
  // Re-render Essentials Grid & Main Shop Grid
  renderEssentialsGrid();
  renderMainShopGrid();
  updateBadgesAndCart();
}

// --------------------------------------------------------------------------
// 08. PRODUCTS RENDER & FILTER ENGINE
// --------------------------------------------------------------------------
function initProductsGrid() {
  renderEssentialsGrid();
  renderMainShopGrid();

  // Filter Buttons for Seasonal Essentials
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      const category = e.target.getAttribute("data-category");
      renderEssentialsGrid(category);
    });
  });

  // Sidebar Filter Listeners
  const searchInput = document.getElementById("catalogSearchInput");
  const priceRange = document.getElementById("priceRange");
  const priceText = document.getElementById("priceValueText");
  const sortSelect = document.getElementById("sortSelect");
  const resetBtn = document.getElementById("resetFiltersBtn");

  searchInput?.addEventListener("input", filterAndRenderMainShop);
  priceRange?.addEventListener("input", (e) => {
    priceText.textContent = `Max: $${e.target.value}`;
    filterAndRenderMainShop();
  });
  sortSelect?.addEventListener("change", filterAndRenderMainShop);

  resetBtn?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    if (priceRange) priceRange.value = 700;
    if (priceText) priceText.textContent = "Max: $700";
    if (sortSelect) sortSelect.value = "featured";
    document.querySelectorAll(".filter-list-btn").forEach(b => b.classList.remove("active"));
    document.querySelector('.filter-list-btn[data-cat="all"]')?.classList.add("active");
    filterAndRenderMainShop();
  });

  // Sidebar Category Filter Buttons
  document.querySelectorAll(".filter-list-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".filter-list-btn").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      filterAndRenderMainShop();
    });
  });
}

function renderEssentialsGrid(category = "all") {
  const container = document.getElementById("essentialsGrid");
  if (!container) return;

  const filtered = category === "all" 
    ? PRODUCTS.slice(0, 6) 
    : PRODUCTS.filter(p => p.category.toLowerCase() === category.toLowerCase());

  container.innerHTML = filtered.map(product => createProductCardHTML(product)).join("");
  bindCardInteractions();
}

function filterAndRenderMainShop() {
  const container = document.getElementById("mainShopGrid");
  const countText = document.getElementById("productCountText");
  if (!container) return;

  const query = document.getElementById("catalogSearchInput")?.value.toLowerCase() || "";
  const maxPrice = parseFloat(document.getElementById("priceRange")?.value || 700);
  const activeCatBtn = document.querySelector(".filter-list-btn.active");
  const selectedCategory = activeCatBtn ? activeCatBtn.getAttribute("data-cat") : "all";
  const sortBy = document.getElementById("sortSelect")?.value || "featured";

  let results = PRODUCTS.filter(p => {
    const matchesQuery = p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query);
    const matchesPrice = p.price <= maxPrice;
    const matchesCat = selectedCategory === "all" || p.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesQuery && matchesPrice && matchesCat;
  });

  if (sortBy === "price-low") results.sort((a, b) => a.price - b.price);
  if (sortBy === "price-high") results.sort((a, b) => b.price - a.price);
  if (sortBy === "newest") results.sort((a, b) => b.id - a.id);

  if (countText) {
    countText.textContent = `SHOWING ${results.length} OF ${PRODUCTS.length} ATELIER PIECES`;
  }

  container.innerHTML = results.map(product => createProductCardHTML(product)).join("");
  bindCardInteractions();
}

function renderMainShopGrid() {
  filterAndRenderMainShop();
}

function createProductCardHTML(product) {
  const isWishlisted = wishlist.some(item => item.id === product.id);
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="card-media">
        <img src="${product.primaryImg}" alt="${product.title}" class="card-img-primary" referrerpolicy="no-referrer">
        <img src="${product.secondaryImg}" alt="${product.title} Fabric Detail" class="card-img-secondary" referrerpolicy="no-referrer">
        <span class="card-tag">${product.tag}</span>
        <button class="card-wishlist-btn ${isWishlisted ? "active" : ""}" data-id="${product.id}" aria-label="Toggle Wishlist">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
        </button>
        <div class="card-quick-overlay">
          <button class="btn btn-sm btn-primary open-quickview" data-id="${product.id}">Quick Inspect &amp; Shop</button>
        </div>
      </div>
      <div class="card-body">
        <span class="card-category">${product.category} • ${product.color}</span>
        <h3 class="card-title">${product.title}</h3>
        <div class="card-price-row">
          <span class="card-price">${formatPrice(product.price)}</span>
          <button class="btn btn-sm btn-secondary add-to-bag-direct" data-id="${product.id}">Add to Bag</button>
        </div>
      </div>
    </div>
  `;
}

function bindCardInteractions() {
  document.querySelectorAll(".open-quickview").forEach(btn => {
    btn.onclick = (e) => {
      const id = parseInt(e.currentTarget.getAttribute("data-id"));
      openQuickviewModal(id);
    };
  });

  document.querySelectorAll(".add-to-bag-direct, .add-to-cart-quick").forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const id = parseInt(e.currentTarget.getAttribute("data-id"));
      addToCart(id, "M", "Default", 1);
      showToast("Added garment to Shopping Bag");
    };
  });

  document.querySelectorAll(".card-wishlist-btn").forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const id = parseInt(e.currentTarget.getAttribute("data-id"));
      toggleWishlist(id);
    };
  });
}

// --------------------------------------------------------------------------
// 09. FABRIC INSPECTOR & TRANSIT CALCULATOR
// --------------------------------------------------------------------------
function initFabricInspector() {
  const tabs = document.querySelectorAll(".fabric-tab");
  const gsm = document.getElementById("fabricGsm");
  const origin = document.getElementById("fabricOrigin");
  const property = document.getElementById("fabricProperty");

  const fabrics = {
    cotton: {
      gsm: "380 GSM Heavy Loopback",
      origin: "Organic Mill, GOTS Certified",
      property: "Ultra-soft interior brushed fleece, structured exterior weave"
    },
    wool: {
      gsm: "420 GSM 3-Layer Laminate",
      origin: "Ethical Australian Merino & Recycled Wool",
      property: "Waterproof, breathable membrane for rainy Seattle conditions"
    },
    denim: {
      gsm: "14oz Shuttle Loom Weave",
      origin: "Okayama, Japan",
      property: "Unbleached organic indigo denim with classic red selvedge ID"
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      tabs.forEach(t => t.classList.remove("active"));
      e.target.classList.add("active");
      const key = e.target.getAttribute("data-fabric");
      const info = fabrics[key];
      if (info && gsm && origin && property) {
        gsm.textContent = info.gsm;
        origin.textContent = info.origin;
        property.textContent = info.property;
      }
    });
  });
}

function initShippingCalculator() {
  const select = document.getElementById("destinationSelect");
  const days = document.getElementById("transitDays");
  const partner = document.getElementById("transitPartner");
  const duties = document.getElementById("transitDuties");

  const data = {
    usa: { days: "1–2 Business Days", partner: "FedEx Overnight / UPS Express", duties: "No Duties Applied (Domestic)" },
    canada: { days: "2–3 Business Days", partner: "DHL Express Canada", duties: "Taxes Included at Checkout (DDP)" },
    europe: { days: "2–4 Business Days", partner: "DHL Express International", duties: "VAT & Duties Pre-paid" },
    asia: { days: "2–3 Business Days", partner: "DHL Air Express Tokyo / Seoul", duties: "Duties Handled via DDP" },
    australia: { days: "3–5 Business Days", partner: "FedEx International Priority", duties: "GST Included at Checkout" },
    middleeast: { days: "3–4 Business Days", partner: "FedEx Priority Express", duties: "Pre-cleared Customs" }
  };

  select?.addEventListener("change", (e) => {
    const info = data[e.target.value];
    if (info && days && partner && duties) {
      days.textContent = info.days;
      partner.textContent = info.partner;
      duties.textContent = info.duties;
    }
  });
}

function initAccordion() {
  document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isActive = item.classList.contains("active");
      document.querySelectorAll(".accordion-item").forEach(i => i.classList.remove("active"));
      if (!isActive) item.classList.add("active");
    });
  });
}

// --------------------------------------------------------------------------
// 10. CUSTOMER GALLERY MASONRY
// --------------------------------------------------------------------------
function initGalleryMasonry() {
  renderGallery();

  const uploadBtn = document.getElementById("uploadLookBtn");
  const modal = document.getElementById("uploadModalOverlay");
  const closeBtn = document.getElementById("uploadClose");
  const form = document.getElementById("uploadLookForm");
  const fileInput = document.getElementById("clientFileInput");
  const preview = document.getElementById("uploadImagePreview");
  let uploadedImgData = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=85";

  uploadBtn?.addEventListener("click", () => modal?.classList.add("open"));
  closeBtn?.addEventListener("click", () => modal?.classList.remove("open"));

  fileInput?.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        uploadedImgData = event.target.result;
        if (preview) {
          preview.src = uploadedImgData;
          preview.classList.remove("hidden");
        }
      };
      reader.readAsDataURL(file);
    }
  });

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("clientNameInput").value;
    const garment = document.getElementById("clientGarmentInput").value;

    GALLERY_ITEMS.unshift({
      id: Date.now(),
      name: name,
      item: garment,
      img: uploadedImgData
    });

    renderGallery();
    modal?.classList.remove("open");
    form.reset();
    if (preview) preview.classList.add("hidden");
    showToast("Your look was submitted to the Editorial Board!");
  });
}

function renderGallery() {
  const container = document.getElementById("galleryMasonry");
  if (!container) return;

  container.innerHTML = GALLERY_ITEMS.map(item => `
    <div class="gallery-item">
      <img src="${item.img}" alt="${item.item}" class="gallery-img" referrerpolicy="no-referrer">
      <div class="gallery-overlay">
        <h4 class="gallery-client">${item.name}</h4>
        <span class="gallery-piece">${item.item}</span>
      </div>
    </div>
  `).join("");
}

// --------------------------------------------------------------------------
// 11. DRAWERS, CART & WISHLIST LOGIC
// --------------------------------------------------------------------------
function initDrawersAndModals() {
  // Cart Drawer
  const cartToggle = document.getElementById("cartToggle");
  const cartOverlay = document.getElementById("cartOverlay");
  const cartClose = document.getElementById("cartClose");

  cartToggle?.addEventListener("click", () => cartOverlay?.classList.add("open"));
  cartClose?.addEventListener("click", () => cartOverlay?.classList.remove("open"));

  // Wishlist Drawer
  const wishlistToggle = document.getElementById("wishlistToggle");
  const wishlistOverlay = document.getElementById("wishlistOverlay");
  const wishlistClose = document.getElementById("wishlistClose");

  wishlistToggle?.addEventListener("click", () => wishlistOverlay?.classList.add("open"));
  wishlistClose?.addEventListener("click", () => wishlistOverlay?.classList.remove("open"));

  // Search Modal
  const searchToggle = document.getElementById("searchToggle");
  const searchOverlay = document.getElementById("searchOverlay");
  const searchClose = document.getElementById("searchClose");
  const searchInput = document.getElementById("searchInput");
  const searchResultsGrid = document.getElementById("searchResultsGrid");

  searchToggle?.addEventListener("click", () => {
    searchOverlay?.classList.add("open");
    searchInput?.focus();
  });
  searchClose?.addEventListener("click", () => searchOverlay?.classList.remove("open"));

  searchInput?.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    if (!query) {
      if (searchResultsGrid) searchResultsGrid.innerHTML = "";
      return;
    }
    const matches = PRODUCTS.filter(p => p.title.toLowerCase().includes(query));
    if (searchResultsGrid) {
      searchResultsGrid.innerHTML = matches.map(p => `
        <div class="search-res-item open-quickview" data-id="${p.id}" style="cursor:pointer;">
          <img src="${p.primaryImg}" style="width:100%; height:140px; object-fit:cover;" referrerpolicy="no-referrer">
          <p style="font-size:0.8rem; font-weight:700; margin-top:0.5rem; color:#fff;">${p.title}</p>
          <span style="font-size:0.75rem; color:var(--accent-copper);">${formatPrice(p.price)}</span>
        </div>
      `).join("");
      bindCardInteractions();
    }
  });

  document.querySelectorAll(".search-tag").forEach(tag => {
    tag.addEventListener("click", (e) => {
      const q = e.target.getAttribute("data-query");
      if (searchInput) {
        searchInput.value = q;
        searchInput.dispatchEvent(new Event("input"));
      }
    });
  });

  // Size Guide Modals
  document.querySelectorAll(".trigger-size-guide").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("sizeGuideModalOverlay")?.classList.add("open");
    });
  });
  document.getElementById("sizeGuideClose")?.addEventListener("click", () => {
    document.getElementById("sizeGuideModalOverlay")?.classList.remove("open");
  });

  // Promo Code
  document.getElementById("applyPromoBtn")?.addEventListener("click", () => {
    const code = document.getElementById("promoCodeInput").value.trim().toUpperCase();
    const msg = document.getElementById("promoMsg");
    if (code === "SEATTLE10") {
      activePromo = { type: "discount", val: 10 };
      if (msg) { msg.textContent = "✓ 'SEATTLE10' APPLIED ($10 OFF)"; msg.style.color = "var(--color-forest-green)"; }
    } else if (code === "WORLDWIDE") {
      activePromo = { type: "shipping", val: 0 };
      if (msg) { msg.textContent = "✓ 'WORLDWIDE' FREE SHIPPING UNLOCKED"; msg.style.color = "var(--color-forest-green)"; }
    } else {
      activePromo = null;
      if (msg) { msg.textContent = "Invalid code. Try 'SEATTLE10'"; msg.style.color = "var(--accent-copper)"; }
    }
    updateBadgesAndCart();
  });

  // Checkout modal
  const checkoutBtn = document.getElementById("checkoutBtn");
  const checkoutModal = document.getElementById("checkoutModalOverlay");
  const checkoutClose = document.getElementById("checkoutClose");
  const formStep = document.getElementById("checkoutFormStep");
  const successStep = document.getElementById("checkoutSuccessStep");
  const finishBtn = document.getElementById("finishCheckoutBtn");

  checkoutBtn?.addEventListener("click", () => {
    document.getElementById("cartOverlay")?.classList.remove("open");
    checkoutModal?.classList.add("open");
    formStep?.classList.remove("hidden");
    successStep?.classList.add("hidden");
  });

  checkoutClose?.addEventListener("click", () => checkoutModal?.classList.remove("open"));

  document.getElementById("expressCheckoutForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    formStep?.classList.add("hidden");
    successStep?.classList.remove("hidden");
    document.getElementById("receiptOrderNum").textContent = "FH-" + Math.floor(100000 + Math.random() * 900000);
    cart = [];
    saveCart();
    updateBadgesAndCart();
  });

  finishBtn?.addEventListener("click", () => {
    checkoutModal?.classList.remove("open");
  });
}

// --------------------------------------------------------------------------
// 12. QUICK VIEW MODAL LOGIC
// --------------------------------------------------------------------------
function openQuickviewModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const overlay = document.getElementById("quickviewModalOverlay");
  const closeBtn = document.getElementById("quickviewClose");
  const mainImg = document.getElementById("qvMainImg");
  const thumbsRow = document.getElementById("qvThumbsRow");
  const title = document.getElementById("qvTitle");
  const price = document.getElementById("qvPrice");
  const desc = document.getElementById("qvDescription");
  const fabric = document.getElementById("qvFabricVal");
  const category = document.getElementById("qvCategory");

  if (mainImg) mainImg.src = product.primaryImg;
  if (title) title.textContent = product.title;
  if (price) price.textContent = `${formatPrice(product.price)} ${currentCurrency}`;
  if (desc) desc.textContent = product.description;
  if (fabric) fabric.textContent = product.fabric;
  if (category) category.textContent = `${product.category} • SEATTLE ATELIER`;

  // Thumbs
  if (thumbsRow) {
    thumbsRow.innerHTML = product.thumbs.map((t, idx) => `
      <img src="${t}" class="qv-thumb ${idx === 0 ? "active" : ""}" data-src="${t}" referrerpolicy="no-referrer">
    `).join("");

    thumbsRow.querySelectorAll(".qv-thumb").forEach(thumb => {
      thumb.addEventListener("click", (e) => {
        thumbsRow.querySelectorAll(".qv-thumb").forEach(t => t.classList.remove("active"));
        e.target.classList.add("active");
        mainImg.src = e.target.getAttribute("data-src");
      });
    });
  }

  // Size selections
  let selectedSize = "M";
  document.querySelectorAll(".size-box").forEach(box => {
    box.onclick = (e) => {
      document.querySelectorAll(".size-box").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      selectedSize = e.target.getAttribute("data-size");
      document.getElementById("qvSelectedSizeText").textContent = selectedSize;
    };
  });

  // Qty selection
  let qty = 1;
  const qtyVal = document.getElementById("qvQtyVal");
  document.getElementById("qvQtyMinus").onclick = () => {
    if (qty > 1) { qty--; qtyVal.textContent = qty; }
  };
  document.getElementById("qvQtyPlus").onclick = () => {
    qty++; qtyVal.textContent = qty;
  };

  // Add to Bag from modal
  const addBtn = document.getElementById("qvAddToCartBtn");
  if (addBtn) {
    addBtn.onclick = () => {
      addToCart(product.id, selectedSize, product.color, qty);
      overlay?.classList.remove("open");
      showToast(`Added ${qty}x ${product.title} (${selectedSize}) to bag`);
    };
  }

  overlay?.classList.add("open");
  closeBtn.onclick = () => overlay?.classList.remove("open");
}

// --------------------------------------------------------------------------
// 13. CART & WISHLIST PERSISTENCE ENGINE
// --------------------------------------------------------------------------
function addToCart(productId, size, color, qty = 1) {
  const existing = cart.find(i => i.id === productId && i.size === size && i.color === color);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, size: size, color: color, qty: qty });
  }
  saveCart();
  updateBadgesAndCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateBadgesAndCart();
}

function updateCartQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  updateBadgesAndCart();
}

function saveCart() {
  localStorage.setItem("farhang_cart", JSON.stringify(cart));
}

function toggleWishlist(productId) {
  const idx = wishlist.findIndex(item => item.id === productId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast("Removed from Wishlist");
  } else {
    wishlist.push({ id: productId });
    showToast("Added to Saved Looks Wishlist");
  }
  localStorage.setItem("farhang_wishlist", JSON.stringify(wishlist));
  updateBadgesAndCart();
  renderEssentialsGrid();
  renderMainShopGrid();
}

function updateBadgesAndCart() {
  const cartBadge = document.getElementById("cartBadge");
  const wishlistBadge = document.getElementById("wishlistBadge");
  const cartHeaderCount = document.getElementById("cartHeaderCount");
  const wishlistHeaderCount = document.getElementById("wishlistHeaderCount");

  const totalQty = cart.reduce((acc, i) => acc + i.qty, 0);
  if (cartBadge) cartBadge.textContent = totalQty;
  if (cartHeaderCount) cartHeaderCount.textContent = totalQty;

  if (wishlistBadge) wishlistBadge.textContent = wishlist.length;
  if (wishlistHeaderCount) wishlistHeaderCount.textContent = wishlist.length;

  renderCartDrawerItems();
  renderWishlistDrawerItems();
}

function renderCartDrawerItems() {
  const container = document.getElementById("cartItemsContainer");
  const subtotalEl = document.getElementById("cartSubtotal");
  const totalEl = document.getElementById("cartTotal");
  const progressText = document.getElementById("shippingProgressText");
  const progressBar = document.getElementById("shippingProgressBar");
  const checkoutBtn = document.getElementById("checkoutBtn");

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `<p style="text-align:center; padding:3rem 0; color:var(--color-stone);">Your shopping bag is empty.</p>`;
    if (subtotalEl) subtotalEl.textContent = formatPrice(0);
    if (totalEl) totalEl.textContent = formatPrice(0);
    if (progressBar) progressBar.style.width = "0%";
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;

  let rawSubtotalUSD = 0;

  container.innerHTML = cart.map((item, index) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return "";
    rawSubtotalUSD += product.price * item.qty;

    return `
      <div class="cart-item">
        <img src="${product.primaryImg}" alt="${product.title}" class="cart-item-thumb" referrerpolicy="no-referrer">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${product.title}</h4>
          <div class="cart-item-meta">Size: ${item.size} • Color: ${item.color}</div>
          <div class="cart-item-bottom">
            <div class="qty-control">
              <button class="qty-btn" onclick="updateCartQty(${index}, -1)">-</button>
              <span class="qty-num">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartQty(${index}, 1)">+</button>
            </div>
            <span style="font-weight:700;">${formatPrice(product.price * item.qty)}</span>
            <button onclick="removeFromCart(${index})" style="font-size:0.75rem; color:var(--accent-copper); cursor:pointer;">&times; Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Shipping Progress towards $300 USD threshold
  const threshold = 300;
  const remaining = Math.max(0, threshold - rawSubtotalUSD);
  const pct = Math.min(100, (rawSubtotalUSD / threshold) * 100);

  if (progressBar) progressBar.style.width = `${pct}%`;
  if (progressText) {
    if (remaining === 0 || (activePromo && activePromo.type === "shipping")) {
      progressText.textContent = "✓ YOU QUALIFY FOR FREE WORLDWIDE EXPRESS SHIPPING!";
      progressText.style.color = "var(--color-forest-green)";
    } else {
      progressText.textContent = `Add ${formatPrice(remaining)} more for Free Worldwide Express Shipping!`;
      progressText.style.color = "var(--color-charcoal)";
    }
  }

  let finalSubtotal = rawSubtotalUSD;
  if (activePromo && activePromo.type === "discount") {
    finalSubtotal = Math.max(0, finalSubtotal - activePromo.val);
  }

  if (subtotalEl) subtotalEl.textContent = formatPrice(finalSubtotal);
  if (totalEl) totalEl.textContent = formatPrice(finalSubtotal);

  // Update checkout modal totals text
  const coItemText = document.getElementById("coItemCountText");
  const coTotalText = document.getElementById("coFinalTotalText");
  if (coItemText) coItemText.textContent = `${totalQty} Items`;
  if (coTotalText) coTotalText.textContent = formatPrice(finalSubtotal);
}

function renderWishlistDrawerItems() {
  const container = document.getElementById("wishlistItemsContainer");
  if (!container) return;

  if (wishlist.length === 0) {
    container.innerHTML = `<p style="text-align:center; padding:3rem 0; color:var(--color-stone);">No saved editorial looks yet.</p>`;
    return;
  }

  container.innerHTML = wishlist.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return "";

    return `
      <div class="cart-item">
        <img src="${product.primaryImg}" alt="${product.title}" class="cart-item-thumb" referrerpolicy="no-referrer">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${product.title}</h4>
          <div class="cart-item-meta">${product.category} • ${product.color}</div>
          <div style="margin-top:0.5rem; display:flex; gap:0.5rem;">
            <button class="btn btn-sm btn-primary" onclick="addToCart(${product.id}, 'M', '${product.color}', 1); toggleWishlist(${product.id});">Move to Bag</button>
            <button class="btn btn-sm btn-secondary" onclick="toggleWishlist(${product.id})">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// --------------------------------------------------------------------------
// 14. DIGITAL VIP PASS GENERATOR
// --------------------------------------------------------------------------
function initVipPassGenerator() {
  const form = document.getElementById("newsletterForm");
  const nameInput = document.getElementById("vipNameInput");
  const cardName = document.getElementById("vipCardName");

  nameInput?.addEventListener("input", (e) => {
    if (cardName) {
      cardName.textContent = e.target.value.toUpperCase() || "YOUR NAME HERE";
    }
  });

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("VIP Atelier Pass Generated & Emailed!");
  });
}

// --------------------------------------------------------------------------
// 15. SEATTLE RAIN AUDIO AMBIENCE ENGINE
// --------------------------------------------------------------------------
function initAudioAmbience() {
  const btn = document.getElementById("audioToggleBtn");
  const audio = document.getElementById("rainAudio");
  const label = document.getElementById("audioLabel");

  if (!btn || !audio) return;
  let isPlaying = false;

  btn.addEventListener("click", () => {
    if (!isPlaying) {
      audio.play().then(() => {
        isPlaying = true;
        label.textContent = "SEATTLE AMBIENCE: PLAYING";
        btn.classList.add("playing");
      }).catch(err => {
        console.warn("Audio playback error:", err);
      });
    } else {
      audio.pause();
      isPlaying = false;
      label.textContent = "SEATTLE AMBIENCE: OFF";
      btn.classList.remove("playing");
    }
  });
}

// --------------------------------------------------------------------------
// 16. TOAST NOTIFICATION UTILITY
// --------------------------------------------------------------------------
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(30px)";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
