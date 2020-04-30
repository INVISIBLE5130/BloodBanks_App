import React, { Component } from "react";
import axios from "axios";
import MaterialTable from 'material-table';

export default class BloodBanksTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns: [
                { title: 'Group', field: 'group' },
                { title: 'Quantity', field: 'quantity' },
                { title: 'Disease', field: 'disease' },
                { title: 'Created at', field: 'createdAt' },
            ],
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/v1/bloodRequests`)
            .then((response) => this.setState({
                data: response.data
            }))
            .catch( (err) => console.log('[Blood Requests Table get data]: ' + err) );
    }

    render() {
        console.log(this.state);
        return (
            <MaterialTable
                title="Blood Requests"
                columns={this.state.columns}
                data={this.state.data}
                editable={{
                    onRowAdd: async (newData) => {
                        axios.post('http://localhost:5000/api/v1/bloodRequests/', newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowUpdate: (newData) => {
                        axios.put(`http://localhost:5000/api/v1/bloodRequests/${newData.id}`, newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowDelete: (oldData) =>{
                        axios.delete(`http://localhost:5000/api/v1/bloodRequests/${oldData.id}`)
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
