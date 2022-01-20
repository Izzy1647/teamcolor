import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

import './style.css'

const NavBar = () => {
  return (
    <>
      <Navbar bg="myWhite" >
        <Container>
          <Navbar.Brand href="#home">球队颜色</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">CBA</Nav.Link>
            <Nav.Link href="#features">中超</Nav.Link>
            <Nav.Link href="#pricing">其他联赛</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
