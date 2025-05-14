if (window.location.hash) {
    history.replaceState(null, null, ' ');
}

// Forza lo scroll all'inizio
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// SCROLL SMOOTH SCRIPT 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop;
            window.scrollTo({
                top: offsetTop, // adatta il valore
                behavior: 'smooth'
            });
        }
    });
});

// per i titoli
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('showSection');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.hiddenSection').forEach(section => {
    observer.observe(section);
});

const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('showImg');
            imgObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.6
});

document.querySelectorAll('.hiddenImg').forEach(img => {
    imgObserver.observe(img);
});

const contentObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('showFromLeft');
            contentObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.8
});

document.querySelectorAll('.hiddenFromLeft').forEach(elem => {
    contentObserver.observe(elem);
});

const containerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('showContainer');
            containerObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

document.querySelectorAll('.hiddenContainer').forEach(elem => {
    containerObserver.observe(elem);
});