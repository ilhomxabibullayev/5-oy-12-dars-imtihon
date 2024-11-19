let products

async function start() {
    const res = await fetch('http://localhost:5000/products');

    const body = await res.json();

    products = body.data

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
}

start();

function addB(event) {
    console.log('bosildi');

    const id = event.target.dataset.id
    console.log(id);

    const product = (products.find((item) => item.id == id));
    console.log(product);

    productsKorzinka = JSON.parse(localStorage.getItem('productsKorzinka')) || [];

    productsKorzinka.push(product);

    localStorage.setItem('productsKorzinka', JSON.stringify(productsKorzinka));

}