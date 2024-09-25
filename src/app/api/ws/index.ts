import { addMessages } from "../../features/chat/chatSlice";
import { store } from "../../store";
import getMessages from "../message";

export interface IMessageBase {
  chat_id: string;
  content: string;
  sender_id: string;
}

export function initializeWebSocketServerConnection(UserId: string): WebSocket {
  const WsConn: WebSocket = new WebSocket(
    `ws://localhost:8001/ws?UserId=${UserId}`
  );

  WsConn.onopen = (event: Event) => {
    console.log("connected successfully", event);
  };

  WsConn.onmessage = async (msg: MessageEvent<string>) => {
    try {
      // Parse the incoming message
      const messageData: IMessageBase = JSON.parse(msg.data);

      // Update the UI or dispatch action based on chat_id
      await updateTheUi(messageData.chat_id);
    } catch (error) {
      console.error("Error parsing message data", error);
    }
  };

  WsConn.onerror = (error: Event) => {
    console.log("Error connecting to the server", error);
  };

  WsConn.onclose = () => {
    console.log("Socket connection closed");
  };

  return WsConn;
}

export async function SendMessage(msg: IMessageBase, WsConn: WebSocket) {
  if (WsConn.readyState == WebSocket.OPEN) {
    const messageString = JSON.stringify(msg);
    WsConn.send(messageString);

    try {
      const messages = await getMessages(msg.chat_id);
      if (!messages) {
        console.warn("No messages found for chat", msg.chat_id);
        return;
      }

      // Dispatch messages to the store
      store.dispatch(addMessages(messages));
    } catch (error) {
      console.error("Error updating the UI with messages", error);
    }
  } else {
    console.log("not connected to the server");
  }
}

export async function updateTheUi(chatId: string) {
  try {
    const messages = await getMessages(chatId);
    if (!messages) {
      console.warn("No messages found for chat", chatId);
      return;
    }

    // Dispatch messages to the store
    store.dispatch(addMessages(messages));
  } catch (error) {
    console.error("Error updating the UI with messages", error);
  }
}
