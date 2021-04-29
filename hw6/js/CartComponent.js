Vue.component('cart', {
    props: ['cartProducts', 'visibility'],
    template: `<div class="account-drop" v-show="visibility"> 
                <div v-if="!cartProducts.length">Your cart is empty</div>
                <cart-item class="acc-goods" v-for="product of cartProducts" v-bind:key="product.id" :cart-item="product">
                </cart-item>
                <div class="acc-total">
                    <div class="acc-total-text">TOTAL</div>
                    <div class="acc-total-price">&dollar;{{ $root.countSum() }}</div>
                </div>
                <a href="checkout.html" class="acc-checkout">CHECKOUT</a>
                <a href="shopping-cart.html" class="acc-cart">GO TO CART</a>
            </div>
    `
});

Vue.component('cart-item', {
    props: ['cartItem'],
    template: `<div class="cart-item">
                    <div class="acc-info">
                    <div class="acc-item-block">
                        <img :src="cartItem.image" alt="item" class="acc-item-img">   
                        <div class="acc-item-info">
                            <h5 class="acc-item-name">{{ cartItem.title }}</h5>
                            <img src="img/acc_rate.png" alt="rating" class="item-rate">
                            <span class="acc-item-price">{{ cartItem.quantity }} &#215; &dollar;{{ cartItem.price }}</span> 
                        </div>
                    </div>
                    <i class="fas fa-times-circle del-btn" @click="$root.removeProduct(cartItem)"></i>
                </div>        
            </div>
        `
})