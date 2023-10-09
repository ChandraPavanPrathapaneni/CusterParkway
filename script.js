document.addEventListener("DOMContentLoaded", function () {
    const scrollableGallery = document.querySelector(".scroll-content");
    const images = document.querySelectorAll(".scroll-content img");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    let currentIndex = 0;
    const cardCount = images.length;
    const cardWidth = images[0].clientWidth + 108; // Adjust for card width and gap

    nextButton.addEventListener("click", function () {
        currentIndex++;
        if (currentIndex >= cardCount) {
            currentIndex = 0;
        }
        updateGalleryPosition();
    });

    prevButton.addEventListener("click", function () {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = cardCount - 1;
        }
        updateGalleryPosition();
    });

    function updateGalleryPosition() {
        let offset = currentIndex * cardWidth;

        scrollableGallery.style.transform = `translateX(-${offset}px)`;
    }

    // Initially, set the gallery position to the first image
    updateGalleryPosition();
});
