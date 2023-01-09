import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ItemCount(props){
    const [count, setCount] = useState(1)
    let id = props.id
    let stock = props.stock

    function Add(){
        if (count < stock) {
            setCount(count + 1);
        } 
    }

    function Subtract(){
        if (count > 1) {
            setCount(count - 1);    
        }
    }
    
    return (
        <div className="item-count-container">
            <div className="count-buttons">
                <button onClick={Subtract} disabled={count === 1} className="button-substract">-</button>
                <p>{count}</p>
                <button onClick={Add} disabled={count === stock} className="button-add">+</button>
            </div>
            <div className="add-cart-button">
                <button id={id}>Añadir al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount