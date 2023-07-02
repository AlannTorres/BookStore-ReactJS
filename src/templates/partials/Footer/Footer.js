import { Link } from 'react-router-dom';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './index.css'

export const Footer = () => {
  return (
    <footer className="footer text-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Bookstore</h5>
            <p>Uma loja virtual de livros para os amantes da leitura.</p>
          </Col>
          <Col md={3}>
            <h5>Navegação</h5>
            <ul className="list-unstyled">
              <li>
                <Link className='dropdown-item nav-text' to='/'>Inicio</Link>
              </li>
              <li>
                <Link className='dropdown-item nav-text' to='/'>Sobre Nós</Link>
              </li>
              <li>
                <Link className='dropdown-item nav-text' to='/'>Contato</Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Redes Sociais</h5>
            <ul className="list-unstyled">
              <li>
                <Link className='dropdown-item nav-text' to='/'>Facebook</Link>
              </li>
              <li>
                <Link className='dropdown-item nav-text' to='/'>Twitter</Link>
              </li>
              <li>
                <Link className='dropdown-item nav-text' to='/'>Instagram</Link>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="mt-4" />
        <p className="text-center mb-0">
          &copy; 2023 Bookstore. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
};

