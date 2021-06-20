import React, { Component } from 'react'
import {Carousel,Card,Container} from 'react-bootstrap' 
import nonfic2  from "../images/nonfic2.JPG"
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa"
import { FaStar } from "react-icons/fa"
import TodayDealsPage from './todaydeals'
import NewRelease from './newrelease';
import PopularBookPage from './popularbook'
import {Link} from "react-router-dom";
import './design.css';
import '../Search_sort/search.css';

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

   decidenow(){
    console.log("decide function")
    alert("Please Login!")
    this.props.history.push('/login')
    }

    render() {
        var allbookslist = this.state.allbooks.map((books, i)=>{
            // if(i < 4){
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
                <p className="visibility">{"Chandru & co"}</p>
                <h3>Mixed Collections</h3>
                    <Container>
                        <div className="row">
                            {allbookslist} 
                        </div>
                    </Container>
                </div>

                <div className="todayDealsPageCarousel">
                    <Carousel fade>
                        <Carousel.Item interval={500}>
                            <img
                            className="todayDealsPageCarouselImage"
                            src="https://66.media.tumblr.com/21aac62de5d9ec837920fbf6a9ac9e90/tumblr_onca1y1iRu1vmo9dlo2_1280.png "
                            alt="First slide"
                            />
                            <Carousel.Caption>
                                <div className="todayDealsPageCarouselContent">
                                <h1><b>Find Your Deals and Order Here now!!!</b></h1></div>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={500}>
                            <img
                            className="todayDealsPageCarouselImage"
                            src="https://i.ytimg.com/vi/DYEWqQStbS8/maxresdefault.jpg"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                                <div className="todayDealsPageCarouselContent">
                                <h1><b>Discover Your Favourite Book Quick!!!</b></h1></div>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={500}>
                            <img
                            className="todayDealsPageCarouselImage"
                            src="https://cutewallpaper.org/21/thumbnail-background-1280x720/Polyaxial-Free-YouTube-Thumbnail-Background-43-Jester.png"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                                <div className="todayDealsPageCarouselContent">
                                <h1><b>Order Now and Gift Your Loved one!!!</b></h1></div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
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

                <div className="booklistCard2">
                    <div class="card flex-row flex-wrap booklistCard2Container">
                        <img className="booklistCard2Image" src="https://static.storyhouse.com/cms/wp-content/uploads/2020/06/Newsletter-Banner-1200x4002-1-2048x683.png" width="500px" height="auto" alt=""/>
                        <div class="card-block card-content booklistCard2Content">
                            <h1 class="card-title" className="booklistCard2Heading">The Summer Reading Challenge </h1>
                            <p class="card-text" ><div><p className="booklistCard2Text">Kids who read any 7 books can earn a Star Reader Certificate and a free </p></div></p>
                            <p class="card-text"><div><p className="booklistCard2Text">book from National Geographic Kids. Pick up a sign-up sheet at your local </p></div></p>
                            <p class="card-text"><div><p className="booklistCard2Text">Books Store to get started. Limited time offer. Book choice limited to specific</p> </div></p>
                            <p class="card-text"><div><p className="booklistCard2Text"> titles and ages (Grades K-8). Children must have parent’s permission.</p></div></p>
                            <h5 class="card-title">Book Store <br/> June 15 - August 15 </h5>
                        </div>
                    </div>
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