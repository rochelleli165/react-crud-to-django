import React, { Component } from 'react'
import TeacherService from '../services/TeacherService'
import { useParams } from 'react-router-dom';

class ViewTeacherComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: window.location.pathname.split("/")[2],
            Teacher: {}
        }
    }

    componentDidMount(){
        TeacherService.getTeacherById(this.state.id).then( res => {
            this.setState({Teacher: res.data});
        })

    }
    
    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Teacher Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Teacher Name: </label>
                            <div> { this.state.Teacher.name }</div>
                        </div>
                        <div className = "row">
                            <label> Teacher Age: </label>
                            <div> { this.state.Teacher.age}</div>
                        </div>
                        <div className = "row">
                            <label> Teacher ID: </label>
                            <div> { this.state.Teacher.id }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewTeacherComponent