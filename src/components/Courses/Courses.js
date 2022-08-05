import React from 'react';

const Courses = () => {
    fetch('../../fakeData/courses.json')
        .then(res => res.json())
        .then(data => console.log(data))
    return (
        <div>
            
        </div>
    );
};

export default Courses;