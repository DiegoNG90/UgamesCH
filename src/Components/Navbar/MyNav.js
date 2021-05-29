import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";



const MyNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Ugames</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Games</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
        <Form className="d-flex justify-content-between">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button className="ml-xxl-2" variant="outline-info">Search</Button>
        </Form>
      </Container>
  </Navbar>
  );
};

export default MyNav;
