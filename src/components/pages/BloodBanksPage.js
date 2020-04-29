import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import '../../styles/Page.css';
import Table from "../tables/BloodBanksTable";

class BloodBanksPage extends Component {

    render() {
        return (
            <div className="Page">
                <Menu />
                <h1>Blood Banks</h1>
                <Table/>
            </div>
        );
    }
}

export default BloodBanksPage;
