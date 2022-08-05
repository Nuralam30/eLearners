import React from 'react';

const Courses = () => {
    
    fetch("./courses.json")
        .then(res => res.json())
        .then(data => {
            const img = data[0].img;
            console.log(img)
        })

    return (
        <div>
            {/* <img src={}" alt="" /> */}
        </div>
    );
};

export default Courses;