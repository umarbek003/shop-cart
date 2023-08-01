import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./page/Home/Home"
import { useEffect, useState } from "react"
import axios from "axios"
import Cart from "./page/Cart/Cart"

function App() {
  const [product, setProduct] = useState([])
  const [cartItems, setCartItems] = useState([])


  useEffect(() => {
    axios.get('http://localhost:3001/product').then(response => {
      setProduct(response.data);
    })
  },[])


  const addToCart =(id) =>{
    setCartItems((prev) => [...prev, id])
  }

  return (
    <div>
      <Routes>
        <Route exact element={<Layout/>}>
          <Route index element={<Home onAddToCart={addToCart} item={product} />} />
          <Route path="/cart" element={<Cart item={cartItems} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
