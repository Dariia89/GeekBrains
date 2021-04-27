class Cart {
    consructor(container = '.login') {
        this.container = container;
        this.cartGoods = cartGoods;
    }

    addProducts() {

    }
    removeProducts() {

    }
    updateCart() {
        
    }
    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new CartItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render())
        }
    }
}

class CartItem {
    constructor(product) {
            this.title = product.title;
            this.price = product.price;
            this.id = product.id;
            this.image = product.image;
            this.quantity = ptoduct.quantity;
            
        }
        
        render() {
             return `<div class="acc-info" data-id="${product.id}>
                        <img src="${product.image}" alt="item" class="acc-item-img">
                        <div class="acc-item-info">
                            <h5 class="acc-item-name">${product.title}</h5>
                            <img src="img/acc_rate.png" alt="rating" class="item-rate">
                            <span class="acc-item-price">${product.quantity} &#215; ${product.price}</span>    
                        </div>
                        <i class="fas fa-times-circle"></i>
                    </div>`
        }
}


class ProductsList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this._countSum(this.goods);
    } 
    
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'MANGO HOODIE', price: 52, image: "img/pr_item_1.jpg"},
            {id: 2, title: 'MANGO BLAZER', price: 67, image: "img/pr_item_2.jpg"},
            {id: 3, title: 'MANGO JACKET', price: 62, image: "img/pr_item_3.jpg"},
            {id: 4, title: 'MANGO PEOPLE T-SHIRT', price: 35, image: "img/pr_item_4.jpg"},
            {id: 5, title: 'MANGO SHORTS', price: 53, image: "img/pr_item_5.jpg"},
            {id: 6, title: 'MANGO BOMBER', price: 69, image: "img/pr_item_6.jpg"},
            {id: 7, title: 'MANGO CLASSIC BLAZER', price: 70, image: "img/pr_item_7.jpg"},
            {id: 8, title: 'MANGO LONG JACKET', price: 68, image: "img/pr_item_8.jpg"},
            {id: 9, title: 'MANGO PEOPLE T-SHIRT', price: 35, image: "img/pr_item_9.jpg"},
        
        ];
    }
    _countSum(goods) {
        let sum = 0;
        goods.forEach( (item) => {
            sum += item.price;
        });
        console.log(`Сумма всех товаров на странице: $${sum}`);
    }
    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend',productObj.render())
        }
    }
    
}


class ProductItem {
	constructor(product){
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.image = product.image;
	}
	
	render(){
		 return `<div class="feat-item pr-item" data-id="${this.id}">
                        <img src="${this.image}" alt="item" class="feat-img pr-img">
                        <div class="item-name">${this.title}</div>
                        <div class="item-price">&dollar;${this.price}</div>
                        <div class="overlay">
                            <button class="btn-cart-overlay">
                                <img src="img/cart_white.png" alt="buy" class="cart-overlay" width="23" height="23">
                                <span class="btn-cart-overlay-text">Add to cart</span>
                            </button>
                        </div>
                </div>`
	}
}

let list = new ProductsList();
list.render();








// const products = [
//     {id: 1, title: 'MANGO HOODIE', price: 52, image: "img/pr_item_1.jpg"},
//     {id: 2, title: 'MANGO BLAZER', price: 67, image: "img/pr_item_2.jpg"},
//     {id: 3, title: 'MANGO JACKET', price: 62, image: "img/pr_item_3.jpg"},
//     {id: 4, title: 'MANGO PEOPLE T-SHIRT', price: 35, image: "img/pr_item_4.jpg"},
//     {id: 5, title: 'MANGO SHORTS', price: 53, image: "img/pr_item_5.jpg"},
//     {id: 6, title: 'MANGO BOMBER', price: 69, image: "img/pr_item_6.jpg"},
//     {id: 7, title: 'MANGO CLASSIC BLAZER', price: 70, image: "img/pr_item_7.jpg"},
//     {id: 8, title: 'MANGO LONG JACKET', price: 68, image: "img/pr_item_8.jpg"},
//     {id: 9, title: 'MANGO PEOPLE T-SHIRT', price: 35, image: "img/pr_item_9.jpg"},
// ];
// //Функция для формирования верстки каждого товара
// const renderProduct = (pr) => {
//     return `<div class="feat-item pr-item">
//                 <img src="${pr.image}" alt="item" class="feat-img pr-img">
//                 <div class="item-name">${pr.title}</div>
//                 <div class="item-price">&dollar;${pr.price}</div>
//                 <div class="overlay">
//                     <button class="btn-cart-overlay">
//                         <img src="img/cart_white.png" alt="buy" class="cart-overlay" width="23" height="23">
//                         <span class="btn-cart-overlay-text">Add to cart</span>
//                     </button>
//                 </div>
//             </div>`
// };
// const renderPage = list => {
//     const productsList = list.map(item => renderProduct(item)).join(" ");
//     console.log(productsList);
//     document.querySelector('.products-container').innerHTML = productsList;
// };

// renderPage(products);