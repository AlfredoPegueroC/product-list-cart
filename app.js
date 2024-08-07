const container = document.querySelector(".card__container")

async function getMenu(){
  const res = await fetch("./data.json")
  const data = await res.json()

  data.forEach(element => {
    container.innerHTML += `
      <div class="card">
          <img src="${element.image.mobile}" alt="plate-image"/>
          <button class="btn">
            <span
              ><img
                src="./assets/images/icon-add-to-cart.svg"
                alt="cart" /></span
            >Add to Cart
          </button>
          <div class="card__content">
            <h4 class="category">${element.category}</h4>
            <h3 class="name">${element.name}</h3>
            <span class="price">$${element.price.toFixed(2)}</span>
          </div>
        </div>
    `
  });
}
getMenu()
