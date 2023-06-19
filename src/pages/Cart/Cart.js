import { useAppContext } from "../../store/AppContext";

import TableBS from "react-bootstrap/esm/Table";

export const Cart = () => {
    const { state } = useAppContext();
  
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
  
    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.priceTotal), 0).toFixed(2);
  
    return (
      <>
        <TableBS striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Preço Unitário</th>
              <th>Preço Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td></td>
                <td>{item.title}</td>
                <td>{item.quant}</td>
                <td>R$ {item.price}</td>
                <td>R$ {item.priceTotal}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>R$ {totalPrice}</td>
            </tr>
          </tbody>
        </TableBS>
      </>
    );
  };
  