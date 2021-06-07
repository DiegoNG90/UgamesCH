import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";
import CartWidget from '../CartWidget';
import LogoWidget from '../LogoWidget';

const MyNav = ({items}) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"> 
          <LogoWidget />
        </Navbar.Brand>
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
  </Navbar>
  );
};

export default MyNav;
