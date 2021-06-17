import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardColumns } from "react-bootstrap";
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

//Mixed Collection

function MixedDisplay() {
  return (
    <div style={{
      width:"1100px",
      margin:"auto"
    }}>
      <h3>Mixed Collections</h3>
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
  
  );
}

function PopularDisplay() {
  return (
    <div style={{
      width:"1100px",
      margin:"auto"
    }}>
      <h3>Popular Books</h3>
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
          <img src={book3} class="card-img-top" alt="..." height="250px"/>
          <div class="card-body">
            <h5 style={{fontSize:"15px", color:"blue",textAlign:"center"}}class="card-title">The Andromeda Strain</h5>
            <p class="card-text" style={{color:'red',textAlign:"center"}}>Price - INR 998.00</p>
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
          <img src={nonfic2} class="card-img-top" alt="..." height="250px"/>
          <div class="card-body">
            <h5 style={{fontSize:"15px", color:"blue",textAlign:"center"}} class="card-title">A Brief History of Time by Stephen Hawking</h5>
            <p class="card-text" style={{color:'red',textAlign:"center"}}>Price - INR 390.66</p>
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
    </div>
  </div>
  
  );
}

function NewReleases() {
  return (
    <div style={{
      width:"1100px",
      margin:"auto"
    }}>
      <h3>Featured New Release Books</h3>
      <div class="row row-cols-1 row-cols-md-5">
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
          <img src={book4} class="card-img-top" alt="..." height="250px"/>
          <div class="card-body">
            <h5 style={{fontSize:"15px", color:"blue",textAlign:"center"}} class="card-title">The Count of Monte Cristo by Alexandre Dumas</h5>
            <p class="card-text" style={{color:'red',textAlign:"center"}}>Price - INR 560.77</p>
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
          <img src={nonfic3} class="card-img-top" alt="..." height="250px"/>
          <div class="card-body">
            <h5 style={{fontSize:"15px", color:"blue",textAlign:"center"}} class="card-title">The Writer's Journey: Mythic Structure for Writers by Christopher Vogler</h5>
            <p class="card-text" style={{color:'red',textAlign:"center"}}>Price - INR 1,505.55</p>
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
  
  );
}

function Booklist() {
  return (
    <div style={{marginTop:"20px"}}>
      <MixedDisplay/>
      <PopularDisplay/>
      <NewReleases/>
    </div>
  );
}

export default Booklist;
