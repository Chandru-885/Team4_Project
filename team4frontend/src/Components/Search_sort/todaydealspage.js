import React, { Component } from 'react'
import {Button,Card} from 'react-bootstrap' 
import fiction2  from "../images/fiction2.JPG"
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

class TodayDealsPage extends Component {

    constructor(props){
        super(props);
        this.state = {current:1}
    }

     componentDidMount(){
      this.props.onFetchAllbooks(this.state.current);
    }

        changenext(){
            var cur = this.state.current;
            this.setState({current: this.state.current+1})
            cur=cur+1
            this.props.onFetchAllbooks(cur)
        }
        changeprev(){
            var cur = this.state.current;
            this.setState({current: this.state.current-1})
            cur=cur-1
            this.props.onFetchAllbooks(cur)
        }

    decidenow(){
        console.log("decide function")
        alert("Please Login!")
        this.props.history.push('/login')
    }


    render() {
        var showprevbutton = true
        var shownextbutton = true
        console.log("this.props.Books",this.props.Books)

        if(this.state.current !== 1){
            showprevbutton = false
        }

        if(this.props.Books.length === 0 || this.props.Books.length !== 12){
            shownextbutton = true

            if(this.props.Books.length === 0){
                var allbookslist = (
                    <div className="alert alert-dismissible alert-info m-3">
                        <strong>No Data Available !</strong>
                        <p>Click <b>Prev</b> to move to before page</p>
                        <Button class="page-link" onClick={this.changeprev.bind(this)} disabled={showprevbutton}>Prev</Button>
                    </div>)
            }
        }

        if(this.props.Books.length === 12 || this.props.Books.length > 0){

            if(this.props.Books.length === 12){
                shownextbutton = false
            }

           var DealsBooklist = this.props.Books.map((books, i)=>{
           // if(i < 4){
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
            //}
        })
    }
        
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
            <div className = "row">
                    <div className="col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 ">
                        <div className="search-option-catagory card shadow rounded">
                            <SearchPage/>
                        </div>
                    </div>

                    <div className="col-8 col-sm-9 col-md-9 col-xl-9 col-ls-9">
                        <div className="search-sidecontent">
                            <div className="row">
                            <h2  className="headingpage">Todays Deals</h2>
                                <div className="row">
                                {DealsBooklist} 
                                </div>
                            </div>
                       </div>
                       <div className="row">
                            <ul className="justify-content-center align-items-center pagination pagination-lg">
                                <li class="page-item list-unstyled">
                                    <Button class="page-link mr-1" onClick={this.changeprev.bind(this)} disabled={showprevbutton}>Prev</Button>
                                </li>
                                <li class="page-item list-unstyled">
                                    <Button class="page-link mr-1" >{this.state.current}</Button>
                                </li>
                                <li class="page-item list-unstyled">
                                    <Button class="page-link mr-1" onClick={this.changenext.bind(this)} disabled={shownextbutton}>Next</Button>
                                </li>
                            </ul>

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

}
const mapStateToProps = (state) => {
    console.log('Inside Component ', state);
    return {
        Books: state.BookReducer.books
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        onFetchAllbooks: (curr_page)=>dispatch(actions.fetchbooksbyquery(curr_page)),
    }
  }
      
      export default connect(mapStateToProps, mapDispatchToProps)(TodayDealsPage);


      
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