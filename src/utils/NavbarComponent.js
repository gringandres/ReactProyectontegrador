import { Button, Navbar, Nav } from 'react-bootstrap'
import React from 'react'

function NavbarComponent({ handleShow }) {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
          <Navbar.Brand href="#home">Ventas Medellin Classic</Navbar.Brand>
        </Nav>
        <Button variant="outline-info" onClick={handleShow}>
          Administrar
        </Button>
      </Navbar>
    </div>
  )
}

export default NavbarComponent