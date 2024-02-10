import React, { useState } from 'react';
import Card from "./Card";

const Cards = (props) => {

    const { category, courses } = props;
    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses() {
        if(category === "All" || !category){
            let allcourses = [];
            Object.values(courses).forEach((array) =>{
                array.forEach((coursesData) =>{
                    allcourses.push(coursesData);
                });
            });
            return allcourses;
        } else {
            return courses[category] || []; // Return empty array if category doesn't exist
        }
    }

    const coursesToShow = getCourses();

    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {coursesToShow && coursesToShow.map((course) => (
                <Card course={course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
            ))}
        </div>
    );
};

export default Cards;
