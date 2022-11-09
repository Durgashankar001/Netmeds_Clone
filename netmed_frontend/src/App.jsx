import { useState } from 'react'
import Cart from './Pages/Cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Cart/>
    </div>
  )
}

export default App
