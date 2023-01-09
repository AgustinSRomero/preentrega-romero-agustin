import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getProducts from '../../Services/mockService';
import { getProductsbyCategory } from '../../Services/mockService';
import Item from './Item'

function ItemListContainer(){
    const [products, setProducts] = useState([])
    const categoryParam = useParams().id

    useEffect(() => {
        if (!categoryParam) {
            getProducts()
                .then((response) => {setProducts(response)})
                .catch((error) => {alert(error)}) 
        } else {
            getProductsbyCategory(categoryParam)
                .then((response) => {setProducts(response)})
                .catch((error) => {alert(error)})        
        }
    }, [categoryParam])
    
    return(
        <main className='main-container' id='ItemListContainer'>
            <div className='item-list-container'>
                {products.map((productIterated) => {
                    return(<Item id={productIterated.id} key={productIterated.id} product={productIterated}/>)
                })}
            </div>
        </main>
    )
}

export default ItemListContainer;