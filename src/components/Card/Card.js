import { Button } from '../Button/Button';

import CardBS from 'react-bootstrap/Card';

import './index.css'

export const Card = ({ image, title, author, price, onClick, loading, loadingLabel }) => {    
    return (
        <CardBS className='card' >
            <CardBS.Img className='card-img' variant="top" src={image} />
            <CardBS.Body className='p-1'>
                <CardBS.Title className='text-truncate'>
                    <span>{title}</span>
                </CardBS.Title>
                <CardBS.Text>
                    {author}
                </CardBS.Text>
                <CardBS.Text className='fw-bold'>
                    {price}
                </CardBS.Text>
            </CardBS.Body>
            <CardBS.Body className='p-1'>
                <Button 
                    label='Adicionar ao carrinho' 
                    variant='primary' 
                    loading={loading} 
                    loadingLabel={loadingLabel}
                    onClick={onClick} 
                />
            </CardBS.Body>
        </CardBS>
    );
}