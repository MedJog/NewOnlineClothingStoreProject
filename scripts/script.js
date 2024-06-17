const productsUrl = "scripts/data.json";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
document.addEventListener('DOMContentLoaded', async() => {
  const dataProducts = await fetchData(productsUrl);
  console.log(dataProducts);
  const productsElements = document.querySelector('.products-cards');
  dataProducts.forEach(element => {
    productsElements.insertAdjacentHTML('beforeend', `
    <div class="product-card">
          <a class="product-card__link" href="product.html">
            <img class="product-card__img" srcset="" src="${element.img}" alt="photo product">
            <div class="product-card__info">
              <h3 class="product-card__heading">${element.name}</h3>
              <p class="product-card__describtion">${element.desc}</p>
              <p class="product-card__price">${element.price}</p>
            </div>
          </a>
            <div class="product-card__add-basket">
              <a class="product-card__add-button" href="#"><i class="product-card__icon fa-solid fa-cart-plus fa-xl"></i></i>Add to cart</a>
            </div>
        </div>
    `)
    
  });

});