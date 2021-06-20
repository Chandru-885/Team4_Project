import React, { Component } from 'react'
import {Button,Card,Row,Container} from 'react-bootstrap' 
import './searchbar.css'
import { FaStar } from "react-icons/fa";
import PopularPage from './Search_sort/popularpage';
// import { hashHistory } from 'react-router';
// import {
// 	BrowserRouter as Router,
// 	Route,
// 	Switch,
// 	BrowserRouter,
// 	useHistory
// } from 'react-router-dom';
import { withRouter } from "react-router-dom";

export default class SearchPage extends Component {
    constructor(props){
        super(props);
            this.state = {popularbooks:[],query:"",ratingsall:"sort=-ratings",below_500 : "&price[lt]=500",AboveEqual_500:"&price[gte]=500",AboveEqual_1000:"&price[gte]=1000"}
    }

    price(selectedquery){
        console.log("selectedquery",selectedquery)
        var query_ = this.state.query + selectedquery;
        console.log("query_",query_)
        var API = `http://localhost:4000/books/?${this.state.ratingsall}${query_}`
        console.log("API",API)
        fetch(API,{
            headers:{'content-type': 'application/json'},
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({popularbooks : data.data})
            // hashHistory.push('/');
            this.props.history.push({path: '/', state: this.state.popularbooks });
        });
       
    }

    render() {
        console.log("alldeals",this.state.popularbooks)

        return (
            <>
                <div className="pl-4 pt-2">
                        <div className="search1 mt-3"> <h2>Search</h2> </div>
                                
                                <div className="pTagAsLinkTag">
                                    <h6>Price</h6>
                                    {/* <Link to = {{path : '/popularpage' query : this.state.popularbooks }}></Link> */}
                                    <div>
                                        {/* <PopularPage value={this.state.popularbooks}/> */}
                                        <p variant="link" onClick={this.price.bind(this,this.state.below_500)}>Below 500</p> <br></br>
                                    </div>
                                     <p variant="link" onClick={this.price.bind(this,this.state.AboveEqual_500)}>500 and Above</p> <br></br>
                                    <p variant="link" onClick={this.price.bind(this,this.state.AboveEqual_1000)}>1000 and Above </p> <br></br>
                                </div><br></br>
                                <div className="pTagAsLinkTag">
                                    <h6>Discount</h6>
                                    <p variant="link" onClick={e => alert('50')}>50% and Above</p> <br></br>
                                    <p variant="link" onClick={e => alert('30')}>30% and Above</p> <br></br>
                                    <p variant="link" onClick={e => alert('10')}>10% and Below</p> <br></br>
                                </div><br></br>
                                <div className="pTagAsLinkTag">
                                    <h6>Reviews</h6>
                                    <p variant="link" onClick={e => alert('1star')}>
                                        <i className="text-warning"><FaStar/></i>
                                    </p>
                                    <p variant="link" onClick={e => alert('1star')}>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                    </p>
                                    <p variant="link" onClick={e => alert('1star')}>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                    </p>
                                    <p variant="link" onClick={e => alert('1star')}>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                    </p>   
                                    <p variant="link" onClick={e => alert('1star')}>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                    </p>
                                <div>
                                    <h5>Sort</h5>
                                        <h6>Price</h6>
                                            <Button variant="link" className="custom-btn" onClick={e => alert('Low To High')}>Low To High</Button> <br></br>
                                            <Button variant="link" className="custom-btn" onClick={e => alert('High To Low')}>High To Low</Button> <br></br>
                                </div><br></br>
                                <div>
                                    <h6>Discount</h6>
                                    <Button variant="link" className="custom-btn" onClick={e => alert('Low To High')}>Low To High</Button> <br></br>
                                    <Button variant="link" className="custom-btn" onClick={e => alert('High To Low')}>High To Low</Button> <br></br>
                                </div><br></br>
                                <div>
                                    <h6>Languages</h6>
                                    <Button variant="link" className="custom-btn" onClick={e => alert('English')}>English</Button> <br></br>
                                    <Button variant="link"className="custom-btn" onClick={e => alert('Tamil')}>Tamil</Button> <br></br>
                                    <Button variant="link" className="custom-btn" onClick={e => alert('Hindi')}>Hindi</Button> <br></br>
                                </div>
                            </div>
                                
                </div>
                {/* {this.state.popularbooks} */}
                                    
            
            </>
        )
    }
}


