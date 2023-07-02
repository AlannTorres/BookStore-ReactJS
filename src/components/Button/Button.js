import Badge from 'react-bootstrap/Badge';
import ButtonBS from 'react-bootstrap/Button';
import SpinnerBS from 'react-bootstrap/Spinner';

import './index.css'

export const Button = ({ className, label, total, variant, src, onClick, loadingLabel, loading }) => {
    return (
        <ButtonBS className={'button '+className} variant={variant} onClick={onClick} disabled={loading} >
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