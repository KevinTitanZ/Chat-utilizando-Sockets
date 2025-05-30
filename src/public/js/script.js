const socket = io();

const send = document.querySelector("#send-message");
const allMessages = document.querySelector("#all-messages");

const username = document.cookie
  .split("; ")
  .find((row) => row.startsWith("username="))
  ?.split("=")[1];

send.addEventListener("click", () => {
  const input = document.querySelector("#message");
  const message = input.value.trim();

  if (message !== "") {
    socket.emit("message", message);
    input.value = "";
  }
});

socket.on("message", ({ user, message }) => {
  const isOwnMessage = user === username;

  const msg = document.createRange().createContextualFragment(`
    <div class="message ${isOwnMessage ? "sent" : "received"}">
      <div class="image-container">
        <img src="/img/perfil.jpg">
      </div>
      <div class="message-body">
        <div class="user-info">
          <span class="username">${user}</span>
          <span class="time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <p>${message}</p>
      </div>
    </div>
  `);

  allMessages.append(msg);
});
