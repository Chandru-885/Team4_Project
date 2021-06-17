import React, { Component } from 'react'
import {Button,Card,Row,Container} from 'react-bootstrap' 
import fiction2  from "../images/fiction2.JPG"

export default class TodayDeals extends Component {
    constructor(){
        super();
        this.state = {todaydealslist : []}
    }


    componentDidMount(){
        fetch('http://localhost:4000'+'/books/?sort=-discount',{
            headers:{'content-type': 'application/json'},
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({todaydealslist : data.data})
        });
        console.log("alldeals",this.state.todaydealslist)
    }


    render() {
        var DealsBooklist = this.state.todaydealslist.map((books, i)=>{
            if(i < 4){
            return(
                <div className="col-4 col-sm-4 col-md-3 col-xl-3" key={i}>
                  
                        <Card className="border-0">
                        <Card.Img variant="top" src={fiction2}  height="250px"/>
                        <Card.Body className="text-center">
                            <Card.Title className="text-primary"><b>{books.title}</b></Card.Title>
                            <Card.Text >
                                <p className="card-text text-info"><b>Price @ ₹{books.price}</b></p>
                                <p className="card-text text-success"><b>Discount {books.discount} %</b></p>
                            </Card.Text>
                       </Card.Body>
                      </Card>

                </div>
            )
            }
        })

        return (
            <Container>
                <div className="row">
                    {DealsBooklist} 
                </div>
            </Container>
            
            
        )
    }
}