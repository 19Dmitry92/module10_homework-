let server = new WebSocket("wss://echo-ws-service.herokuapp.com");
const btn = document.querySelector('.btn');


document.forms.publish.onsubmit = function(mysend) {
  let sended = this.message.value;
  server.send(sended);
  return false;
}
server.onmessage = function(event) {
  let message = event.data;
  let newDiv = document.createElement('div');
  newDiv.textContent = message;
  document.getElementById('messages').prepend(newDiv); 
}
