
/* GABY'S CAR WASH - WEBSITE INTERACTIONS */

/* 1. SPECIAL OFFER BUTTON */
const offerButtons = document.querySelectorAll(".special-offer button");

offerButtons.forEach((button) => {
    button.addEventListener("click", () => {
        navigator.clipboard.writeText("GABY25!")
            .then(() => {
                button.textContent = "Code Copied: GABY25!";
            })
            .catch(() => {
                alert("Your discount code is GABY25");
            });
    });
});





/* GALLERY LIGHTBOX */

const galleryPhotos = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("galleryLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");

const closeButton = document.getElementById("lightboxClose");
const prevButton = document.getElementById("lightboxPrev");
const nextButton = document.getElementById("lightboxNext");

let currentPhoto = 0;

function showPhoto(index) {
    currentPhoto = (index + galleryPhotos.length) % galleryPhotos.length;

    const photo = galleryPhotos[currentPhoto];

    lightboxImage.src = photo.src;
    lightboxImage.alt = photo.alt;

    const caption = photo.closest(".gallery-item").querySelector("p");

    lightboxCaption.textContent = caption
        ? caption.textContent
        : photo.alt;

    lightbox.style.display = "flex";
}

galleryPhotos.forEach((photo, index) => {
    photo.style.cursor = "pointer";

    photo.addEventListener("click", () => {
        showPhoto(index);
    });
});

closeButton.addEventListener("click", () => {
    lightbox.style.display = "none";
});

prevButton.addEventListener("click", () => {
    showPhoto(currentPhoto - 1);
});

nextButton.addEventListener("click", () => {
    showPhoto(currentPhoto + 1);
});

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});

/* Keyboard controls */
document.addEventListener("keydown", (event) => {
    if (lightbox.style.display !== "flex") return;

    if (event.key === "Escape") {
        lightbox.style.display = "none";
    }

    if (event.key === "ArrowLeft") {
        showPhoto(currentPhoto - 1);
    }

    if (event.key === "ArrowRight") {
        showPhoto(currentPhoto + 1);
    }
});





const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});