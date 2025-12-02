import { createSlice } from '@reduxjs/toolkit'
import { errorToast, infoToastify, successToast } from '../../toastify/toastify'

const initialState = {
  value: Array.isArray(JSON.parse(localStorage.getItem("cartItem") || "[]"))
    ? JSON.parse(localStorage.getItem("cartItem") || "[]")
    : [],

    totalAmount: 0,
    totalItem: 0
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
    },
    increasecart: (state , action) =>{
      const incrementcart = state.value.find((item)=>{
        return item.id === action.payload.id
      })
      
      if(incrementcart){
        incrementcart.cartQuantity += 1;
        localStorage.setItem("cartItem" , JSON.stringify(state.value))
      }
      
    },
    decreasecart: (state , action) =>{
      const decrementItem = state.value.find((item)=>{
        return item.id === action.payload.id
      });

      if(decrementItem.cartQuantity > 1){
        decrementItem.cartQuantity -= 1;
        localStorage.setItem("cartItem" , JSON.stringify(state.value))
      }else{
        errorToast("Minimum CartQuantity 1")
      }
    },
    getTotal: (state , action) =>{

      const total = state.value.reduce(
      (initialValue, item) => {
        const { price, cartQuantity } = item;
        const numericPrice = parseFloat(String(price).replace(/,/g, ""));
        const TotalPrice = numericPrice * cartQuantity;
        
        initialValue.amount += TotalPrice;
        initialValue.quantity += cartQuantity;
        
        
        return initialValue;
      },
      { amount: 0, quantity: 0 }
      );
      
      state.totalAmount = total.amount;
      state.totalItem = total.quantity;

    }
  },
})

// Action creators are generated for each case reducer function
export const { addtocart , removecart , increasecart , decreasecart , getTotal} = addtocartSlice.actions

export default addtocartSlice.reducer