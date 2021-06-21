import React, { Component } from 'react'
// import {Button,Card,Row,Container} from 'react-bootstrap' 
import './searchbar.css';
// import { FaStar } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css';

import * as actions from './action/action'
// import React, { useEffect } from 'react'
import {connect} from 'react-redux';
import arrow  from "./images/Arrow.png"

class Searchbar extends Component {
    constructor(props){
        super(props);
            this.state = {popularbooks:[],query:"",ratingsall:"sort=-ratings",below_500 : "&price[lt]=500",AboveEqual_500:"&price[gte]=500",AboveEqual_1000:"&price[gte]=1000",
            dis50andAbove : "&discount[gte]=50", dis30andAbove : "&discount[gte]=30", dis10andAbove : "&discount[gte]=10",
            
        }
    }

    // price(selectedquery){
    //     console.log("selectedquery",selectedquery)
    //     var API = `http://localhost:4000/books/?${this.state.ratingsall}${selectedquery}`
    //     console.log("API",API)
    //     fetch(API,{
    //         headers:{'content-type': 'application/json'},
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         this.setState({popularbooks : data.data})
    //     });
    // }


    render() {
        console.log("popularbooks",this.state.popularbooks)
        return (
            
            <div className="pt-2" >
                <div className="search1 mt-2" >
                    <h4 style={{marginLeft:"18px"}} className="text-primary">Search Bar</h4>
                    <div class="nav">
                    
                        <div class="multi-level ml-0">
                            
                            <div class="item">
                                <input type="checkbox" id="A"/>
                                <img src={arrow} class="arrow"/><label className="text-primary" for="A"> Categories</label>
                                <ul className="ml-0">
                                    <li>Childrens & Teens</li>
                                    <li>Music</li>
                                    <li>Travel & Holiday</li>
                                    <li>Lifestyle</li>
                                </ul> 
                            </div>
                            
                            <div class="item">
                                <input type="checkbox" id="B"/>
                                <img src={arrow} class="arrow"/><label className="text-primary" for="B">Search By Price</label>
                                
                                <ul>
                                    {/* <li>All</li> */}
                                    {/* <li onClick={this.price.bind(this,this.state.below_500)}>Below 500</li> */}
                                    {/* <li onClick={this.price.bind(this,this.state.AboveEqual_500)}>500 and Above</li>
                                    <li onClick={this.price.bind(this,this.state.AboveEqual_1000)}>1000 and Above</li> */}
                                    <li onClick={this.props.onFetchPricebelow500()}>Below 500</li>
                                    {/* <li onClick={this.props.onFetchPricebelow500()}>Below 500</li> */}
                                    {/* <li onClick={this.props.onFetchPricebelow500()}>Below 500</li> */}

                                 
                                </ul>
                            </div>
                            <div class="item">
                                <input type="checkbox" id="C"/>
                                <img src={arrow} class="arrow"/><label className="text-primary" for="C">Search By Discount</label>
                                
                                <ul>
                                    {/* <li>All</li> */}
                                    <li>50% and Above</li>
                                    <li>30% and Above</li>
                                    <li>10% and Above</li>
                                </ul>
                            </div>
                            <div class="item">
                                <input type="checkbox" id="D"/>
                                <img src={arrow} class="arrow"/><label className="text-primary" for="D">Sort By Price</label>
                                
                                <ul>
                                    <li>Low to High</li>
                                    <li>High to Low</li>
                                </ul>
                            </div>
                            <div class="item">
                                <input type="checkbox" id="E"/>
                                <img src={arrow} class="arrow"/><label className="text-primary" for="E">Sort By Discount</label>
                                
                                <ul>
                                    <li>Low to High</li>
                                    <li>High to Low</li>
                                </ul>
                            </div>
                            <div class="item">
                                <input type="checkbox" id="F"/>
                                <img src={arrow} class="arrow"/><label className="text-primary" for="F">Search By Language</label>
                                
                                <ul>
                                    <li>English</li>
                                    <li>Tamil</li>
                                    <li>Hindi</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
               

                                
            
        )
    }
}

// const mapStateToProps = (state) => {
//     console.log('Inside Component ', state);
//     return {
//         Books: state.BookReducer.books
//     }
//   }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        onFetchPricebelow500 : () => dispatch(actions.fetchbooksbypricebelow500()),
    }
  }
  
  export default connect(null, mapDispatchToProps)(Searchbar);