new Vue({
    el: '#exercise',
    data: {
        value: '',
        value_second: ''
    },
    methods: {
        showAlert() {
            alert('You clicked the Show Alert button');
        },
        store(event) {
            this.value = event.target.value;
        }
    }
});