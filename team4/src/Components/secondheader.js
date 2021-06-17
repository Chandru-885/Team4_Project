import React, { Component } from 'react'
import {Button} from 'react-bootstrap' 
import {Link} from "react-router-dom";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SecondPage from './Search_sort/secondpage'
import PopularPage from './Search_sort/popularpage';
import TodayDealsPage from './Search_sort/todaydealspage';
import AllBooksPage from './Search_sort/allbookspage';

export default class SecondHeader extends Component {


    render() {
        
        return (
            <>
            <Router>
           
                <nav className="navbar navbar-expand-lg navbar-light p-3">
                <div id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <Button variant="outline-primary border-0"><Link to="/allbookspage">All</Link></Button>
                        <Button variant="outline-primary border-0"><Link to="/todaydealspage">Today Deals</Link></Button>
                        <Button variant="outline-primary border-0"><Link to="/secondpage">New Releases</Link></Button>
                        <Button variant="outline-primary border-0"><Link to="/popularpage">Popular Books</Link></Button>
                    </ul>
                </div>
                </nav>

                <Switch>
                    <Route path="/allbookspage" component={AllBooksPage}></Route>
                    <Route path="/todaydealspage" component={TodayDealsPage}></Route>
                    <Route path="/secondpage" component={SecondPage}></Route>
                    <Route path="/popularpage" component={PopularPage}></Route> 
                </Switch>
                
                
            </Router>
            
            </>
        )
    }
}