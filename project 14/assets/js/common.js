document.addEventListener("DOMContentLoaded", function () {

    /* ================= HEADER ================= */
    fetch("common/header/header.html")
        .then(res => res.text())
        .then(html => {
            const headerWrapper = document.getElementById("header");
            if (!headerWrapper) return;

            headerWrapper.innerHTML = html;

            setActiveMenu();
            initHeaderScroll();
        });

    /* ================= FOOTER ================= */
    fetch("common/footer/footer.html")
        .then(res => res.text())
        .then(html => {
            const footer = document.getElementById("footer");
            if (!footer) return;

            footer.innerHTML = html;

            const yearEl = document.getElementById("footerYear");
            if (yearEl) yearEl.textContent = new Date().getFullYear();
        });
});

/* ================= ACTIVE MENU ================= */
function setActiveMenu() {
    const page = location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-link").forEach(link => {
        const href = link.getAttribute("href");
        if (href === page) {
            link.classList.add("active");
            link.parentElement.classList.add("active");
        }
    });
}

/* ================= NAVBAR SCROLL ================= */
function initHeaderScroll() {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.remove("sps--abv");
            navbar.classList.add("sps--blw");
        } else {
            navbar.classList.remove("sps--blw");
            navbar.classList.add("sps--abv");
        }
    });
}
