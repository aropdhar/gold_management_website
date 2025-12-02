import { configureStore } from '@reduxjs/toolkit'
import wishlistSlice from './wishlistSlice/wishlistSlice'
import addtocartSlice from './addtocartSlice/addtocartSlice'
import { getTotal } from './addtocartSlice/addtocartSlice'

export const store = configureStore({
  reducer: {
    wishList: wishlistSlice,
    addtocartItem: addtocartSlice
  },
})

store.dispatch(getTotal())