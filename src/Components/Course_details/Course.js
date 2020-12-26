import React, { useEffect, useState } from 'react';
import data from '../../fakeData/data.json'
import Counter from '../Counter/Counter';
import Detail from '../CourseDetail/Detail'
import './Course.css'


const Course = () => {
   const [course, setCourse] = useState([]);
   const [count, setCount] = useState([]);

   const handleAddCountry = (course) =>
 { console.log('added', course);
 const newCount = [...count, course];
 setCount(newCount);
}

useEffect(() => {
    setCourse(data)
}, [])



    return (
        <div className="aria-container">
                <div className="main-container">
                {
                    course.map( cd => <Detail course = {cd} handleAddCountry = {handleAddCountry}></Detail> )
                }
                </div>
                <div className="count-container">

                       <Counter count = {count}></Counter>
                   
                </div>
        </div>
    );
};

export default Course;