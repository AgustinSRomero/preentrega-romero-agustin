import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar (){
    return (
        <nav>
            <div className='brand'>
                <h1>
                    <Link to="/">Elisa
                    </Link>
                </h1>
                <h5>Mercería</h5>
            </div>

            <div className='links-container'>
                <ul>
                    <li>
                        <Link to="/category/agujas" className='nav-link'>Agujas</Link>
                    </li>
                    <li>
                        <Link to="/category/hilos" className='nav-link'>Hilos</Link>
                    </li>
                    <li>
                        <Link to="/category/puntilla" className='nav-link'>Puntilla</Link>
                    </li>
                    <li>
                        <Link to="/category/cierres" className='nav-link'>Cierres</Link>
                    </li>
                    <li>
                        <Link to="/category/cintas" className='nav-link'>Cintas</Link>
                    </li>
                </ul>
            </div>

            <div className='icons-position'>
                <Link to="/cart"><CartWidget/></Link>
            </div>
        </nav>
    )
}

export default NavBar;