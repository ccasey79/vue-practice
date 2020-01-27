
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
        name: "",
        website: 'http://www.google.co.uk',
        age: "",
        characters: ['Fred', 'Joe', 'Pat', 'Bert'],
        ninjas: [
            {name: 'Ryu', age: 25},
            {name: 'Ken', age: 30},
            {name: 'Yoshi', age: 20}
        ]
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name;
        },

        add: function() {
            this.age ++;
        },
        
        subtract: function() {
            this.age --;
        },

        click: function() {
            alert('You bet your life!');
        }
    },
    computed: {

    }
});