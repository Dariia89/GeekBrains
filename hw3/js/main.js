const API = "https://raw.githubusercontent.com/Dariia89/API-online-store/main/responses/";

class ProductsList{
    constructor(container, url){
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this.url = url;
    } 

    getProducts(url){
        return fetch(`${API + this.url}`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    unpackData(data, className) {
        console.log(data);
        this.goods = data;
        console.log(this.goods);
        this.render(className);
    }

    render(className) {
        const block = document.querySelector(this.container);
        
        for(let product of this.goods){

            console.log(product);
            const productObj = new className(product);
            console.log(productObj);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend',productObj.render())
        }
    }    
}

class CatalogList extends ProductsList {
    constructor(cart, container = '.products', url = "catalogData.json") {
        super(container, url);
        this.cart = cart;
        this.getProducts(this.url)
            .then(data => this.unpackData(data, CatalogItem));
        this.checkToAddToCart();
    }
    checkToAddToCart() {
        console.log(this.allProducts);
        document.querySelector(this.container).addEventListener("click", (event) => {
            console.log("in check");
            if (event.target.classList.contains("buy-btn")) {
                console.log(event.target);
                this.cart.addProducts(event.target);
            }
        });
    }
} 

class ProductsItem {
	constructor(product){
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.image = product.image;
	}
    render() {
        return ``;
    }

}

class CatalogItem extends ProductsItem {
    render(){
        return `<div class="feat-item pr-item" data-id="${this.id}">
                       <img src="${this.image}" alt="item" class="feat-img pr-img">
                       <div class="item-name">${this.title}</div>
                       <div class="item-price">&dollar;${this.price}</div>
                           <button class="buy-btn pr-btn-buy" data-id="${this.id}">
                               <img src="img/cart_white.png" alt="buy" class="cart-overlay" width="23" height="23">
                               <span class="pr-btn-buy-text">Add to cart</span>
                           </button>
                       </div>
               </div>`
   }
}

class Cart extends ProductsList {
    constructor(container = '.acc-goods', url = 'getBasket.json') {
        super(container, url);
        this.cartProducts = [];
        this.getProducts(this.url)
        .then(data => this.unpackData(data.contents, CartItem));
        this.checkButton();
    }
    render(className) {
        const block = document.querySelector(this.container);
        
        for(let product of this.goods){

            console.log(product);
            const productObj = new className(product);
            console.log(productObj);
            this.cartProducts.push(productObj);
            block.insertAdjacentHTML('beforeend',productObj.render())
        }
    }
    addProducts(el) {
        console.log(this.allProducts);
        let id = +el.dataset["id"];
        let foundProduct = this.allProducts.find(product => product.id === id);
        if (foundProduct) {
            foundProduct.quantity++;
            this.updateCart(foundProduct);
        } else {
            console.log(4);
            let product = {
                title: el.dataset["title"],
                id: id,
                price: +el.dataset["price"],
                image: el.dataset["image"],
                quantity: 1,
            }
        this.goods = [product];
        this.render(CartItem);
        }
    }
    removeProducts(el) {
        console.log(1);
        let id = +el.dataset["id"];
        let foundProduct = this.allProducts.find(product => product.id === id);
        if (foundProduct.quantity > 1) {
            foundProduct.quantity--;
            this.updateCart(foundProduct);
        } else {
            this.allProducts.splice(this.allProducts.indexOf(foundProduct), 1);
            document.querySelector(`.acc-info[data-id="${id}"]`).remove();
        }
    }
    updateCart(product) {
        let block = document.querySelector(`.acc-info[data-id="${product.id}"]`);      
        block.querySelector(".acc-item-price").textContent = `${this.quantity} &#215; &dollar;${this.price}`;
    }
    countSum() {
        let sum = 0;
        this.cartProducts.forEach( product => {
            sum += product.price * product.quantity;
        });
        return document.querySelector(".acc-total").insertAdjacentHTML("beforeend", `<div class="acc-total-price">&dollar;${sum}</div>`);
}
   checkButton() {
       console.log(this.allProducts);
        document.querySelector("#basket-btn").addEventListener("click", () => {
            document.querySelector(".account-drop").classList.toggle('hidden');
            this.countSum();
        });
        document.querySelector(this.container).addEventListener("click", (event) => {
            if (event.target.classList.contains("del-btn")) {
                console.log(event.target);
                this.removeProducts(event.target);
        }});
    }
}

class CartItem extends ProductsItem {
    constructor(product) {
        super(product);
        this.quantity = product.quantity;    
    }
        render() {
             return `<div class="acc-info" data-id="${this.id}>
                            <div class="acc-item-block">
                            <img src="${this.image}" alt="item" class="acc-item-img">   
                            <div class="acc-item-info">
                            <h5 class="acc-item-name">${this.title}</h5>
                            <img src="img/acc_rate.png" alt="rating" class="item-rate">
                            <span class="acc-item-price">${this.quantity} &#215; &dollar;${this.price}</span> 
                            </div>
                            <i class="fas fa-times-circle del-btn" data-id="${this.id}" data-price="${this.price}" data-image="${this.image}" data-title="${this.title}"></i>
                        </div>
                    </div>`
        }
}

let cart = new Cart();
let list = new CatalogList(cart);

