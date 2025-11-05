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


const router = createBrowserRouter(
  createRoutesFromElements(
     <Route element={<Rootlayout/>}>
         <Route path='/' element={<Home/>}/>
         <Route path='/find-location' element={<Location/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/productDetails/:id' element={<ProductDetails/>}/>
     </Route>
  )
);

function App() {
  return (<RouterProvider router={router} />)
}



export default App
