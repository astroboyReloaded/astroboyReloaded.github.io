export default function closePopupGesture(projectWindow, closePopup) {
  let startX;
  let startY;

  // Define the event handler functions
  function touchStart(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }

  function touchEnd(e) {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;

    // Calculate the distance moved
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    // Check if the gesture is a horizontal swipe
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Swipe left
      if (deltaX < 0) {
        closePopup();
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
