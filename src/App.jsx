import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./page/Home/Home"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
