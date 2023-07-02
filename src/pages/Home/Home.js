import { fetchBookAction, fetchCartAction } from '../../store/action';
import { useAppContext } from '../../store/AppContext';
import { useEffect, useState } from 'react';
import { Carousel } from '../../components/Carousel/Carousel';
import { Pagination } from '../../components/Pagination/Pagination';
import { saveBookInCartSuccessType } from '../../store/types';
import { Notification } from '../../components/Notification/Notification';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import homeImage from '../../assets/HomeImage.png'

import './index.css'
import { Footer } from '../../templates/partials/Footer/Footer';

const carouselData = [
    {
        title: '',
        image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/da0c0336-23ef-4c92-ae88-4b724742061d.__CR0,0,970,600_PT0_SX970_V1___.png',
        alt: 'texto sobre o livro salvar o fogo',
    },
    {
        title: '',
        image: 'https://i0.wp.com/oquartonerd.com.br/wp-content/uploads/2021/03/A-Revolucao-dos-Bichos-vai-ganhar-nova-edicao-de-colecionador-1.png?fit=1920%2C1080&ssl=1',
        alt: "porco com texto ao lado 'fazenda dos animais' ",
    },
    {
        title: '',
        image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/036a465f-9422-4f7a-8f73-a95b57f1d0fd.__CR0,0,970,600_PT0_SX970_V1___.jpg',
        alt: 'Livro anotomia',
    }
]

export const Home = () => {
    const { state, dispatch } = useAppContext();
    const [ showFeedback, setShowFeedback ] = useState(false);

    useEffect(() => {
        fetchBookAction(dispatch)
        fetchCartAction(dispatch)
    }, [])

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
        <Container className='mb-5' fluid>
            <Row>
                <Col className='mt-5' sm={7}>
                    <Carousel carouselData={carouselData} />
                </Col>
                <Col sm={5}>
                    <Row>
                        <Col className='mt-2' sm={12}>
                            <img
                                className="d-block w-100"
                                src={homeImage}
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
        <Footer/>
        </>
    );
}