import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
const NavBar =()=>{
    return(<>
    <div className="jumbotron text-center" fluid style={{marginBottom:"0"}}>
  <h1>Welcome!</h1>
  <h4>Hello, my name is</h4>
  <h1>Roy F Baltazar</h1>
  
</div>
     <Navbar bg="dark" expand="xl"  variant='dark'>
  <Container>
    <Navbar.Brand href="#home">Roy F Baltazar</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Contact Me</Nav.Link>
        <NavDropdown title="More" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">GitHub</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Linkenin</NavDropdown.Item>
          <NavDropdown.Divider />
          {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>)
}
export default NavBar