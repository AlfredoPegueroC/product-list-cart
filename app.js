const container = document.querySelector(".card__container");
const btn = document.getElementsByClassName("btn");

document.addEventListener("DOMContentLoaded", (e) => getMenu());


function createCard(container, element) {
  // DIV .card
  const div = document.createElement("div");
  div.setAttribute("class", "card");
  // IMAGES TAG
  let img = document.createElement("img");
  img.src = `${element.image.mobile}`;
  img.alt = "plate-image";

  // BUTTON TAG
  let button = document.createElement("button");
  button.setAttribute("class", "btn");
  let btn_img = document.createElement("img");
  btn_img.src = "./assets/images/icon-add-to-cart.svg";
  btn_img.alt = "cart";
  button.textContent = "Add to cart";
  button.appendChild(btn_img);
  // DIV CLASS CARD__CONTENT
  let content = document.createElement("div");
  content.setAttribute("class", "card__content");

  let h4 = document.createElement("h4");
  h4.setAttribute("class", "category");
  h4.textContent = `${element.category}`;

  let h3 = document.createElement("h3");
  h3.setAttribute("class", "name");
  h3.textContent = `${element.name}`;

  let span = document.createElement("span");
  span.setAttribute("class", "price");
  span.textContent = `$${element.price.toFixed(2)}`;

  content.appendChild(h4);
  content.appendChild(h3);
  content.appendChild(span);

  // APPEND CHILLD TO DIV
  div.appendChild(img);
  div.appendChild(button);
  div.appendChild(content);

  // ADD TO CONTAINER OF THE ELEMENT
  container.appendChild(div);
}

async function getMenu() {
  const res = await fetch("./data.json");
  const data = await res.json();

  data.forEach((element) => {
    createCard(container, element);
  });

  Array.from(btn).forEach(items => {
    console.log(items);
  })
}

Array.from(btn).forEach(items => {
  console.log(items);
})

