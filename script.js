//const popup = document.getElementById("popup");
//const close = document.getElementById("close");
//const videoPopup1 = document.getElementById("videoPopup1");
//
//popup.addEventListener("click", () => {
//    videoPopup1.style.display = "block";
//});
//close.addEventListener("click", () => {
//    videoPopup1.style.display = "none";
//});

function showAndPlayVideo() {
    // Show the video container
    const videoContainer = document.getElementById('video-container');
    const video = document.getElementById('dilly');

    videoContainer.style.display = 'block';

    video.play();
}

//function slideButtonContainer() {
//    const videoContainer = document.getElementById('button-slider');
//    videoContainer.style.transform = "translateY(75px)";
//}

function slideAndPlay() {
//    slideButtonContainer();
    showAndPlayVideo();
}