import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { user } from "../../api/users/user";
import type { RootState } from '../../store'

export interface message {
  time: Date;
  textContent: string;
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
    addChat: (state: IChatBase, payload: PayloadAction<IChatBase>) => {
      const isValid = validateChatObject(payload.payload);

      if (isValid) {
        return payload.payload;
      }
      return state;
    },


  },
});
  
export const selectChat =(state: RootState)=>state.chat;
export const {addChat}= chatSlice.actions
export default chatSlice.reducer;



function validateChatObject(object: IChatBase): boolean {
  if (
    !object.Email ||
    !object.Id ||
    !object.First_name ||
    !object.Last_name ||
    !object.Messages ||
    !object.chatId
  ) {
    return false;
  }

  return true;
}
