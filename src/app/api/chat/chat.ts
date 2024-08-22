import axios from "axios";

export interface Chat {
  id: string;
  createdby: string;
  lastMessage: string;
  participants: string;
  created_at: Date;
  is_group_chat: boolean;
}

export async function getChats(): Promise<Array<Chat> | null> {
  try {
    const response = await axios.get("http://localhost:8080/chat/chats",{withCredentials:true});

    const chats: Array<Chat> = response.data;

    if (chats.length > 0) {
      return chats;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching chats:", error);
    return null;
  }
}

export async function createNewChat(
  participants: string[]
): Promise<string | null> {
  try {
    const response = await axios.post("http://localhost:8080/chat/newChat", {
      participants: participants,
    });

    const responseMsg: string = response.data;
    return responseMsg;
  } catch (error) {
    console.error("Error fetching chats:", error);
    return null;
  }
}

export async function DeleteChat(chatId: string): Promise<string | null> {
  try {
    const response = await axios.delete("http://localhost:8080/chat/newChat", {
      data: {
        chatId,
      },
    });
    const responseMsg: string = response.data;
    return responseMsg;
  } catch (error) {
    console.error("Error deleting chat:", error);
    return null;
  }
}
