// ============================================================
// ASTRA BLOG - COMPLETE SCRIPT WITH LIVE VIEWS
// ============================================================

(function() {
    'use strict';

    // ============================================================
    // ARTICLES DATA
    // ============================================================

    const articles = [
        {
            id: 1,
            title: 'OTP Scam Alert: How Cyber Criminals Are Emptying Bank Accounts',
            excerpt: 'Cyber criminals are using new tactics to steal OTP and empty bank accounts. Learn how to protect yourself.',
            category: 'Scam Alert',
            type: 'scam',
            date: 'July 15, 2026',
            readTime: '8 min read',
            views: '2.5K',
            image: 'assets/article-1.jpg',
            slug: 'otp-scam-alert',
            popular: true
        },
        {
            id: 2,
            title: 'Phone Security Tips: 10 Ways to Keep Your Smartphone Safe (2026 Guide)',
            excerpt: 'Your phone contains all your personal data. Learn 10 essential tips to keep your device secure from hackers.',
            category: 'Cyber Security',
            type: 'cyber',
            date: 'July 13, 2026',
            readTime: '8 min read',
            views: '1.8K',
            image: 'assets/article-2.jpg',
            slug: 'phone-security-tips',
            popular: true
        },
        {
            id: 3,
            title: "China's Exports Surge 27% as AI Boom Fuels Global Demand",
            excerpt: 'China\'s exports surge 27% in 2026 driven by AI boom. Apple sues OpenAI, Singapore court orders Bloomberg to pay defamation damages.',
            category: 'Technology',
            type: 'tech',
            date: 'July 15, 2026',
            readTime: '6 min read',
            views: '4.2K',
            image: 'assets/article-3.jpg',
            slug: 'ai-boom-china-exports-2026',
            popular: true
        },
        {
            id: 4,
            title: 'Scam Calls: How to Identify and What to Do',
            excerpt: 'Fraud calls are becoming common. Learn how to identify scam calls and what to do if you receive one.',
            category: 'Scam Alert',
            type: 'scam',
            date: 'July 10, 2026',
            readTime: '5 min read',
            views: '4.1K',
            image: 'assets/article-4.jpg',
            slug: 'scam-calls-awareness',
            popular: true
        },
        {
            id: 5,
            title: "Cricket Live Score & Match Thrills: IPL 2026, India Matches & More",
            excerpt: 'Cricket is not just a sport in India, it\'s an emotion. Get live cricket scores, IPL 2026 updates, match predictions, and thrilling moments.',
            category: 'Sports',
            type: 'sports',
            date: 'July 18, 2026',
            readTime: '7 min read',
            views: '8.5K',
            image: 'assets/cricket-1.jpg',
            slug: 'cricket-live-score-thrills-2026',
            popular: true
        },
        {
            id: 6,
            title: 'Technology in Cricket: AI, Sensors & IoT Revolutionizing the Game (2026)',
            excerpt: 'Discover how AI, IoT sensors, and advanced technology are transforming cricket - from AI umpiring to sensor-embedded bats.',
            category: 'Sports',
            type: 'tech',
            date: 'July 18, 2026',
            readTime: '8 min read',
            views: '3.2K',
            image: 'assets/cricket-tech-1.jpg',
            slug: 'technology-in-cricket-2026',
            popular: true
        },
        {
            id: 7,
            title: "सोनम वांगचुक: जलवायु कार्यकर्ता की भूख हड़ताल और अस्पताल में भर्ती",
            excerpt: 'जलवायु कार्यकर्ता सोनम वांगचुक को भूख हड़ताल के 21वें दिन दिल्ली पुलिस द्वारा सफदरजंग अस्पताल में भर्ती कराया गया। जानें पूरी खबर।',
            category: 'News',
            type: 'news',
            date: 'July 18, 2026',
            readTime: '6 min read',
            views: '12.8K',
            image: 'assets/sonam-wangchuk.jpg',
            slug: 'sonam-wangchuk-hunger-strike',
            popular: true
        },
        {
            id: 8,
            title: "India's Digital Payment Scams: UPI, OTP & Phishing Scams to Watch in 2026",
            excerpt: 'Complete guide to India\'s digital payment scams: UPI fraud, OTP scams, phishing attacks, and how to protect your money in 2026.',
            category: 'Scam Alert',
            type: 'scam',
            date: 'July 19, 2026',
            readTime: '8 min read',
            views: '0',
            image: 'assets/digital-payment-scam.jpg',
            slug: 'digital-payment-scams-india-2026',
            popular: true
        },
        {
            id: 9,
            title: 'AI Trends 2026: What\'s New in Artificial Intelligence',
            excerpt: 'Discover the latest AI trends in 2026 and how they are shaping the future of technology.',
            category: 'Technology',
            type: 'tech',
            date: 'June 30, 2026',
            readTime: '7 min read',
            views: '1.9K',
            image: 'assets/article-1.jpg',
            slug: 'ai-trends-2026',
            popular: false
        },
        {
            id: 10,
            title: 'Two-Factor Authentication: What It Is and Why You Need It',
            excerpt: 'Two-Factor Authentication adds an extra layer of security. Learn what it is and how to set it up.',
            category: 'Guides',
            type: 'guide',
            date: 'June 28, 2026',
            readTime: '6 min read',
            views: '2.8K',
            image: 'assets/article-2.jpg',
            slug: '2fa-guide',
            popular: false
        }
    ];

    // ============================================================
    // DOM REFERENCES
    // ============================================================

    const articlesGrid = document.getElementById('articlesGrid');
    const searchInput = document.getElementById('blogSearch');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const categoryTags = document.querySelectorAll('.cat-tag');

    // ============================================================
    // STATE
    // ============================================================

    let currentFilter = 'all';
    let currentCategory = 'all';
    let visibleCount = 6;
    const postsPerPage = 3;

    // ============================================================
    // VIEWS COUNTER FUNCTION
    // ============================================================

    function getPageId() {
        const path = window.location.pathname;
        return path.replace(/\/$/, '') || '/';
    }

    function formatNumber(num) {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num;
    }

    function updateViewCount() {
        try {
            const pageId = getPageId();
            const storageKey = 'astra_blog_views';

            let viewsData = {};
            try {
                viewsData = JSON.parse(localStorage.getItem(storageKey)) || {};
            } catch (e) {
                viewsData = {};
            }

            // Only count unique visitors
            const sessionKey = 'astra_session_' + pageId;
            if (!sessionStorage.getItem(sessionKey)) {
                viewsData[pageId] = (viewsData[pageId] || 0) + 1;
                sessionStorage.setItem(sessionKey, 'true');
            }

            localStorage.setItem(storageKey, JSON.stringify(viewsData));

            // Update all view count elements on the page
            document.querySelectorAll('.view-count-display').forEach(el => {
                const count = viewsData[pageId] || 0;
                el.textContent = formatNumber(count);
            });

        } catch (error) {
            console.log('View counter error:', error);
        }
    }

    // ============================================================
    // RENDER ARTICLES
    // ============================================================

    function renderArticles(filteredArticles) {
        if (!articlesGrid) return;

        let items = filteredArticles || articles;

        if (currentCategory !== 'all') {
            const categoryMap = {
                'tech': 'Technology',
                'cyber': 'Cyber Security',
                'scam': 'Scam Alert',
                'digital': 'Digital Safety',
                'guide': 'Guides'
            };
            items = items.filter(a => a.category === categoryMap[currentCategory]);
        }

        if (currentFilter !== 'all') {
            items = items.filter(a => a.type === currentFilter);
        }

        const displayItems = items.slice(0, visibleCount);

        requestAnimationFrame(() => {
            const fragment = document.createDocumentFragment();

            displayItems.forEach(article => {
                const articleEl = document.createElement('article');
                articleEl.className = 'article-card';
                articleEl.setAttribute('onclick', `window.location.href='${article.slug}/'`);

                // Get real view count from localStorage if available
                let viewDisplay = article.views;
                try {
                    const pageId = '/' + article.slug;
                    const viewsData = JSON.parse(localStorage.getItem('astra_blog_views')) || {};
                    if (viewsData[pageId]) {
                        viewDisplay = formatNumber(viewsData[pageId]);
                    }
                } catch (e) {}

                articleEl.innerHTML = `
                    <div class="card-image-wrap">
                        <img class="card-image" src="${article.image}" alt="${article.title}" loading="lazy" onerror="this.src='../assets/og-image.jpg'">
                    </div>
                    <div class="card-content">
                        <span class="card-category">${article.category}</span>
                        <h3 class="card-title">${article.title}</h3>
                        <p class="card-excerpt">${article.excerpt}</p>
                        <div class="card-meta">
                            <span><i class="fa-regular fa-calendar"></i> ${article.date}</span>
                            <span><i class="fa-regular fa-clock"></i> ${article.readTime}</span>
                            <span><i class="fa-regular fa-eye"></i> <span class="view-count-display">${viewDisplay}</span></span>
                        </div>
                        <a href="${article.slug}/" class="read-more">
                            Read More <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                `;

                fragment.appendChild(articleEl);
            });

            articlesGrid.innerHTML = '';
            articlesGrid.appendChild(fragment);

            // Update view counts after rendering
            updateViewCount();

            if (items.length > visibleCount) {
                loadMoreBtn.style.display = 'inline-flex';
            } else {
                loadMoreBtn.style.display = 'none';
            }
        });
    }

    // ============================================================
    // FILTER FUNCTIONS
    // ============================================================

    function filterByType(type) {
        currentFilter = type;
        filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === type);
        });
        visibleCount = 6;
        renderArticles();
        loadMoreBtn.innerHTML = `<i class="fa-solid fa-rotate"></i> Load More`;
    }

    function filterByCategory(category) {
        currentCategory = category;
        categoryTags.forEach(tag => {
            tag.classList.toggle('active', tag.dataset.category === category);
        });
        visibleCount = 6;
        renderArticles();
        loadMoreBtn.innerHTML = `<i class="fa-solid fa-rotate"></i> Load More`;
    }

    // ============================================================
    // LOAD MORE
    // ============================================================

    loadMoreBtn.addEventListener('click', function() {
        visibleCount += postsPerPage;
        renderArticles();
        const totalItems = getFilteredCount();
        if (totalItems <= visibleCount) {
            this.style.display = 'none';
        }
    });

    function getFilteredCount() {
        let items = articles;
        if (currentCategory !== 'all') {
            const categoryMap = {
                'tech': 'Technology',
                'cyber': 'Cyber Security',
                'scam': 'Scam Alert',
                'digital': 'Digital Safety',
                'guide': 'Guides'
            };
            items = items.filter(a => a.category === categoryMap[currentCategory]);
        }
        if (currentFilter !== 'all') {
            items = items.filter(a => a.type === currentFilter);
        }
        return items.length;
    }

    // ============================================================
    // SEARCH
    // ============================================================

    function initSearch() {
        if (!searchInput) return;
        let searchTimeout;

        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const query = this.value.toLowerCase().trim();
                if (query === '') {
                    renderArticles();
                    return;
                }
                const filtered = articles.filter(a =>
                    a.title.toLowerCase().includes(query) ||
                    a.excerpt.toLowerCase().includes(query) ||
                    a.category.toLowerCase().includes(query)
                );
                visibleCount = 6;
                renderArticles(filtered);
                loadMoreBtn.innerHTML = `<i class="fa-solid fa-rotate"></i> Load More`;
            }, 250);
        });
    }

    // ============================================================
    // NEWSLETTER
    // ============================================================

    function initNewsletter() {
        const form = document.getElementById('newsletterForm');
        const email = document.getElementById('newsletterEmail');
        const message = document.getElementById('newsletterMessage');

        if (!form || !email || !message) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const value = email.value.trim();

            if (!value) {
                message.textContent = 'Please enter your email address.';
                message.style.color = '#ef4444';
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                message.textContent = 'Please enter a valid email address.';
                message.style.color = '#ef4444';
                return;
            }

            message.textContent = '✅ Thank you for subscribing! Check your email for confirmation.';
            message.style.color = '#22c55e';
            email.value = '';

            setTimeout(() => {
                message.textContent = '';
            }, 5000);
        });
    }

    // ============================================================
    // INIT
    // ============================================================

    document.addEventListener('DOMContentLoaded', function() {
        renderArticles();

        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                filterByType(this.dataset.filter);
            });
        });

        categoryTags.forEach(tag => {
            tag.addEventListener('click', function(e) {
                e.preventDefault();
                const category = this.dataset.category;
                if (category === currentCategory) {
                    currentCategory = 'all';
                    categoryTags.forEach(t => t.classList.remove('active'));
                } else {
                    filterByCategory(category);
                }
                renderArticles();
            });
        });

        initSearch();
        initNewsletter();

        const yearSpan = document.getElementById('year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }

        // Update views every 60 seconds for live feel
        setInterval(updateViewCount, 60000);
    });

})();