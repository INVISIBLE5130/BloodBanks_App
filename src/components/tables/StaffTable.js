import React, { Component } from "react";
import axios from "axios";
import MaterialTable from 'material-table';

export default class StaffTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns: [
                { title: 'Full name', field: 'fullName' },
                { title: 'Position', field: 'position' },
                { title: 'Date of birth', field: 'birth' },
                { title: 'Phone number', field: 'phone' },
                { title: 'Qualification', field: 'qualification' },
            ],
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/v1/staff`)
            .then((response) => this.setState({
                data: response.data
            }))
            .catch( (err) => console.log('[Staff Table get data]: ' + err) );
    }

    render() {
        console.log(this.state);
        return (
            <MaterialTable
                title="Staff"
                columns={this.state.columns}
                data={this.state.data}
                editable={{
                    onRowAdd: async (newData) => {
                        axios.post('http://localhost:5000/api/v1/staff/', newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowUpdate: (newData) => {
                        axios.put(`http://localhost:5000/api/v1/staff/${newData.id}`, newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowDelete: (oldData) =>{
                        axios.delete(`http://localhost:5000/api/v1/staff/${oldData.id}`)
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
