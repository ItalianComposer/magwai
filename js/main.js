let body = document.getElementById("body");
//Slider navigation
let btnDogie = document.getElementById("btnDogie");
let btnFall = document.getElementById("btnFall");
let btnBack = document.getElementById("btnBack");
//Slider images
let imgDogie = document.getElementById("imgDogie");
let imgFall = document.getElementById("imgFall");
let imgReturn = document.getElementById("imgReturn");
//Content
let content = document.getElementById('cards');
//Title & description
let descTitle = document.getElementById("descTitle");
let descText = document.getElementById("descText");
//Popup
let popUp = document.getElementById("popUp");
let popupShadow = document.getElementById("popupShadow");
let closePopUp = document.getElementById("closePopUp");
let requestBtnHeader = document.getElementById("requestBtnHeader");
let requestBtnContent = document.getElementById("requestBtnContent");

btnDogie.onclick = function() {
  btnDogie.classList.add("tool");
  btnFall.classList.remove("tool");
  btnBack.classList.remove("tool");
  imgDogie.style.display = 'inline';
  imgDogie.style.opacity = '1';
  imgFall.style.display = 'none';
  imgReturn.style.display = 'none';
  content.style.display = 'block';
  descTitle.innerHTML = "Полет Илона Маска и DOGIE COIN";
  descText.innerHTML = "В прошлый четверг все офигели от полета DOGIE COIN на марс.";
};
btnFall.onclick = function() {
  btnFall.classList.add("tool");
  btnDogie.classList.remove("tool");
  btnBack.classList.remove("tool");
  imgFall.style.display = 'inline';
  imgFall.style.opacity = '1';
  imgDogie.style.display = 'none';
  imgReturn.style.display = 'none';
  content.style.display = 'none';
  descTitle.innerHTML = "DOGIE COIN УПАЛ";
  descText.innerHTML = "Все в шоке, я потерял все деньги";
};
btnBack.onclick = function() {
  btnBack.classList.add("tool");
  btnDogie.classList.remove("tool");
  btnFall.classList.remove("tool");
  imgDogie.style.display = 'none';
  imgFall.style.display = 'none';
  imgReturn.style.display = 'inline';
  imgReturn.style.opacity = '1';
  content.style.display = 'none';
  descTitle.innerHTML = "Эпическое возвращения на хаи";
  descText.innerHTML = "Все в шоке, я снова богат";
};
requestBtnHeader.onclick = function() {
  popUp.style.display = 'flex';
  document.body.style.overflow = "hidden";
  popupShadow.style.display = 'block';
};
requestBtnContent.onclick = function() {
  popUp.style.display = 'flex';
  popupShadow.style.display = 'block';
  document.body.style.overflow = "hidden";
};
closePopUp.onclick = function() {
  popUp.style.display = 'none';
  popupShadow.style.display = 'none';
  document.body.style.overflow = "";
}

//Mobile menu
let mobileCta = document.getElementById("mobileCta");
let mobileCtaClose = document.getElementById("mobileCtaClose");
let navMenu = document.getElementById("navMenu");
let headerButtonContainer = document.getElementById("headerButtonContainer");

mobileCta.onclick = function() {
  navMenu.style.display = 'flex';
  document.body.style.overflow = "hidden";
  mobileCta.style.display = "none";
  mobileCtaClose.style.display = "flex";
  headerButtonContainer.style.display = "flex";
};
mobileCtaClose.onclick = function() {
  navMenu.style.display = 'none';
  document.body.style.overflow = "";
  mobileCta.style.display = "flex";
  mobileCtaClose.style.display = "none";
  headerButtonContainer.style.display = "none";
};
