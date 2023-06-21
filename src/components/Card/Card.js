import { Button } from '../Button/Button';

import CardBS from 'react-bootstrap/Card';

import './index.css'

export const Card = ({ image, title, author, price, onClick, loading, loadingLabel, color, variant, isPromotion, discount }) => {    
    return (
        <CardBS className='card' >
            <CardBS.Img className='card-img' variant="top" src={image} />
            <CardBS.Body className='p-3'>
                <CardBS.Title className='text-truncate'>
                    <span>{title}</span>
                </CardBS.Title>
                <CardBS.Text className='text-truncate'>
                    {author}
                </CardBS.Text>
                <CardBS.Text className='fw-bold fs-5'>
                    {isPromotion ? (
                        <>
                            <del className='fs-6'>R$ {price}</del> 
                            <span> R$ {(parseFloat(price)*discount).toFixed(2)}</span>
                        </>
                        ) : <span>R$ {price}</span>
                    }
                </CardBS.Text>
            </CardBS.Body>
            <CardBS.Body className='p-1'>
                <Button 
                    className='card-button'
                    label='Adicionar ao carrinho' 
                    variant={variant}
                    loading={loading} 
                    loadingLabel={loadingLabel}
                    onClick={onClick} 
                    color={color}
                />
            </CardBS.Body>
        </CardBS>
    );
}