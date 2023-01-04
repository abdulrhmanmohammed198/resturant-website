import React, { useState } from "react";
import { Navbar, Row, Nav, Form, Container } from "react-bootstrap";

export const NavBar = ({ filterBySearch }) => {
  const [searchVal, setSearchVal] = useState("");
  const onSearch = () => {
    filterBySearch(searchVal);
    setSearchVal("");
  };
  console.log(searchVal);
  return (
    <Row>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#" className="d-flex">
            <div className="brand-color">Restaurant</div>
            <img alt="logo" src="logo.png" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <div className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search.."
                className="me-2"
                onChange={(e) => setSearchVal(e.target.value)}
                value={searchVal}
              />
              <button onClick={() => onSearch()} className="btnn">
                Search
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};
