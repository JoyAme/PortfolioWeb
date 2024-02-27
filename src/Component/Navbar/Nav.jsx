import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar } from './Navstyle'
import { Container } from '../../GlobalStyle'
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  return (
    <>
    <Navbar>
        <Container>
          <div className='navv'>
        <Link to='/main' className='Ja'><h2>JA</h2></Link>
    <div className='nav'>
        
        <ul>
        <li><Link to='/about'>About</Link></li>
        <li>  <Link to='/skills'>Skill</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        
        </ul>
        <button className='btn'><Link to='/contact'>Contact</Link></button>
    </div>
    <RxHamburgerMenu className='hamburger'/>
    </div>
    </Container>
    </Navbar>
    </>
  )
}

export default Nav
