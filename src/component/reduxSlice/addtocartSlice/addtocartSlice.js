import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const addtocartSlice = createSlice({
  name: 'addtocart',
  initialState,
  reducers: {
    addtocart: (state, action) => {
      console.log(action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addtocart } = addtocartSlice.actions

export default addtocartSlice.reducer