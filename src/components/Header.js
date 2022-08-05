import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="header">
            <h2 className='logo'>eLearners</h2>
            <div className="search-course">
                <i>
                    <FontAwesomeIcon icon={faSearch} />
                </i>
                <input type="text" placeholder='Search for anything' />
            </div>
            
            <nav>
                <ul className='navlist'>
                    <li className='icon'>
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