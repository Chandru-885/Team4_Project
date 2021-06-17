import React, { Component } from 'react'
import {Button,Card,Row,Container} from 'react-bootstrap' 
import './search.css'
import fiction2  from "../images/nonfic3.JPG"



export default class SecondPage extends Component {

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

    render() {
        var newreleaselist = this.state.newrelease.map((books, i)=>{
            if(i < 4){
            return(
                
                <div className="col-4 col-sm-4 col-md-3 col-xl-3" key={i}>
                        <Card className="border-0">
                        <Card.Img variant="top" src={fiction2}  height="250px"/>
                        <Card.Body className="text-center">
                            <Card.Title className="text-primary"><b>{books.title}</b></Card.Title>
                            <Card.Text >
                                <p className="card-text text-info"><b>Price @ ₹{books.price}</b></p>
                                <p className="card-text text-success"><b>Date {books.date.toLocaleString()} </b></p>
                            </Card.Text>
                       </Card.Body>
                      </Card>
                </div>
            )
            }
        })
        
        return (
            <>
            <div className="Main">
                <div className="row">
                    <div className="col-3 col-sm-3 col-md-2 col-xl-2 col-ls-2">
                        <div className="search-option-catagory">
                            <div>
                                <div className="search1">
                                    <h2>Refine your Search</h2>
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
            
            </>
        )
    }
}