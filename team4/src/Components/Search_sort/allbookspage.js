import React, { Component } from 'react'
import {Card,Container} from 'react-bootstrap' 
import './search.css'
import nonfic2  from "../images/nonfic2.JPG"
import SearchPage from '../searchbar';
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa"
import { FaStar } from "react-icons/fa"
import {Link} from "react-router-dom";

export default class AllBooksPage extends Component {

    constructor(){
        super();
        this.state = {allbooks : [], prev:false, next:true, showprev:true, shownext:true, current:1,paginate:[]}
    }

    componentDidMount(){
        fetch('http://localhost:4000'+'/books',{
            headers:{'content-type': 'application/json'},
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({allbooks : data.data, paginate : data.pagination})
        });
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

    render() {
        console.log("alldeals",this.state.allbooks)
        console.log("pagination",this.state.paginate)
    
        var allbookslist = this.state.allbooks.map((books, i)=>{
            return(
                <div className="col-4 col-sm-4 col-md-3 col-lg-3" key={i} style={{maxWidth:"280px"}}>
                    
                    <Card className="card-top border-0 mb-4 ">
                        <a href={""}>
                            <Card.Img className="card-header bg-white " src={nonfic2} variant="top" />
                        </a>
                        <Card.Body className="card-body text-dark" >
                            <a style={{ textDecoration: "none" }} href={""}>
                                <Card.Title as="div" className="text-dark">
                                    <strong >{books.title}</strong>
                                    <br></br>
                                    <strong style={{fontWeight:"normal"}}>{books.author}</strong>
                                </Card.Title>
                            </a>
                           
                            <Card.Text as="div">
                                <strong>Rs. {books.price}</strong>
                                    <button class="btn btn-light border-0" style={{float:"right",marginLeft:"5px"}}>
                                         <Link to="/login"><i className="text-primary " style={{fontSize:"20px"}}><FaCartPlus/></i></Link>
                                    </button>
                                    <button class="btn btn-light border-0" style={{float:"right",marginLeft:"5px"}}>
                                        <Link to="/login"><i className="text-danger " style={{fontSize:"20px"}}><FaHeart/></i></Link>
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
            <div className="Main">
                <div className="row">
                    <div className="col-3 col-sm-3 col-md-2 col-xl-2 col-ls-2">
                        <div className="search-option-catagory">
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