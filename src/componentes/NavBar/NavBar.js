import './NavBar.css';
import CardWidget from '../CardWidget/CardWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function BarraNavegacion(){

    return(
        <>
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">MONCIA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Productos</Nav.Link>
            {/* <Nav.Link href="/detalles">Detalles</Nav.Link> */}
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="/categoria/1">Promociones</NavDropdown.Item>
              <NavDropdown.Item href="/categoria/2">Lo mas Nuevo</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
        <CardWidget />
      </Navbar>
        
        </>
    )

}

