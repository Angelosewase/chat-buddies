import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import searchUsersReducer from "./features/user/searchedUsers"
import chatReducer from "./features/chat/chatSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    searchedUsers:searchUsersReducer,
    chat:chatReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
