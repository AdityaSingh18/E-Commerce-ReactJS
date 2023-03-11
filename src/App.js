import Button from "react-bootstrap/Button";
import "./App.css";
import HeaderSite from "./components/UI/HeaderSite";

import Store from "./components/StorePage/Store";
import CartProvider from "./components/store/CartProvider";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About'
import StoreData from "./components/StorePage/StoreData";

 const router = createBrowserRouter([
  {path:'/',element:<Home/>},
  {path:'/store',element:<StoreData/>},
  {path:'/about',element:<About/>}
])

function App() {


  
  return (
    <CartProvider>
  
<RouterProvider router={router}/>
      
    </CartProvider>
  );
      }
export default App;