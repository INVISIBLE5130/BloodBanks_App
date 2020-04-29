import React, { Component } from "react";
import axios from "axios";
import MaterialTable from 'material-table';

export default class MedicalChecksTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns: [
                { title: 'Date', field: 'date' },
                { title: 'Diagnosis', field: 'diagnosis' },
            ],
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/v1/medicalChecks`)
            .then((response) => this.setState({
                data: response.data
            }))
            .catch( (err) => console.log('[Medical Checks Table get data]: ' + err) );
    }

    render() {
        console.log(this.state);
        return (
            <MaterialTable
                title="Medical Checks"
                columns={this.state.columns}
                data={this.state.data}
                editable={{
                    onRowAdd: async (newData) => {
                        axios.post('http://localhost:5000/api/v1/medicalChecks/', newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowUpdate: (newData) => {
                        axios.put(`http://localhost:5000/api/v1/medicalChecks/${newData.id}`, newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowDelete: (oldData) =>{
                        axios.delete(`http://localhost:5000/api/v1/medicalChecks/${oldData.id}`)
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
