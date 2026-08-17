/* MOBILE NAVIGATION*/

const menuToggle =
    document.getElementById("menuToggle");

const navbar =
    document.getElementById("navbar");


menuToggle.addEventListener("click", function () {

    navbar.classList.toggle("open");

});



/* CLOSE MOBILE MENU AFTER CLICKING LINK */

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("open");

    });

});



/*  ACTIVE NAVIGATION*/

const pageSections =
    document.querySelectorAll("main section");


window.addEventListener("scroll", function () {

    let currentSection = "";


    pageSections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 160;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});



/*BACK TO TOP */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/*NEWS MODAL */

const newsModal =
    document.getElementById("newsModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const modalClose =
    document.getElementById("modalClose");


function showNews(title, text) {

    modalTitle.textContent = title;

    modalText.textContent = text;

    newsModal.classList.add("show");

    document.body.classList.add("modal-open");

}


modalClose.addEventListener("click", function () {

    newsModal.classList.remove("show");

    document.body.classList.remove("modal-open");

});


newsModal.addEventListener("click", function (event) {

    if (event.target === newsModal) {

        newsModal.classList.remove("show");

        document.body.classList.remove("modal-open");

    }

});



/* GALLERY LIGHTBOX */

const galleryImages =
    document.querySelectorAll(
        ".gallery-item img"
    );


const lightbox =
    document.getElementById("lightbox");


const lightboxImage =
    document.getElementById("lightboxImage");


const lightboxClose =
    document.getElementById("lightboxClose");


galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        lightboxImage.src =
            image.src;

        lightboxImage.alt =
            image.alt;

        lightbox.classList.add("show");

        document.body.classList.add("modal-open");

    });

});


lightboxClose.addEventListener("click", function () {

    lightbox.classList.remove("show");

    document.body.classList.remove("modal-open");

});


lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("show");

        document.body.classList.remove("modal-open");

    }

});



/*ESCAPE KEY */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        newsModal.classList.remove("show");

        lightbox.classList.remove("show");

        document.body.classList.remove("modal-open");

    }

});



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");


const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const email =
            document
                .getElementById("email")
                .value
                .trim();


        const subject =
            document
                .getElementById("subject")
                .value
                .trim();


        const message =
            document
                .getElementById("message")
                .value
                .trim();


        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            formMessage.textContent =
                "Please complete all fields.";

            formMessage.style.color =
                "#b91c1c";

            return;

        }


        formMessage.textContent =
            "Thank you, " +
            name +
            ". Your message has been received.";


        formMessage.style.color =
            "#166534";


        contactForm.reset();

    }
);



/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const animatedElements =
    document.querySelectorAll(
        ".feature-card, " +
        ".academic-card, " +
        ".news-card, " +
        ".activity-card, " +
        ".gallery-item"
    );


const animationObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (
                    entry.isIntersecting
                ) {

                    entry.target
                        .classList
                        .add("visible");

                    animationObserver
                        .unobserve(
                            entry.target
                        );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


animatedElements.forEach(function (element) {

    animationObserver.observe(element);

});



/* =====================================================
   AUTOMATIC COPYRIGHT YEAR
===================================================== */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();
