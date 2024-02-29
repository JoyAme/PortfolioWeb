import { useState } from 'react'
import {Link} from 'react-router-dom'
import { Navbar } from './Navstyle'
import { Container } from '../../GlobalStyle'
import FeatherIcon from 'feather-icons-react';
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const [show,setShow]=useState(false)
  return (
    <>
    <Navbar>
        <Container>
          <div className='navv'>
        <Link to='/main' className='Ja'><h2>JA</h2></Link>
    <div className={show || 'show'}>
    <div className={`nav ${show ? 'show' : ''} `}>
        
        <ul> 
        <li><Link to='/about'>About</Link></li>
        <li>  <Link to='/skills'>Skill</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        
        </ul>
        <button className='btn'><Link to='/contact' className='link'>Contact</Link></button>
    </div>
    </div>
    {

    }
  
    <FeatherIcon icon="menu" className='hamburger' onClick={()=>setShow(!show)}/>
    {/* <RxHamburgerMenu className='hamburger'/> */}
    </div>
    </Container>
    </Navbar>
    </>
  )
}

export default Nav
