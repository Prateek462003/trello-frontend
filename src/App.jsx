import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Activities from './Components/Activities';
import Brackets from './Components/Brackets';
import Navbar from './Components/Navbar';
import Home from './pages/Home';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
