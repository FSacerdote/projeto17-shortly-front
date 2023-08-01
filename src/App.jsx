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
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<UserHome/>}/>
        <Route path="/cadastro" element={<SignUp/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/ranking" element={<Ranking/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
