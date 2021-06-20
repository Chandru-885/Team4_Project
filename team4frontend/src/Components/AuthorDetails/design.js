import Carousel from "./Carousel";
import {Container} from 'react-bootstrap';
import './AuthorDetails.css';
const Author = () => {
    return (
        <Container>
        <div className="cardAuthorContainer">
            <h1 className="heading">FAMOUS AUTHORS</h1>
        <div className="cards3">
            <Carousel
                show={4}>
                
                <div className="gallery">
                    <div style={{padding: 8}}>
                        <img className="authorImage" src="https://upload.wikimedia.org/wikipedia/commons/a/a4/DurjoyDatta.jpg" alt="placeholder" />
                        
                    </div>
                </div>
                <div className="gallery">
                    <div style={{padding: 8}}>
                        <img className="authorImage" src="https://www.thinkingheads.com/wp-content/uploads/2018/01/robin-sharma-conferenciante-1.jpg" alt="placeholder" />
                    </div>
                </div>
                <div className="gallery">
                    <div style={{padding: 8}}>
                        <img className="authorImage" src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTUwMTA3MzE4Mjk3OTQ0/gettyimages-1061157246.jpg" alt="placeholder" />
                    </div>
                </div>
                <div className="gallery">
                    <div style={{padding: 8}}>
                        <img className="authorImage" src="https://www.simplylifeindia.com/uploads/8/1/1/5/8115412/1502706_orig.jpg" alt="placeholder" />
                    </div>
                </div>
                <div className="gallery">
                    <div style={{padding: 8}}>
                        <img className="authorImage" src="https://harpercollins.co.in/wp-content/uploads/2018/03/Ruskin-Bond-1.jpg" alt="placeholder"/>
                    </div>
                </div>
                <div className="gallery">
                    <div style={{padding: 8}}>
                        <img className="authorImage" src="https://assets.telegraphindia.com/telegraph/0b7bfb60-e3ba-493b-bd84-d5c24c40def3.jpg" alt="placeholder" />
                    </div>
                </div>
            </Carousel>
        </div>
        </div>
        </Container>
    )
}

export default Author;