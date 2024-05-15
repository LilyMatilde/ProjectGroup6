//Menu change function for Nav when mobile version
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
const button = document.getElementById("my-button");
const nav = document.getElementById("myLinks");

button.addEventListener("click", () => {
  nav.classList.toggle("show");
});

//PARKS PAGE JS
// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
//africa
const serengeti = document.getElementById("serengeti");
const kruger = document.getElementById("kruger");
const hwange = document.getElementById("hwange");
const bwindi = document.getElementById("bwindi");
//asia
const khao = document.getElementById("khao");
const huangshan = document.getElementById("huangshan");
const fuji = document.getElementById("fuji");
const nikko = document.getElementById("nikko");
//america
const banff = document.getElementById("banff");
const galapagos = document.getElementById("galapagos");
const torresDelPaine = document.getElementById("torresDelPaine");
const yellowstone = document.getElementById("yellowstone");
//europe
const plitvice = document.getElementById("plitvice");
const teide = document.getElementById("teide");
const skjoldungernes = document.getElementById("skjoldungernes");
const vatnajokull = document.getElementById("vatnajokull");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function imgBig(event) {
  modal.style.display = "block";
  modalImg.src = event.target.src;
  captionText.innerHTML = event.target.alt;
  console.log("test");
}

//Parks  functions
if (serengeti) {
  serengeti.onclick = imgBig;
  kruger.onclick = imgBig;
  hwange.onclick = imgBig;
  bwindi.onclick = imgBig;
  //Asia
  khao.onclick = imgBig;
  huangshan.onclick = imgBig;
  fuji.onclick = imgBig;
  nikko.onclick = imgBig;
  //america
  banff.onclick = imgBig;
  galapagos.onclick = imgBig;
  torresDelPaine.onclick = imgBig;
  yellowstone.onclick = imgBig;
  //europe
  plitvice.onclick = imgBig;
  teide.onclick = imgBig;
  skjoldungernes.onclick = imgBig;
  vatnajokull.onclick = imgBig;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
if (span) {
  span.onclick = function () {
    modal.style.display = "none";
  };
}

//Form page SUBMIT
const submitButton = document.getElementById("contactForm");
submitButton.onclick = function () {
  console.log("form submit");
  alert("Thank you for submitting your form, your message has been received.");
};
