import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
    let {id} = useParams();
    return (
        <div className='page'>
            <h1>Product detail {id}</h1>
        </div>
    );
};
