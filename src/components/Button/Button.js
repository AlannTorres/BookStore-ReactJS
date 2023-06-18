import Badge from 'react-bootstrap/Badge';
import ButtonBS from 'react-bootstrap/Button';
import SpinnerBS from 'react-bootstrap/Spinner';

import './index.css'

export const Button = ({ label, total, variant, src, onClick, loadingLabel, loading }) => {
    return (
        <ButtonBS className='button' variant={variant} onClick={onClick} >
            {src}
            {loading && (
                <>
                    <SpinnerBS
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    >
                        <span className="visually-hidden">Adicionando...</span>
                    </SpinnerBS>{' '}
                </>
            )}
            {loading ? loadingLabel : label}
            <Badge className='badge' bg="secondary">
                {total}
            </Badge>
        </ButtonBS>
    )
}