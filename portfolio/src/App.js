import './App.css';
import { Button, Navbar, NavbarBrand , Nav} from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar className="justify-content-between" bg="success">
        <NavbarBrand >
          MilerDev
        </NavbarBrand>
      </Navbar>

      <div style={{display: 'flex'}}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="https://www.youtube.com" target="_blank">Website
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </div>
    </div>
  );
}

export default App;