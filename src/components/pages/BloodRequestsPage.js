import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import '../../styles/Page.css';
import Table from "../tables/BloodRequestsTable";

class BloodRequestsPage extends Component {

    render() {
        return (
            <div className="Page">
                <Menu />
                <h1>Blood Requests</h1>
                <Table/>
            </div>
        );
    }
}

export default BloodRequestsPage;
