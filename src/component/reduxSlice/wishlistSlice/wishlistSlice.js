import { createSlice } from '@reduxjs/toolkit'
import { successToast } from '../../toastify/toastify';

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
            successToast(`${action.payload.title} Wislist Add Successfully!!`)
            localStorage.setItem("wishlistItem" , JSON.stringify(state.value))
        }
    },
    removewishlist: (state , action) =>{
      const removeId = action.payload.id;
      
      state.value = state.value.filter((item)=>{
        return item.id !== removeId
      })
      
      localStorage.setItem("wishlistItem" , JSON.stringify(state.value))
      
    }
  },
})

// Action creators are generated for each case reducer function
export const { addtowishlist , removewishlist } = wishlistSlice.actions

export default wishlistSlice.reducer