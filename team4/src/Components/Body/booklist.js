import React, { Component } from 'react'
import {Button,Card,Row,Container} from 'react-bootstrap' 
import nonfic2  from "../images/nonfic2.JPG"
import SearchPage from '../searchbar';
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa"
import { FaStar } from "react-icons/fa"
import TodayDealsPage from './todaydeals'
import NewRelease from './newrelease';
import PopularBookPage from './popularbook'

export default class AllBooksPage extends Component {

    constructor(){
        super();
        this.state = {allbooks : []}
    }

    componentDidMount(){
        fetch('http://localhost:4000'+'/books',{
            headers:{'content-type': 'application/json'},
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({allbooks : data.data})
        });
        console.log("alldeals",this.state.allbooks)
   }

   

    render() {
        var allbookslist = this.state.allbooks.map((books, i)=>{
            // if(i < 4){
            return(
                <div className="col-4 col-sm-4 col-md-3 col-lg-3" key={i} style={{maxWidth:"280px"}}>
                    
                    <Card className="card-top border-0 mb-4 ">
                        <a href={""}>
                            <Card.Img className="card-header bg-white " src={nonfic2} variant="top" />
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
            // }
        })
        
        return (
            <>
            <div className="Main">
                <div style={{
                    width:"1100px",
                    margin:"auto"
                }}>
                <h3>Mixed Collections</h3>
                    <Container>
                        <div className="row">
                            {allbookslist} 
                        </div>
                    </Container>
                </div>

                <div style={{ width:"1100px", margin:"auto"}}>
                  <h3>Today Deals</h3>
                  <Container>
                    <div className="row">
                      <TodayDealsPage/>
                    </div>
                  </Container>
                </div>

                <div style={{ width:"1100px", margin:"auto"}}>
                  <h3>New Releases</h3>
                  <Container>
                    <div className="row">
                      <NewRelease/>
                    </div>
                  </Container>
                </div>

                <div style={{ width:"1100px", margin:"auto"}}>
                  <h3>Popular Books</h3>
                  <Container>
                    <div className="row">
                      <PopularBookPage/>
                      
                    </div>
                  </Container>
                </div>
            </div>
            
            </>
        )
    }
}