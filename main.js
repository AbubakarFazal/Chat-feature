const socket = io();

const form = document.getElementById('chat-form');
const input = document.getElementById('message-input');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = input.value;
  if (msg.trim()) {
    socket.emit('chat message', msg);
    input.value = '';
  }
});

socket.on('chat message', (msg) => {
  const div = document.createElement('div');
  div.textContent = msg;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
});
socket.emit("chat message", {
  text: messageText,
  senderName: currentUserName,
});
socket.on("chat message", (msg) => {
  const isMe = msg.senderName === currentUserName;
  appendMessage(msg.text, msg.senderName, isMe);
});

