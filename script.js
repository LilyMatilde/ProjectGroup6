//Menu change function for Nav when mobile version
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
const button = document.getElementById("my-button");
const nav = document.getElementById("myLinks");

button.addEventListener("click", () => {
  nav.classList.toggle("show");
});
//Parks page images alert pop up box when on click with information what we think of each park

// const serengeti = document.getElementById("serengeti");

// function stats() {
//   if (serengeti) {
//     alert("Hello");
//   } else {
//     alert("oh no");
//   }
// }
// console.log(stats(serengeti));

// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const serengeti = document.getElementById("serengeti");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
serengeti.onclick = function () {
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
