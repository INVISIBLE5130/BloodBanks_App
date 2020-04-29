import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import '../../styles/Page.css';
import Table from "../tables/StaffTable";

class StaffPage extends Component {

    render() {
        return (
            <div className="Page">
                <Menu />
                <h1>Staff</h1>
                <Table/>
            </div>
        );
    }
}

export default StaffPage;
