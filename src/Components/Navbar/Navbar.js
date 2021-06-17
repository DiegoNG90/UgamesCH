import { Container, Nav, Form, FormControl, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Navbar as NavBootstrap } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import CartWidget from '../CartWidget';
import LogoWidget from '../LogoWidget';

const Navbar = ({items}) => {
  return (
    <NavBootstrap bg="dark" variant="dark">
      <Container>
        <NavLink activeClassName="selected" to={'/'}> 
          <LogoWidget />
        </NavLink>
        <Nav className="mr-auto">
          <NavLink activeClassName="selected" className="pr-2" to={'/'}>Home </NavLink>
          <NavLink activeClassName="selected" className="pr-2" to={'/games/1'}>Games </NavLink>
          <NavLink activeClassName="selected" className="pr-2" to={'/contact'}>Contact</NavLink>
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
