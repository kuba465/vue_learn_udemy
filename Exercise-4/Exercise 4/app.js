new Vue({
    el: '#exercise',
    data: {
        first: false,
        visible: true,
        thirdClass: '',
        fifthStyle: '',
        progress: 0,
        progressStyle: {}
    },
    computed: {
        firstStyle() {
            return {
                'highlight': this.first,
                'shrink': !this.first
            }
        },
    },
    methods: {
        startEffect: function () {
            let vm = this;
            setInterval(function () {
                vm.first = !vm.first;
            }, 100)
        },
        startProgress() {
            let vm = this;
            setInterval(function () {
                if (vm.progress < 996) {
                    vm.progress++;
                    vm.progressStyle = {
                        width: vm.progress + 'px',
                        height: 20 + 'px',
                        backgroundColor: 'red'
                    }
                }
            }, 10)
        }
    }
});
