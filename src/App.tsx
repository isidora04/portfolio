import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Experience from './components/experience';
import Heading from './components/heading';
import Nav from './components/nav'
import Projects from './components/projects';

function App() {

  return (
    <div className='flex flex-col items-center min-h-screen'>
        <Nav></Nav>
        <Heading></Heading>
        <Routes>
          <Route path='/' element={<><About></About><Contact></Contact></>}></Route>
          <Route path='/experience' element={<><Experience></Experience><Projects></Projects></>}></Route>
        </Routes>
    </div>
  )
}

export default App;
