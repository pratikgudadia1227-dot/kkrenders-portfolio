// LIGHTBOX FOR IMAGES

const images = document.querySelectorAll(".grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.getElementById("close");

images.forEach(img => {
img.addEventListener("click", () => {
lightbox.style.display = "flex";
lightboxImg.src = img.src;
});
});

close.addEventListener("click", () => {
lightbox.style.display = "none";
});


// VIDEO HOVER PLAY

const videos = document.querySelectorAll(".grid video");

videos.forEach(video => {

video.addEventListener("mouseenter", () => {
video.play();
});

video.addEventListener("mouseleave", () => {
video.pause();
video.currentTime = 0;
});

});

lightbox.addEventListener("click", (e) => {
if(e.target !== lightboxImg){
lightbox.style.display = "none";
}
});

