function setupAutoHorizontalScroll() {
    const scrollContainer = document.getElementById("shoot1-details");
    const items = scrollContainer.querySelectorAll(".photo");
    const itemWidth = items[0].offsetWidth; // Get the width of one item
    let currentIndex = 0; // Track the current visible element
    let autoScrollInterval; // Store interval reference
    let isUserInteracting = false;
  
    function scrollToNextElement() {
        // Scroll to the next item
        scrollContainer.scrollTo({
            left: itemWidth * currentIndex,
            behavior: "smooth",
        });
  
        // Increment the index or reset if at the end
        currentIndex++;
        if (currentIndex >= items.length) {
            // Reset to the beginning after a short delay
            setTimeout(() => {
                scrollContainer.scrollTo({
                    left: 0,
                    behavior: "smooth",
                });
                currentIndex = 0;
            }, 500); // Pause for a moment before resetting
        }
    }
  
    function startAutoScroll() {
        autoScrollInterval = setInterval(scrollToNextElement, 1000); // Adjust time (2 seconds per scroll)
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
  
            // Resume auto-scroll after 3 seconds
            setTimeout(() => {
                isUserInteracting = false;
                startAutoScroll();
            }, 1500);
        }
    });
  }
  
  // Initialize on DOM load
  document.addEventListener("DOMContentLoaded", () => {
    setupAutoHorizontalScroll();
  });
  