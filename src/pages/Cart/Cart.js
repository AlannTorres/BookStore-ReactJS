import { Button } from "../../components/Button/Button";
import { Link } from 'react-router-dom';
import { Footer } from "../../templates/partials/Footer/Footer";
import { useAppContext } from "../../store/AppContext";
import { fetchCartAction } from "../../store/action";
import { useState, useEffect } from "react";
import { saveBookInCartAction, removeBookCartAction } from "../../store/action";

import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from "react-bootstrap/Table";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

export const Cart = () => {
  const { state, dispatch } = useAppContext();
  const [ cepEndereco, setCepEndereco ] = useState({});
  const [ precoTotal, setPrecoTotal ] = useState(0);
  const [ endereco, setEndereco ] = useState({});
  const [ itensLoading, setItensLoading ] = useState({});

  const ajustarPrecoTotal = () => {
    let total = 0;
    state.cart.forEach(item => {
      total += item.price * item.quantity;
    });
    setPrecoTotal(total.toFixed(2));
  }

  const handlerClickAdd = async (book) => {
    setItensLoading((prevState) => {
      return {
        ...prevState,
        [book.bookId]: true
      }
    });
    await saveBookInCartAction(dispatch, book);
    setItensLoading((prevState) => {
      return {
        ...prevState,
        [book.bookId]: false
      }
    });
  }

  const handlerClickRemove = async (book) => {
    setItensLoading((prevState) => {
      return {
        ...prevState,
        [book.bookId]: true
      }
    });
    await removeBookCartAction(dispatch, book.bookId);
    setItensLoading((prevState) => {
      return {
        ...prevState,
        [book.bookId]: false
      }
    });
  }

  const handleChange = (e) => {
    setCepEndereco(e.target.value);
  }

  function handleClickCep() {
    fetch(`https://viacep.com.br/ws/${cepEndereco}/json/`)
    .then(dados => {
      if (dados.ok) {
        return dados.json();
      } else {
        setEndereco({});
      }
    })
    .then(endereco => {
      setEndereco(endereco);
    })
  }

  useEffect(() => {
    ajustarPrecoTotal();
    fetchCartAction(dispatch);
  }, [state.type])

  return (
    <>
      <Container className="mb-5">
      <Row>
        <Col xs={12}>
          <Table className="align-items-center" hover responsive >
            <thead>
              <tr>
                <th></th>
                <th>Produto</th>
                <th>Descrição</th>
                <th>Quantidade</th>
                <th>Preço Unitário</th>
                <th>Preço Total</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {state.cart.map((item, index) => (
                <tr key={index} borderless> 
                  <th></th>
                  <td>
                    <Figure>
                      <Figure.Image
                        width={110}
                        alt="171x180"
                        src={item.capa}
                      />
                    </Figure>
                  </td>
                  <td className="text-start w-50">
                    <h5>{item.title}</h5>
                    <h6>{item.author}</h6>
                  </td>
                  <td>
                    <Button 
                      className='m-2 p-2'
                      label='+' 
                      variant={'primary'}
                      onClick={() => handlerClickAdd(item)} 
                      loading={itensLoading[item.bookId]}

                    />
                    {item.quantity}
                    <Button 
                      className='m-2 p-2'
                      label='-' 
                      variant={'primary'}
                      onClick={() => handlerClickRemove(item)} 
                      loading={itensLoading[item.bookId]}
                    />
                  </td>
                  <td>R$ {item.price}</td>
                  <td>R$ {(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className=" m-2 justify-content-center">
        <Col xs={5}>
          <ListGroup className="my-2">
            <ListGroup.Item>
              <InputGroup className="mb-3">
                <InputGroup.Text>CEP</InputGroup.Text>
                <Form.Control
                  type="Number"
                  placeholder="Digite seu CEP"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={cepEndereco}
                  onChange={handleChange}
                />
                <Button 
                  label={'Enviar'}
                  onClick={handleClickCep} 
                  variant="outline-secondary" 
                  id="button-addon2"
                />
              </InputGroup>
            </ListGroup.Item>
            <ListGroup.Item>
              Cidade: {
                endereco.localidade ? endereco.localidade : "Cep invalido!"
              }
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={7}>
          <ListGroup >
            <ListGroup.Item as="li">
              Valor Total: R$ {precoTotal}
            </ListGroup.Item>
          </ListGroup>
          <Link className='dropdown-item nav-text' to='/carrinho'>
            <Button 
              className={'m-2 p-2'}
              label={'Comprar'}
              variant={"primary"}
            />
          </Link>
          <Link className='dropdown-item nav-text' to='/'>
            <Button 
              className={'m-2 p-2'}
              label={'Continuar Comprando'}
              variant={"secondary"}
            />
          </Link>
        </Col>
      </Row>
      </Container>
      <Footer/>
    </>
  );
};
  