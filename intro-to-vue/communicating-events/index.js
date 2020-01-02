Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">
      <div class="product-image">
        <img :src="image" />
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In stock</p>
        <p>Shipping: {{ shipping }}</p>
        
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div 
          v-for="(variant, index) in variants" 
          :key="variant.variantId"
          class="color-box"
          :style="{ backgroundColor: variant.variantColor }"
          @mouseover="updateProduct(index)"
        >
        </div>

        <button 
          v-on:click="addToCart"
          :disabled="!inStock"
          :class="{ disabledButton: !inStock }"
        >Add to cart</button>
        <button 
          v-on:click="removeFromCart"
        >Remove from cart</button>
  
      </div>

    </div>
  `,
  data () { 
    return {
      brand: 'Vue Mastery',
      product: 'Socks',
      selectedVariant: 0,
      inventory: 100,
      details: ['80% cotton', '20% polyester', 'gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: '../assets/vmSocks-green-onWhite.jpg',
          variantQuantity: 12
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: '../assets/vmSocks-blue-onWhite.jpg',
          variantQuantity: 10
        }
      ]
    }
  },
  methods: {
    addToCart () {
      const { variantId } = this.variants[this.selectedVariant]
      this.$emit('add-to-cart', variantId, 'add')
    },
    removeFromCart () {
      const { variantId } = this.variants[this.selectedVariant]
      this.$emit('remove-from-cart', variantId, 'remove')
    },
    updateProduct (index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title () {
      return `${this.brand} ${this.product}`
    },
    image () {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock () {
      return this.variants[this.selectedVariant].variantQuantity
    },
    shipping () {
      if(this.premium) {
        return 'Free'
      }
      return 2.99
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart (id, action) {
      const { cart } = this
      if(action === 'remove' && cart.includes(id)) {
        cart.splice(cart.indexOf(id), 1)
      } 
      if(action === 'add') {
        cart.push(id)
      }
    },
  }
})
