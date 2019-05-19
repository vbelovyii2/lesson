var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        message: '',
        ninja: 'http://google.ru',
        inputValue: 'Hello world',
        isActive: false,
        myColor: '',
        myStyleColor: '',
        myStyleHeight: '',
    },
    methods: {
        counterUp: function (num) {
            this.counter += num;

        },
        myMouseMove: function (event) {
            this.x = event.pageX
        },
        alertValue: function (event) {

            alert(event.target.value)


        }
    },
    computed: {
        changeColor: function () {
            return {
                'red': this.isActive,
                'blue': !this.isActive

            }
        },
        changeMyColor: function () {
            return {
                background: this.myStyleColor,
                height: this.myStyleHeight + 'px',
                width: this.myStyleHeight + 'px',
            }
        }
    }




});

