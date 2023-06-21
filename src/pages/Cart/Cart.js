import { useAppContext } from "../../store/AppContext";
import { useState, useEffect } from "react";
import { fetchCartAction } from "../../store/action";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import TableBS from "react-bootstrap/Table";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

export const Cart = () => {
  const { state, dispatch } = useAppContext();
  const [ cepCidade, setCepCidade ] = useState('')
  const [ cidade, setCidade ] = useState({})

  function handleClick() {
    fetch(`https://viacep.com.br/ws/${cepCidade}/json/`)
    .then(dados => {
      if (dados.ok) {
        return dados.json();
      }
    })
    .then(endereco => {
      setCidade(endereco);
    })
    .catch(error => {
      setCidade({})
    });
  }

  const handleChange = (e) => {
    setCepCidade(e.target.value)
  }

  const cartItems = state.cart.reduce((items, book) => {
    const existingItem = items.find(item => item.bookId === book.bookId);
    if (existingItem) {
      existingItem.quant++;
      existingItem.priceTotal = (existingItem.quant * parseFloat(existingItem.price)).toFixed(2);
    } else {
      items.push({
        ...book,
        quant: 1,
        priceTotal: parseFloat(book.price).toFixed(2),
      });
    }
    return items;
  }, []);

  let totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.priceTotal), 0
  );
  
  useEffect(() => {
    fetchCartAction(dispatch)
  }, [dispatch])

  return (
    <>
      <Row>
        <Col xs={12}>
          <TableBS striped hover>
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
            <tbody>
              {cartItems.map((item, index) => (
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
                  <td>{item.title}</td>
                  <td>{item.quant}</td>
                  <td>R$ {item.price}</td>
                  <td>R$ {item.priceTotal}</td>
                </tr>
              ))}
            </tbody>
          </TableBS>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <TableBS hover>
            <tbody>
              <tr>           
                <td>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>CEP</InputGroup.Text>
                    <Form.Control
                      type="Number"
                      placeholder="Digite seu CEP"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      value={cepCidade}
                      onChange={handleChange}
                    />
                    <Button 
                      onClick={handleClick} 
                      variant="outline-secondary" 
                      id="button-addon2">
                      Enviar
                    </Button>
                  </InputGroup>
                </td>
              </tr>
              <tr>           
                <td>Cidade: {
                  cidade.localidade ? cidade.localidade : "Cep invalido!"
                }</td>
              </tr>
            </tbody>
          </TableBS>
        </Col>
        <Col xs={8}>
          <TableBS hover >
            <tbody>
              <tr>           
                <td>Valor Entrega</td>
                <td>{
                  cidade.ddd ? `R$ ${cidade.ddd }`: 'Cep invalido'
                }</td>
              </tr>
              <tr>           
                <td>Valor Total</td>
                <td>R$ {
                  cidade.localidade ? 
                  (totalPrice + parseFloat(cidade.ddd)).toFixed(2)
                  : totalPrice.toFixed(2)
                }</td>
              </tr>
            </tbody>
          </TableBS>
        </Col>
      </Row>
    </>
  );
};
  