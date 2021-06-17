import React, { Component } from 'react'
import {Button,Card,Row,Container} from 'react-bootstrap' 
import './search.css'
import { FaStar } from "react-icons/fa";
import fiction2  from "../images/fiction1.JPG"
import ProductDetailspage from '../Body/description.js';
import {Link} from "react-router-dom";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

export default class PopularPage extends Component {

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

   nextpage(){
    this.props.history.push('/productdescription')
   }

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
        var popularbookslist = this.state.popularbooks.map((books, i)=>{
            // if(i < 4){
            return(
                <Router>
                    <div className="col-4 col-sm-4 col-md-3 col-xl-3" key={i}>
                        
                            <Card className="border-0" onClick={this.nextpage.bind(this)}>
                            <Link to="/bookdescription"> 
                                  <Card.Img variant="top" src={fiction2} height="100px"/>
                             </Link> 
                            <Card.Body className="text-center">
                                <Card.Title className="text-primary"><b>{books.title}</b></Card.Title>
                                <Card.Text >
                                    <p className="card-text text-info"><b>Price @ ₹{books.price}</b></p>
                                    <p className="card-text text-success"><b>Ratings {books.ratings} </b></p>
                                </Card.Text>
                        </Card.Body>
                        </Card>
                        

                        <Switch>
                        <Route path="/bookdescription" component={ProductDetailspage}></Route>
                        </Switch>
                    </div>
                 </Router>
            )
            // }
        })
        
        return (
            <>
            <div className="Main">
                <div className="row">
                    <div className="col-3 col-sm-3 col-md-2 col-xl-2 col-ls-2">
                        <div className="search-option-catagory">
                            <div>
                                <div className="search1">
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
                    </div>
                    </div>
                    <div className="col-9 col-sm-9 col-md-10 col-xl-10 col-ls-10">
                        <div className="search-sidecontent">
                            <div className="row">
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