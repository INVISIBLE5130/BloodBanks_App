import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import '../../styles/Page.css';
import Table from "../tables/MedicalChecksTable";

class MedicalChecksPage extends Component {

    render() {
        return (
            <div className="Page">
                <Menu />
                <h1>Medical Checks</h1>
                <Table/>
            </div>
        );
    }
}

export default MedicalChecksPage;
