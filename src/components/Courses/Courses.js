import React, { useEffect, useState } from 'react';
import './Courses.css';
import Course from '../Course/Course';


const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("./courses.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    })

    // const [cart, setCart] = useState([]);
    const handleAddCourse = (course) =>{
        console.log(course)
    }

    return (
        <div className='courses'>
            <div className='row'>
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