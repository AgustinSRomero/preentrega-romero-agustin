import React from 'react'
import { useState, useEffect } from 'react';
import { getProduct } from '../../Services/mockService';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);

    let param = useParams()

    useEffect(() => {
        getProduct(param.id)
            .then((response) => {
                setProduct(response)
            })
            .catch((error) => {alert(error)})
    }, [param])
  
    return (
        <main className='main-container' id='ItemDetailContainer'>
            <ItemDetail product={product}/>
        </main>
    )
}

export default ItemDetailContainer