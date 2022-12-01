import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navbar.css';

function NavBarComponent() {

  return (
    <>
      <Navbar bg='dark' variant='dark' fixed='top'>
        <Container>
          <Navbar.Brand as='span'>Cocktails</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link as='span'>
              <Link className='link-navbar' to='/'>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link as='span'>
              <Link className='link-navbar' to='/galery'>
                Galery
              </Link>
            </Nav.Link>
            <Nav.Link as='span'>
              <Link className='link-navbar' to='/create'>
                Create
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComponent;
