//App.jsx
import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Portfolio from "./pages/Portfolio"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  )
}

export default App
