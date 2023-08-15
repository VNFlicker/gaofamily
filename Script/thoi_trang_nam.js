// Load các sản phẩm mới cập nhật

function Load_New_Pro(){

}

//Mở NAV cho Mobile
function ShowNAV() {
    var nav = document.querySelector("nav");
    nav.style.display = "flex";
  }
  //Ẩn NAV cho Mobile
  function HideNAV(event) {
    var nav = document.querySelector("nav");
    var form = document.querySelector(".nav-form");
    if (event.target !== form) {
      nav.style.display = "none";
    }
  }
// Load sản phẩm theo danh mục
function LoadSP(elm){
    alert(elm);
}
