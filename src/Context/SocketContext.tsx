import { io } from "socket.io-client";
import { createContext } from "react";

const WS_Server = "http://localhost:5500";

const SocketContext = createContext<any | null>(null);

const socket = io(WS_Server);

interface Props {
  children: React.ReactNode;
}

export const SocketProvider: React.FC<Props> = ({ children }) => {
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};