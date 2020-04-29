import React, {Component} from 'react';
import { Typography, Link } from '@material-ui/core'
import logo from '../images/AD.png'
import '../styles/Menu.css';

class Menu extends Component{

    render(){
        return (
            <div>
                <Typography className="Menu">
                    <Link href="/">
                        <img src={logo} alt={"logo"} className={'logo'}/>
                    </Link>
                    <Link href="/animals" className="link">
                        Animals
                    </Link>
                    <Link href="/bloodBanks" className="link">
                        Blood Banks
                    </Link>
                    <Link href="/bloodRequests" className="link">
                        Blood Requests
                    </Link>
                    <Link href="/clinics" className="link">
                        Clinics
                    </Link>
                    <Link href="/donations" className="link">
                        Donations
                    </Link>
                    <Link href="/medicalChecks" className="link">
                        Medical Checks
                    </Link>
                    <Link href="/staff" className="link">
                        Staff
                    </Link>
                    <Link href="/users" className="link">
                        Users
                    </Link>
                </Typography>
            </div>
        )
    }
}

export default Menu;
