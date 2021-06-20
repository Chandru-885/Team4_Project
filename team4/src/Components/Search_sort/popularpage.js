import React, { Component } from 'react'
import {Button,Card} from 'react-bootstrap' 
import './search.css'
import fiction2  from "../images/fiction1.JPG"
import {Link} from "react-router-dom";
import SearchPage from '../searchbar';
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa"
import { FaStar } from "react-icons/fa"

export default class PopularPage extends Component {

    constructor(props){
        super(props);
        this.state = {popularbooks : [], searcheddata : props}
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

   nextpage(){
    this.props.history.push('/description')
   }

    render() {
        console.log("props.location.query",this.state.searcheddata)
        var popularbookslist = this.state.popularbooks.map((books, i)=>{
            // if(i < 4){
            return(
                <div className="col-4 col-sm-4 col-md-3 col-lg-3" key={i} style={{maxWidth:"280px"}}>
                    
                    <Card className="card-top border-0 mb-4 ">
                       <Link to="/description"> 
                        {/* <a href={""}> */}
                            <Card.Img className="card-header bg-white " src={fiction2} variant="top" />
                        {/* </a> */}
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
                    {/* <Switch>
                        <Route path="/description" component={ProductDetailspage}></Route>
                    </Switch> */}
                </div>
            )
        })
        
        return (
            <>
            <div className="Main">
                <div className="row">
                    <div className="col-3 col-sm-3 col-md-2 col-xl-2 col-ls-2">
                        <div className="search-option-catagory">
                            <SearchPage />
                    </div>
                    </div>
                    <div className="col-9 col-sm-9 col-md-10 col-xl-10 col-ls-10">
                        <div className="search-sidecontent">
                            <div className="row mt-3">
                            <h2>Popular Books</h2>
                            {/* <Container> */}
                                <div className="row">
                                    {popularbookslist} 
                                </div>
                            {/* </Container> */}

                            </div>
                        </div>
                    </div>
               
               
            </div>
        </div>
            
            </>
        )
    }
}