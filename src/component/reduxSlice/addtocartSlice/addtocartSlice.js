import { createSlice } from '@reduxjs/toolkit'
import { infoToastify, successToast } from '../../toastify/toastify'

const initialState = {
  value: Array.isArray(JSON.parse(localStorage.getItem("cartItem") || "[]"))
    ? JSON.parse(localStorage.getItem("cartItem") || "[]")
    : [],
}

export const addtocartSlice = createSlice({
  name: 'addtocart',
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const findItem = state.value.find((item)=>{
        return item.id === action.payload.id
      })

      if(findItem){
         findItem.cartQuantity += 1;
         infoToastify(`${findItem.title} Increases Item`)
         localStorage.setItem("cartItem" , JSON.stringify(state.value))
      }else{
        state.value.push({...action.payload , cartQuantity: 1})
        successToast(`${action.payload.title} Cart Added SuccessFully`)
        localStorage.setItem("cartItem" , JSON.stringify(state.value))
      }
    },
    removecart: (state , action) =>{
      const removeId = action.payload.id;

      state.value = state.value.filter((item)=>{
        return item.id !== removeId
      })
      
      localStorage.setItem("cartItem" , JSON.stringify(state.value));
    }
  },
})

// Action creators are generated for each case reducer function
export const { addtocart , removecart } = addtocartSlice.actions

export default addtocartSlice.reducer