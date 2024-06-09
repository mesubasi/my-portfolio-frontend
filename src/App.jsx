//App.jsx
import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Portfolio from "./pages/Portfolio"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/auth/Login"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
