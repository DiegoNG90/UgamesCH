import { Container, Nav, Form, FormControl, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Navbar as NavBootstrap } from 'react-bootstrap';
import CartWidget from '../CartWidget';
import LogoWidget from '../LogoWidget';

const Navbar = ({items}) => {
  return (
    <NavBootstrap bg="dark" variant="dark">
      <Container>
        <NavBootstrap.Brand href="#home"> 
          <LogoWidget />
        </NavBootstrap.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Games</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
        <Form className="d-flex justify-content-between">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button className="ml-xxl-2" variant="outline-info">Search</Button>
        </Form>
        <CartWidget items={items} />
      </Container>
  </NavBootstrap>
  );
};

Navbar.propTypes = {
  items: PropTypes.array,
};

export default Navbar;
