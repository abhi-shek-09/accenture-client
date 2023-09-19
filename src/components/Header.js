import React from "react";
import logo from "../imgs/logo1.png";
import '../styles/Main.css'
export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Issue Portal" className="header--img"/>
            <h4 className="header--issues"><a href="./myIssues" className="header--issues--link">Live Issues</a></h4>
        </header>
    );
}
