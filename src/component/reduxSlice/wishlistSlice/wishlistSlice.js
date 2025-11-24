import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: Array.isArray(JSON.parse(localStorage.getItem("wishlistItem") || "[]"))
    ? JSON.parse(localStorage.getItem("wishlistItem") || "[]")
    : [],
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addtowishlist: (state, action) => { 

        const exists = state.value.find((item)=>{
            return item.id === action.payload.id;
        })
          
        if(!exists){
            state.value.push(action.payload);
            localStorage.setItem("wishlistItem" , JSON.stringify(state.value))
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addtowishlist } = wishlistSlice.actions

export default wishlistSlice.reducer