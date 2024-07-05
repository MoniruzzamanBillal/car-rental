let menuIcon = document.getElementById("menuIcon");
let menuList = document.getElementById("menuList");

// ! initially set menu item hidden
menuList.style.display = "none";

// ! for changing menu icon
function toggleMenuIcon() {
  if (menuIcon.src.includes("menuOpen.png")) {
    menuIcon.src = "./images/icon/menuClose.png";
    menuList.style.display = "block";
  } else {
    menuIcon.src = "./images/icon/menuOpen.png";
    menuList.style.display = "none";
  }
}
