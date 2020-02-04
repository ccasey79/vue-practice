
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
        // name: "",
        // website: 'http://www.google.co.uk',
        // age: "",
        // characters: ['Fred', 'Joe', 'Pat', 'Bert'],
        // ninjas: [
        //     {name: 'Ryu', age: 25},
        //     {name: 'Ken', age: 30},
        //     {name: 'Yoshi', age: 20}
        // ],
        // error: false,
        // success: false

        // health: 100,
        // ended: false
        seen: true,
        name: 'Lauren Goodger',
        features: ['brown hair', 'tanned', 'round bum', 'big tits']
    },
    methods: {
        // greet: function(time) {
        //     return 'Good ' + time + ' ' + this.name;
        // },

        // add: function() {
        //     this.age ++;
        // },
        
        // subtract: function() {
        //     this.age --;
        // },

        // click: function() {
        //     alert('You bet your life!');
        // }

        // punch: function() {
        //     this.health -= 10;

        //     if(this.health <= 0) {
        //         this.ended = true;
        //     }
        // },

        // restart: function() {
        //     this.health = 100;
        //     this.ended = false;
        // }
    },
    computed: {

    }
});