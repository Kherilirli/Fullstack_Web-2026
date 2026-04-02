import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages";
import Books from "./pages/books";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/register";
import TeamPage from "./pages/team";
import ContactPage from "./pages/contact";

function App() {

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            {/* Auth Routes */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            {/* Main Routes */}
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} /> 
            <Route path="team" element={<TeamPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
