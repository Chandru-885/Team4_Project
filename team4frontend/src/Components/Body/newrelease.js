import React, { Component } from 'react'
import {Button,Card,Row,Container} from 'react-bootstrap' 
import fiction2  from "../images/nonfic3.JPG"
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa"
import { FaStar } from "react-icons/fa"
import {Link} from "react-router-dom";
import './design.css';


export default class NewRelease extends Component {

    constructor(){
        super();
        this.state = {newrelease : []}
    }


    componentDidMount(){
        fetch('http://localhost:4000'+'/books/?sort=-date',{
            headers:{'content-type': 'application/json'},
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({newrelease : data.data})
        });
        console.log("alldeals",this.state.newrelease)
    }

    decidenow(){
        console.log("decide function")
        alert("Please Login!")
        this.props.history.push('/login')
    }

    render() {
        var newreleaselist = this.state.newrelease.map((books, i)=>{
            if(i < 4){
            return(

                <div className="col-4 col-sm-4 col-md-3 col-lg-3" key={i} style={{maxWidth:"280px"}}>
                    
                    <Card className="card-top border-0 mb-4 card shadow rounded Cardshover">
                        <Link to= {{pathname : '/description', query : books}}>
                            <Card.Img className="card-header bg-white " src={fiction2} variant="top" />
                        </Link>
                        
                        <Card.Body className="card-body text-dark" >
                            <a style={{ textDecoration: "none" }} href={""}>
                                <Card.Title as="div" className="text-dark">
                                    <strong >{books.title}</strong>
                                    <br></br>
                                    <strong style={{fontWeight:"normal"}}>{books.author}</strong>
                                </Card.Title>
                            </a>
                           
                            <Card.Text as="div">
                                <strong style={{ textDecorationLine: 'line-through' }}>Rs. {books.price}</strong>
                                <strong style={{marginLeft:"7px",color:"red"}}>Rs. {books.sellprice}</strong>
                                
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
                {newreleaselist}    
            </>
        )
    }
}