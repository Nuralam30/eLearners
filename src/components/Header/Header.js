import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <div className="header">
            <h2 className='logo'>eLearners</h2>
            
            <nav>
                <ul className='navlist'>
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