import { Route, Routes } from "react-router-dom"
import SignIn from "./pages/auth/singin/SingIn"
import SignUp from "./pages/auth/signup/SignUp"
import Dashboard from "./pages/Dashboard/Dashboard"
import ForgotYourPassword from "./pages/ForgotYourPassword/ForgotYoutPassword"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/forgotYourPassword' element={<ForgotYourPassword/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      
    </>
  )
}

export default App
