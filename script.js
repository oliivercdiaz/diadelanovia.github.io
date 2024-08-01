function revealPopup() {
  const popup = document.getElementById("videoPopup");
  const video = document.getElementById("video");

  popup.classList.remove("hidden");
  video.src = "https://www.youtube.com/embed/tu_id_de_video?autoplay=1"; // Reemplaza con tu ID de video
  video.play();
}

function closePopup() {
  const popup = document.getElementById("videoPopup");
  const video = document.getElementById("video");

  popup.classList.add("hidden");
  video.src = "";
  video.load();
}

