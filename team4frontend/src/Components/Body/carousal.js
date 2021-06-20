import React from 'react'

class Carousalslide extends React.Component{
    render(){
        return(
            <div>

      <div className = "banner_bg_main changeheight">
         <div className = "banner_section layout_padding">
            <div className = "container">
               <div id="my_slider" className = "carousel slide" data-ride="carousel">
                  <div className = "carousel-inner">
                     <div className = "carousel-item active">
                        <div className = "row">
                           <div className = "col-sm-12">
                              <h1 className = "banner_taital">Best sellers <br/>On Your Fingertips</h1>
                              <div className = "buynow_bt"><a href="#">Buy Now</a></div>
                           </div>
                        </div>
                     </div>
                     <div className = "carousel-item">
                        <div className = "row">
                           <div className = "col-sm-12">
                              <h1 className = "banner_taital">Best Books <br/>At Reasonable Prices</h1>
                              <div className = "buynow_bt"><a href="#">Buy Now</a></div>
                           </div>
                        </div>
                     </div>
                     <div className = "carousel-item">
                        <div className = "row">
                           <div className = "col-sm-12">
                              <h1 className = "banner_taital">One-Stop <br/>Destination </h1>
                              <div className = "buynow_bt"><a href="#">Buy Now</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a className = "carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                  <i className = "fa fa-angle-left"></i>
                  </a>
                  <a className = "carousel-control-next" href="#my_slider" role="button" data-slide="next">
                  <i className = "fa fa-angle-right"></i>
                  </a>
               </div>
            </div>
         </div>
         
      </div>
      
      
      

            </div>
        );
    }
}

export default Carousalslide;