import React, { Component } from 'react'
import { FaStar } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import fiction2  from "../images/fiction1.JPG"
import userpic  from "../images/empty_avatar.png"
import {Link} from "react-router-dom";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

export default class ProductDetailspage extends Component {
    render() {
    return (
    <div>
    <div className="container my-5">

    <div className="row">
    
      <div className="col-md-3">
        <img src={fiction2} className="img-fluid"  height = "100px" alt="product image"/>
      </div> 
    
      <div className="col-md-4">
        <h6 className="font-weight-bold">The Time Machine Paperback – 1 July 2015
        </h6>
        <p>
          <i className="text-warning"><FaStar/></i>
          <i className="text-warning"><FaStar/></i>
          <i className="text-warning"><FaStar/></i>
          <i className="text-warning"><FaStar/></i>
          <i className="text-warning"><FaStar/></i>
        </p>

        <div className="dropdown-divider mt-3"></div>
        <p className="mb-0">
          <span className="text-muted mr-2">Price :</span>
          <span className="text-danger font-weight-bold"><i className="fas fa-rupee-sign"></i> 750/-</span>
        </p>
        <p>
          <span className="text-muted mr-2">Discount :</span>
          <span className="text-danger font-weight-bold"><i className="fas fa-rupee-sign"></i> 10 %</span>
        </p>

    
        <div className="row pl-5 mb-5">
          <div className="col-md-3">
            <img src={fiction2} width="35" height="35" className="rounded" alt="" />
            <br></br>
            <a href="#">No contact delivery</a>
          </div>
          <div className="col-md-3">
            <img src={fiction2} width="35" height="35" className="rounded" alt="" />
            <br></br>
            <a href="#">7 Day Replacement</a>
          </div>
          <div className="col-md-3">
            <img src={fiction2} width="35" height="35" className="rounded" alt="" />
            <br></br>
            <a href="#">Amazon Delivered</a>
          </div>
          <div className="col-md-3">
            <img src={fiction2} width="35" height="35" className="rounded" alt="" />
            <br></br>
            <a href="#">1 Year Waranty</a>
          </div>
        </div>
        <p className="text-success font-weight-bold">In stock.</p>
        <p>Sold by:<a href="#">ABC Seller</a></p>
</div></div>
<div className="dropdown-divider md-4"></div>

<div className="row border-bottom mt-3">
      <div className="col-md-12 my-3">
        <h6 className="text-warning font-weight-bold">Product description</h6>
        <p className="ml-3">
        A compelling science fiction, the Time Machine is a first-hand account of a Time Traveler's journey into the future. a pull of the lever and the machine sends him to the year 802,701, when humanity has split into two bizarre races—the ethereal Eloi and the subterranean Morlocks. Here, his machine is stolen and with the help of Weena, an Eloi he saved from drowning, the traveler is able to retrieve it.
Whizzing thirty million years further into the future, he finds a slowly dying earth, where the bloated red sun sits motionless in the sky and the only sign of life is a black blob with tentacles.
He returns to the Victorian time, overwhelmed, just three hours after he originally left..
Credited with inventing the time machine in this masterpiece, the provocative insight of H. G. Wells continues to enthrall the readers. the Time Machine has since been adapted into many feature films and television series and has inspired many more works of fiction..</p>
      </div>
    </div>

<div className="row border-bottom border-top">
      <div className="col-md-12">
        <p className="text-danger font-weight-bold">Save Extra with 5 offers</p>
        <ul>
          <li><span className="text-danger">No Cost EMI:</span> Avail No Cost EMI on select cards for orders above ₹3000
          </li>
          <li><span className="text-danger">Exchange Offer:</span> Enter your pincode to view Exchange offer</li>
          <li><span className="text-danger">Cashback (2):</span> 5% back with Amazon Pay ICICI Bank Credit card for
            Prime-members. 3% back for everybody else. Here's how </li>
          <li><span className="text-danger">Bank Offer (2): </span> Get 5% up to Rs. 1500 Instant Discount on Bank of Baroda
            Credit EMI transactions Here's how</li>
          <li><span className="text-danger">Partner Offers (3): </span> Buy now & pay next month at 0% interest or pay in
            EMIs with Amazon Pay Later. Instant credit upto ₹20,000. Check eligibility here! Here's how </li>
        </ul>
      </div>
    </div>

    
    
        {/* <ul className="ml-n3">
          <li>13+2MP dual rear AI camera with PDAF | 8MP front camera</li>
          <li>15.7988 centimeters (6.22-inch) HD+ Dot notch display with 1520 x 720 pixels resolution and 19:9 aspect
            ratio | 2.5D curved glass</li>
          <li>Memory, Storage & SIM: 2GB | 32GB internal memory expandable up to 512GB with dedicated memory card slot |
            Dual SIM (nano+nano) dual-standby (4G+4G)</li>
          <li>Android Pie v9.0 operating system with 1.95GHz Snapdragon 439 octa core processor</li>
          <li>5000mAH lithium-polymer battery</li>
          <li>Box also includes: Power adapter, USB cable, SIM eject tool, warranty card and user guide. The box does
            not include earphones</li>
        </ul>  */}
</div>

<div className="m-5">
<div className="col-md-8">
        <p className="text-capitalize font-weight-bold">Top reviews from India</p>
        <div className="row">
          <div className="col-md-12">
            <a href="#" className="text-dark"><img src={userpic} width="34"
                height="34" className="rounded-circle mr-2"/> User1</a>
            <p className="font-weight-bold mt-2">
              <i className="text-warning"><FaStar/></i>
              <i className="text-warning"><FaStar/></i>
              <i className="text-warning"><FaStar/></i>
              <i className="text-warning"><FaStar/></i>
              <i className="text-warning"><FaStar/></i>
              <br></br>Bangalore
            </p>
            <p>
              hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
              hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
              hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
              hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <a href="#" className="text-dark"><img src={userpic} width="34"
                height="34" className="rounded-circle mr-2"/> User2</a>
            <p className="font-weight-bold mt-2">
              <i className="text-warning"><FaStar/></i>
              <i className="text-warning"><FaStar/></i>
              <i className="text-warning"><FaStar/></i>
              <i className="text-warning"><FaStar/></i>
              <i className="text-warning"><FaStar/></i>
              <br></br>Bangalore
            </p>
            <p>
              hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
              hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
              hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
              hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <a href="#" className="text-dark"><img src={userpic} width="34"
                height="34" className="rounded-circle mr-2"/> User4</a>
            <p className="font-weight-bold mt-2">
            <i className="text-warning"><FaStar/></i>
              <i className="text-warning"><FaStar/></i>
              <i className="text-warning"><FaStar/></i>
              <i className="text-warning"><FaStar/></i>
              <i className="text-warning"><FaStar/></i>
              <br></br>Bangalore
            </p>
            <p>
              hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
              hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
              hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
              hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <a href="#" className="text-dark"><img src={userpic} width="34"
                height="34" className="rounded-circle mr-2"/> User1</a>
            <p className="font-weight-bold mt-2">
            <i className="text-warning"><FaStar/></i>
              <i className="text-warning"><FaStar/></i>
              <i className="text-warning"><FaStar/></i>
              <i className="text-warning"><FaStar/></i>
              <i className="text-warning"><FaStar/></i>
              <br></br>Bangalore
            </p>
            <p>
              hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
              hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
              hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
              hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
            </p>
          </div>
        </div>

        <div className="dropdown-divider mt-3 "></div>
        <div className="mb-3">
          <a href="#" className="font-weight-bold">See all reviews <i className="fas fa-caret-right"></i></a>
        </div>
    </div>
      </div>


      </div> 
    
);
}
}
