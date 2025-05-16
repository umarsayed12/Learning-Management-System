import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import Authenticate from "./pages/Login";
import Navbar from "./components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="font-poppins">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
