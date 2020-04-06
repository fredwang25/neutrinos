import React from "react";
import Course from "./Course"
import './CourseCSS.css';

class CourseMap extends React.Component {


    createprereqs(){
        this.prereqs = new Map();
        this.prereqs.set("CS61A", []);
        this.prereqs.set("CS61B", ["CS61A"]);
        this.prereqs.set("CS70", []);
        this.prereqs.set("CS170", ["CS61B", "CS70"]);
        return this.prereqs;
    }

    constructor(props) {
        super(props)
        this.state={
            courses: ["CS61A", "CS61B", "CS70", "CS170"],
            prereqs: this.createprereqs(),
        };
    }

    handleClick(i){
    this.setState(courses[i] = "CLICKED"
        alert(this.prereqs.get(this.state.courses[i]));
    }

    renderCourse(i) {
        return <Course name={this.state.courses[i]} onClick={() => this.handleClick(i)}/>;
    }

    render(){
        return(
        <div>
            {this.renderCourse(0)}
            {this.renderCourse(1)}
            {this.renderCourse(2)}
            {this.renderCourse(3)}
        </div>
        )
    }
}

export default CourseMap;