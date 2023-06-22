import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
                <h3>LOCKER</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/muebles`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Muebles</NavLink>
                <NavLink to={`/category/iluminacion`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Iluminación</NavLink>
                <NavLink to={`/category/espejos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Espejos</NavLink>              
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar