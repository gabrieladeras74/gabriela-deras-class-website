
/* GABY'S CAR WASH - WEBSITE INTERACTIONS */

/* 1. SPECIAL OFFER BUTTON */
const offerButtons = document.querySelectorAll(".special-offer button");

offerButtons.forEach((button) => {
    button.addEventListener("click", () => {
        navigator.clipboard.writeText("GABY25")
            .then(() => {
                button.textContent = "Code Copied: GABY25!";
            })
            .catch(() => {
                alert("Your discount code is GABY25");
            });
    });
});





/* GALLERY HOVER AND MINI IMAGE VIEW */

const galleryPhotos = document.querySelectorAll(".gallery-item img");

galleryPhotos.forEach((photo) => {
    photo.style.cursor = "pointer";

    photo.addEventListener("mouseenter", () => {
        photo.style.transform = "scale(1.05)";
        photo.style.transition = "transform 0.3s ease";
    });

    photo.addEventListener("mouseleave", () => {
        photo.style.transform = "scale(1)";
    });

    photo.addEventListener("click", () => {
        const preview = document.createElement("div");
        preview.className = "mini-image-view";

        const largeImage = document.createElement("img");
        largeImage.src = photo.src;
        largeImage.alt = photo.alt;

        const closeButton = document.createElement("button");
        closeButton.textContent = "×";
        closeButton.className = "mini-image-close";

        preview.appendChild(largeImage);
        preview.appendChild(closeButton);
        document.body.appendChild(preview);

        closeButton.addEventListener("click", () => {
            preview.remove();
        });

        preview.addEventListener("click", (event) => {
            if (event.target === preview) {
                preview.remove();
            }
        });
    });
});





/* 4. SERVICE PACKAGE BUTTONS */
const serviceButtons = document.querySelectorAll(".service-card button");

serviceButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const packageNames = ["Basic Wash", "Deluxe Wash", "Premium Wash"];

        alert("You selected: " + packageNames[index]);
    });
});

