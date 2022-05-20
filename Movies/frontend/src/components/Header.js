import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <>
      <Navbar className="navbarstyle" style={{ height: "70px" }}>
        <Container>
        <div >
          <NavLink to="/" className="text-decoration-none navstyle mx-5">
            ^Movie List^
          </NavLink>
          </div>
          <Nav className="me-auto">
            <NavLink  to="/"  className="text-decoration-none navitem">
              Home
            </NavLink>
          </Nav>

        
        </Container>

       
      </Navbar>
    </>
  );
};

export default Header;
