var body = document.querySelector('body');

//Mở NAV cho Mobile
function ShowNAV() {
  body.style.overflow = 'hidden';
  var nav = document.querySelector("nav");
  nav.style.display = "flex";
}
//Ẩn NAV cho Mobile
function HideNAV(event) {
  body.style.overflow = 'unset';
  var nav = document.querySelector("nav");
  var form = document.querySelector(".nav-form");
  if (event.target !== form) {
    nav.style.display = "none";
  }
}
// Mở form chi tiết sản phẩm
function ShowChitiet(elm){
  body.style.overflow = 'hidden';
  var div = elm.parentNode;
  var id = div.getAttribute("alt");
  var chitiet = document.querySelector('.chitiet');
  chitiet.style.display = 'flex';
  //Lên top với mobile
  var form = chitiet.querySelector('.f-main');
  form.scrollTop = 0;
  //lên top với PC
  var divimg = form.querySelector('.f-main-img');
  divimg.scrollTop = 0;
  // Load hinh anh
  var listimg = document.querySelector('.f-main-img');
  var img = listimg.getElementsByTagName('img');
  for(var i = 0;i < img.length;i++){
    var stt = i + 1;
    img[i].src = '../Data/product/' + id + '/' + stt + '.jpg';
  }
}
// Ẩn form chi tiết sản phẩm
function HideChitiet(){
  body.style.overflow = 'unset';
  var chitiet = document.querySelector('.chitiet')
    chitiet.style.display = 'none';

}
//Thay đổi hỉnh ảnh khi click vào Ảnh nhỏ
function ShowIMG(elm) {
  var pro = elm.parentNode.parentNode.parentNode;
  var img = pro.querySelector(".pro-img").getElementsByTagName("img")[0];
  img.src = elm.src;
}