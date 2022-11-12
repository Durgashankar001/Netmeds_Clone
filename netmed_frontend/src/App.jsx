import { useState } from "react";
import About from "./Components/Footer-HP/About";
import Footer from "./Components/Footer-HP/Footer";
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
      <br />
      <About />
      <Footer />
    </div>
  );
}

export default App;
