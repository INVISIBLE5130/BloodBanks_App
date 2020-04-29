import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import '../../styles/Page.css';
import Table from "../tables/AnimalsTable";

class AnimalsPage extends Component {

    render() {
        return (
            <div className="Page">
                <Menu />
                <h1>Animals</h1>
                <Table/>
            </div>
        );
    }
}

export default AnimalsPage;
