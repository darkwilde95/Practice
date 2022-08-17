import { createSlice } from '@reduxjs/toolkit'

export type UserState = {
  userId: string | null
  email: string | null
}

const initialState: UserState = {
  userId: null,
  email: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state: UserState) => { state.email = 'ba bla' }
  }
})

export default userSlice