import React, { Component } from "react";
import axios from "axios";
import MaterialTable from 'material-table';

export default class ClinicsTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns: [
                { title: 'Name', field: 'name' },
                { title: 'Phone number', field: 'phone' },
                { title: 'Address', field: 'address' },
                { title: 'Foundation date', field: 'foundationYear' },
                { title: 'City', field: 'city' },
            ],
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/v1/clinics`)
            .then((response) => this.setState({
                data: response.data
            }))
            .catch( (err) => console.log('[Clinics Table get data]: ' + err) );
    }

    render() {
        console.log(this.state);
        return (
            <MaterialTable
                title="Clinics"
                columns={this.state.columns}
                data={this.state.data}
                editable={{
                    onRowAdd: async (newData) => {
                        axios.post('http://localhost:5000/api/v1/clinics/', newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowUpdate: (newData) => {
                        axios.put(`http://localhost:5000/api/v1/clinics/${newData.id}`, newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowDelete: (oldData) =>{
                        axios.delete(`http://localhost:5000/api/v1/clinics/${oldData.id}`)
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
