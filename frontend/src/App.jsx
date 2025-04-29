import { useState } from "react";
import { Button } from "./components/ui/button";
import Authenticate from "./pages/Login";
import Navbar from "./components/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Authenticate />
    </>
  );
}

export default App;
