import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import { useContext } from "react"
import { AuthContext } from "./utils/MainProvider"
import Nav from "./components/Nav"


function App() {

  const {handleClick} = useContext(AuthContext);

  return (
    <div onClick={()=>handleClick(false)}>
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
