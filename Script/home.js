function ShowNAV() {
  var nav = document.querySelector("nav");
  nav.style.display = "flex";
}

function HideNAV(event) {
  var nav = document.querySelector("nav");
  var form = document.querySelector(".nav-form");
  if (event.target !== form) {
    nav.style.display = "none";
  }
}
