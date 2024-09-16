import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import User from './components/getuser/User'
import Add from './components/adduser/Add'
import Edit from './components/updateuser/Edit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<User/>} />
      <Route path='/add' element={<Add/>} />
      <Route path='/edit/:id' element={<Edit/>} />
     </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
