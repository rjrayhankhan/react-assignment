import React from 'react';
import './Detail.css';
import '../Cssfile/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare} from '@fortawesome/free-solid-svg-icons';

const detail = (props) => {
    const {course_name, name, course_fee} = props.course;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="container">
                  <h3>{course_name}</h3>
                  <p>{name}</p>
                  <h4>Price:${course_fee}</h4>
                  <button onClick={() => handleAddCountry(props.course)} className="btn btn-primary"><FontAwesomeIcon icon={faPlusSquare} />  Enroll_Now</button>
            
        </div>
    );
};

export default detail;