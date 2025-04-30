import { useState } from "react";
import { Button } from "./components/ui/button";
import Authenticate from "./pages/Login";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar isLoggedIn={true} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
