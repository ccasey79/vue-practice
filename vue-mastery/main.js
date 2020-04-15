
var app = new Vue ({
    el: '#app',
    data: {
        product: 'Socks',
        image: 'images/sock.jpg',
        inStock: false,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: 'images/sock2.jpg'
            },

            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: 'images/sock3.jpg'
            }
        ],
        sizes: ['Size 8', 'Size 9', 'Size 11', 'Size 12'],
        cart: 0

    },
    methods: {
        addToCart: function() {
            this.cart += 1
        },

        updateProduct: function(variantImage) {
            this.image = variantImage
        }
    }
})