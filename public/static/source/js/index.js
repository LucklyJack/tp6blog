import '../css/backend.css'
var Controller = {
    index: function () {
        console.log('index方法被执行');
    },
    add: function () {
        console.log('add方法被执行');
    }
};
window.Controller = Controller;