Vue.component('products', {
    props: ['products'],
    template: ` <section class="products products-container">
                    <product v-for="item of products" v-bind:key="item.id" :product="item"></product>
                </section>`
 });
 Vue.component('product', {
     props: ['product'],
     template: `
                <div class="feat-item pr-item">
                    <img :src="product.image" alt="item" class="feat-img pr-img">
                    <div class="item-name">{{ product.title }}</div>
                    <div class="item-price">&dollar;{{ product.price }}</div>
                        <button class="buy-btn pr-btn-buy" @click="$root.addProduct(product)">
                            <span class="pr-btn-buy-text">Add to cart</span>
                        </button>
                </div>`
 })