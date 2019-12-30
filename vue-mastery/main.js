
Vue.component('greeting', {
    template: `<p>Hi, my name is {{ name }} </p>`,
    data: function() {
        return {
            name: 'Hulk'
        }
    }
});


var app = new Vue ( {
    el: '#app',
    data: {
        brand: "Vue Mastery",
        product: 'Boots',
        image: 'images/scrat.jpg',
        inStock: false,
        onSale: true,
        details: ["80% cotton", "Jet Black", "Very robust" ],
        sizes: [ 'Size 8', 'Size 9', 'Size 10', 'Size 11', 'Size 12'],
        variants: [
            { variantId: 200,
              variantName: 'Scrat',
              variantImage: 'images/scrat.jpg',
            },

            {
               variantId: 300,
               variantName: 'Roadrunner', 
               variantImage:'images/roadrunner.jpg',
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function() {
            this.cart += 1
        },
        subtractFromCart: function() {
            this.cart -= 1
        },
        updateProduct: function(variantImage) {
            this.image = variantImage
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product 
        }
    }
});