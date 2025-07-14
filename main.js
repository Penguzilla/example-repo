let grocery = ["mince", "onion", "sugar", "lettuce", "tomato", "coffee"];
let done = [2, 4]; //items that have been bought

//Array to a list
function displayItems() {
  let ul = document.getElementById("grocery");
  ul.innerHTML = "";
  grocery.forEach(function (item) {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

displayItems(); //Call list function

function setDefaultChecked() {
  const listItems = document.querySelectorAll("#grocery li"); // Get all list items

  done.forEach((index) => {
    if (listItems[index]) {
      listItems[index].style.textDecoration = "line-through";
    }
  });
}

setDefaultChecked(); //highlight bought items

/* https://www.w3schools.com/js/js_htmldom.asp
I went through the DOM tabs up till CSS*/