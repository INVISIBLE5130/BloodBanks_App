import React, { Component } from "react";
import axios from "axios";
import MaterialTable from 'material-table';

export default class UsersTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns: [
                { title: 'Full name', field: 'fullName' },
                { title: 'Sex', field: 'sex' },
                { title: 'Date of birth', field: 'birth' },
                { title: 'Address', field: 'address' },
                { title: 'Phone number', field: 'phone' },
                { title: 'Email', field: 'email' },
                { title: 'Password', field: 'password' },
            ],
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/v1/users`)
            .then((response) => this.setState({
                data: response.data
            }))
            .catch( (err) => console.log('[Users Table get data]: ' + err) );
    }

    render() {
        console.log(this.state);
        return (
            <MaterialTable
                title="Users"
                columns={this.state.columns}
                data={this.state.data}
                editable={{
                    onRowAdd: async (newData) => {
                        axios.post('http://localhost:5000/api/v1/users/', newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowUpdate: (newData) => {
                        axios.put(`http://localhost:5000/api/v1/users/${newData.id}`, newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowDelete: (oldData) =>{
                        axios.delete(`http://localhost:5000/api/v1/users/${oldData.id}`)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    }
                }}
            />
        );
    }
}
