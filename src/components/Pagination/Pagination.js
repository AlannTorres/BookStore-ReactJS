import { useEffect, useState } from 'react';
import { fetchBookAction, saveBookInCartAction } from '../../store/action';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './index.css'

export const Pagination = ({ books, dispatch, itensPage }) => {
    const [ itensPerPage ] = useState(itensPage);
    const [ currentPage, setCurrentPage ] = useState(0);
    const [ itensLoading, setItensLoading ] = useState({});

    const pages = Math.ceil(books.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = books.slice(startIndex, endIndex);

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

    useEffect(() => {
        fetchBookAction(dispatch)
    }, [])

    return (
        <Container className='container-pagination p-0' fluid>
            <Row className='justify-content-center m-0' >
                <Col className='button-pagination justify-content-end p-0' xs={4} md={1}>
                    <Button className='button-pagination' variant="outline-dark" label='<' onClick={(e) => setCurrentPage(
                        currentPage === 0 ? currentPage : currentPage-1
                    )} />
                </Col>
                <Col className='p-0' xs={4} md={10}>
                    <Row>
                        {currentItens.map((book, bookIndex) => {
                            return (
                                <Col className='card-pagination p-0' key={bookIndex} xs={12} sm={6} md={3}>
                                    <Card 
                                        title={book.title} 
                                        author={book.author} 
                                        price={book.price} 
                                        image={book.capa}
                                        onClick={() => handlerClick(book)}
                                        loading={itensLoading[book.bookId]}
                                        loadingLabel={'Adicionando...'} 
                                        variant={'secondary'}
                                        discount={book.discount}
                                        isPromotion={book.isPromotion}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
                <Col className='button-pagination justify-content-start p-0' xs={4} md={1}>
                    <Button variant="outline-dark" label='>' onClick={(e) => setCurrentPage(
                        currentPage === pages-1 ? currentPage : currentPage+1
                    )} />
                </Col>
            </Row>
        </Container>
    )
}