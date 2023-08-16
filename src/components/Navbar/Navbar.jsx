import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'
import { FaShoppingCart } from 'react-icons/fa'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import { useSelector } from 'react-redux'



const Navbar = () => {

  const { totalQuantity } = useSelector(state => state.shoppingCart)

  return (
    <nav className="navbar navbar-dark navbar-expand-sm bg-primary" >
      <div className="container">
        <Link className="navbar-brand" to="/">Fire-Store</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/add">Add</NavLink>
            </li>
            
            <li className="nav-item dropdown">
              <span className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <FaShoppingCart />
                {
                  totalQuantity > 0 &&
                  <span className='position-absolut start-100 translate-middle badge rounded-pill bg-danger'>{ totalQuantity }</span>
                }
                <span className='position-absolut start-100 translate-middle badge rounded-pill bg-danger'>1</span>
              </span>
              <ul className="dropdown-menu dropdown-menu-end shopping-cart">
                <ShoppingCart/>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar