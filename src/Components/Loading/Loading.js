import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-100 spinner'>
            <Spinner animation="border" variant="info" />
        </div>
    );
};

export default Loading;