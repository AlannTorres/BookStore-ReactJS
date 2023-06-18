import TableBS from "react-bootstrap/esm/Table";
import { useAppContext } from "../../store/AppContext";

export const Cart = () => {
    const { state } = useAppContext()

    const renderRowBook = (book) => {
        const quant = state.cart.filter(books => books.bookId === book.bookId).length
        return ({
            quant: quant,
            priceTotal: (quant * parseFloat(book.price)).toFixed(2)
        })
    }

    const renderPriceTotalCart = () => {
        let priceTotalCart = 0
        state.cart.map((book) => {
            priceTotalCart = priceTotalCart + parseFloat(renderRowBook(book).priceTotal)
        })
        console.log(priceTotalCart)
        return priceTotalCart;
    }

    return (
        <>
            <TableBS striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Preço Unitario</th>
                        <th>Preço Total</th>
                    </tr>
                </thead>
                <tbody>
                    {state.cart.map((book, bookIndex) => {
                        return(
                            <tr>
                                <td></td>
                                <td>{book.title}</td>
                                <td>{renderRowBook(book).quant}</td>
                                <td>R$ {book.price}</td>
                                <td>R$ {renderRowBook(book).priceTotal}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>R$ {renderPriceTotalCart()}</td>
                    </tr>
                </tbody>
            </TableBS>
        </>
    );
}