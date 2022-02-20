import React from 'react'
import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
import { Link, NavLink } from 'react-router-dom'


const Header = () => (
     <Nav>
         <NavLink to='sign-up'>Sign Up</NavLink>
     </Nav>

)


export default Header
