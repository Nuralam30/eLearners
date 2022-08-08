import React, { useEffect, useState } from 'react';
import './Courses.css';
import Course from '../Course/Course';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';


const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("./courses.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    })

    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) => {
        // console.log(course)
        const newCart = [...cart, course];
        setCart(newCart)
    }

    return (
        <div>
            <div className="search-and-cart">
                <div className="search-course">
                    <i>
                        <FontAwesomeIcon icon={faSearch} />
                    </i>
                    <input type="text" placeholder='Search for anything' />
                </div>

                <div className='cart' >
                    <div className="cart-items">
                        {
                            <Cart cart={cart}></Cart>
                        }
                    </div>

                    <div className="cart-icon" onClick={() => {
                        const item = document.querySelector('.cart-items');
                        item.classList.toggle('show');
                    }}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <sup>{cart.length}</sup>
                    </div>
                </div>
            </div>
            <div className='row courses'>
                {
                    courses.map(co =>
                        <div className="col-lg-3 col-md-6">
                            <Course handleAddCourse={handleAddCourse} course={co}></Course>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Courses;