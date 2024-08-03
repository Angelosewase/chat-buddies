import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

// Define a type for the slice state
export interface UserState {
  first_name:string |null,
  last_name:string|null,
  email:string |null,
  id:string |null
}

// Define the initial state using that type
const initialState: UserState = {
  first_name: null,
  last_name:null,
  email:null,
  id:null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state,payload:PayloadAction<UserState>) => {
        state = {...payload.payload}
    },
    RemoveUser: (state) => {
        state.email =null,
        state.first_name = null,
        state.last_name = null,
        state.id = null
    },
  },
})

export const {addUser,RemoveUser } = userSlice.actions
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer