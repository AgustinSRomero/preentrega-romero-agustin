import { createContext, useState } from "react";

export const cartContext = createContext()

function CartProvider(props){
    const [cart, setCart] = useState([]);
    let newCart = JSON.parse(JSON.stringify(cart));

    function addToCart(prod){
        let checkInCart = cart.findIndex((item) => item.id === prod.id);
        
        if (checkInCart !== -1) {
            newCart[checkInCart].count = newCart[checkInCart].count + prod.count;
        } else {
            newCart.push(prod);
        } 
        setCart(newCart);
    }

    function checkStock(prod){
        let itemInCart = cart.find(item => item.id === prod.id)
        let stockUpdated = prod.stock


        if(itemInCart){
            stockUpdated = prod.stock - itemInCart.count;
        }
        return stockUpdated;
    }


    function removeItem(prodId){
        let itemToRemove = cart.findIndex(item => item.id === prodId)
        newCart.splice(itemToRemove, 1)
        setCart(newCart)
    }

    function clearCart(){
        setCart([])
    }

    function getTotalItemsInCart(){
        let totalItems = 0;
        cart.forEach(item => totalItems += item.count);

        return totalItems;
    }

    function getTotalPriceCart(){
        let totalPrice = 0;
        cart.forEach(item => {totalPrice += item.count * item.price});
        return totalPrice;
    }
    
    return(
        <cartContext.Provider value={{cart, addToCart, getTotalItemsInCart, clearCart, removeItem, getTotalPriceCart, checkStock}}>
            {props.children}
        </cartContext.Provider>
    )
}

export { CartProvider }