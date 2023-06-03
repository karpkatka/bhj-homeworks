const cart = document.querySelector('.cart__products');
const quantityButtons = Array.from(document.querySelectorAll(".product__quantity-control"));
const productAddButtons = Array.from(document.querySelectorAll(".product__add"));


quantityButtons.forEach(element => {
  element.addEventListener("click", event => {
    const elementParent = element.closest(".product__quantity-controls");
    const quantityCount = elementParent.querySelector(".product__quantity-value");

    if (element.classList.contains("product__quantity-control_inc")) {
        quantityCount.textContent++;
    } else if (element.classList.contains("product__quantity-control_dec") && quantityCount.textContent > 1) {
        quantityCount.textContent--;
    }
  })
})

productAddButtons.forEach(element => {
  element.addEventListener("click", event => {
    const product = element.closest(".product");
    const quantityValue = product.querySelector(".product__quantity-value");
    const productImage = product.querySelector(".product__image").src;
    const id = product.getAttribute("data-id");
    const productId = Array.from(cart.children).find(i => i.getAttribute("data-id") === id);

    if (!productId) {
      cart.insertAdjacentHTML("beforeEnd",
        `<div class="cart__product" data-id="${id}"><img class="cart__product-image" src=${productImage}><div class="cart__product-count">${quantityValue.textContent}</div></div>`);
    } else {
      const cartProductCount = productId.querySelector(".cart__product-count"); 
      cartProductCount.textContent = Number(cartProductCount.textContent) + Number(quantityValue.textContent);
    }
  })
})