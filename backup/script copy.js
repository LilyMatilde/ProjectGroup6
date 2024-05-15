//Menu change function for Nav when mobile version
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
const button = document.getElementById("my-button");
const nav = document.getElementById("myLinks");

button.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const serengeti = document.getElementById("serengeti");
const kruger = document.getElementById('kruger');
const hwange = document.getElementById('hwange');
const bwindi = document.getElementById('bwindi');


var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");


function imgBig(event) {
  modal.style.display = "block";
  modalImg.src = event.target.src;
  captionText.innerHTML = event.target.id;
  console.log("test");
};




//Parks in Africa functions
serengeti.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = 'Easy level park. Family friendly and plenty wildlife';
  console.log("test");
};


kruger.onclick = imgBig;


hwange.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.id;
  console.log("test");
};


bwindi.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.id;
  console.log("test");
};


const khao = document.getElementById("khao");
const huangshan = document.getElementById('huangshan');
const fuji = document.getElementById('fuji');
const nikko = document.getElementById('nikko');

//Parks in Asia functions
khao.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = 'Easy level park. Family friendly and plenty wildlife';
  console.log("test");
};


huangshan.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.id;
  console.log("test");
};


fuji.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.id;
  console.log("test");
};


nikko.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.id;
  console.log("test");
};

const banff = document.getElementById("banff");
const galapagos = document.getElementById('galapagos');
const torresDelPaine = document.getElementById('torresDelPaine');
const yellowstone = document.getElementById('yellowstone');


//Parks in America functions
banff.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = 'Easy level park. Family friendly and plenty wildlife';
  console.log("test");
};

galapagos.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.id;
  console.log("test");
};


torresDelPaine.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.id;
  console.log("test");
};


yellowstone.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.id;
  console.log("test");
};



const plitvice = document.getElementById("plitvice");
const teide = document.getElementById('teide');
const skjoldungernes = document.getElementById('skjoldungernes');
const vatnajokull = document.getElementById('vatnajokull');



//Parks in Europe functions
plitvice.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = 'Easy level park. Family friendly and plenty wildlife';
  console.log("test");
};

teide.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.id;
  console.log("test");
};


skjoldungernes.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.id;
  console.log("test");
};


vatnajokull.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.id;
  console.log("test");
};




// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};


