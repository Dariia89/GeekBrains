const API = "https://raw.githubusercontent.com/Dariia89/API-online-store/main/responses/";

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: 'catalogData.json',
        cartUrl: 'getBasket.json',
        products: [],
        cartProducts: [],
        filtered: [],
        userSearch: '',
        show: false,
        error: false,
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    error = true;
                });
        },
        filter() {
            const regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.title));
        },
        countSum() {
            let sum = 0;
            this.cartProducts.forEach( product => sum += product.price * product.quantity);
            return sum;
        },
        addProduct(product) {
            let foundProduct = this.cartProducts.find(item => item.id === product.id);
            if (foundProduct) {
                foundProduct.quantity++;
            } else {
                let newProduct = Object.assign({quantity: 1}, product);
                this.cartProducts.push(newProduct);
            }
        },
        removeProduct(product) {
            if (product.quantity > 1) {
                product.quantity--;
            } else {
                this.cartProducts.splice(this.cartProducts.indexOf(product), 1);
            }
        }
    },
    mounted(){
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        this.getJson(`${API + this.cartUrl}`)
            .then(data => {
              for (let el of data.contents) {
                this.cartProducts.push(el);
              }
            });
     }
});

