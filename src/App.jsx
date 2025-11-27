import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Rootlayout from './component/rootlayout/Rootlayout';
import Home from './pages/home/Home';
import Location from './pages/home/location/Location';
import Contact from './pages/home/contact/Contact';
import ProductDetails from './component/productcomponent/productdetails/ProductDetails';
import ProductCategory from './pages/productcategory/ProductCategory';
import Wishlist from './pages/wishlist/Wishlist';
import Addtocart from './pages/addtocart/Addtocart';
import Invoice from './pages/invoice/Invoice';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Rootlayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/find-location' element={<Location/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/productDetails/:id' element={<ProductDetails/>}/>
          <Route path='/product-category/:name' element={<ProductCategory/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/addtocart' element={<Addtocart/>}/>
      </Route>
          <Route path='/invoice' element={<Invoice/>}/>
    </Route>
  )
);

function App() {
  return (<RouterProvider router={router} />)
}



export default App
