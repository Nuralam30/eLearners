import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';

const Header = () => {
    return (
        <div className="header">
            <h2 className='logo'>eLearners</h2>
            {/* <div className="search-course">
                <i>
                    <FontAwesomeIcon icon={faSearch} />
                </i>
                <input type="text" placeholder='Search for anything' />
            </div> */}
            
            <div className="cart">
                {
                    <Cart></Cart>
                }
            </div>
            
            <nav>
                <ul className='navlist'>
                    <li className='cart-icon' onClick={ () =>{
                        
                        const item = document.querySelector('.cart').children;
                        console.log(item)
                        item.style.display = 'block';
                        // item.classList.toggle('show');
                    }}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <sup>2</sup>
                    </li>
                    <li className='nav-link'>Categories
                        <ul>
                            <li>web development</li>
                            <li>Graphic design</li>
                        </ul>
                    </li>
                    <li className='nav-link'>Courses</li>
                    <li className='nav-link'>Login</li>
                    <li className='nav-link'>Sign up</li>
                </ul>
            </nav>


        </div>
    );
};

export default Header;