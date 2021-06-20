import React, { Component } from 'react';
import {Card,Container} from 'react-bootstrap' ;
import fiction2  from "../images/nonfic3.JPG";
import SearchPage from '../searchbar';
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import {Link} from "react-router-dom";
import './search.css';
import '../Body/design.css';

export default class NewReleasePage extends Component {

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
            //if(i < 4){
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
                                <button class="btn btn-light border-0" style={{float:"right",marginLeft:"5px"}} onClick={this.decidenow.bind(this)}>
                                    {/* <Link to="/login"><i className="text-primary " style={{fontSize:"20px"}}><FaCartPlus/></i></Link> */}
                                    <i className="text-primary " style={{fontSize:"20px"}}><FaCartPlus/></i>
                                </button>
                                <button class="btn btn-light border-0" style={{float:"right",marginLeft:"5px"}} onClick={this.decidenow.bind(this)}>
                                    {/*<Link to="/login"><i className="text-danger " style={{fontSize:"20px"}}><FaHeart/></i></Link>*/}
                                    <i className="text-danger " style={{fontSize:"20px"}}><FaHeart/></i>
                                </button>  
                                
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
            //}
        })
        
        return (
            <>

            <div className="newReleasePageCard">
                <Card>
                    <Card.Img className="newReleasePageCardImage" src="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-men-s-trousers-men-s-full-screen-poster-banner-carousel-image_191096.jpg" alt="Card image"  />
                    <Card.ImgOverlay>
                        <Card.Title className="newReleasePageCardContent"><h1><b>
                        Non-Fictional Books - Fasinating Worlds of <br></br>Reality, Discover New Things in Every Page!!!</b></h1>
                        </Card.Title>
                    </Card.ImgOverlay>
                </Card>
            </div>

            <div className="Main">
                <div className="row">
                    <div className="col-3 col-sm-3 col-md-2 col-xl-2 col-ls-2">
                        <div className="search-option-catagory card shadow rounded">
                            <SearchPage/>
                        </div>
                    </div>

                    <div className="col-9 col-sm-9 col-md-10 col-xl-10 col-ls-10">
                        <div className="search-sidecontent">
                        <div className="row mt-3">
                        <h2>New Releases</h2>
                        <Container>
                            <div className="row">
                                {newreleaselist} 
                            </div>
                        </Container>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="newReleaseCard2">
                <Card>
                    <Card.Img className="newReleaseCard2Image" src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=500&q=60" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title ><h1><b className="newReleaseCard2Content">Connect and Celebrate</b></h1></Card.Title>
                        <Card.Text className="newReleaseCard2Text"><h1>
                            A Modern Romance for people who love to read</h1>
                        </Card.Text>
                        <Card.Text><h3 className="newReleaseCard2Content">Find new releases and order now</h3></Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
            
            </>
        )
    }
}