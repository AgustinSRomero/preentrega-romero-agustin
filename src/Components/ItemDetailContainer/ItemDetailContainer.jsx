import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { getProduct } from '../../Services/firebase';
import ItemDetail from './ItemDetail';
import { useParams, Link } from 'react-router-dom';
import { cartContext } from '../../Storage/cartContext';
import Loader from '../Loader/Loader';



const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isInCart, setIsInCart] = useState (false)
    const [alertText, setAlertText] = useState()

    let param = useParams()
    

    const { addToCart } = useContext(cartContext)

    function handleAddToCart(count){
        setIsInCart(true)
        addToCart({...product, count: count}); //creo una copia del producto y le agrego una prop count con la cantidad agregada al carrito.
    }

    useEffect(() => {
        setIsLoading(true)

        getProduct(param.id)
            .then((response) => {
                setProduct(response)
            })
            .catch((error) => {setAlertText(error)})
            .finally(() => setIsLoading(false))
    }, [param])
    
    if (isLoading) {
        return <Loader></Loader>
    } else {
        return (
            <>
            {alertText?
                <div style={{color:"#596f91", display:"flex", flexDirection:"column", flexWrap:"wrap", alignItems:"center"}}>                    
                    <h3 style={{marginTop:"60px"}}>No se encuentra el producto</h3>
                    <Link to={"/"} style={{color:"#596f91", textDecoration:"underline"}}>Volver al inicio</Link>
                </div>

                :

                <main className='main-container' id='ItemDetailContainer'>
                    <ItemDetail product={product} onAddToCart={handleAddToCart} isInCart={isInCart}/>
                </main>
            }
            </>
        ) 
    }
  
}

export default ItemDetailContainer