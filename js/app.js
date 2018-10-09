new Vue({
    el: '#app',
    data: {
        counter: 0
    },
    methods: {
        increase(step, event) {
            this.counter += step;
        }
    }
});