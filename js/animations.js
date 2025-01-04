export function setupScrollAnimations() {
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const windowHeight = window.innerHeight;
            const scroll = window.scrollY;

            if (scroll > sectionTop - windowHeight + sectionHeight / 3) {
                section.style.opacity = '1';
            }
        });
    });
}