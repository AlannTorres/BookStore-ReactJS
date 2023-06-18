import { Button } from '../../../components/Button/Button';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../../store/AppContext';

import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarBS from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

import bookIcon from '../../../assets/computador.png'
import bagIcon from '../../../assets/shop.png'
import searchIcon from '../../../assets/search.png'

import './index.css'

export const NavBar = () => {
    const { state } = useAppContext()

    return (
        <>
        <NavbarBS className='navbarPrimary' expand="lg">
            <Container>
                <NavbarBS.Brand className='text-light fw-bold fs-3' href="#home">
                    <img
                        src={bookIcon}
                        width="40"
                        height="40"
                        className="d-inline-block align-middle"
                        alt="bookIcon"
                    />
                    BookStore
                </NavbarBS.Brand>
                <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBS.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">     
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Pesquise seu livro favorito..."
                                className="search me-2"
                                aria-label="Search"
                            />
                            <Button 
                                src={
                                    <img
                                        src={searchIcon}
                                        width="20"
                                        height="20"
                                        className="d-inline-block align-middle"
                                        alt="searchIcon"
                                    />
                                } 
                                variant='light'
                            />
                        </Form>
                    </Nav>
                    <Nav className="ms-auto">
                        <Link className='nav-link' to='/carrinho'>
                            <Button 
                                src={
                                    <img
                                        src={bagIcon}
                                        width="40"
                                        height="40"
                                        className="d-inline-block align-middle"
                                        alt="bagIcon"
                                    />
                                } 
                                label='Suas Compras' 
                                variant='Dark' 
                                total={state.cart.length}
                            />
                        </Link>
                    </Nav>
                </NavbarBS.Collapse>
            </Container>
        </NavbarBS>
        <NavbarBS className='navbarSecundary' expand="lg">
            <Container>
                <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBS.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='nav-link nav-text' to='/'>Inicio</Link>
                        <NavDropdown className='nav-text' title="Categorias" id="basic-nav-dropdown">
                            <Link className='dropdown-item nav-text' to='/'>Romance</Link>
                            <Link className='dropdown-item nav-text' to='/'>Ação</Link>
                            <Link className='dropdown-item nav-text' to='/'>Comedia</Link>
                            <Link className='dropdown-item nav-text' to='/'>Classico</Link>
                        </NavDropdown>
                        <Link className='nav-link nav-text' to='/'>Sobre Nós</Link>
                        <Link className='nav-link nav-text' to='/'>Contato</Link>
                    </Nav>
                </NavbarBS.Collapse>
            </Container>
        </NavbarBS>
        </>
    )
}