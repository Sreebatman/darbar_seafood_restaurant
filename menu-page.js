/* ============================================
   MENU PAGE - FILTER & INTERACTION LOGIC
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.menu-filter-btn');
    const categories = document.querySelectorAll('.menu-category');

    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const selectedCat = btn.dataset.category;

            categories.forEach(cat => {
                if (selectedCat === 'all') {
                    cat.classList.remove('hidden');
                    cat.style.animation = 'none';
                    cat.offsetHeight; // trigger reflow
                    cat.style.animation = 'fadeInUp 0.5s ease-out';
                } else if (cat.dataset.cat === selectedCat) {
                    cat.classList.remove('hidden');
                    cat.style.animation = 'none';
                    cat.offsetHeight;
                    cat.style.animation = 'fadeInUp 0.5s ease-out';
                } else {
                    cat.classList.add('hidden');
                }
            });

            // Scroll to the menu section smoothly
            const menuSection = document.getElementById('full-menu');
            if (menuSection) {
                const offset = menuSection.offsetTop + 80;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    });

    // Count items per category for display
    categories.forEach(cat => {
        const items = cat.querySelectorAll('.menu-item');
        const desc = cat.querySelector('.menu-cat-desc');
        if (desc && items.length > 0) {
            desc.textContent = desc.textContent + ` · ${items.length} items`;
        }
    });
});
