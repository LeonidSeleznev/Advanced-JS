const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    userSearchField: '',
    catalogUrl: '/catalogData.json',
    cartUrl: '/getBasket.json',
    products: [],
    imgCatalog: 'https://placehold.it/200x150',
    imgForCart: 'https://placehold.it/50x100',
    cartVisibility: false,
    filteredStuff: [],
    itemsInCart: [],
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(product) {
      this.getJson(`${API}/addToBasket.json`)
        .then(data => {
          if (data.result === 1) {
            let find = this.itemsInCart.find(el => el.id_product === product.id_product);
            if (find) {
              find.quantity++;
            } else {
              // let prod = Object.assign({quantity: 1}, product);
              this.itemsInCart.push({
                ...product,
                quantity: 1,
              });
            }
          } else {
            alert('Error');
          }
        })
    },
    removeFromCart(item) {
      this.getJson(`${API}/deleteFromBasket.json`)
        .then(data => {
          if (data.result === 1) {
            if (item.quantity > 1) {
              item.quantity--;
            } else {
              this.itemsInCart.splice(this.itemsInCart.indexOf(item), 1)
            }
          }
        })
    },
    filter() {
      let regexp = new RegExp(this.userSearchField, 'i');
      this.filteredStuff = this.products.filter(el => regexp.test(el.product_name));
    },
  },

  mounted() {
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for (let el of data) {
          this.products.push(el);
        }
      });
    this.getJson(`${API + this.cartUrl}`)
      .then(data => {
        for (let el of data.contents) {
          this.itemsInCart.push(el);
          this.filteredStuff.push(el);
        }
      });
  },
});