import axios from "axios";
import { message } from "../../features/chat/chatSlice";

export default async function getMessages(chatId:string ): Promise<message[] | null> {
  try {
    const response = await axios.get("http://localhost:8080/message/all", {
      withCredentials: true,
      params:{
        chatID:chatId,
      }
    });
    console.log(response.data)

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
