import { useState } from "react";
import { Button } from "./components/ui/button";
import Authenticate from "./pages/Login";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Authenticate />
    </>
  );
}

export default App;
