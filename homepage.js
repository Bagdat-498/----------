// homepage.js
function selectRole(role) {
  localStorage.setItem("role", role);
  window.location.href = "/signin.html";
}
function fakeLogin(role) {
    localStorage.setItem("role", role);

    if (role === "Учитель") {
        window.location.href = "teacher.html";
    } else if (role === "Ученик") {
        window.location.href = "student.html";
    }
}
document.addEventListener('DOMContentLoaded', () => {

    // Плавный скролл
    document.documentElement.style.scrollBehavior = 'smooth';

    // Анимация появления при скролле
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }, i * 100);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.role-card, .feature-card, .step-card, .for-card').forEach(card => {
        card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)';
        card.style.opacity = 0;
        card.style.transform = 'translateY(60px)';
        observer.observe(card);
    });

    // ====================== SIDEBAR ======================
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    window.toggleSidebar = function() {
        if (sidebar.classList.contains('active')) {
            sidebar.style.right = '-100%';
            overlay.style.opacity = '0';
            setTimeout(() => {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            }, 500);
        } else {
            sidebar.classList.add('active');
            overlay.classList.add('active');
            setTimeout(() => {
                sidebar.style.right = '0';
                overlay.style.opacity = '1';
            }, 10);
        }
    };

    // Закрытие по Escape
    document.addEventListener('keydown', e => {
        if (e.key === "Escape") toggleSidebar();
    });

    console.log('%cAqbobek Lyceum — анимации загружены ✅', 'color:#06b6d4; font-weight:600');
});