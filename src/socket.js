import io from "socket.io-client";

let socket = io.connect("http://localhost:3001");

const connectSocket = (user_id) => {
  console.log(user_id, "user_id");
  if (!socket) {
    socket = io("http://localhost:3001/", {
      query: `user_id=${user_id}`,
    });

    // Optionally, add listeners for socket events here
    socket.on("connect", () => {
      console.log("Socket connected");
    });

    socket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });
  }
};

const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null; // Reset socket to ensure a fresh connection next time
  }
};

export { socket, connectSocket, disconnectSocket };
