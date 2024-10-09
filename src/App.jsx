import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Breakfast } from "./pages/Breakfast"
import { MainActivity } from "./pages/MainActivity"
import { Movie } from "./pages/Movie"
import { Afternoon } from "./pages/Afternoon"
import { Suggestion } from "./pages/Suggestion"
import { Summary } from "./pages/Summary"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/breakfast" element={<Breakfast />} />
      <Route path="/mainactivity" element={<MainActivity />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/afternoon" element={<Afternoon />} />
      <Route path="/suggestion" element={<Suggestion />} />
      <Route path="/summary" element={<Summary />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
