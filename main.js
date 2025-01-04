import { renderMenu } from './js/menu.js';
import { setupNavigation } from './js/navigation.js';
import { setupContactForm } from './js/contact.js';
import { setupScrollAnimations } from './js/animations.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    setupNavigation();
    setupContactForm();
    setupScrollAnimations();
});