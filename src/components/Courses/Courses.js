import React, { useEffect, useState } from 'react';
import './Courses.css';


const Courses = () =>{
    const [courses, setCourses] = useState([]);

    useEffect( () =>{
        fetch("./courses.json")
        .then(res => res.json())
        .then(data => setCourses(data))
    })
    
    return (
        <div className='courses'>
            <div className='row'>
            {
                courses.map(course => 
                    <div className='col-md-3'>
                        <div className="single-course">
                            <img src={course.img} alt="" />
                            <h5>{course.name}</h5>
                            <button className='btn btn-sm btn-secondary'>enroll now</button>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    );
};

export default Courses;