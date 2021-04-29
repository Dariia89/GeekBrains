const products = [
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
//Функция для формирования верстки каждого товара
const renderProduct = (pr) => {
    return `<div class="feat-item pr-item">
                <img src="${pr.image}" alt="item" class="feat-img pr-img">
                <div class="item-name">${pr.title}</div>
                <div class="item-price">&dollar;${pr.price}</div>
                <div class="overlay">
                    <button class="btn-cart-overlay">
                        <img src="img/cart_white.png" alt="buy" class="cart-overlay" width="23" height="23">
                        <span class="btn-cart-overlay-text">Add to cart</span>
                    </button>
                </div>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)).join(" ");
    console.log(productsList);
    document.querySelector('.products-container').innerHTML = productsList;
};

renderPage(products);