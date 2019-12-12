var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: '../assets/vmSocks-green-onWhite.jpg',
    inventory: 100,
    inStock: true,
    details: ['80% cotton', '20% polyester', 'gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: "green"
      },
      {
        variantId: 2235,
        variantColor: "blue" 
      }
    ]
  }
})
