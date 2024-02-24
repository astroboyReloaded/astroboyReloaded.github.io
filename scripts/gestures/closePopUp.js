export default function closePopupGesture(closePopup) {
    var startX, startY;

    // Add event listener for touchstart
    document.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    // Add event listener for touchend
    document.addEventListener('touchend', function (e) {
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
                closePopup.click();
            }
            // Swipe right
            else {
                // Do nothing or handle swipe right if needed
            }
        }
    });
};