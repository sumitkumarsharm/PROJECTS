const inputBox = document.querySelector("#input");
const button = document.querySelector("button");
const ListContainer = document.querySelector("#list_container");
const Footerspan = document.querySelector(".innerSpan");

let count = 0;

button.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("Please Enter Some Text");
  } else {
    const li = document.createElement("li");
    li.innerText = inputBox.value;
    li.classList.add("li_tasks");
    ListContainer.appendChild(li);
    count++;
    const Del_btn = document.createElement("span");
    Del_btn.innerText = "\u00d7";
    li.appendChild(Del_btn);
    Del_btn.addEventListener("click", () => {
      li.remove();
      count--;
      Footerspan.innerHTML = `${count}`;
    });
    Footerspan.innerHTML = `${count}`;
  }
  inputBox.value = "";
});
ListContainer.addEventListener("click", (e) => {
  // console.log('Heello');
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("Completed");
  }
});
// function saveData() {
//     localStorage.setItem("data", ListContainer.innerHTML);
// }

// function showTask() {
//     ListContainer.innerHTML = localStorage.getItem('data')
// }
// showTask()
