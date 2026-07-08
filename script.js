// ===============================
// Astra Technology Projects
// ===============================

const projects = [
  {
    title: "Astra AI Tools",
    description: "Free AI tools for students, developers and creators.",
    logo: "assets/images/ai-tools.png",
    url: "/ai-tools/",  // ✅ Changed to local path
    status: "LIVE",
    statusClass: "status-live"
  },
  {
    title: "Astra QR Generator",
    description: "Create beautiful QR Codes instantly with customization.",
    logo: "assets/images/qr-generator.png",
    url: "/qr-generator/",  // ✅ Updated to local path
    status: "LIVE",
    statusClass: "status-live"
  },
  {
    title: "Astra PDF Tools",
    description: "Merge, Split and Compress PDF files.",
    logo: "assets/images/pdf-tools.png",
    url: "https://example.com",
    status: "COMING SOON",
    statusClass: "status-coming"
  }
];

// ===============================
// Create Cards
// ===============================

const cards = document.getElementById("cards");

function createCards(list) {
    cards.innerHTML = "";

    if (list.length === 0) {
        cards.innerHTML = `
            <div class="card" style="grid-column: 1 / -1; text-align: center; padding: 40px; align-items: center;">
                <i class="fa-solid fa-search" style="font-size: 32px; color: #94a3b8; margin-bottom: 12px;"></i>
                <h3 style="color: #475569;">No projects found</h3>
                <p style="color: #94a3b8;">Try adjusting your search terms</p>
            </div>
        `;
        return;
    }

    list.forEach(project => {
        const card = document.createElement("div");
        card.className = "card";
        
        card.innerHTML = `
            <img class="card-logo" src="${project.logo}" alt="${project.title} Logo" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2256%22 height=%2256%22%3E%3Crect width=%2256%22 height=%2256%22 fill=%22%23f0f4ff%22/%3E%3Ctext x=%2228%22 y=%2236%22 font-size=%2220%22 text-anchor=%22middle%22 fill=%22%233b82f6%22 font-family=%22Arial%22%3E${project.title.charAt(0)}%3C/text%3E%3C/svg%3E'">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <span class="status-badge ${project.statusClass}">${project.status}</span>
            <a class="open-btn" href="${project.url}" target="_blank">
                Open Website <i class="fa-solid fa-arrow-right"></i>
            </a>
        `;
        
        cards.appendChild(card);
    });
}

// ===============================
// Initialize - Wait for DOM to load
// ===============================

document.addEventListener("DOMContentLoaded", function() {
    // Create initial cards
    createCards(projects);
    
    // Setup search
    const search = document.getElementById("search");
    
    if (search) {
        search.addEventListener("keyup", function () {
            const value = this.value.toLowerCase().trim();
            
            if (value === "") {
                createCards(projects);
                return;
            }

            const filtered = projects.filter(project =>
                project.title.toLowerCase().includes(value) ||
                project.description.toLowerCase().includes(value)
            );

            createCards(filtered);
        });
    }
    
    // Footer Year
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// ===============================
// Scroll to Top Function
// ===============================

function scrollToTop(event) {
    if (event) event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}