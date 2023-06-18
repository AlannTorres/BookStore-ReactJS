import ReactDOM from 'react-dom';
import Alert from 'react-bootstrap/Alert'

import './index.css'

export const Notification = ({ onClose, mensage}) => {
    return ReactDOM.createPortal(
        <div className='notification'>
            <Alert variant='success' onClose={onClose} dismissible>
                {mensage}
            </Alert>
        </div>,
        document.body
    );
}