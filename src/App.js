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
        <ItemListContainer greeting='Hola, bienvenido a mi proceso de Tienda!' />
      </main>
    </div>
  )
}

export default App;
