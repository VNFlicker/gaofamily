var mobile = document.querySelector(".mobile");
mobile.style.left = "-100%";
var mbtimkiem = document.querySelector(".mobile-timkiem");
mbtimkiem.style.right = "-100%";

//Load Top 20 sản phẩm mới nhất
function LoadTOPSP() {}

//Ấn các Sub Menu
SubMenu();
function SubMenu() {
  var submenu = document.querySelectorAll(".menu .sub-menu");
  for (var i = 0; i < submenu.length; i++) {
    var span = submenu[i].getElementsByTagName("span");
    for (var j = 0; j < span.length; j++) {
      span[j].style.height = "0";
    }
  }
}

//Hiển thị List menu khi Click hạng mục
function ShowSubmenu(elm) {
  SubMenu();
  var submenu = elm.parentNode.querySelector(".sub-menu");
  var span = submenu.getElementsByTagName("span");
  for (var j = 0; j < span.length; j++) {
    span[j].style.height = "30px";
  }
}

//Load sản phẩm khi click vào hạng mục
function LoadSP(elm) {
  //Thay đổi màu săc của mục đã chọn
  var submenu = document.querySelectorAll(".sub-menu");
  for (var i = 0; i < submenu.length; i++) {
    var span = submenu[i].getElementsByTagName("span");
    for (var j = 0; j < span.length; j++) {
      span[j].style.color = "rgb(4, 65, 4)";
      span[j].style.backgroundColor = "transparent";
    }
  }
  elm.style.color = "red";
  elm.style.backgroundColor = "rgb(255, 186, 186)";
  document.getElementById("span-title").innerHTML =
    "&#10052;  " + elm.innerText + "  &#10052;";
  document
    .getElementById("span-title")
    .scrollIntoView({ behavior: "smooth", block: "start" });
  //Tat NAV tren Mobile
  mobile.style.left = "-100%";
  var mb = document.querySelector(".h-mobile-menu");
  mb.getElementsByTagName("i")[0].className = "fa-solid fa-bars";
}

//Xem danh mục khi Click trên Mobile
function ShowNAV(elm) {
  if (mobile.style.left == "-100%") {
    mobile.style.left = "0";
    elm.className = "fa-solid fa-xmark fa-fade";
    //Ẩn hộp tìm kiếm nếu đang bật
    mbtimkiem.style.right = "-100%";
    var icon = document
      .querySelector(".h-mobile-search")
      .getElementsByTagName("i")[0];
    icon.className = "fa-solid fa-magnifying-glass";
  } else {
    mobile.style.left = "-100%";
    elm.className = "fa-solid fa-bars";
  }
}
//Hiện hộp tìm kiếm khi Click trên Mobile
function ShowTIMKIEM(elm) {
  if (mbtimkiem.style.right == "-100%") {
    mbtimkiem.style.right = "0";
    elm.className = "fa-solid fa-xmark fa-fade";
    //Ẩn hộp Menu nếu đang bật
    mobile.style.left = "-100%";
    var icon = document
      .querySelector(".h-mobile-menu")
      .getElementsByTagName("i")[0];
    icon.className = "fa-solid fa-bars";
  } else {
    mbtimkiem.style.right = "-100%";
    elm.className = "fa-solid fa-magnifying-glass";
  }
}
//Thay đổi hỉnh ảnh khi click vào Ảnh nhỏ
function ShowIMG(elm) {
  var pro = elm.parentNode.parentNode.parentNode;
  var img = pro.querySelector(".pro-img").getElementsByTagName("img")[0];
  img.src = elm.src;
}
