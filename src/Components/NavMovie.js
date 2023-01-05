import { Navbar,Container, Nav } from "react-bootstrap"
const NavMovies=()=>{
    return(
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">TV Show</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Movies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavMovies