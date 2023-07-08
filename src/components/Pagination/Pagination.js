import { useEffect, useState } from 'react';
import { fetchBookAction, saveBookInCartAction } from '../../store/action';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './index.css'

export const Pagination = ({ books, dispatch, itensPage }) => {
    const [ itemsPerPage, setItemsPerPage ] = useState(itensPage);
    const [ currentPage, setCurrentPage ] = useState(0);
    const [ itensLoading, setItensLoading ] = useState({});

    const pages = Math.ceil(books.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
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
    
    const handleResize = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth >= 1200) {
        setItemsPerPage(4);
        } else if (windowWidth >= 992) {
        setItemsPerPage(3);
        } else if (windowWidth >= 768) {
        setItemsPerPage(2);
        } else {
        setItemsPerPage(1);
        }
    };

    useEffect(() => {
        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        fetchBookAction(dispatch)
    }, [])

    return (
        <Container className='container-pagination p-0' fluid>
            <Row className='justify-content-center m-0' >
                <Col className='button-pagination justify-content-end p-0 m-0' xs={2} md={1}>
                    <Button 
                        variant="outline-dark" 
                        label='<' 
                        onClick={(e) => setCurrentPage(
                            currentPage === 0 ? currentPage : currentPage - 1
                        )} 
                    />
                </Col>
                <Col className='p-0' xs={8} md={10}>
                    <Row className='justify-content-center'>
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
                <Col className='button-pagination justify-content-start p-0' xs={2} md={1}>
                    <Button 
                        variant="outline-dark" 
                        label='>' 
                        onClick={(e) => setCurrentPage(
                        currentPage === pages - 1 ? currentPage : currentPage + 1
                        )} 
                    />
                </Col>
            </Row>
        </Container>
    )
}