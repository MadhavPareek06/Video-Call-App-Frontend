import React, { useContext } from "react";
import { SocketContext } from "../Context/SocketContext";

const CreateRoom: React.FC = () => {
  const { socket}  = useContext(SocketContext);
  const initRoom = () => {
    console.log("Creating a new room",socket);
    socket.emit("create-room");
  };
  return (
    <button
      onClick={initRoom}
      className="btn btn-primary"
    >
      Start a new meeting in a new room
    </button>
  );
};

export default CreateRoom;