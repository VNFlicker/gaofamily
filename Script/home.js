
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
// Mở form chi tiết sản phẩm
function ShowChitiet(elm){
  var chitiet = document.querySelector('.chitiet')
  chitiet.style.display = 'flex';
}
// Ẩn form chi tiết sản phẩm
function HideChitiet(){
  var chitiet = document.querySelector('.chitiet')
    chitiet.style.display = 'none';
}
//Thay đổi hỉnh ảnh khi click vào Ảnh nhỏ
function ShowIMG(elm) {
  var pro = elm.parentNode.parentNode.parentNode;
  var img = pro.querySelector(".pro-img").getElementsByTagName("img")[0];
  img.src = elm.src;
}