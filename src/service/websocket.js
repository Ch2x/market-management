/* eslint-disable no-console */
const socket = new WebSocket('ws://localhost:3000/user/loginSucceed');

socket.addEventListener('open', function () {
    console.log('socket is open');
    socket.send('客户端消息');
})

socket.addEventListener('message', function (event) {
    console.log('Message from server', event.data);
});

socket.onclose = function () {
    console.log('onclose')
}


exports.default = {};