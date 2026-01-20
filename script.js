// Data extracted from The MileLion's Credit Card Guide
const guideData = [
    {
        category: "Local General Spending",
        items: [
            { card: "Amaze + Citi Rewards", earn: "4 mpd", remarks: "1% admin fee (min. S$0.50) applies. Max S$1K per s. month, excludes travel and mobile wallet" },
            { card: "StanChart Beyond Card", earn: "Up to 2 mpd", remarks: "Regular: 1.5 mpd, PB & PP: 2 mpd" },
            { card: "HSBC Premier Mastercard", earn: "1.68 mpd", remarks: "" },
            { card: "Citi ULTIMA Card", earn: "1.6 mpd", remarks: "" },
            { card: "DBS Insignia Card", earn: "1.6 mpd", remarks: "" },
            { card: "UOB Reserve Card", earn: "1.6 mpd", remarks: "" },
            { card: "OCBC VOYAGE Card", earn: "1.6 mpd", remarks: "(Premier, PPC, BOS)" },
            { card: "DBS Vantage Card", earn: "1.5 mpd", remarks: "" },
            { card: "BOC Elite Miles Card", earn: "1.4 mpd", remarks: "" },
            { card: "UOB Visa Infinite Metal Card", earn: "1.4 mpd", remarks: "" },
            { card: "UOB PRVI Miles (AMEX | Mastercard | Visa)", earn: "1.4 mpd", remarks: "" },
            { card: "StanChart Visa Infinite", earn: "1.4 mpd", remarks: "Min S$2K total spend per s. month, otherwise 1 mpd" }
        ]
    },
    {
        category: "Foreign Currency Spending",
        items: [
            { card: "DCS Imperium Card", earn: "4 mpd", remarks: "Min. S$4K FCY spend per c. month" },
            { card: "Amaze + Citi Rewards", earn: "4 mpd", remarks: "Max S$1K per s. month, excludes travel and mobile wallet" },
            { card: "Maybank XL Card", earn: "4 mpd", remarks: "Min. S$500, max S$1K per c. month" },
            { card: "UOB Visa Signature", earn: "4 mpd", remarks: "Min S$1K, max S$1.2K FCY spend per s. month" },
            { card: "StanChart Beyond Card", earn: "Up to 4 mpd", remarks: "Regular: 3 mpd, PB: 3.5 mpd, PP: 4 mpd" },
            { card: "Maybank Visa Infinite", earn: "3.2 mpd", remarks: "Min S$4K spend per c. month, otherwise 2 mpd" }
        ]
    },
    {
        category: "Air Tickets",
        items: [
            { card: "DBS Woman's World Card", earn: "4 mpd", remarks: "Max S$1K per c. month" },
            { card: "HSBC Revolution Card", earn: "4 mpd", remarks: "Max S$1.5K per c. month. Ends 28 Feb 26" },
            { card: "Maybank XL Card", earn: "4 mpd", remarks: "Min. S$500, max S$1K per c. month" },
            { card: "UOB Lady's Card & Lady's Solitaire", earn: "4 mpd", remarks: "Max S$1K (Lady's) / S$750 (Solitaire) per c. month. Travel must be bonus category" },
            { card: "UOB PRVI Miles", earn: "3 mpd", remarks: "For selected airline bookings on Expedia" },
            { card: "KrisFlyer UOB Credit Card", earn: "3 mpd", remarks: "SIA & Scoot only" }
        ]
    },
    {
        category: "Dining",
        items: [
            { card: "StanChart Smart Card", earn: "9.28 mpd", remarks: "Min S$1.5K spend (7.42 mpd with min S$800). Selected fast food only" },
            { card: "HSBC Revolution Card", earn: "4 mpd", remarks: "Max S$1.5K per c. month. Ends 28 Feb 26" },
            { card: "Maybank XL Card", earn: "4 mpd", remarks: "Min. S$500, max S$1K per c. month" },
            { card: "UOB Lady's Card & Solitaire", earn: "4 mpd", remarks: "Dining must be chosen as bonus category" },
            { card: "KrisFlyer UOB Credit Card", earn: "2.4 mpd", remarks: "Min S$1K spend on SIA Group transactions" }
        ]
    },
    {
        category: "Public Transportation",
        items: [
            { card: "DBS yuu Card", earn: "10 mpd", remarks: "Min. S$800, max S$822 per c. month" },
            { card: "StanChart Smart Card", earn: "9.28 mpd", remarks: "Min S$1.5K spend (7.42 mpd with min S$800)" },
            { card: "UOB Preferred Platinum Visa", earn: "4 mpd", remarks: "Cap S$600 per c. month" },
            { card: "UOB Visa Signature", earn: "4 mpd", remarks: "Min S$1K, max S$1.2K per s. month" },
            { card: "UOB Lady\'s Card & Solitaire", earn: "4 mpd", remarks: "Transport must be chosen as bonus category" }
        ]
    },
    {
        category: "Online Transactions",
        items: [
            { card: "OCBC Rewards Card", earn: "6 mpd", remarks: "For Shopee, Lazada, TikTok Shop, Taobao (Cap S$1K). Others 4 mpd." },
            { card: "Citi Rewards Card", earn: "4 mpd", remarks: "Cap S$1K per s. month, excludes travel" },
            { card: "DBS Woman's World Card", earn: "4 mpd", remarks: "Cap S$1K per c. month" },
            { card: "HSBC Revolution Card", earn: "4 mpd", remarks: "Cap S$1.5K per c. month. Ends 28 Feb 26" },
            { card: "UOB Preferred Platinum Visa", earn: "4 mpd", remarks: "Cap S$600 per c. month" }
        ]
    },
    {
        category: "PayWave/Mobile",
        items: [
            { card: "UOB Preferred Platinum Visa", earn: "4 mpd", remarks: "Limit S$600 per c. month. Mobile payments only." },
            { card: "UOB Visa Signature", earn: "4 mpd", remarks: "Min S$1K, max S$1.2K per s. month" }
        ]
    },
    {
        category: "Groceries",
        items: [
            { card: "DBS yuu Card", earn: "10 mpd", remarks: "Cold Storage/Giant. Min S$800/M" },
            { card: "UOB Lady's Card & Solitaire", earn: "4 mpd", remarks: "Family must be bonus category" },
            { card: "StanChart Journey Card", earn: "3 mpd", remarks: "Cap S$1K, online in SGD" }
        ]
    },
    {
        category: "Hotels",
        items: [
            { card: "Citi PremierMiles Card", earn: "10 mpd", remarks: "Kaligo (10mpd), Agoda (7.2mpd)" },
            { card: "UOB PRVI Miles", earn: "8 mpd", remarks: "Agoda and Expedia" },
            { card: "HSBC Revolution Card", earn: "4 mpd", remarks: "Max S$1.5K. Ends 28/2/26" },
            { card: "UOB Lady's Card & Solitaire", earn: "4 mpd", remarks: "Travel must be bonus category" },
            { card: "DBS Woman's World Card", earn: "4 mpd", remarks: "Online only. Cap S$1K" }
        ]
    }
];

// DOM Elements
const categoryList = document.getElementById('categoryList');
const contentArea = document.getElementById('contentArea');
const searchInput = document.getElementById('searchInput');
const cardModal = document.getElementById('cardModal');
const modalBody = document.getElementById('modalBody');
const closeModalBtn = document.querySelector('.close-modal');
const heroSection = document.querySelector('.hero-section');

// Initialize
// Initialize
let myWallet = JSON.parse(localStorage.getItem('myWallet')) || [];
let walletViewMode = 'card'; // 'card' or 'category'

function init() {
    renderNavigation();
    renderContent(guideData);
    setupEventListeners();
}

// Render Navigation Sidebar
function renderNavigation() {
    categoryList.innerHTML = '';

    // Add "My Wallet" link
    const walletLi = document.createElement('li');
    const walletA = document.createElement('a');
    walletA.href = "#my-wallet";
    walletA.className = 'nav-link';
    walletA.innerHTML = '💳 My Wallet';
    walletA.onclick = (e) => {
        e.preventDefault();
        showWallet();
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        walletA.classList.add('active');
    };
    walletLi.appendChild(walletA);
    categoryList.appendChild(walletLi);

    guideData.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${slugify(item.category)}`;
        a.className = 'nav-link';
        a.textContent = item.category;
        a.onclick = (e) => {
            e.preventDefault();
            // If we are effectively in "Wallet Mode" (because contentArea shows wallet), we need to re-render main content
            // We can check this by seeing if the wallet link is active
            const walletLink = document.querySelector('a[href="#my-wallet"]');

            // Re-render main content if we are in wallet view or if filtering is weird
            // Simplest way: always re-render default content unless we know we are just scrolling
            // BUT, if we re-render, we lose scroll position potentially.
            // Let's check if the target section actually exists in DOM.
            const targetSection = document.getElementById(slugify(item.category));

            if (!targetSection) {
                // We are likely in Wallet mode where sections are gone.
                // Render full content again.
                searchInput.value = ''; // clear search if any (optional)
                renderContent(guideData);
                // Now find it again
                setTimeout(() => {
                    const newTarget = document.getElementById(slugify(item.category));
                    if (newTarget) newTarget.scrollIntoView({ behavior: 'smooth' });
                }, 0);
            } else {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }

            // Update active state
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            a.classList.add('active');
        };
        li.appendChild(a);
        categoryList.appendChild(li);
    });
}

// Render Main Content
function renderContent(data) {
    heroSection.style.display = 'block'; // Show hero in guide view
    contentArea.innerHTML = '';

    if (data.length === 0) {
        contentArea.innerHTML = '<div style="text-align:center; padding: 2rem; color: var(--text-secondary);">No results found.</div>';
        return;
    }

    data.forEach(category => {
        const section = document.createElement('div');
        section.className = 'category-section';
        section.id = slugify(category.category);

        const header = document.createElement('div');
        header.className = 'category-header';
        header.innerHTML = `<h3>${category.category}</h3>`;

        const grid = document.createElement('div');
        grid.className = 'cards-grid';

        category.items.forEach(item => {
            const card = document.createElement('article');
            card.className = 'card-item';
            card.style.cursor = 'pointer';

            const isInWallet = myWallet.includes(item.card);

            card.innerHTML = `
                <div class="card-header-flex">
                    <div class="card-name" style="margin-bottom:0">${item.card}</div>
                    <button class="wallet-btn ${isInWallet ? 'active' : ''}" title="${isInWallet ? 'Remove from Wallet' : 'Add to Wallet'}" onclick="event.stopPropagation(); toggleWallet('${item.card.replace(/'/g, "\\'")}')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="${isInWallet ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/>
                            <path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/>
                            <path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z"/>
                        </svg>
                    </button>
                </div>
                <div class="earn-rate">${item.earn}</div>
                <div class="remarks">${item.remarks || 'No specific attributes'}</div>
            `;
            card.onclick = () => openModal(item.card);
            grid.appendChild(card);
        });

        section.appendChild(header);
        section.appendChild(grid);
        contentArea.appendChild(section);
    });
}

// Search Functionality
function setupEventListeners() {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        const filteredData = guideData.map(category => {
            // Filter items within category
            const filteredItems = category.items.filter(item =>
                item.card.toLowerCase().includes(query) ||
                item.remarks.toLowerCase().includes(query)
            );

            // Or return category if category name matches or it has items
            if (category.category.toLowerCase().includes(query) || filteredItems.length > 0) {
                return {
                    category: category.category,
                    items: filteredItems.length > 0 ? filteredItems : category.items
                };
            }
            return null;
        }).filter(item => item !== null);

        renderContent(filteredData);
    });
}

// Helper: Slugify string
function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

// Modal Logic
function openModal(cardName) {
    const allStats = [];

    // Aggregate stats across all categories
    guideData.forEach(category => {
        category.items.forEach(item => {
            if (item.card === cardName) {
                allStats.push({
                    category: category.category,
                    earn: item.earn,
                    remarks: item.remarks
                });
            }
        });
    });

    // Render Modal Content
    modalBody.innerHTML = `
        <div class="modal-card-title">${cardName}</div>
        <table class="modal-table">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Earn Rate</th>
                    <th>Remarks</th>
                </tr>
            </thead>
            <tbody>
                ${allStats.map(stat => `
                    <tr>
                        <td>${stat.category}</td>
                        <td style="color: var(--accent-teal); font-weight: 700;">${stat.earn}</td>
                        <td style="color: var(--text-secondary); font-size: 0.9em;">${stat.remarks || '-'}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    cardModal.classList.remove('hidden');
}

// Close Modal
closeModalBtn.onclick = () => {
    cardModal.classList.add('hidden');
};

cardModal.onclick = (e) => {
    if (e.target === cardModal) {
        cardModal.classList.add('hidden');
    }
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !cardModal.classList.contains('hidden')) {
        cardModal.classList.add('hidden');
    }
});

// Wallet Logic
function toggleWallet(cardName) {
    if (myWallet.includes(cardName)) {
        myWallet = myWallet.filter(c => c !== cardName);
    } else {
        myWallet.push(cardName);
    }
    localStorage.setItem('myWallet', JSON.stringify(myWallet));

    // Re-render based on current view
    // Ideally we know if we are in "Wallet View" or "Main View".
    // For simplicity, just re-render current state logic or reload simple view.
    // Let's just update the UI state live without full re-render for smoothness?
    // Actually, full re-render is safer to keep consistent state everywhere.
    // Check if we are currently viewing wallet
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink && activeLink.textContent.includes('My Wallet')) {
        showWallet();
    } else {
        // Find current search or scroll position... complex. 
        // Simplest: just re-render everything.
        // Or better, just update all buttons with this cardName.
        updateWalletButtons(cardName);
    }
}

function updateWalletButtons(cardName) {
    const isInWallet = myWallet.includes(cardName);
    // Find all buttons for this card
    // Since we don't have unique IDs per card element easily, we search DOM texts or re-render.
    // Let's just re-render the content area to be safe.
    // But wait, if we have a search query active?
    // Let's trigger the search input event manually to re-filter!
    const event = new Event('input');
    searchInput.dispatchEvent(event);
}

function showWallet() {
    heroSection.style.display = 'none'; // Hide hero in wallet view
    contentArea.innerHTML = '';

    const walletHeader = document.createElement('div');
    walletHeader.className = 'category-header';
    walletHeader.style.flexDirection = 'column';
    walletHeader.style.alignItems = 'flex-start';

    walletHeader.innerHTML = `
        <div style="width:100%; display:flex; justify-content:space-between; align-items:center;">
            <div>
                <h3>My Wallet</h3>
                <p style="color:var(--text-secondary)">Your cards benefits.</p>
            </div>
            <div class="wallet-controls">
                <button class="view-toggle-btn ${walletViewMode === 'card' ? 'active' : ''}" onclick="setWalletView('card')">By Card</button>
                <button class="view-toggle-btn ${walletViewMode === 'category' ? 'active' : ''}" onclick="setWalletView('category')">By Category</button>
            </div>
        </div>
    `;
    contentArea.appendChild(walletHeader);

    if (myWallet.length === 0) {
        contentArea.innerHTML += `
            <div style="text-align:center; padding: 3rem;">
                <h3 style="margin-bottom:1rem">Your wallet is empty</h3>
                <p style="color:var(--text-secondary)">Browse the guide and click the wallet icon to add cards.</p>
                <button onclick="document.querySelector('.nav-link').click()" style="margin-top:1rem; padding:0.5rem 1rem; background:var(--accent-teal); border:none; border-radius:8px; cursor:pointer; font-weight:600; color:var(--bg-dark)">Browse Cards</button>
            </div>
        `;
        return;
    }

    const walletContainer = document.createElement('div');
    walletContainer.className = 'wallet-container';

    myWallet.forEach(cardName => {
        // Find stats for this card
        const cardStats = [];
        guideData.forEach(category => {
            const item = category.items.find(i => i.card === cardName);
            if (item) {
                cardStats.push({
                    category: category.category,
                    earn: item.earn,
                    remarks: item.remarks
                });
            }
        });

        // Build Element
        const cardEl = document.createElement('article');
        cardEl.className = 'wallet-card';

        cardEl.innerHTML = `
            <div class="wallet-card-header">
                <div class="wallet-card-title">${cardName}</div>
                <button class="wallet-btn active" title="Remove from Wallet" onclick="toggleWallet('${cardName}')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/>
                        <path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/>
                        <path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z"/>
                    </svg>
                </button>
            </div>
            <table class="wallet-stats-table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Earn</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    ${cardStats.map(stat => `
                        <tr>
                            <td>${stat.category}</td>
                            <td class="earn-col">${stat.earn}</td>
                            <td style="color: var(--text-secondary); font-size: 0.9em;">${stat.remarks || '-'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;

        walletContainer.appendChild(cardEl);
    });



    if (walletViewMode === 'card') {
        contentArea.appendChild(walletContainer);
    } else {
        // Render by Category
        const categoryContainer = document.createElement('div');
        categoryContainer.className = 'wallet-container'; // Reuse container style or not? 
        // Actually, reusing .category-section style is better for consistency?
        // But let's build custom sections

        // Find categories that have my cards
        const filledCategories = [];
        guideData.forEach(category => {
            const myCards = category.items.filter(item => myWallet.includes(item.card));
            if (myCards.length > 0) {
                filledCategories.push({
                    category: category.category,
                    items: myCards
                });
            }
        });

        filledCategories.forEach(cat => {
            const section = document.createElement('div');
            section.className = 'category-section';
            section.style.marginBottom = '2rem';

            const header = document.createElement('div');
            header.className = 'category-header';
            header.style.marginBottom = '1rem';
            header.innerHTML = `<h3>${cat.category}</h3>`;

            const grid = document.createElement('div');
            grid.className = 'cards-grid';

            cat.items.forEach(item => {
                const card = document.createElement('article');
                card.className = 'card-item';
                card.style.cursor = 'pointer';
                const isInWallet = true; // Always true here

                card.innerHTML = `
                    <div class="card-header-flex">
                        <div class="card-name" style="margin-bottom:0">${item.card}</div>
                        <button class="wallet-btn active" title="Remove from Wallet" onclick="event.stopPropagation(); toggleWallet('${item.card.replace(/'/g, "\\'")}')">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/>
                                <path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/>
                                <path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z"/>
                            </svg>
                        </button>
                    </div>
                    <div class="earn-rate">${item.earn}</div>
                    <div class="remarks">${item.remarks || 'No specific attributes'}</div>
                `;
                card.onclick = () => openModal(item.card);
                grid.appendChild(card);
            });

            section.appendChild(header);
            section.appendChild(grid);
            categoryContainer.appendChild(section);
        });

        contentArea.appendChild(categoryContainer);
    }

    // Render Recommendations
    const recommendations = getRecommendations();
    if (recommendations.length > 0) {
        const recSection = document.createElement('div');
        recSection.className = 'recommendations-area';

        recSection.innerHTML = `
            <div class="recommendations-header">
                <h3>Recommended for You</h3>
                <p style="color:var(--text-secondary)">Based on missing categories in your wallet.</p>
            </div>
            <div class="cards-grid">
                ${recommendations.map(rec => `
                    <article class="card-item rec-card" style="cursor:pointer" onclick="openModal('${rec.item.card.replace(/'/g, "\\'")}')">
                        <div class="rec-badge">Missing: ${rec.category}</div>
                        <div class="card-header-flex">
                             <div class="card-name" style="margin-bottom:0">${rec.item.card}</div>
                             <button class="wallet-btn" title="Add to Wallet" onclick="event.stopPropagation(); toggleWallet('${rec.item.card.replace(/'/g, "\\'")}')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/>
                                    <path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/>
                                    <path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z"/>
                                </svg>
                            </button>
                        </div>
                        <div class="earn-rate" style="color:var(--accent-gold)">${rec.item.earn}</div>
                        <div class="remarks">${rec.item.remarks || ''}</div>
                    </article>
                `).join('')}
            </div>
        `;
        contentArea.appendChild(recSection);
    }
}

function getRecommendations() {
    const missingCategories = [];

    // 1. Identify Missing Categories
    guideData.forEach(category => {
        // Check if any card in this category exists in myWallet
        const hasCard = category.items.some(item => myWallet.includes(item.card));
        if (!hasCard) {
            missingCategories.push(category);
        }
    });

    const recommendations = [];

    // 2. Find Best Card for each missing category
    missingCategories.forEach(category => {
        // Sort items by earn rate (heuristic)
        // We look for the highest number in the "earn" string.
        const sortedItems = [...category.items].sort((a, b) => {
            const rateA = parseEarnRate(a.earn);
            const rateB = parseEarnRate(b.earn);
            return rateB - rateA;
        });

        // Take top 1
        if (sortedItems.length > 0) {
            // Avoid duplicate card recommendations if already recommended for another category?
            // For now, let's allow repeats as it shows versatility, OR strictly filter unique.
            // Let's filter unique card names in the final list.
            recommendations.push({
                category: category.category,
                item: sortedItems[0]
            });
        }
    });

    // Filter out duplicates (keep first occurrence)
    const uniqueRecs = [];
    const seenCards = new Set();
    recommendations.forEach(rec => {
        if (!seenCards.has(rec.item.card)) {
            uniqueRecs.push(rec);
            seenCards.add(rec.item.card);
        }
    });

    return uniqueRecs;
}

function parseEarnRate(earnStr) {
    // Extract first floating point number
    const match = earnStr.match(/(\d+(\.\d+)?)/);
    return match ? parseFloat(match[0]) : 0;
}

function setWalletView(mode) {
    walletViewMode = mode;
    showWallet();
}

// Run
init();
