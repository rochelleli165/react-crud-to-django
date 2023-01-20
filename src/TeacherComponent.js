import React from 'react'
import APIService from './APIService'
import axios from 'axios';

export default class TeacherComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            teachers: []
        }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/testdb")
            .then(response => response.data)
            .then((data) => {
                this.setState({ teachers: data });
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Teacher Details</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Teacher Id</th>
                            <th>Teacher Name</th>
                            <th>Teacher age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                        }
                    </tbody>
                </table>
            </div>
        )
    }
}