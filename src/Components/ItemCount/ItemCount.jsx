import React from "react";
import { useState, useEffect } from "react";
import Button from "../Button/Button";


function ItemCount({ stockCheck, onAddToCart, buttonAdd, countCart}){
    const [count, setCount] = useState(1);

    useEffect(() => {
        if(countCart){
            setCount(countCart)
        }
    }, [])


    function emptyStock(){
        if(stockCheck === 0){return false;}else{return true}
    }

    function Add(){
        if (count < stockCheck) {
            setCount(count + 1);
        }
    }

    function Subtract(){
        if (count > 1) {
            setCount(count - 1);
        }
    }
    
    return (
        <div className= "item-count-container">
            <div className="count-buttons">
                <Button onClick={Subtract} disabled={count === 1} class="button-substract">-</Button>
                <p>{count}</p>
                <Button onClick={Add} disabled={count === stockCheck} class="button-add">+</Button>
            </div>
            {buttonAdd && emptyStock()?
                <div className="add-cart-button">
                    <Button onClick={() => onAddToCart(count)}>Añadir al Carrito</Button>
                </div>
                :
                <></>
            }
        </div>
    )
}

export default ItemCount