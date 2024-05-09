//Menu change function for Nav when mobile version
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
const button = document.getElementById("my-button");
const nav = document.getElementById("myLinks");

button.addEventListener("click", () => {
  nav.classList.toggle("show");
});
