import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Rootlayout from './component/rootlayout/Rootlayout';
import Home from './pages/home/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
     <Route element={<Rootlayout/>}>
         <Route path='/' element={<Home/>}/>
     </Route>
  )
);

function App() {
  return (<RouterProvider router={router} />)
}



export default App
