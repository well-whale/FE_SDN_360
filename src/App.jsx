import { useState } from 'react'



import HomePage from './pages/HomePage'
import Checkout from './component/Checkout/Checkout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage />
      {/* <Checkout /> */}
    </>
  )
}

export default App
