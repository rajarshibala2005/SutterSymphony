function setupAutoHorizontalScroll() {
    const scrollContainers = document.querySelectorAll(".scroll-container"); // Select multiple elements

    scrollContainers.forEach((scrollContainer) => {
        const items = scrollContainer.querySelectorAll(".photo");
        if (items.length === 0) return; // Skip if no items

        const itemWidth = items[0].offsetWidth; // Get the width of one item
        let currentIndex = 0; // Track the current visible element
        let autoScrollInterval; // Store interval reference
        let isUserInteracting = false;

        function scrollToNextElement() {
            scrollContainer.scrollTo({
                left: itemWidth * currentIndex,
                behavior: "smooth",
            });

            // Increment the index or reset if at the end
            currentIndex++;
            if (currentIndex >= items.length) {
                setTimeout(() => {
                    scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
                    currentIndex = 0;
                }, 500); // Pause for a moment before resetting
            }
        }

        function startAutoScroll() {
            autoScrollInterval = setInterval(scrollToNextElement, 1000);
        }

        function stopAutoScroll() {
            clearInterval(autoScrollInterval);
        }

        // Start auto-scroll initially
        startAutoScroll();

        // Stop auto-scroll on user interaction
        scrollContainer.addEventListener("scroll", () => {
            if (!isUserInteracting) {
                isUserInteracting = true;
                stopAutoScroll();

                // Resume auto-scroll after 1.5 seconds
                setTimeout(() => {
                    isUserInteracting = false;
                    startAutoScroll();
                }, 1500);
            }
        });
    });
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", setupAutoHorizontalScroll);
