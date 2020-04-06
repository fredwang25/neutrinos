import React from "react";
import './CourseCSS.css';

class Course extends React.Component {

    render() {
        return (
        <div className="course" onClick={() => this.props.onClick}>
        {this.props.name}
        </div>
        );
    }
}

export default Course;