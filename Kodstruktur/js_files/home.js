var flkty = new Flickity(".carousel");

var progressBar = document.querySelector(".progress-bar");

flkty.on("scroll", function (progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + "%";
});
