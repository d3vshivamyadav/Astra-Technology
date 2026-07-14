// ============================================================
// ASTRA BLOG - PREMIUM JAVASCRIPT
// ============================================================

(function() {
    'use strict';

    // ============================================================
    // ARTICLES DATA (9:16 Image Ready)
    // ============================================================

    const articles = [
        {
            id: 1,
            title: 'नया ऑनलाइन स्कैम: OTP मांगने वालों से सावधान',
            excerpt: 'Cyber criminals are using new tactics to steal OTP and empty bank accounts. Learn how to protect yourself.',
            category: 'Scam Alert',
            type: 'scam',
            date: 'July 15, 2026',
            readTime: '5 min read',
            views: '2.5K',
            image: 'assets/article-1.jpg',
            slug: 'otp-scam-alert',
            popular: true
        },
        {
            id: 2,
            title: 'साइबर सुरक्षा: अपने फोन को कैसे करें सुरक्षित',
            excerpt: 'Your phone contains all your personal data. Learn simple tips to keep your device secure from hackers.',
            category: 'Cyber Security',
            type: 'cyber',
            date: 'July 13, 2026',
            readTime: '6 min read',
            views: '1.8K',
            image: 'assets/article-2.jpg',
            slug: 'phone-security-tips',
            popular: true
        },
        {
            id: 3,
            title: 'फर्जी वेबसाइट से कैसे बचें? पहचानें और सावधान रहें',
            excerpt: 'Fake websites can steal your personal information. Learn how to identify and avoid them.',
            category: 'Digital Safety',
            type: 'digital',
            date: 'July 11, 2026',
            readTime: '4 min read',
            views: '3.2K',
            image: 'assets/article-3.jpg',
            slug: 'fake-website-identification',
            popular: false
        },
        {
            id: 4,
            title: 'स्कैम कॉल्स: कैसे पहचानें और क्या करें',
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
            title: 'डिजिटल पहचान: अपनी ऑनलाइन आईडी को कैसे सुरक्षित रखें',
            excerpt: 'Digital identity theft is common. Learn how to protect your online identity from being compromised.',
            category: 'Digital Safety',
            type: 'digital',
            date: 'July 8, 2026',
            readTime: '7 min read',
            views: '1.2K',
            image: 'assets/article-5.jpg',
            slug: 'digital-identity-protection',
            popular: false
        },
        {
            id: 6,
            title: 'टेक्नोलॉजी: AI का उपयोग साइबर सुरक्षा में कैसे हो रहा है',
            excerpt: 'Artificial Intelligence is now being used in cybersecurity. Learn how AI is helping protect you online.',
            category: 'Technology',
            type: 'tech',
            date: 'July 6, 2026',
            readTime: '6 min read',
            views: '2.3K',
            image: 'assets/article-6.jpg',
            slug: 'ai-in-cybersecurity',
            popular: false
        },
        {
            id: 7,
            title: 'गाइड: मजबूत पासवर्ड कैसे बनाएं और क्यों जरूरी है',
            excerpt: 'Weak passwords can compromise your security. Learn how to create strong passwords and why it matters.',
            category: 'Guides',
            type: 'guide',
            date: 'July 4, 2026',
            readTime: '4 min read',
            views: '3.5K',
            image: 'assets/article-7.jpg',
            slug: 'strong-password-guide',
            popular: true
        },
        {
            id: 8,
            title: 'फिशिंग ईमेल: पहचानें और बचें इस स्कैम से',
            excerpt: 'Phishing emails are a common way to steal information. Learn how to identify and avoid them.',
            category: 'Scam Alert',
            type: 'scam',
            date: 'July 2, 2026',
            readTime: '5 min read',
            views: '5.6K',
            image: 'assets/article-8.jpg',
            slug: 'phishing-email-scam',
            popular: true
        },
        {
            id: 9,
            title: 'टेक्नोलॉजी: 2026 में AI के नए ट्रेंड्स',
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
            title: 'गाइड: टू-फैक्टर ऑथेंटिकेशन क्या है और क्यों जरूरी है',
            excerpt: 'Two-Factor Authentication adds an extra layer of security. Learn what it is and how to set it up.',
            category: 'Guides',
            type: 'guide',
            date: 'June 28, 2026',
            readTime: '6 min read',
            views: '2.8K',
            image: 'assets/article-2.jpg',
            slug: '2fa-guide',
            popular: false
        },
        {
            id: 11,
            title: 'साइबर सुरक्षा: VPN क्यों जरूरी है और कैसे चुनें',
            excerpt: 'VPN protects your online privacy. Learn why you need a VPN and how to choose the right one.',
            category: 'Cyber Security',
            type: 'cyber',
            date: 'June 25, 2026',
            readTime: '5 min read',
            views: '3.7K',
            image: 'assets/article-3.jpg',
            slug: 'vpn-importance-guide',
            popular: false
        },
        {
            id: 12,
            title: 'डिजिटल सुरक्षा: सोशल मीडिया पर प्राइवेसी कैसे बनाए रखें',
            excerpt: 'Your social media privacy is important. Learn how to keep your personal information safe on social media.',
            category: 'Digital Safety',
            type: 'digital',
            date: 'June 23, 2026',
            readTime: '6 min read',
            views: '4.2K',
            image: 'assets/article-4.jpg',
            slug: 'social-media-privacy',
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

        // Use requestAnimationFrame for smooth rendering
        requestAnimationFrame(() => {
            const fragment = document.createDocumentFragment();

            displayItems.forEach(article => {
                const articleEl = document.createElement('article');
                articleEl.className = 'article-card';
                articleEl.setAttribute('onclick', `window.location.href='${article.slug}.html'`);

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
                            <span><i class="fa-regular fa-eye"></i> ${article.views}</span>
                        </div>
                        <a href="${article.slug}.html" class="read-more">
                            Read More <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                `;

                fragment.appendChild(articleEl);
            });

            articlesGrid.innerHTML = '';
            articlesGrid.appendChild(fragment);

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
    });

})();