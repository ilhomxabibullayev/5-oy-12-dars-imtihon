const h = document.querySelector('h2');
const products = JSON.parse(localStorage.getItem('productsKorzinka'));

console.log(products);


const productsWrapper = document.querySelector('.products__container');

products.forEach((item, index) => {
    console.log(item, index);

    const newElement = document.createElement('div');

    newElement.classList.add('products__card');

    newElement.innerHTML = `
        <a href="/products.html?id=${item.id}"> <img src= "${item.image}" alt="">
        <h2> ${item.name} </h2>
        <p>${item.price}</p> </a>

        <button data-id=${item.id} onclick='addB(event)'><img src="./image/cart-shopping-btn.svg" alt=""></button>
        `

    productsWrapper.appendChild(newElement);

});