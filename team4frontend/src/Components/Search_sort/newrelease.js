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

import * as actions from '../action/action'
// import React, { useEffect } from 'react'
import {connect} from 'react-redux';

class NewReleasePage extends Component {

    constructor(props){
        super(props);
        this.state = {newrelease : []}
    }



    // componentDidMount(){
        // fetch('http://localhost:4000'+'/books/?sort=-date',{
        //     headers:{'content-type': 'application/json'},
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     this.setState({newrelease : data.data})
        // });
        // console.log("alldeals",this.state.newrelease)
    // }

    // function NewReleasePage(props){

    componentDidMount(){
        this.props.onFetchNewReleaseBooks();
        }

    decidenow(){
        console.log("decide function")
        alert("Please Login!")
        this.props.history.push('/login')
    }

    
    render() {

        var newreleaselist = this.props.Books.map((books, i)=>{
            return(
                <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-3 cardmarign" key={i} >
                    
                    <Card className="card-top border-0 mb-4 card shadow rounded Cardshover">
                        
                        <Link to= {{pathname : '/description', query : books}}>
                            <Card.Img className="card-header bg-white " src={fiction2} variant="top" />
                        </Link>
                        
                        <Card.Body className="card-body change-font text-dark" >
                            <Card.Text as="div" className="cardtext">

                                <div className="text-dark">
                                    <strong >{books.title}</strong>
                                    <br></br>
                                    <strong style={{fontWeight:"normal"}}>{books.author}</strong>
                                </div>
                                   
                                <strong style={{ textDecorationLine: 'line-through' }}>Rs. {books.price}</strong>
                                <strong style={{marginLeft:"7px",color:"red"}}>Rs. {books.sellprice}</strong>

                                <div>
                                    <strong style={{float:"left"}} variant="link">
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                    </strong>
                                    <strong style={{marginLeft:"10px"}}>({books.discount}%)</strong>
                                </div>

                                <div className="aligncartwishlist">
                                    <button class="btn btn-light border-0 cartbutton"  onClick={this.decidenow.bind(this)}>
                                        <i className="text-primary "><FaCartPlus/></i>
                                    </button>
                                    <button class="btn btn-light border-0 wishlistbutton"   onClick={this.decidenow.bind(this)}>
                                        <i className="text-danger "><FaHeart/></i>
                                    </button> 
                                </div>                               

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            )
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
              <div className = "row">
                    <div className="col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 ">
                        <div className="search-option-catagory card shadow rounded">
                            <SearchPage/>
                        </div>
                    </div>

                    <div className="col-8 col-sm-9 col-md-9 col-xl-9 col-ls-9">
                        <div className="search-sidecontent">
                            <div className="row">
                            <h2  className="headingpage">New Releases</h2>
                                <div className="row">
                                {newreleaselist} 
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

const mapStateToProps = (state) => {
    console.log('Inside Component ', state);
    return {
        Books: state.BookReducer.books
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        // onFetchNewReleaseBooks: ()=>dispatch(actions.fetchbooksbynewrelease()),
        onFetchNewReleaseBooks: ()=>dispatch(actions.fetchbooksbyquery()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(NewReleasePage);