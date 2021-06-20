import React, { Component } from 'react'
import {Button} from 'react-bootstrap' 
import {Link} from "react-router-dom";


export default class SecondHeader extends Component {


    render() {
        
        return (
            <>
            {/* <Router> */}
           
                <nav className="navbar navbar-expand-lg navbar-light p-3">
                <div id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <Link to={"/allbookspage"}><Button variant="outline-primary border-0">All</Button></Link>
                        <Link to={"/todaydealspage"}><Button variant="outline-primary border-0">Today Deals</Button></Link>
                        <Link to={"/newrelease"}><Button variant="outline-primary border-0">New Releases</Button></Link>
                        <Link to={"/popularpage"}><Button variant="outline-primary border-0">Popular Books</Button></Link>
                    </ul>
                </div>
                </nav>
                
                
            {/* </Router> */}
            
            </>
        )
    }
}