import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import './navbar.css';

import { AuthContext } from '../../context/auth.context';

function NavBarComponent() {
  const { logOut, isLoggedIn } = useContext(AuthContext);

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
            {isLoggedIn ? (
              <>
                <Nav.Link as='span'>
                  <Link className='link-navbar' to='/me'>
                    User
                  </Link>
                </Nav.Link>
                <Nav.Link as='span'>
                  <p className='link-navbar' onClick={logOut}>
                    Log out
                  </p>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as='span'>
                  <Link className='link-navbar' to='/registro'>
                    Registro
                  </Link>
                </Nav.Link>
                <Nav.Link as='span'>
                  <Link className='link-navbar' to='/login'>
                    Login
                  </Link>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComponent;
