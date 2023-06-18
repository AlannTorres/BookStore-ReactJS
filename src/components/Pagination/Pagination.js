import { useState } from 'react';
import { saveBookInCartAction } from '../../store/action';
import { useAppContext } from '../../store/AppContext';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './index.css'

export const Pagination = () => {
    const { state, dispatch } = useAppContext();
    const [ itensPerPage ] = useState(3);
    const [ currentPage, setCurrentPage ] = useState(0);
    const [ itensLoading, setItensLoading ] = useState({});

    const pages = Math.ceil(state.books.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = state.books.slice(startIndex, endIndex);

    const handlerClick = async (book) => {
        setItensLoading((prevState) => {
            return {
                ...prevState,
                [book.bookId]: true
            }
        });
        await saveBookInCartAction(dispatch, book)
        setItensLoading((prevState) => {
            return {
                ...prevState,
                [book.bookId]: false
            }
        });
    }

    return (
        <Container fluid>
            <Row className='justify-content-center' >
                <Col className='button-pagination p-0 justify-content-center' xs={1} md={1}>
                    <Button className='button-pagination' variant="outline-dark" label='<' onClick={(e) => setCurrentPage(
                        currentPage === 0 ? currentPage : currentPage-1
                    )} />
                </Col>
                {currentItens.map((book, bookIndex) => {
                    return (
                        <Col className='button-pagination justify-content-center' key={bookIndex} xs={4} md={3}>
                            <Card 
                                title={book.title} 
                                author={book.author} 
                                price={book.price} 
                                image={book.capa}
                                onClick={() => handlerClick(book)}
                                loading={itensLoading[book.bookId]}
                                loadingLabel={'Adicionando...'} 
                            />
                        </Col>
                    )
                })}
                <Col className='button-pagination p-0' xs={1} md={1}>
                    <Button variant="outline-dark" label='>' onClick={(e) => setCurrentPage(
                        currentPage === pages-1 ? currentPage : currentPage+1
                    )} />
                </Col>
            </Row>
        </Container>
    )
}