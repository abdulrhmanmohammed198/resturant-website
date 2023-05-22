import { Navbar, Row, Nav, Form, Container } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Row>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#" className="d-flex">
            <div className="brand-color">Houses Prices</div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Row>
  );
};
