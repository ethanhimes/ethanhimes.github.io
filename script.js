function playVideo(videoContainer, videoElement) {
    if (videoContainer.style.display === 'block') {
        videoElement.pause();
        videoElement.currentTime = 0; // Reset the video to the start
        videoContainer.style.display = 'none'; // Hide the video
    } else {
        videoContainer.style.display = 'block'; // Show the video
        videoElement.play(); // Play the video
    }
}