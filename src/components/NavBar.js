import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../hojas-de-estilo/NavBar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget.js';
import Boton from './Boton.js';
import Contador from './Contador.js';
import { useState } from 'react';


function NavBar({ item1, item2, item3, item4, item5, item6 }) {

  const manejarClic = () => {    
    console.log('Suma un Clic');
    setNumClics(numClics + 1);
  } 

  const reiniciarContador = () => {
    console.log('Reiniciar');
    setNumClics(0);
  }

  const [ numClics, setNumClics] = useState(0);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className='logo' href="#home">LibroShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={`./pages/${item1}`}>{item1}</Nav.Link>
            <Nav.Link href={`./pages/${item2}`}>{item2}</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href={`./pages/${item3}`}>{item3}</NavDropdown.Item>
              <NavDropdown.Item href={`./pages/${item4}`}>{item4}</NavDropdown.Item>
              <NavDropdown.Item href={`./pages/${item5}`}>{item5}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={`./pages/${item6}`}>{item6}</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>        
        
        <Boton 
        texto='+'
        esBotonDeClic={true}
        manejarClic={manejarClic} />
        <Contador 
        numClics={numClics} />
        <CartWidget/>                
        <Boton 
        texto='Reset'
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />

      </Container>      
    </Navbar>
  );
}

export default NavBar;