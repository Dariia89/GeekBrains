const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        imgCatalog: 'https://placehold.it/200x150',
        imgCart: 'https://placehold.it/50x100',
        products: [],
        filtered: [],
        cartList: [],
        showCart: false,
        search: "",
        emptyCart: "Ваша корзина пуста",
        noDataFound: "По вашему запросу ничего не найдено",
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product){
            this.getJson(`${API}/addToBasket.json`)
              .then(data => {
                if(data.result === 1){
                  let productId = product.id_product;
                  let find = this.cartList.find(product => product.id_product === productId);
                  if(find){
                    find.quantity++;
                    this.showCart = !this.showCart;
                    this.showCart = !this.showCart;
                  } else {
                    product.quantity = 1;
                    this.cartList.push(product);
                  }
                } else {
                  alert('Error');
                }
              })
        },
        removeFromCart(product){
            this.getJson(`${API}/deleteFromBasket.json`)
              .then(data => {
                if(data.result === 1){
                  let productId = product.id_product;
                  let find = this.cartList.find(product => product.id_product === productId);
                  if(find.quantity > 1){
                    find.quantity--;
                    this.showCart = !this.showCart;
                    this.showCart = !this.showCart;
                  } else {
                    this.cartList.splice(this.cartList.indexOf(find), 1);
                  }
                } else {
                  alert('Error');
                }
              })
        },
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
            if (this.filtered.length === 0) {

            }
        },
        notFoundProducts() {
            if (this.filtered.length === 0) {
                return this.noDataFound;
            }
        },
        countSum(quantity, price) {
            return quantity *= price;
        },
        showEmpty() {
            if (this.cartList.length === 0) {
                return this.emptyCart;
            }
        },
        countTotalSum() {
            let totalSum = 0;
            this.cartList.forEach( (item) => {
                totalSum += item.price * item.quantity;
            });
            return totalSum;
        },
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },

});
