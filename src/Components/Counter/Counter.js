import React from 'react';

const counter = (props) => {
    const count = props.count;
    const total = count.reduce((total, ct) => total + ct.course_fee , 0)
    return (
        <div>
            <h3>counter</h3>
            <hr/>
            <h6>Course: {count.length}</h6>
            <h6>Price: ${total}</h6>
        </div>
    );
};

export default counter;