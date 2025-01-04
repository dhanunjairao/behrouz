import { menuData } from './menuData.js';

export function renderMenu() {
    const menuSection = document.getElementById('menu');
    menuSection.innerHTML = `
        <h2>Our Menu</h2>
        ${Object.values(menuData).map(category => `
            <div class="menu-category">
                <h3 class="category-title">${category.title}</h3>
                <div class="menu-grid">
                    ${category.items.map(item => `
                        <div class="menu-item">
                            <img src="${item.image}" alt="${item.name}">
                            <h3>${item.name}</h3>
                            <p>${item.description}</p>
                            <span class="price">$${item.price}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('')}
    `;
}