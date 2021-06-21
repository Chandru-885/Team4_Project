import React, { Component } from 'react'
import {Card,Container} from 'react-bootstrap' 
import nonfic2  from "../images/nonfic2.JPG"
import SearchPage from '../searchbar';
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa"
import { FaStar } from "react-icons/fa"
import {Link} from "react-router-dom";
import './search.css';
import '../Body/design.css';

import * as actions from '../action/action'
// import React, { useEffect } from 'react'
import {connect} from 'react-redux';

class AllBooksPage extends Component {
    constructor(props){
        super(props);
        this.state = {allbooks :[] , prev:false, next:true, showprev:true, shownext:true, current:1,paginate:[]}
    }

//     componentDidMount(){
//         fetch('http://localhost:4000'+'/books',{
//             headers:{'content-type': 'application/json'},
//         })
//         .then(res=>res.json())
//         .then(data=>{
//             this.setState({allbooks : data.data, paginate : data.pagination})
//         });
//    }

   componentDidMount(){
      this.props.onFetchAllbooks();
   }

    changenext(){
        var cur = this.state.current;
        if(!this.state.paginate.next){
            console.log("no next page")
        }else{
            this.setState({current: this.state.current+1})
            cur=cur+1
            fetch(`http://localhost:4000/books?page=${cur}&limit=12`,{
                headers:{'content-type': 'application/json'},
            })
            .then(res=>res.json())
            .then(data=>{
                this.setState({allbooks : data.data, paginate : data.pagination})
            });
        }
    }

    changeprev(){
        var cur = this.state.current;
        if(!this.state.paginate.prev){
            console.log("no prev page")
        }else{
            this.setState({current: this.state.current-1})
            cur = cur-1
            fetch(`http://localhost:4000/books?page=${cur}&limit=12`,{
                headers:{'content-type': 'application/json'},
            })
            .then(res=>res.json())
            .then(data=>{
                this.setState({allbooks : data.data, paginate : data.pagination})
            });
        }
    }

    decidenow(){
        console.log("decide function")
        alert("Please Login!")
        this.props.history.push('/login')
    }

    render() {
        console.log("alldeals",this.state.allbooks)
        console.log("pagination",this.state.paginate)
    
        var allbookslist = this.props.Books.map((books, i)=>{
            return(
                <div className="col-4 col-sm-4 col-md-3 col-lg-3" key={i} style={{maxWidth:"280px"}}>
                    
                    <Card className="card-top border-0 mb-4 card shadow rounded Cardshover">
                        <Link to= {{pathname : '/description', query : books}}>
                            <Card.Img className="card-header bg-white " src={nonfic2} variant="top" />
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

                        </Card.Body>
                    </Card>
                </div>
            )
        })
        
        return (
            <>

            <div className="body">
                <div class="allBooksPageCarousel">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="polka-dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
                            </pattern>  
                            <style>
                            </style>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect>
                        <text x="50%" y="60%"  text-anchor="middle"  >
                            “ Read, Learn and Grow ”
                        </text>
                    </svg>
                </div>
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
                        <h2>Mixed Collections</h2>
                        <Container>
                            <div className="row">
                                {allbookslist} 
                            </div>
                        </Container>

                        </div>
                        </div>
                    </div>
                </div>

                <div className="todayDealsPageCard2">
                    <Card className=" text-Black">
                        <Card.Img className="todaysDealsPageCard2Image" src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/rN0W64K4ipau8gxv/videoblocks-simple-graphic-background-in-pastel-shades_bihmovigu_thumbnail-1080_01.png" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h1><b className="todaysDealPageCard2Content">Connect and Celebrate</b></h1></Card.Title>
                            <Card.Text>
                                <h3 className="todaysDealPageCard2Content">Find Customers favourite books and gift those books to your loved ones.</h3>
                            </Card.Text>
                            <Card.Text><h3 className="todaysDealPageCard2Content">Find early deals and order now</h3></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>

                <div className="float-right m-3">
                    <ul class="pagination pagination-lg">
                        <li class="page-item">
                            <a class="page-link" onClick={this.changeprev.bind(this)} disabled={this.state.showprev}>Prev</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" >{this.state.current}</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" onClick={this.changenext.bind(this)} disabled={this.state.shownext}>Next</a>
                        </li>
                    </ul>

                </div>
                

               
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
        onFetchAllbooks: ()=>dispatch(actions.fetchbooksbymixedcollections()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AllBooksPage);



// fetchnextorprevpage(CurrentPage){
//     fetch(`http://localhost:4000/books?page=${CurrentPage}&limit=12`,{
//         headers:{'content-type': 'application/json'},
//     })
//     .then(res=>res.json())
//     .then(data=>{
//         this.setState({allbooks : data.data, paginate : data.pagination})
//     });
// }

// changenext(){
//     var cur = this.state.current;
//     if(!this.state.paginate.next){
//         console.log("no next page")
//     }else{
//         this.setState({current: this.state.current+1})
//         cur=cur+1
//         this.fetchnextorprevpage.bind(cur)
//     }
// }

// changeprev(){
//     var cur = this.state.current;
//     if(!this.state.paginate.prev){
//         console.log("no prev page")
//     }else{
//         this.setState({current: this.state.current-1})
//         cur = cur-1
//         this.fetchnextorprevpage.bind(cur)
//     }
// }