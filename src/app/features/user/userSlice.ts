import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
export interface UserState {
  First_name:string |null,
  Last_name:string|null,
  Email:string |null,
  Id:string |null
}

// Define the initial state using that type
const initialState: UserState = {
  First_name: null,
  Last_name:null,
  Email:null,
  Id:null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state,payload:PayloadAction<UserState>) => {
        state.Email =  payload.payload.Email
        state.First_name= payload.payload.First_name,
        state.Id = payload.payload.Id,
        state.Last_name=payload.payload.Last_name
    },
    RemoveUser: (state) => {
        state.Email =null,
        state.First_name = null,
        state.Last_name = null,
        state.Id = null
    },
  },
})

export const {addUser,RemoveUser } = userSlice.actions
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer