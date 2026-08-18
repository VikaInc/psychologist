const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});




nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('is-open');
        nav.classList.remove('is-open');
    });
});

const track = document.getElementById('benefitsTrack');
const dots = document.querySelectorAll('.benefits__dot');

if (track) {
    track.addEventListener('scroll', () => {
        const cardWidth = track.children[0].offsetWidth + 20; // 20 — это gap
        const index = Math.round(track.scrollLeft / cardWidth);
        dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
    });
}

document.querySelectorAll('.faq-item__question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('is-open');

        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('is-open'));

        if (!isOpen) {
            item.classList.add('is-open');
        }
    });
});

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));


const headerEl = document.getElementById('header');

if (headerEl) {
    window.addEventListener('scroll', () => {
        headerEl.classList.toggle('is-scrolled', window.scrollY > 10);
    });
}