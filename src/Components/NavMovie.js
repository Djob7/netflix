import { Navbar,Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
const NavMovies=()=>{
    return(
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">TV Show</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/List">Movies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavMovies