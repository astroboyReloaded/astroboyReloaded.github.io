export default function closePopupGesture(projectWindow, closePopup) {
    let startX, startY;

    // Define the event handler functions
    function touchStart(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }

    function touchEnd(e) {
        var endX, endY;
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;

        // Calculate the distance moved
        var deltaX = endX - startX;
        var deltaY = endY - startY;

        // Check if the gesture is a horizontal swipe
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Swipe left
            if (deltaX < 0) {
                // Call your function to close the pop-up window
                closePopup();
            }
            // Swipe right
            else {
                // Do nothing or handle swipe right if needed
            }
        }
    }

    // Add event listener for touchstart
    projectWindow.addEventListener('touchstart', touchStart, { passive: true });

    // Add event listener for touchend
    projectWindow.addEventListener('touchend', touchEnd);

    // Function to remove event listeners
    function removeEventListeners() {
        projectWindow.removeEventListener('touchstart', touchStart);
        projectWindow.removeEventListener('touchend', touchEnd);
    }

    // Return the function reference to remove event listeners
    return removeEventListeners;
}
