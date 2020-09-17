'use strict';

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this._goods = [];
        this.allProducts = [];
        
        this._fetchGoods();
        this._render();
        this.goodsPrice();
    }

    _fetchGoods() {
        this._goods = [
            {id:1, title: 'Notebook', price: 20000},
            {id:2, title: 'Mouse', price: 1500},
            {id:3, title: 'Keyboard', price: 5000},
            {id:4, title: 'Gamepad', price: 3500},
        ];
    }
    
    _render() {
        const block = document.querySelector(this.container);

        for (let product of this._goods) {
            const productObject = new ProductItem(product);

            this.allProducts.push(productObject);

            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }

    goodsPrice() {
        let goods = this._goods;

        let totalSum = 0;

        for(let i=0; i<goods.length;i++) {
            totalSum += goods[i].price
        };

        console.log(totalSum);
    }
}

class ProductItem {
    constructor(product, img = 'https://placehold.it/2001x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class = 'product-item' data-id = '${this.id}'>
        <img src='${this.img} alt='some img'>
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class = by-button>Купить</button>
    </div>`;
    }
}

new ProductList();

class Bucket {
    constructor(container = '.products') {
        this.container = container;
        this._goods = [];

        this.addToBucket();
        this.removeFromBucket();
    }

    addToBucket(){
        if (this._goods[product.id] == undefined) {
            this._goods[product.id] = {
                price: product.price,
                name: product.name,
                count: 1
            }
        } else {
            this._goods[product.id].count++;
        }
    }

    removeFromBucket(){
        if (this._goods[id].count == 1) {
            delete this._goods[id];
        } else {
            this._goods[id].count--;
        }
    }
}
