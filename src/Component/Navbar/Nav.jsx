import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar } from './Navstyle'
import { Container } from '../../GlobalStyle'

const Nav = () => {
  return (
    <>
    <Navbar>
        <Container>
    <div className='nav'>
        <h2>JA</h2>
        <ul>
        <li><Link to='/'>About</Link></li>
        <li>  <Link to='/skills'>Skill</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        
        </ul>
        <button className='btn'><Link to='/contact'>Contact</Link></button>
    </div>
    </Container>
    </Navbar>
    </>
  )
}

export default Nav
