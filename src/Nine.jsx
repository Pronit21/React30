import { BrowserRouter,Link, Route, Routes } from 'react-router-dom'
import Home from './forRouter.jsx/Home'
import Contact from './forRouter.jsx/Contact'
import About from './forRouter.jsx/About'
import './index.css'

function Nine() {
  return (
    <BrowserRouter>
    <nav>
        <ul className='nav-menu'>
            <li className='nav-link'>
            <Link to='/'>Home</Link>
            </li>
            <li className='nav-link'>
            <Link to='/about'>About</Link>

            </li>
            <li className='nav-link'>
            <Link to='/contact'>Contact</Link>
            </li>
        </ul>
    </nav>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        
    </Routes>
    </BrowserRouter>
  )
}

export default Nine;