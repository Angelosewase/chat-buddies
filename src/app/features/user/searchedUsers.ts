import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { user } from "../../api/users/user";
import { RootState } from "../../store";

const initialState: user[] = [];
export const searchedUserSlice = createSlice({
  name: "searchedUsers",
  initialState,
  reducers: {
    addSearchUsers: (state, action: PayloadAction<user[] | null>) => {
      if (action.payload) {
        return action.payload
      }
    },
  },
});

export default searchedUserSlice.reducer;
export const { addSearchUsers } = searchedUserSlice.actions;
export const searchUserSelector = (state: RootState) => state.searchedUsers;
