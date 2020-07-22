import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Link } from "react-router-dom";





export default class NavBar extends React.Component {
    render() {
        return ReactDOM.createPortal(

            <>
                <Link   to={"/"} style={{marginLeft: "20px"}}>Home</Link>
                <Link   to={"/categories"} style={{marginLeft: "20px"}}>Listing</Link>
            </> , document.getElementById('navBar')

        )
    }
}
