import React, { Component } from 'react'
import {Button,Card,Row,Container} from 'react-bootstrap' 
import './searchbar.css'
import { FaStar } from "react-icons/fa";



export default class SearchPage extends Component {

    all(){
        fetch('http://localhost:4000'+'/books/?sort=-ratings',{
            headers:{'content-type': 'application/json'},
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({popularbooks : data.data})
        });
        console.log("alldeals",this.state.popularbooks)
   }

   below500(){
    fetch('http://localhost:4000'+'/books/?sort=-ratings&price[lt]=500',{
        headers:{'content-type': 'application/json'},
    })
    .then(res=>res.json())
    .then(data=>{
        this.setState({popularbooks : data.data})
    });
    console.log("below500",this.state.popularbooks)
   }

   AboveEqual500(){
    fetch('http://localhost:4000'+'/books/?sort=-ratings&price[gte]=500',{
        headers:{'content-type': 'application/json'},
    })
    .then(res=>res.json())
    .then(data=>{
        this.setState({popularbooks : data.data})
    });
    console.log("AboveEqual500",this.state.popularbooks)
   }

   AboveEqual1000(){
    fetch('http://localhost:4000'+'/books/?sort=-ratings&price[gte]=1000',{
        headers:{'content-type': 'application/json'},
    })
    .then(res=>res.json())
    .then(data=>{
        this.setState({popularbooks : data.data})
    });
    console.log("AboveEqual500",this.state.popularbooks)
   }


    render() {
    
        return (
            <>
                
                <div className="pl-4 pt-2">
                        <div className="search1 mt-3">
                                    <h2>Search</h2>
                                </div>
                                
                                <div className="pTagAsLinkTag">
                                    <h6>Price</h6>
                                    <p variant="link" onClick={this.all.bind(this)}>All</p> <br></br>
                                    <p variant="link" onClick={this.below500.bind(this)}>Below 500</p> <br></br>
                                    <p variant="link" onClick={this.AboveEqual500.bind(this)}>500 and Above</p> <br></br>
                                    <p variant="link" onClick={this.AboveEqual1000.bind(this)}>1000 and Above </p> <br></br>
                                </div><br></br>
                                <div className="pTagAsLinkTag">
                                    <h6>Discount</h6>
                                    <p variant="link" onClick={this.all.bind(this)}>All</p> <br></br>
                                    <p variant="link" onClick={e => alert('50')}>50% and Above</p> <br></br>
                                    <p variant="link" onClick={e => alert('30')}>30% and Above</p> <br></br>
                                    <p variant="link" onClick={e => alert('10')}>10% and Below</p> <br></br>
                                </div><br></br>
                                <div className="pTagAsLinkTag">
                                    <h6>Reviews</h6>
                                    <p variant="link" onClick={this.all.bind(this)}>All</p> 
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
                                    
            
            </>
        )
    }
}


