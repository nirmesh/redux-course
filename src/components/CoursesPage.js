import React, { Component } from "react";
import {connect} from 'react-redux';
import * as courseActions from '../redux/actions/courseActions';
import PropTypes from 'prop-types';


class CoursesPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state={
//         course:{
//             title:""
//         }
//     }
//     //this.handleChange=this.handleChange.bind(this)
//   }

  state={
        course:{
            title:""
        }
    }
//   handleChange(event){
//       const course={...this.state.course,title:event.target.value};
//       this.setState({course:course});
//   }

handleChange=(event)=>{
    const course={...this.state.course,title:event.target.value};
          this.setState({course:course});
}

handleSubmit=event=>{
    event.preventDefault();
    this.props.dispatch(courseActions.createCourse(this.state.course));
//alert(this.state.course.title)
}

  render() {

    return( 
        <form onSubmit={this.handleSubmit}>
    <h2>courses</h2>
    <h3>add course</h3>
    <input type="text" value={this.state.course.title} onChange={this.handleChange} />
    <input type="submit" value="save"/> 

    {this.props.courses.map(course=>(
       <div key={course.title} >{course.title}</div>
    ))}
    </form>

    )
  }
}

CoursesPage.propTypes={
    dispatch:PropTypes.func.isRequired,
    courses:PropTypes.func.isRequired
}


function mapStateToProps(state,ownProps){
    return {
        courses:state.afterChange
    }
}
// function mapDispatchToProps(){

// }
    

export default connect(mapStateToProps)(CoursesPage);
