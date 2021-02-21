const products = [
    {id: 1, title: 'Laptop', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title = "Item", price) => `<div class="product-item">
        <h3>${title}</h3>
        <p>${price}</p>
        <button class="buy-btn">Добавить в корзину</button>
    </div>`;


const renderProducts = (list) => {
    let productList = [];
    let newProductList;
    list.forEach(function(item) {
       productList.push(renderProduct(item.title, item.price));
       newProductList = productList.join(" ");
    });
    document.querySelector('.products').innerHTML = newProductList;
}

renderProducts(products);
