function showAndPlayVideo() {
    // Show the video container
    const dillyVideoContainer = document.getElementById('dilly-video-container');
    const video = document.getElementById('dilly');

    dillyVideoContainer.style.display = 'block';

    video.play();
}

function playStillVideo() {
    const stillVideoContainer = document.getElementById('still-video-container');
    const video = document.getElementById('still');

    stillVideoContainer.style.display = 'block';

    video.play();
}
