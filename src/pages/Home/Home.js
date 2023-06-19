import { fetchBookAction } from '../../store/action';
import { useAppContext } from '../../store/AppContext';
import { useEffect, useState } from 'react';
import { Carousel } from '../../components/Carousel/Carousel';
import { Pagination } from '../../components/Pagination/Pagination';
import { saveBookInCartSuccessType } from '../../store/types';
import { Notification } from '../../components/Notification/Notification';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Slide1 from '../../assets/Slide1.jpg'

import './index.css'

const carroselData = [
    {
        title: 'Despete Tudo',
        subtitle: 'Test 1',
        image: Slide1,
        alt: 'slide1',
    },
    {
        title: 'Despete Tudo',
        subtitle: 'Test 1',
        image: Slide1,
        alt: 'slide1',
    },
    {
        title: 'Despete Tudo',
        subtitle: 'Test 1',
        image: Slide1,
        alt: 'slide1',
    }
]

export const Home = () => {
    const { state, dispatch } = useAppContext();
    const [ showFeedback, setShowFeedback ] = useState(false);

    useEffect(() => {
        fetchBookAction(dispatch)
    }, [dispatch])

    useEffect(() => {
        if (state.type === saveBookInCartSuccessType) {
            setShowFeedback(true)
        }
    }, [state.type])

    return (
        <>
        {showFeedback && (
            <Notification 
                mensage='Adicionado ao carrinho!'
                onClose={() => setShowFeedback(false)}
            />
        )}
        <Container fluid>
            <Row>
                <Col className='mt-1' sm={8}>
                    <Carousel carroselData={carroselData} />
                </Col>
                <Col sm={4}>
                    <Row>
                        <Col className='mt-2' sm={12}>
                        <img
                            className="d-block w-100"
                            src='https://images.pexels.com/photos/3060324/pexels-photo-3060324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        />
                        </Col>
                        <Col className='mt-2' sm={12}>
                        <img
                            className="d-block w-100"
                            src='https://images.pexels.com/photos/3060324/pexels-photo-3060324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <h2 className='titulo-produto'>Promoções</h2>   
            <Pagination books={
                state.books.filter(book => book.isPromotion)
            } dispatch={dispatch} itensPage={4} /> 
            <h2 className='titulo-produto'>Livros</h2>
            <Pagination books={state.books} dispatch={dispatch} itensPage={4} /> 
        </Container>
        </>
    );
}