const cookie = require('cookie');

module.exports = (httpServer) => {
  const { Server } = require('socket.io');
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    const cookies = socket.handshake.headers.cookie;
    const parsedCookies = cookie.parse(cookies || "");
    const username = parsedCookies.username || "Anónimo";

    socket.on("message", (message) => {
      io.emit("message", {
        user: username,
        message,
      });
    });
  });
};
