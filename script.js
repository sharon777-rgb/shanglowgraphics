
/* =====================================================
   SHANGLOW GRAPHICS
   2026 PREMIUM CREATIVE AGENCY JAVASCRIPT
   Responsive | Interactive | Animated
   ===================================================== */

"use strict";


/* =====================================================
   1. WEBSITE CONFIGURATION
   ===================================================== */

const SHANGLOW = {
    brand: "ShanGlow Graphics",

    // Replace with your real WhatsApp number.
    // Use international format without + or spaces.
    whatsapp: "2547XXXXXXXX",

    animationSpeed: 800
};


/* =====================================================
   2. SELECT ELEMENTS
   ===================================================== */

const header = document.querySelector("header");
const navigation = document.querySelector("nav");
const navigationLinks = document.querySelectorAll("nav ul a");

const sections = document.querySelectorAll(
    "main section[id]"
);

const portfolioItems = document.querySelectorAll(
    ".portfolio-item"
);

const serviceCards = document.querySelectorAll(
    ".service-card"
);

const contactForm = document.querySelector(
    ".contact form"
);


/* =====================================================
   3. INJECT ADDITIONAL STYLES
   For dynamically created JavaScript elements
   ===================================================== */

const dynamicStyles = document.createElement("style");

dynamicStyles.textContent = `

    .menu-toggle {
        display: none;
        background: #7028c7;
        color: white;
        border: none;
        padding: 10px 14px;
        border-radius: 10px;
        font-size: 22px;
        cursor: pointer;
        z-index: 1002;
    }

    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        width: 0%;
        background: linear-gradient(
            90deg, #7028c7, #c8a2f5
        );
        z-index: 2000;
        transition: width 0.1s linear;
    }

    .back-to-top {
        position: fixed;
        right: 25px;
        bottom: 25px;
        width: 48px;
        height: 48px;
        border: none;
        border-radius: 50%;
        background: linear-gradient(
            135deg, #35105f, #a66bea
        );
        color: white;
        font-size: 23px;
        cursor: pointer;
        z-index: 999;
        opacity: 0;
        visibility: hidden;
        transform: translateY(15px);
        transition: all .3s ease;
        box-shadow: 0 8px 25px rgba(53,16,95,.2);
    }

    .back-to-top.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    .scroll-reveal {
        opacity: 0;
        transform: translateY(35px);
        transition:
            opacity .8s ease,
            transform .8s ease;
    }

    .scroll-reveal.revealed {
        opacity: 1;
        transform: translateY(0);
    }

    .portfolio-filters {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 12px;
        margin: -25px 0 40px;
    }

    .filter-btn {
        border: 1px solid #d9c2f2;
        color: #7028c7;
        background: white;
        padding: 10px 22px;
        border-radius: 30px;
        cursor: pointer;
        font-weight: 600;
        transition: all .3s ease;
    }

    .filter-btn:hover,
    .filter-btn.active {
        background: #7028c7;
        color: white;
        border-color: #7028c7;
    }

    .portfolio-item {
        transition:
            opacity .35s ease,
            transform .35s ease;
    }

    .portfolio-item.filtered-out {
        display: none;
    }

    .form-status {
        padding: 14px;
        border-radius: 10px;
        margin-top: 12px;
        font-size: 14px;
        display: none;
    }

    .form-status.success {
        display: block;
        color: #166534;
        background: #dcfce7;
    }

    .form-status.error {
        display: block;
        color: #991b1b;
        background: #fee2e2;
    }

    .image-modal {
        position: fixed;
        inset: 0;
        z-index: 3000;
        background: rgba(20, 8, 35, .95);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px;
        opacity: 0;
        visibility: hidden;
        transition: .3s ease;
    }

    .image-modal.open {
        opacity: 1;
        visibility: visible;
    }

    .image-modal img {
        max-width: 90%;
        max-height: 85vh;
        object-fit: contain;
        border-radius: 12px;
    }

    .modal-close {
        position: absolute;
        top: 25px;
        right: 35px;
        color: white;
        font-size: 38px;
        background: none;
        border: none;
        cursor: pointer;
    }

    .menu-toggle:focus-visible,
    .filter-btn:focus-visible,
    .back-to-top:focus-visible {
        outline: 3px solid #c8a2f5;
        outline-offset: 4px;
    }

    @media(max-width: 700px) {

        .menu-toggle {
            display: block;
        }

        nav {
            justify-content: space-between !important;
        }

        nav ul {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            padding: 25px;
            display: none !important;
            flex-direction: column;
            align-items: center;
            box-shadow: 0 15px 25px rgba(0,0,0,.08);
            gap: 22px !important;
        }

        nav ul.open {
            display: flex !important;
        }

        nav ul li a {
            font-size: 15px !important;
        }

        .image-modal img {
            max-width: 100%;
        }

    }

    @media(prefers-reduced-motion: reduce) {

        .scroll-reveal {
            opacity: 1;
            transform: none;
            transition: none;
        }

        *,
        *::before,
        *::after {
            scroll-behavior: auto !important;
            animation: none !important;
            transition-duration: .01ms !important;
        }

    }

`;

document.head.appendChild(dynamicStyles);


/* =====================================================
   4. MOBILE HAMBURGER NAVIGATION
   ===================================================== */

if (navigation) {

    const menuButton = document.createElement("button");

    menuButton.className = "menu-toggle";
    menuButton.innerHTML = "☰";
    menuButton.setAttribute("aria-label", "Open navigation menu");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-controls", "main-menu");

    const menuList = navigation.querySelector("ul");

    if (menuList) {

        menuList.id = "main-menu";

        navigation.insertBefore(
            menuButton,
            menuList
        );

        function closeMenu() {

            menuList.classList.remove("open");

            menuButton.innerHTML = "☰";

            menuButton.setAttribute(
                "aria-expanded", "false"
            );

            menuButton.setAttribute(
                "aria-label", "Open navigation menu"
            );

        }

        menuButton.addEventListener("click", () => {

            const isOpen = menuList.classList.toggle("open");

            menuButton.innerHTML = isOpen ? "✕" : "☰";

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuButton.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

        });

        navigationLinks.forEach(link => {

            link.addEventListener("click", closeMenu);

        });

        document.addEventListener("click", event => {

            if (
                !navigation.contains(event.target) &&
                menuList.classList.contains("open")
            ) {
                closeMenu();
            }

        });

        window.addEventListener("resize", () => {

            if (window.innerWidth > 700) {
                closeMenu();
            }

        });

    }

}


/* =====================================================
   5. SCROLL PROGRESS BAR
   ===================================================== */

const progressBar = document.createElement("div");

progressBar.className = "scroll-progress";

document.body.appendChild(progressBar);

function updateScrollProgress() {

    const scrollableHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = scrollableHeight > 0
        ? (window.scrollY / scrollableHeight) * 100
        : 0;

    progressBar.style.width = `${progress}%`;

}


/* =====================================================
   6. BACK TO TOP BUTTON
   ===================================================== */

const backToTop = document.createElement("button");

backToTop.className = "back-to-top";
backToTop.innerHTML = "↑";

backToTop.setAttribute("aria-label", "Back to top");

document.body.appendChild(backToTop);

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================================
   7. SCROLL REVEAL ANIMATIONS
   ===================================================== */

const revealElements = document.querySelectorAll(`
    .hero-content,
    .hero-image,
    .about-content,
    .about-image,
    .service-card,
    .portfolio-item,
    .features article,
    .process-container article,
    .testimonials blockquote,
    .contact-details,
    .contact form,
    .section-heading
`);

const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if ("IntersectionObserver" in window && !reduceMotion) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    revealElements.forEach((element, index) => {

        element.classList.add("scroll-reveal");

        revealObserver.observe(element);

    });

}


/* =====================================================
   8. ACTIVE NAVIGATION HIGHLIGHT
   ===================================================== */

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentId = entry.target.id;

                    navigationLinks.forEach(link => {

                        const active =
                            link.getAttribute("href") ===
                            `#${currentId}`;

                        if (active) {
                            link.setAttribute(
                                "aria-current", "location"
                            );
                        } else {
                            link.removeAttribute(
                                "aria-current"
                            );
                        }

                    });

                }

            });

        },
        {
            rootMargin: "-30% 0px -60% 0px"
        }
    );

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

}


/* =====================================================
   9. PORTFOLIO FILTERING SYSTEM
   ===================================================== */

const portfolioSection = document.querySelector(
    "#portfolio"
);

if (portfolioSection && portfolioItems.length) {

    const portfolioGrid = portfolioSection.querySelector(
        ".portfolio-container"
    );

    if (portfolioGrid) {

        const filterContainer =
            document.createElement("div");

        filterContainer.className = "portfolio-filters";

        const categories = [
            "All",
            "Brand Identity",
            "Logo",
            "Poster",
            "Social Media",
            "Business",
            "Marketing"
        ];

        categories.forEach(category => {

            const button =
                document.createElement("button");

            button.className = "filter-btn";

            button.textContent = category;

            button.dataset.filter = category.toLowerCase();

            button.setAttribute(
                "aria-pressed",
                String(category === "All")
            );

            if (category === "All") {
                button.classList.add("active");
            }

            filterContainer.appendChild(button);

        });

        portfolioGrid.before(filterContainer);

        filterContainer.addEventListener(
            "click",
            event => {

                const button = event.target.closest(
                    ".filter-btn"
                );

                if (!button) return;

                const selected =
                    button.dataset.filter;

                filterContainer.querySelectorAll(
                    ".filter-btn"
                ).forEach(btn => {

                    const active = btn === button;

                    btn.classList.toggle(
                        "active", active
                    );

                    btn.setAttribute(
                        "aria-pressed",
                        String(active)
                    );

                });

                portfolioItems.forEach(item => {

                    const title = (
                        item.querySelector("h3")?.textContent || ""
                    ).toLowerCase();

                    let matches = selected === "all";

                    if (selected === "brand identity") {
                        matches = title.includes("brand");
                    }

                    if (selected === "logo") {
                        matches = title.includes("logo");
                    }

                    if (selected === "poster") {
                        matches = title.includes("poster");
                    }

                    if (selected === "social media") {
                        matches = title.includes("social");
                    }

                    if (selected === "business") {
                        matches =
                            title.includes("business") ||
                            title.includes("stationery");
                    }

                    if (selected === "marketing") {
                        matches = title.includes("marketing");
                    }

                    item.classList.toggle(
                        "filtered-out",
                        !matches
                    );

                });

            }
        );

    }

}


/* =====================================================
   10. PORTFOLIO IMAGE LIGHTBOX
   ===================================================== */

const modal = document.createElement("div");

modal.className = "image-modal";

modal.innerHTML = `
    <button class="modal-close"
            aria-label="Close image preview">
        &times;
    </button>
    <img src="" alt="Portfolio image preview">
`;

document.body.appendChild(modal);

const modalImage = modal.querySelector("img");

const modalClose = modal.querySelector(
    ".modal-close"
);

portfolioItems.forEach(item => {

    const image = item.querySelector("img");

    if (!image) return;

    image.style.cursor = "zoom-in";

    image.setAttribute("tabindex", "0");

    image.setAttribute(
        "aria-label",
        "Open larger portfolio image"
    );

    function openImage() {

        modalImage.src = image.src;

        modalImage.alt = image.alt;

        modal.classList.add("open");

        document.body.style.overflow = "hidden";

        modalClose.focus();

    }

    image.addEventListener("click", openImage);

    image.addEventListener("keydown", event => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {
            event.preventDefault();
            openImage();
        }

    });

});

function closeImage() {

    modal.classList.remove("open");

    document.body.style.overflow = "";

}

modalClose.addEventListener("click", closeImage);

modal.addEventListener("click", event => {

    if (event.target === modal) {
        closeImage();
    }

});

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeImage();
    }

});


/* =====================================================
   11. SERVICE CARD INTERACTIONS
   ===================================================== */

serviceCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =====================================================
   12. CONTACT FORM VALIDATION
   AND WHATSAPP INTEGRATION
   ===================================================== */

if (contactForm) {

    const statusMessage =
        document.createElement("div");

    statusMessage.className = "form-status";

    statusMessage.setAttribute("role", "status");

    statusMessage.setAttribute(
        "aria-live", "polite"
    );

    contactForm.appendChild(statusMessage);

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            statusMessage.className = "form-status";

            const name = contactForm.querySelector(
                '[name="name"]'
            ).value.trim();

            const email = contactForm.querySelector(
                '[name="email"]'
            ).value.trim();

            const service = contactForm.querySelector(
                '[name="service"]'
            ).value;

            const message = contactForm.querySelector(
                '[name="message"]'
            ).value.trim();

            if (!name || !email || !service || !message) {

                statusMessage.textContent =
                    "Please complete all the required fields.";

                statusMessage.classList.add("error");

                return;

            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                statusMessage.textContent =
                    "Please enter a valid email address.";

                statusMessage.classList.add("error");

                return;

            }

            if (message.length < 10) {

                statusMessage.textContent =
                    "Please provide more details about your project.";

                statusMessage.classList.add("error");

                return;

            }

            const whatsappMessage = `
Hello ShanGlow Graphics!

My name is: ${name}

My email: ${email}

Service required: ${service}

Project details:
${message}

I would like to discuss my design project.
            `;

            const phone = SHANGLOW.whatsapp;

            if (!/^2547\d{8}$/.test(phone)) {

                statusMessage.textContent =
                    "Your inquiry is ready. Please configure your real WhatsApp number in script.js to enable sending.";

                statusMessage.classList.add("error");

                return;

            }

            const whatsappURL =
                `https://wa.me/${phone}?text=${
                    encodeURIComponent(whatsappMessage)
                }`;

            statusMessage.textContent =
                "Your inquiry is ready. Opening WhatsApp...";

            statusMessage.classList.add("success");

            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}


/* =====================================================
   13. DYNAMIC FOOTER YEAR
   ===================================================== */

const footerText = document.querySelector(
    "footer .footer-content > p:last-child"
);

if (footerText) {

    footerText.innerHTML =
        `&copy; ${new Date().getFullYear()} ShanGlow Graphics. All Rights Reserved.`;

}


/* =====================================================
   14. SCROLL EVENT OPTIMIZATION
   ===================================================== */

let ticking = false;

window.addEventListener(
    "scroll",
    () => {

        if (!ticking) {

            window.requestAnimationFrame(() => {

                updateScrollProgress();

                backToTop.classList.toggle(
                    "visible",
                    window.scrollY > 450
                );

                ticking = false;

            });

            ticking = true;

        }

    },
    { passive: true }
);


/* =====================================================
   15. PAGE LOADING EFFECT
   ===================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

    updateScrollProgress();

});


/* =====================================================
   16. CONSOLE BRANDING
   ===================================================== */

console.log(
    "%c Welcome to ShanGlow Graphics! ",
    "background:#7028c7;color:white;font-size:18px;font-weight:bold;padding:12px;"
);

console.log(
    "Creativity That Makes Your Brand Shine."
);


