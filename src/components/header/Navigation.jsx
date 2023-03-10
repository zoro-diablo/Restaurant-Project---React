import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../assets/css/Main.css'
import Logo from '../../assets/images/logo.png'

export default function Navigation() {
  return (
    <div>
      <Navbar  expand='lg' className='nav'>
        <Container>
          <Navbar.Brand href='#home'>
            <b className='mainmenu'><Link to='/'><img src={Logo} alt='logo' /></Link> </b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link>
                <Link to='/' className='mainmenu'>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/menu' className='mainmenu'>
                  Menu
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/about' className='mainmenu'>
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/contact' className='mainmenu'>
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
