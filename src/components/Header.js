import React from "react";
export default function Header(){
    return(
        <header className="header">
            <h2 className="header--title">Issue Portal</h2>
            <h4 className="header--issues"><a href="./myIssues" className="header--issues--link">Live Issues</a></h4>
        </header>
    )
}
