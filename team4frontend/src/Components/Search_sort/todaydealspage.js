// import React, { Component } from 'react'
import {Button,Card,Row,Container} from 'react-bootstrap' 
import fiction2  from "../images/fiction2.JPG"
import SearchPage from '../searchbar';
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa"
import { FaStar } from "react-icons/fa"
import {Link} from "react-router-dom";
import './search.css';
import '../Body/design.css';

import * as actions from '../action/action'
import React, { useEffect } from 'react'
import {connect} from 'react-redux';

// export default class TodayDealsPage extends Component {

//     constructor(){
//         super();
//         this.state = {todaydealslist : []}
//     }


//     componentDidMount(){
//         fetch('http://localhost:4000'+'/books/?sort=-discount',{
//             headers:{'content-type': 'application/json'},
//         })
//         .then(res=>res.json())
//         .then(data=>{
//             this.setState({todaydealslist : data.data})
//         });
//         console.log("alldeals",this.state.todaydealslist)
//     }

    function TodayDealsPage(props){
        useEffect(() => {
            props.onFetchNewtodaydeals();
        }, []);

    // decidenow(){
    //     console.log("decide function")
    //     alert("Please Login!")
    //     this.props.history.push('/login')
    // }


        var DealsBooklist = props.Books.map((books, i)=>{
           // if(i < 4){
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
                                {/* <button class="btn btn-light border-0" style={{float:"right",marginLeft:"5px"}} onClick={this.decidenow.bind(this)}> */}
                                <button class="btn btn-light border-0" style={{float:"right",marginLeft:"5px"}}>
                                    {/* <Link to="/login"><i className="text-primary " style={{fontSize:"20px"}}><FaCartPlus/></i></Link> */}
                                    <i className="text-primary " style={{fontSize:"20px"}}><FaCartPlus/></i>
                                </button>
                                <button class="btn btn-light border-0" style={{float:"right",marginLeft:"5px"}}>
                                {/* <button class="btn btn-light border-0" style={{float:"right",marginLeft:"5px"}} onClick={this.decidenow.bind(this)}> */}
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

            <div className="bookListCard">
                <Card>
                    <Card.Img className="bookListCardImage" src="https://png.pngtree.com/thumb_back/fw800/background/20200812/pngtree-versus-vs-comic-background-design-image_391235.jpg"/>
                    <Card.ImgOverlay >
                        <div className="bookListCardLeftContent">
                        <h1><b><div className="bookListCardContentAni">40% </div><h1 className="bookListCardContent">Offers on Your Crime Thrillers!!!</h1></b></h1></div>
                        <div className="bookListCardRightContent">
                        <h1><b><div className="bookListCardContentAni">40% </div><h1 className="bookListCardContent">Offers on All Time Famous Novels!!!</h1></b></h1></div>
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
                        <h2>Todays Deals</h2>
                        <Container>
                            <div className="row">
                                {DealsBooklist} 
                            </div>
                        </Container>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="todayDealsPageCard2">
                    <Card>
                        <Card.Img className="todaysDealsPageCard2Image" src="https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Orange-Pattern-Simple-Background-Image.jpg" alt="Card image" width="400px" height="200px" />
                        <Card.ImgOverlay>
                            <Card.Title><h1><b className="todaysDealPageCard2Content">Best Buys, Maximum Savings..!</b></h1></Card.Title>
                            <Card.Text><h3  className="todaysDealPageCard2Content">
                                Find Customers favourite books and gift those books to your loved ones</h3>
                            </Card.Text>
                            <Card.Text><h3  className="todaysDealPageCard2Content">Find todays deals and order now</h3></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>
            
            </>
        )
    }

    const mapStateToProps = (state) => {
        console.log('Inside Component ', state);
        return {
            Books: state.BookReducer.books
        }
      }
      
      const mapDispatchToProps = (dispatch) => {
        return {
            // onFetchNewtodaydeals: ()=>dispatch(actions.fetchbooksbytodaydeals()),
            onFetchNewtodaydeals: ()=>dispatch(actions.fetchbooksbyquery()),
        }
      }
      
      export default connect(mapStateToProps, mapDispatchToProps)(TodayDealsPage);
