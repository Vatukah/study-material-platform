
import { Routes , Route } from 'react-router'
import Dashboard from './pages/dashboard/dashboard'
import Home from './pages/home/home'
import './App.css'

function App() {
 

  return (
   <Routes>
   
   <Route path='home' element={<Home/>}/>
 <Route path='/' element={<Dashboard/>}/>
 <Route path='*' element={<h1> page not found!!!</h1>}/>
   </Routes>
  )
}

export default App
