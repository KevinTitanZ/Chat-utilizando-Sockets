const cookie = require('cookie');

module.exports = (httpServer) => {
  const { Server } = require("socket.io");
  const io = new Server(httpServer);
  const connectedUsers = new Map();

  io.on("connection", (socket) => {
    // ✅ Esta línea debe estar DENTRO del callback
    const cookies = socket.handshake.headers.cookie;
    const username = cookies
      ?.split("; ")
      ?.find((c) => c.startsWith("username="))
      ?.split("=")[1];

    if (username) {
      connectedUsers.set(socket.id, username);
      io.emit("users", Array.from(connectedUsers.values()));
    }

    socket.on("message", (message) => {
      io.emit("message", {
        user: username || "Anónimo",
        message,
      });
    });

    socket.on("disconnect", () => {
      connectedUsers.delete(socket.id);
      io.emit("users", Array.from(connectedUsers.values()));
    });
  });
};
