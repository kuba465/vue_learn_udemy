new Vue({
    el: '#app',
    data: {
        attachRed: false
    },
    computed: {
        divClasses() {
            return {
                'red': this.attachRed,
                'blue': !this.attachRed
            }
        }
    }
});