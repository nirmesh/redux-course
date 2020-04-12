import React, { Component } from "react";
import { connect } from 'react-redux';
import * as courseActions from '../redux/actions/courseActions';
import * as authorActions from '../redux/actions/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import courserList from './CourseList';
import CourseList from "./CourseList";

class CoursesPage extends Component {
   
    componentDidMount(){
        if(this.props.courses.length==0){
            this.props.actions.loadCourses().catch(error=>{
                alert("loading courses failed.."+error);
            });
        }
        if(this.props.authors.length==0){
            this.props.actions.loadAuthors().catch(error=>{
                alert("loading author failed.."+error);
            });
        }
    }

    

    render() {

        return (
            <>
                <h2>courses</h2>
                {/* {this.props.courses.map(course => (
                    <div key={course.title} >{course.title}</div>
                ))} */}
                <CourseList courses={this.props.courses}/>
        </>
        )
    }
}

CoursesPage.propTypes = {
    //dispatch:PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    // createCourse:PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired
}


function mapStateToProps(state, ownProps) {
    return {
        courses: state.authors.length===0?[]:state.afterChange.map(course=>{
            return {
                ...course,authorName:state.authors.find(a=>a.id===course.authorId).name
            }
        }),
        authors:state.authors
    }
}
// function mapDispatchToProps(dispatch){
//     return {
//         createCourse:course=> dispatch(courseActions.createCourse(course))
//     }
// }
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
