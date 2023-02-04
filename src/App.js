import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import PageNotFound from './Components/pages/PageNotFound';
import './Styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Storage/cartContext';
import CartContainer from './Components/CartContainer/CartContainer';

function App(){
  return(
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:id' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartContainer/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
      
    </>
  )
}

export default App;
