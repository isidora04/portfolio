import './App.css'
import About from './components/about';
import Contact from './components/contact';
import Nav from './components/nav'
import Projects from './components/projects';

function App() {

  return (
    <div className='flex flex-col items-center min-h-screen'>
      <Nav></Nav>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}

export default App;
