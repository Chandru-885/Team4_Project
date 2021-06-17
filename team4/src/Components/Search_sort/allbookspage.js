import React, { Component } from 'react'
import {Button,Card,Row,Container} from 'react-bootstrap' 
import './search.css'
import book1 from "../images/fiction1.JPG"
import book2 from "../images/fiction2.JPG"
import book3 from "../images/fiction3.JPG"
import book4 from "../images/fiction4.JPG"
import book5 from "../images/fiction5.JPG"
import nonfic1 from "../images/nonfic1.JPG"
import nonfic2  from "../images/nonfic2.JPG"
import nonfic3  from "../images/nonfic3.JPG"
import nonfic4  from "../images/nonfic4.JPG"
import nonfic5  from "../images/nonfic5.JPG"

export default class AllBooksPage extends Component {

    render() {
        
        return (
            <>
            <div className="Main">
                <div className="row">
                    <div className="col-3 col-sm-3 col-md-2 col-xl-2 col-ls-2">
                        <div className="search-option-catagory">
                            <div>
                                <div className="search1">
                                    <h2> Search</h2>
                                </div>
                                
                                <div>
                                    <h6>Price</h6>
                                
                                    <Button variant="link" className="custom-btn" onClick={e => alert('All')}>All</Button> <br></br>
                                    <Button variant="link" className="custom-btn" onClick={e => alert('Rs 500')}> Rs.500</Button> <br></br>
                                    <Button variant="link" className="custom-btn" onClick={e => alert('Rs 1000')}>Rs.1000</Button> <br></br>
                                    <Button variant="link" className="custom-btn" onClick={e => alert('Rs 5000')}>Rs.5000</Button> 
                                </div><br></br>
                                <div>
                                    <h6>Discount</h6>
                                    <Button variant="link" className="custom-btn" onClick={e => alert('All')}>All</Button> <br></br>
                                    <Button variant="link" className="custom-btn" onClick={e => alert('10%')}>10%</Button> <br></br>
                                    <Button variant="link" className="custom-btn" onClick={e => alert('20%')}>20%</Button> <br></br>
                                    <Button variant="link" className="custom-btn" onClick={e => alert('30%')}>30%</Button> <br></br>
                                    <Button variant="link" className="custom-btn" onClick={e => alert('40%')}>40%</Button> <br></br>
                                    <Button variant="link" className="custom-btn" onClick={e => alert('50%')}>50%</Button> <br></br>
                                </div><br></br>
                                <div>
                                    <h6>Reviews</h6>
                                    <Button variant="link"  className="custom-btn" onClick={e => alert('Rs 500')}>All</Button> <br></br>
                                    <Button variant="link" className="custom-btn" onClick={e => alert('5 star')}>5 star</Button> <br></br>
                                    <Button variant="link" className="custom-btn" onClick={e => alert('4 star')}>4 star</Button> <br></br>
                                    <Button variant="link" className="custom-btn" onClick={e => alert('3 star')}>3 star</Button> <br></br>
                                    <Button variant="link" className="custom-btn" onClick={e => alert('2 star')}>2 star</Button> <br></br>
                                    <Button variant="link" className="custom-btn" onClick={e => alert('1 star')}>1 star</Button> <br></br>
                                </div><br></br> 
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

                    <div className="col-9 col-sm-9 col-md-10 col-xl-10 col-ls-10">
                        <div className="search-sidecontent">
                        <div className="row">
                        <h2>Mixed Collection Books</h2>
                        <Container>
                            <div className="row">
                            <div style={{
                                    width:"1100px",
                                    margin:"auto"
                                    }}>
                                    <div class="row row-cols-1 row-cols-md-5">
                                    <div class="col mb-4">
                                        <div class="card">
                                        <img src={book1} class="card-img-top" alt="..." height="250px" />
                                        <div class="card-body">
                                            <h5 style={{fontSize:"15px", color:"blue",textAlign:"center"}} class="card-title">A Game of Thrones by George R.R. Martin</h5>
                                            <p class="card-text" style={{color:'red',textAlign:"center"}}>Price - INR 1,234.55</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col mb-4">
                                        <div class="card">
                                        <img src={book2} class="card-img-top" alt="..." height="250px"/>
                                        <div class="card-body">
                                            <h5 style={{fontSize:"15px", color:"blue",textAlign:"center"}} class="card-title">To Kill a Mockingbird by Harper Lee</h5>
                                            <p class="card-text" style={{color:'red',textAlign:"center"}}>Price - INR 370.17</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col mb-4">
                                        <div class="card">
                                        <img src={book3} class="card-img-top" alt="..." height="250px"/>
                                        <div class="card-body">
                                            <h5 style={{fontSize:"15px", color:"blue",textAlign:"center"}}class="card-title">The Andromeda Strain</h5>
                                            <p class="card-text" style={{color:'red',textAlign:"center"}}>Price - INR 998.00</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col mb-4">
                                        <div class="card">
                                        <img src={book4} class="card-img-top" alt="..." height="250px"/>
                                        <div class="card-body">
                                            <h5 style={{fontSize:"15px", color:"blue",textAlign:"center"}} class="card-title">The Count of Monte Cristo by Alexandre Dumas</h5>
                                            <p class="card-text" style={{color:'red',textAlign:"center"}}>Price - INR 560.77</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col mb-4">
                                        <div class="card">
                                        <img src={book5} class="card-img-top" alt="..." height="250px"/>
                                        <div class="card-body">
                                            <h5 style={{fontSize:"15px", color:"blue",textAlign:"center"}} class="card-title">State of Wonder by Ann Patchett</h5>
                                            <p class="card-text" style={{color:'red',textAlign:"center"}}>Price - INR 780.67</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col mb-4">
                                        <div class="card">
                                        <img src={nonfic1} class="card-img-top" alt="..." height="250px"/>
                                        <div class="card-body">
                                            <h5 style={{fontSize:"15px", color:"blue",textAlign:"center"}} class="card-title">Guns, Germs, and Steel: The Fates of Human Societies</h5>
                                            <p class="card-text" style={{color:'red',textAlign:"center"}}>Price - INR 1,120.00</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col mb-4">
                                        <div class="card">
                                        <img src={nonfic2} class="card-img-top" alt="..." height="250px"/>
                                        <div class="card-body">
                                            <h5 style={{fontSize:"15px", color:"blue",textAlign:"center"}} class="card-title">A Brief History of Time by Stephen Hawking</h5>
                                            <p class="card-text" style={{color:'red',textAlign:"center"}}>Price - INR 390.66</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col mb-4">
                                        <div class="card">
                                        <img src={nonfic3} class="card-img-top" alt="..." height="250px"/>
                                        <div class="card-body">
                                            <h5 style={{fontSize:"15px", color:"blue",textAlign:"center"}} class="card-title">The Writer's Journey: Mythic Structure for Writers by Christopher Vogler</h5>
                                            <p class="card-text" style={{color:'red',textAlign:"center"}}>Price - INR 1,505.55</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col mb-4">
                                        <div class="card">
                                        <img src={nonfic4} class="card-img-top" alt="..." height="250px"/>
                                        <div class="card-body">
                                            <h5 style={{fontSize:"15px", color:"blue",textAlign:"center"}} class="card-title">Manual for Living by Epictetus</h5>
                                            <p class="card-text" style={{color:'red',textAlign:"center"}}>Price - INR 1,394.00</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col mb-4">
                                        <div class="card">
                                        <img src={nonfic5} class="card-img-top" alt="..." height="250px"/>
                                        <div class="card-body">
                                            <h5 style={{fontSize:"15px", color:"blue",textAlign:"center"}} class="card-title">The Checklist Manifesto: How to Get Things Right by Atul Gawande</h5>
                                            <p class="card-text" style={{color:'red',textAlign:"center"}}>Price - INR 591.00</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div> 
                            </div>
                        </Container>

                        </div>
                        </div>
                    </div>
                </div>
               
            </div>
            
            </>
        )
    }
}