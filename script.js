

// Generate navigation menu
function generateNavigation(categories) {
  const navUl = document.querySelector('nav ul');
  navUl.innerHTML = '';

  categories.forEach(category => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${category.id}`;
    a.textContent = category.title;
    li.appendChild(a);
    navUl.appendChild(li);
  });
}

// Generate main content
function generateMainContent(categories) {
  const main = document.querySelector('main');
  main.innerHTML = '';
  console.log('Generating content for categories:', categories.length); // Debug log

  categories.forEach(category => {
    // Create category title
    const title = document.createElement('h2');
    title.className = 'category-title';
    title.id = category.id;
    title.textContent = category.title;
    main.appendChild(title);

    // Create link grid
    const section = document.createElement('section');
    section.className = 'link-grid';

    category.links.forEach((link, index) => {
      const card = document.createElement('div');
      card.className = 'link-card';
      card.style.animationDelay = `${index * 0.05}s`;

      card.innerHTML = `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer"></a>
        <i class="${link.icon}" aria-hidden="true"></i>
        <h3>${link.name}</h3>
      `;

      section.appendChild(card);
    });

    main.appendChild(section);
  });
}

// Search functionality
let allLinks = [];

function initializeSearch(categories) {
  // Flatten all links for search
  allLinks = categories.flatMap(category =>
    category.links.map(link => ({
      ...link,
      categoryId: category.id,
      categoryTitle: category.title
    }))
  );

  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');

  function performSearch() {
    const query = searchInput.value.toLowerCase().trim();

    if (query === '') {
      showAllCategories();
      return;
    }

    const filteredLinks = allLinks.filter(link =>
      link.name.toLowerCase().includes(query) ||
      link.url.toLowerCase().includes(query) ||
      link.categoryTitle.toLowerCase().includes(query)
    );

    displaySearchResults(filteredLinks, query);
  }

  searchInput.addEventListener('input', performSearch);
  searchBtn.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
}

function displaySearchResults(links, query) {
  const main = document.querySelector('main');
  main.innerHTML = '';

  if (links.length === 0) {
    main.innerHTML = `
      <div class="search-results">
        <h2 class="category-title">搜索结果</h2>
        <p style="text-align: center; color: #888; margin: 2rem 0;">
          没有找到包含 "${query}" 的网站
        </p>
      </div>
    `;
    return;
  }

  const title = document.createElement('h2');
  title.className = 'category-title';
  title.textContent = `搜索结果 (${links.length})`;
  main.appendChild(title);

  const section = document.createElement('section');
  section.className = 'link-grid';

  links.forEach((link, index) => {
    const card = document.createElement('div');
    card.className = 'link-card';
    card.style.animationDelay = `${index * 0.05}s`;

    card.innerHTML = `
      <a href="${link.url}" target="_blank" rel="noopener noreferrer"></a>
      <i class="${link.icon}" aria-hidden="true"></i>
      <h3>${link.name}</h3>
      <small style="color: #888; font-size: 0.7rem;">${link.categoryTitle}</small>
    `;

    section.appendChild(card);
  });

  main.appendChild(section);
}

function showAllCategories() {
  if (typeof navigationData !== 'undefined' && navigationData.categories) {
    generateMainContent(navigationData.categories);
  }
}

// Back to top functionality
function initializeBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');

  // Show/hide button based on scroll position
  function toggleBackToTopButton() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }

  // Smooth scroll to top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Event listeners
  window.addEventListener('scroll', toggleBackToTopButton);
  backToTopBtn.addEventListener('click', scrollToTop);

  // Initial check
  toggleBackToTopButton();
}

// Navigation and smooth scrolling functionality
document.addEventListener("DOMContentLoaded", function () {
  // Check if data is available
  if (typeof navigationData !== 'undefined' && navigationData.categories) {
    console.log('Data loaded successfully, generating content...');
    generateNavigation(navigationData.categories);
    generateMainContent(navigationData.categories);
    initializeSearch(navigationData.categories);
  } else {
    console.error('Navigation data not available');
    // Fallback: try to load after a short delay
    setTimeout(() => {
      if (typeof navigationData !== 'undefined' && navigationData.categories) {
        generateNavigation(navigationData.categories);
        generateMainContent(navigationData.categories);
        initializeSearch(navigationData.categories);
      }
    }, 100);
  }

  // Initialize features
  initializeBackToTop();

  const navLinks = document.querySelectorAll("nav a");

  // Initialize navigation
  initializeNavigation();
  
  // Add smooth scrolling to navigation links
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      
      // Remove active class from all links
      navLinks.forEach((l) => l.classList.remove("active"));
      
      // Add active class to clicked link
      this.classList.add("active");
      
      // Get target element
      const targetId = this.getAttribute("href").split("#")[1];
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Smooth scroll to target
        targetElement.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
        
        // Update URL without page reload
        const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}#${targetId}`;
        window.history.pushState({ path: newUrl }, "", newUrl);
      }
    });
  });

  // Handle hash changes (back/forward buttons)
  function handleHashChange() {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
        
        // Update active navigation link
        const activeLink = document.querySelector(`nav a[href="${hash}"]`);
        if (activeLink) {
          navLinks.forEach((l) => l.classList.remove("active"));
          activeLink.classList.add("active");
        }
      }
    }
  }

  // Initialize navigation state
  function initializeNavigation() {
    // Set first nav item as active if no hash
    if (!window.location.hash && navLinks.length > 0) {
      navLinks[0].classList.add("active");
    } else {
      handleHashChange();
    }
  }

  // Listen for hash changes
  window.addEventListener("hashchange", handleHashChange);
  
  // Add loading animation delay for cards
  const linkCards = document.querySelectorAll('.link-card');
  linkCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.05}s`;
  });
  
  // Add keyboard navigation support
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      // Ensure focus is visible for keyboard users
      document.body.classList.add('keyboard-navigation');
    }
  });
  
  document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
  });
});

// Performance optimization: Preload critical resources
function preloadCriticalResources() {
  // Preload Font Awesome CSS
  const fontAwesome = document.createElement('link');
  fontAwesome.rel = 'preload';
  fontAwesome.as = 'style';
  fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css';
  document.head.appendChild(fontAwesome);
}

// Call preload function
preloadCriticalResources();
