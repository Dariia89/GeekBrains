const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
// Перевести на Promise НЕ ИСПОЛЬЗОВАТЬ fetch

let getRequest = () => {
  return new Promise( (resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          reject();
        } else {
          resolve(xhr.responseText);
        }
      }
    }
    xhr.send();
  });
} 

// let getRequest = (url, callBack) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status !== 200) {
//         console.log('Error');
//       } else {
//         callBack(xhr.responseText);
//       }
//     }
//   }
//   xhr.send();
// };
///////////////////////////////////////

// class CartList extends ProductList{
//   #purchaseItems;

//   constructor(container = ".cart") {
//     super();
//     this.#purchaseItems = [];
    
//     this.render(); //добавляет разметку на страницу
//     this.addItems(); //добавляет элемент в корзину
//     this.deleteItems(); //удаляет элемент из корзины
//     this.addMoreItems(); //увеличивает количество товаров в корзине

//     this.#getBasket()
//       .then( (data) => {
//         this.#purchaseItems = [...data];
//         this.render();
//       })
//   }

//   render() {
//     const block = document.querySelector(this.cart);

//     this.#purchaseItems.forEach((item) => {
//       const itemObject = new CartItem(item);
//       console.log(itemObject);
//       block.insertAdjacentHTML('beforeend', itemObject.render());
//     });
//   }


//   #getBasket() {
//     return fetch(`${API}/getBasket.json`)
//         .then((response) => response.json())
//         .catch((err) => {
//           console.log(err);
//         });
//   }

//   addItems(element) {
//     document.querySelector(".buy-btn").addEventListener("click", (event) => {
//       const item = event.currentTarget.parentNode;
//       return fetch(`${API}/addToBasket.json`)
//         .then((data) => {
//           if (data.result === 1) {

//           }
//         } ) 
//     }
//   }  
// }

// class CartItem {
//   constructor(product, quantity=1, img='https://placehold.it/200x150') {
//     this.quantity = quantity;
//     this.id = product.id;
//     this.price = product.price;
//     this.title = product.title;
//     this.img = img;

// //     render() {
// //        return ``; // разметка для товара
// //     }
//    }
// }

class ProductList {
  #goods;
  #allProducts;

  constructor(container = '.products') {
    console.log('constructor');
    this.container = container;
    this.#goods = [];
    this.#allProducts = [];

    // this.#fetchGoods();
    // this.#render();
    this.#getProducts()
        .then((data) => {
          this.#goods = [...data];
          this.#render();
        });
  }

  goodsTotalPrice() {
    return this.#goods.reduce((sum, { price }) => sum + price, 0);
  }

  // #fetchGoods() {
  //   getRequest(`${API}/catalogData.json`, (data) => {
  //     // console.log(data);
  //     this.#goods = JSON.parse(data);
  //     this.#render();
  //     console.log(this.#goods);
  //     console.log(this.#allProducts);
  //   });
  // }
  #getProducts() {
    return fetch(`${API}/catalogData.json`)
        .then((response) => response.json())
        .catch((err) => {
          console.log(err);
        });
  }

  #render() {
    const block = document.querySelector(this.container);

    this.#goods.forEach((product) => {
      const productObject = new ProductItem(product);
      console.log(productObject);
      this.#allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    });
  }
}

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}

const productList = new ProductList();
