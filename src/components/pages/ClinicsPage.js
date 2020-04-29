import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import '../../styles/Page.css';
import Table from "../tables/ClinicsTable";

class ClinicsPage extends Component {

    render() {
        return (
            <div className="Page">
                <Menu />
                <h1>Clinics</h1>
                <Table/>
            </div>
        );
    }
}

export default ClinicsPage;
