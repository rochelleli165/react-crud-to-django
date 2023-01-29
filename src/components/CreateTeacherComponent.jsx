import React, { Component } from 'react'
import TeacherService from '../services/TeacherService';

class CreateTeacherComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: '_add',
            name: '',
            age: '',
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.saveOrUpdateTeacher = this.saveOrUpdateTeacher.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            TeacherService.getTeacherById(this.state.id).then( (res) =>{
                let Teacher = res.data;
                this.setState({
                    id: 0, 
                    name: Teacher.name,
                    age : Teacher.age
                });
            });
        }        
    }
    saveOrUpdateTeacher = (e) => {
        e.preventDefault();
        let Teacher = {id: 0, name: this.state.name, age: this.state.age};
        console.log('Teacher => ' + JSON.stringify(Teacher));

        // step 5
        if(this.state.id === '_add'){
            TeacherService.createTeacher(Teacher).then(res =>{
                this.props.history.push('/Teachers');
            });
        }else{
            TeacherService.updateTeacher(Teacher, this.state.id).then( res => {
                this.props.history.push('/Teachers');
            });
        }
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeAgeHandler= (event) => {
        this.setState({age: event.target.value});
    }

    cancel(){
        this.props.history.push('/Teachers');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Teacher</h3>
        }else{
            return <h3 className="text-center">Update Teacher</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Age: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.age} onChange={this.changeAgeHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateTeacher}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateTeacherComponent