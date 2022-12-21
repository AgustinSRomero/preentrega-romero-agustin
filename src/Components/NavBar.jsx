import CartWidget from './CartWidget';

function NavBar (){
    return (
        <nav>
            <div className='brand'>
                <h1>
                    <a href="">Elisa
                    </a>
                </h1>
                <h5>Mercería</h5>
            </div>

            <div className='links-container'>
                <ul>
                    <li>
                        <a href="" className='nav-link'>Agujas</a>
                    </li>
                    <li>
                        <a href="" className='nav-link'>Hilos</a>
                    </li>
                    <li>
                        <a href="" className='nav-link'>Elástico</a>
                    </li>
                    <li>
                        <a href="" className='nav-link'>Cierres</a>
                    </li>
                    <li>
                        <a href="" className='nav-link'>Cintas</a>
                    </li>
                </ul>
            </div>

            <div className='icons-position'>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;