import React, {useContext} from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Storage/cartContext';
import CartItem from './CartItem';
import { createOrder } from '../../Services/firebase';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function CartContainer() {
    const {cart, removeItem, getTotalPriceCart, clearCart, getTotalItemsInCart} = useContext(cartContext);
    const emptyCart = getTotalItemsInCart();

    function handleCheckout(evt){
        const items = cart.map(({id, price, name, count}) => ({id, price, name, count}))

        const order = {
            buyer:{
                name: "Agustin",
                surname: "Romero",
                email: "rom.agus.tcp@gmail.com",
                phone: 2204440044,
                adress: {
                    street: "Calle falsa",
                    number: "1234",
                    province: "Buenos Aires",
                    locality: "Ituzaingó",
                    CP: "1719",
                    obs: "puerta negra",
                }
            },
            items: items,
            total: getTotalPriceCart(),
            date: new Date(),
        }
        createOrder(order).then((id) => {
            const MySwal = withReactContent(Swal)

            Swal.fire({
                icon: 'success',
                title: 'Compra realizada',
                text: `Su orden fue genera, su código es: ${id}`,
            })

            clearCart()
        });
    }

    if(emptyCart === 0){
        return (
            <div className='no-products-carrito-container'>
                <h3>Agregue productos al carrito para finalizar tu compra!</h3>
                <Link to="/"><Button class="default-button">Ir a comprar</Button></Link>
            </div>
        )
    } else {
        return (
            <main className='main-container-' id='Cart-Container'>
                <div>
                    {cart.map((itemInCart) => {
                        return (<CartItem product={itemInCart} key={itemInCart.id} removeItem={removeItem}/>)
                    })}
                </div>
                <h4>Total: ${getTotalPriceCart()}</h4>
                <Button onClick={clearCart} class="default-button">Limpiar Carrito</Button>
                <Button onClick={handleCheckout} class="default-button">Finalizar Compra</Button>
            </main>
        ) 
    }
}

export default CartContainer