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

            <div>
                <ul>
                    <li>
                        <a href="" className='nav-link'>Catálogo</a>
                    </li>
                    <li>
                        <a href="" className='nav-link'>Ofertas</a>
                    </li>
                    <li>
                        <a href="" className='nav-link'>Ojal y Botón</a>
                    </li>
                    <li>
                        <a href="" className='nav-link'>Nosotros</a>
                    </li>
                    <li>
                        <a href="" className='nav-link'>Contacto</a>
                    </li>
                </ul>
            </div>

            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;