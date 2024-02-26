
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Skill from './Pages/Skills/Skill';
import Nav from './Component/Navbar/Nav';

import About from './Pages/About/Aboutt';
import Contact from './Pages/Contact/Contactt';
import Portfo from './Pages/Porfolio/Portfo';

// import ImgFile from './../src/assest/ImgFile';

import ParticlesBack from './ParticlesBack';
import Home from './Home';



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
        <Route path='/about' element={<About/>}/>
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
