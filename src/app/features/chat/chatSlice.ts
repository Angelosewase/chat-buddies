import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { user } from "../../api/users/user";
import type { RootState } from "../../store";

enum messageType {
  text,
  message,
  video,
  file,
}

export interface message {
  id: string;
  chat_id: string;
  sender_id: string;
  content: string;
  content_type: messageType;
  created_at: Date;
  updated_at: Date;
  is_deleted: boolean;
}

export interface IChatBase extends user {
  chatId: string | null;
  Messages: Array<message> | null;
}

const initialState: IChatBase = {
  First_name: null,
  Email: null,
  Id: null,
  Last_name: null,
  chatId: null,
  Messages: null,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addChat: (state: IChatBase, action: PayloadAction<IChatBase>) => {
      const isValid = validateChatObject(action.payload);

      if (isValid) {
        return action.payload;
      }
      return state;
    },
    addMessages: (state: IChatBase, action: PayloadAction<message[] | null>) => {
      if (action.payload) {
        return {
          ...state,
          Messages: action.payload,
        };
      }

      return state;
    },
    addMessage: (state: IChatBase, action: PayloadAction<message | null>) => {
      if (action.payload) {
        return {
          ...state,
          Messages: state.Messages ? [...state.Messages, action.payload] : [action.payload],
        };
      }
      return state;
    },
  },
});

export const selectChat = (state: RootState) => state.chat;
export const { addChat, addMessages ,addMessage} = chatSlice.actions;
export default chatSlice.reducer;

function validateChatObject(object: IChatBase): boolean {
  if (
    !object.Email ||
    !object.Id ||
    !object.First_name ||
    !object.Last_name ||
    !object.chatId
  ) {
    return false;
  }

  return true;
}
