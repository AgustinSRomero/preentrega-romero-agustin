import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProducts, getProductsbyCategory } from '../../Services/firebase';
import Item from './Item'
import Loader from '../Loader/Loader';


function ItemListContainer(){
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [alertText, setAlertText] = useState()
    
    const categoryParam = useParams().id

    useEffect(() => {
        setIsLoading(true)
        setAlertText()

        if (!categoryParam) {
            getProducts()
                .then((response) => {setProducts(response)})
                .catch((error) => {setAlertText(error)}) 
                .finally(() => setIsLoading(false))
        } else {
            getProductsbyCategory(categoryParam)
                .then((response) => {setProducts(response)})
                .catch((error) => {setAlertText(error)})
                .finally(() => setIsLoading(false))       
        }
    }, [categoryParam])
    
    const productCheck = products.length
    console.log(productCheck)

    if (isLoading) {
        return <Loader></Loader>
    } else {
        return(
            <>
            {productCheck === 0?
                <div style={{color:"#596f91", display:"flex", flexDirection:"column", flexWrap:"wrap", alignItems:"center"}}>
                    <h3 style={{marginTop:"60px"}}>No se encuentran productos</h3>
                    <Link to={"/"} style={{color:"#596f91", textDecoration:"underline"}}>Volver al inicio</Link>
                </div>

                :
                
                <main className='main-container' id='ItemListContainer'>
                    {alertText && (alert({alertText}))}
                    <div className='item-list-container'>
                       {products.map((productIterated) => {
                           return(<Item key={productIterated.id} product={productIterated}/>)
                        })}
                    </div>
                </main>
            }
            </>
        ) 
    }
   
}

export default ItemListContainer;