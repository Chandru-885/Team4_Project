import React, { Component } from 'react'
import {Button,Card,Row,Container} from 'react-bootstrap' 
import fiction2  from "../images/fiction1.JPG"
import ProductDetailspage from '../Body/description.js';
import {Link} from "react-router-dom";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SearchPage from '../searchbar';
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa"
import { FaStar } from "react-icons/fa"

export default class PopularBookPage extends Component {

    constructor(){
        super();
        this.state = {popularbooks : []}
    }


    componentDidMount(){
        fetch('http://localhost:4000'+'/books/?sort=-ratings',{
            headers:{'content-type': 'application/json'},
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({popularbooks : data.data})
        });
        console.log("alldeals",this.state.popularbooks)
    }


    render() {
        var popularbookslist = this.state.popularbooks.map((books, i)=>{
            if(i < 4){
            return(
                <div className="col-4 col-sm-4 col-md-3 col-lg-3" key={i} style={{maxWidth:"280px"}}>
                    
                    <Card className="card-top border-0 mb-4 ">
                        <a href={""}>
                            <Card.Img className="card-header bg-white " src={fiction2} variant="top" />
                        </a>
                        <Card.Body className="card-body text-dark" >
                            <a style={{ textDecoration: "none" }} href={""}>
                                <Card.Title as="div" className="text-dark">
                                    <strong >{books.title}</strong>
                                    <br></br>
                                    <strong style={{fontWeight:"normal"}}>{books.author}</strong>
                                </Card.Title>
                            </a>
                           
                            <Card.Text as="div">
                                <strong>Rs. {books.price}</strong>
                                <button class="btn btn-light border-0" style={{float:"right",marginLeft:"5px"}}><i className="text-primary " style={{fontSize:"20px"}}><FaCartPlus/></i></button> 
                                <button class="btn btn-light border-0" style={{float:"right",marginLeft:"5px"}}><i className="text-danger " style={{fontSize:"20px"}}><FaHeart/></i></button>
                                
                                <br></br>   
                            </Card.Text>
                           
                            {/*<Card.Text as="div">
                                <Rating value={books.ratings} text={`reviews`} />
                            </Card.Text>*/}
                            
                            <Card.Text as="div">
                                <strong style={{float:"left"}} variant="link">
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                    </strong>
                                <strong style={{marginLeft:"10px"}}>({books.discount}%)</strong>
                            </Card.Text>


                            {/* <Card.Text as="div" className="card-text">
                                {product.description}
                            </Card.Text> */}
                        </Card.Body>
                    </Card>
                </div>
            )
            }
        })
        
        return (
            <>
            
                {popularbookslist} 
                            
            </>
        )
    }
}