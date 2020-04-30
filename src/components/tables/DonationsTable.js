import React, { Component } from "react";
import axios from "axios";
import MaterialTable from 'material-table';

export default class DonationsTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns: [
                { title: 'Start date', field: 'createdAt' },
                { title: 'Finish date', field: 'expireAt' },
                { title: 'Quantity', field: 'quantity' },
                { title: 'Group', field: 'group' },
            ],
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/v1/donations`)
            .then((response) => this.setState({
                data: response.data
            }))
            .catch( (err) => console.log('[Donations Table get data]: ' + err) );
    }

    render() {
        console.log(this.state);
        return (
            <MaterialTable
                title="Donations"
                columns={this.state.columns}
                data={this.state.data}
                editable={{
                    onRowAdd: async (newData) => {
                        axios.post('http://localhost:5000/api/v1/donations/', newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowUpdate: (newData) => {
                        axios.put(`http://localhost:5000/api/v1/donations/${newData.id}`, newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowDelete: (oldData) =>{
                        axios.delete(`http://localhost:5000/api/v1/donations/${oldData.id}`)
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
