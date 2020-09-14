'use strict';

const products = [
    {id:1, title: 'Notebook', price: 20000},
    {id:2, title: 'Mouse', price: 1500},
    {id:3, title: 'Keyboard', price: 5000},
    {id:4, title: 'Gamepad', price: 3500},
];

const renderProduct = (title = 'Товар', price = 0) => {
    return `<div class = 'product-item'>
                <h3>${title}</h3>
                <p>${price}</p>
                <button class = by-button>Купить</button>
            </div>`;  
};

const renderProducts = (list) => {
    const productList = list.map((product) => {
        return renderProduct(product.title, product.price);
    });
    document.querySelector('.products').innerHTML = productList;
};

renderProducts(products);