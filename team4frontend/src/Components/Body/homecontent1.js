import React, { Component } from 'react'
import {Card, Container, Row, Col} from 'react-bootstrap';
import './freq.css';

export default class Homecontent1 extends Component {
    render() {
        return (
            <div>
               <Container>
                    <Card className="cardContainer">
                        <Row>
                            <Col md ={4}>
                                <Card.Img classname="cardImage" variant="top" src='assets/images/1.jpg' />
                            </Col>
                            <Col md = {8}>
                                <Card.Body>
                                    <Card.Text>
                                        <h1>Check out trending titles and top finds curated for you</h1>
                                        <h5>Shop top sellers, new releases and books highly rated for all ages.</h5>
                                        <h5>Browse books highly reviewed by customers like you.</h5>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Container>

                <Container>
                    <Card className="cardContainer">
                        <Row>
                            <Col md = {8}>
                                <Card.Body>
                                    <Card.Text>
                                        <h1>Discover your next favourite read.</h1>
                                        <h5>Come, see what our customers love. Find customers' favourite books from dads to gads</h5>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                            <Col md ={4}>
                                <Card.Img classname="cardImage" variant="top" src='assets/images/2.jpg' />
                            </Col>
                        </Row>
                    </Card>
                </Container>

                <Container>
                    <Card className="cardContainer">
                        <Row>
                            <Col md ={4}>
                                <Card.Img classname="cardImage" variant="top" src='assets/images/3.jpg' />
                            </Col>
                            <Col md = {8}>
                                <Card.Body>
                                    <Card.Text>
                                        <h1>Fall in LOVE with these books.</h1>
                                        <h5>Romantic literature or hot and steamy? <br/> Here you'll find the best romances for your next read. </h5>
                                        <h5>True stories, society, trending topics that will make you think.</h5>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Container>

                <Container>
                    <Card className="cardContainer">
                        <Row>
                            <Col md = {8}>
                                <Card.Body>
                                    <Card.Text>
                                        <h1>Use your prime membership for in-store purchases.</h1>
                                        <h5>Our stores are open to all customers. Prime member pay the same low prices pay the same low price in store that they get online for products.</h5>
                                        <h5>Not a member? Everyone is welcome, but it's easy to sign-up for prime.</h5>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                            <Col md ={4}>
                                <Card.Img classname="cardImage" variant="top" src="https://www.pngkey.com/png/detail/64-644746_with-this-limited-time-offer-you-can-get.png" width="400px" height="400px" />
                            </Col>
                        </Row>
                    </Card>
                </Container>

            </div>
        );
            
    }
}