const cart = document.querySelector('.cart-products');
function init() {
    for(i=0; i<window.localStorage.length; i++) {
        let product = document.createElement('div');
        product.setAttribute('class', 'product');
        let productName = document.createElement('h2');
        productName.innerHTML = localStorage[i];
        product.appendChild(productName);

        cart.appendChild(product);
    }
}
init();