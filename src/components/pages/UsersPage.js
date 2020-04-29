import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import '../../styles/Page.css';
import Table from "../tables/UsersTable";

class UsersPage extends Component {

    render() {
        return (
            <div className="Page">
                <Menu />
                <h1>Users</h1>
                <Table/>
            </div>
        );
    }
}

export default UsersPage;
