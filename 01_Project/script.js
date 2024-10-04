const popus = document.querySelector(".popus");
const btn = document.querySelector(".btn");
const closebutton = document.querySelector(".popus button");

btn.addEventListener("click", () => {
  popus.classList.add("showpopus");
});

closebutton.addEventListener("click", () => {
  popus.classList.remove("showpopus");
});
// https://popus.netlify.app/
