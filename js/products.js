const id = window.location.href.split("=")[1]
console.log(id);
const title = document.querySelector('.product__title');
const rating = document.querySelector('.product__rating')
const image = document.querySelector('.product__image');

async function start() {
    const res = await fetch('http://localhost:5000/products/' + id);
    const body = await res.json();

    const product = body.data
    console.log(product);
    
    title.innerText = product.name;

    rating.innerText = product.rating;

    image.setAttribute('src', product.image);
}

start();