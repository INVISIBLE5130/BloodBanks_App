import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import '../../styles/Page.css';
import Table from "../tables/DonationsTable";

class DonationsPage extends Component {

    render() {
        return (
            <div className="Page">
                <Menu />
                <h1>Donations</h1>
                <Table/>
            </div>
        );
    }
}

export default DonationsPage;
