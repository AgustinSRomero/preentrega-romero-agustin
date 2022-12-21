import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import './Styles/App.css';

function App(){


  return(
    <div>
      <header>
        <NavBar/>
      </header>
      
      <main>
        <div className='item-list-container'>
          <ItemListContainer greeting='Hola, bienvenido a mi proceso de Tienda!' />
        </div>
      </main>
    </div>
  )
}

export default App;
