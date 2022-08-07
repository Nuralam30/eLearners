import React from 'react';
import './Course.css';

const Course = (props) => {
    const { img, name, teacher, price } = props.course;
    return (
        <div>
            <div className="single-course">
                <img src={img} alt="" />
                <h5>{name}</h5>
                <p>By : {teacher}</p>
                <p><strong>Price : {price}</strong></p>
                <button onClick={() =>{
                    props.handleAddCourse(props.course)
                }
                } className='btn btn-sm btn-secondary'>enroll now</button>
            </div>

        </div>
    );
};

export default Course;