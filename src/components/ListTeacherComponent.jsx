import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';
import TeacherService from '../services/TeacherService'

class ListTeacherComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                Teachers: []
        }
        this.addTeacher = this.addTeacher.bind(this);
        this.editTeacher = this.editTeacher.bind(this);
        this.deleteTeacher = this.deleteTeacher.bind(this);
    }
    

    deleteTeacher(id){
        TeacherService.deleteTeacher(id).then( res => {
            this.setState({Teachers: this.state.Teachers.filter(Teacher => Teacher.id !== id)});
        });
    }
    viewTeacher(id){
        this.props.history.push(`/view-Teacher/${id}`);
    }
    editTeacher(id){
        this.props.history.push(`/add-Teacher/${id}`);
    }

    componentDidMount(){
        TeacherService.getTeachers().then((res) => {
            this.setState({ Teachers: res.data});
        });
    }

    addTeacher(){
        this.props.navHook('/add-Teacher/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Teachers List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addTeacher}> Add Teacher</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Teacher Id</th>
                                    <th> Teacher Name</th>
                                    <th> Teacher Age</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Teachers.map(
                                        Teacher => 
                                        <tr key = {Teacher.id}>
                                             <td> { Teacher.id} </td>   
                                             <td> {Teacher.name}</td>
                                             <td> {Teacher.age}</td>
                                             <td>
                                                 <button onClick={ () => this.editTeacher(Teacher.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTeacher(Teacher.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewTeacher(Teacher.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

function myParams(Component) {
    return props => <Component navHook={useNavigate()} />;
}

export default myParams(ListTeacherComponent);