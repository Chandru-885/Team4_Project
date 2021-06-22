// import React, { Component } from 'react'
import {Card,Carousel} from 'react-bootstrap' 
import fiction2  from "../images/fiction1.JPG"
import {Link} from "react-router-dom";
import SearchPage from '../searchbar';
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import './search.css';
import '../Body/design.css';

import * as actions from '../action/action'
import React, { useEffect } from 'react'
import {connect} from 'react-redux';

// export default class PopularPage extends Component {

//     constructor(){
//         super();
//         this.state = {popularbooks : []}
//     }

//     componentDidMount(){
//         fetch('http://localhost:4000'+'/books/?sort=-ratings',{
//             headers:{'content-type': 'application/json'},
//         })
//         .then(res=>res.json())
//         .then(data=>{
//             this.setState({popularbooks : data.data})
//         });
//         console.log("alldeals",this.state.popularbooks)
//     }

function PopularPage(props){

    useEffect(() => {
        props.onFetchPopularBooks();
    }, []);



//    nextpage(){
//     this.props.history.push('/description')
//    }

//    decidenow(){
//         console.log("decide function")
//         alert("Please Login!")
//         this.props.history.push('/login')
//     }



        var popularbookslist = props.Books.map((books, i)=>{
            // if(i < 4){
            return(
                <div className="col-4 col-sm-4 col-md-3 col-lg-3" key={i} style={{maxWidth:"280px"}}> 
                    
                    <Card className="card-top border-0 mb-4 card shadow rounded Cardshover">
                       <Link to= {{pathname : '/description', query : books}}>
                        {/* <a href={""}> */}
                            <Card.Img className="card-header bg-white" src={fiction2} variant="top" />
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
                    {/* <Switch>
                        <Route path="/description" component={ProductDetailspage}></Route>
                    </Switch> */}
                </div>
            )
        })
        
        return (
            <>

            <div className="popularPageCarousel">
                <Carousel fade>
                <Carousel.Item interval={1000}>
                    <img
                    className="popularPageCarouselImage"
                    src="https://rukminim1.flixcart.com/flap/1800/1800/image/b3fe381767050079.jpg?q=80 "
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="popularPageCarouselImage"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Books/072018/Mathrubasha/offer_05._CB1198675309_.jpg" 
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="popularPageCarouselImage"
                    src="https://i.imgur.com/WGzJP8V.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="popularPageCarouselImage"
                    src="https://theshopperz.com/wp-content/uploads/2017/10/Buy-Books-Online-at-Best-Prices-in-India.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
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
                            <h2>Popular Books</h2>
                            {/* <Container> */}
                                <div className="row">
                                    {popularbookslist} 
                                </div>
                            {/* </Container> */}

                            </div>
                        </div>
                        </div>

                        <div className="container-fluid mb-5" >
    {/* <div className="row">
      <div className="col-md-12 p-5 text-white text-center" style={{backgroundColor: "#008577"}}>
        <h1>"Advertising solutions for books"</h1>
        <p> <em>Attract readers. Build Fans.</em> Sell Books</p>
        <a href="your_seller_account.html" className="btn btn-warning rounded-pill">Get started</a>
        <p>It only takes 15 minutes to setup your account.</p>
      </div>
    </div> */}
    </div>

                </div>
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
            // onFetchPopularBooks : ()=>dispatch(actions.fetchbooksbypopularbooks()),
            onFetchPopularBooks : ()=>dispatch(actions.fetchbooksbyquery()),
        }
      }
      
      export default connect(mapStateToProps, mapDispatchToProps)(PopularPage);
   








// all(){
//     fetch('http://localhost:4000'+'/books/?sort=-ratings',{
//         headers:{'content-type': 'application/json'},
//     })
//     .then(res=>res.json())
//     .then(data=>{
//         this.setState({popularbooks : data.data})
//     });
//     console.log("alldeals",this.state.popularbooks)
// }

// below500(){
// fetch('http://localhost:4000'+'/books/?sort=-ratings&price[lt]=500',{
//     headers:{'content-type': 'application/json'},
// })
// .then(res=>res.json())
// .then(data=>{
//     this.setState({popularbooks : data.data})
// });
// console.log("below500",this.state.popularbooks)
// }

// AboveEqual500(){
// fetch('http://localhost:4000'+'/books/?sort=-ratings&price[gte]=500',{
//     headers:{'content-type': 'application/json'},
// })
// .then(res=>res.json())
// .then(data=>{
//     this.setState({popularbooks : data.data})
// });
// console.log("AboveEqual500",this.state.popularbooks)
// }

// AboveEqual1000(){
// fetch('http://localhost:4000'+'/books/?sort=-ratings&price[gte]=1000',{
//     headers:{'content-type': 'application/json'},
// })
// .then(res=>res.json())
// .then(data=>{
//     this.setState({popularbooks : data.data})
// });
// console.log("AboveEqual500",this.state.popularbooks)
// }
