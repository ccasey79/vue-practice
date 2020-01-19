
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
        name: 'Natalie',
        job: 'Ninja',
        website: 'http://www.google.com',
        websiteTag: '<a href="http://www.google.com">Google</a>'
    },
    methods: {
        greet: function(time) {
            return 'Good ' +  time + ' ' + this.name;
        }

    },
    computed: {

    }
});