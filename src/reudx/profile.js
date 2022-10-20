import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  isLoading: true,
  isError: false,
}

const profileSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action)=>{
      state.user = action.payload
    },
    setUserIsLoading: (state, action)=>{
      state.isLoading = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { setUser, setUserIsLoading } = profileSlice.actions

export default profileSlice.reducer