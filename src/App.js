import react from 'react'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './Home';
import Main from './Pages/MainPag/Main';
import Skill from './Pages/Skills/Skill';
import Nav from './Component/Navbar/Nav';
import Contact from './Pages/Contact/Contactt';
import Portfo from './Pages/Porfolio/Portfo';
import AboutPage from './Pages/About/AboutPage';




function App() {



  return (
    <>
    
    {/* <ParticlesBack/> */}
    <div className="Appp">
    {/* <ImgFile/> */}
      <BrowserRouter>
      <Nav/>
      
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/main' element={<Main/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/skills' element={<Skill/>}/>
        <Route path='/portfolio' element={<Portfo/>}/>
        <Route path='/contact' element={<Contact/>}/>
       
      </Routes>
    
      </BrowserRouter>
      
    </div>
    </>
  );
}

export default App;
