import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import UserHome from "./pages/UserHome"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Ranking from "./pages/Ranking"
import ResetCss from "./style/reset"
import GlobalStyle from "./style/globalStyle"

function App() {

  return (
    <BrowserRouter>
      <ResetCss/>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<UserHome></UserHome>}></Route>
        <Route path="/cadastro" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<SignIn></SignIn>}></Route>
        <Route path="/ranking" element={<Ranking></Ranking>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
