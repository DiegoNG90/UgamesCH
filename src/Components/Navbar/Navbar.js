import { Container, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Navbar as NavBootstrap } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import CartWidget from '../CartWidget';
import LogoWidget from '../LogoWidget';

const Navbar = () => {
  return (
    <NavBootstrap bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <NavLink activeClassName="selected" to={'/'}>
          <LogoWidget />
        </NavLink>
        <Nav className="mr-auto">
          <NavLink
            activeClassName="selected"
            style={{ marginRight: '2em', textDecoration: 'none' }}
            to={'/'}
          >
            Home{' '}
          </NavLink>
          <NavLink
            activeClassName="selected"
            style={{ marginRight: '2em', textDecoration: 'none' }}
            to={'category/laptop'}
          >
            Laptops{' '}
          </NavLink>
          {/* <NavLink activeClassName="selected" style={{marginRight: "2em", textDecoration:"none"}} to={'#'}>Contact (WIP)</NavLink> */}
        </Nav>
        <Form className="d-flex justify-content-between">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button className="ml-xxl-2" variant="outline-info">
            Search
          </Button>
        </Form>
        <CartWidget />
      </Container>
    </NavBootstrap>
  );
};

export default Navbar;
