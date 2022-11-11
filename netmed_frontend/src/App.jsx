import { useState } from "react";
import Login from "./Components/Cred/Login";
import Signup from "./Components/Cred/Signup";
import Homepage from "./Components/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import Router from "./Routes/Router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div >
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Router />
    </div>
  );
}

export default App;
