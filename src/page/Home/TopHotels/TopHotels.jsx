
import img1 from './../../../assets/travel/hotels/Image.png'
import img6 from './../../../assets/travel/hotels/Image6.png'
import img3 from './../../../assets/travel/hotels/Image2.png'
import img4 from './../../../assets/travel/hotels/Image3.png'
import img5 from './../../../assets/travel/hotels/Image4.png'
import img2 from './../../../assets/travel/hotels/Image5.png'
import './TopHotels.css'
import { CiHeart, CiLocationOn,} from "react-icons/ci";
import { FaStar } from 'react-icons/fa'

const TopHotels = () => {
    return (
        <div >
        <div className='container'>
            <div className='topHotels_heder_div'>
            <h2 className='topHotels_heder'>Top Hotels</h2>
            <div className='arrow_line'></div>
            </div>
            <div className='topHotels_gallery'> 
                <div className="row  " >
                   
                    <div className="col-12 col-md-6 col-lg-4 topHotels_content" >
                       <div className='topHotels__img_div card'>
                        <div className='topHotels_img'>
                        <img  src={img1} alt="" />
                        <p className='topHotels_icon'> <span><CiHeart  className="heart" /></span></p>
                        </div>
                       <div className='card_details'>
                        <p><span className='location'><CiLocationOn /> </span>Bali, Indonesia</p>
                        <h4>The Beach Hotel</h4>
                        <p className='review'> <span><FaStar className='star_reting' /><FaStar className='star_reting' /><FaStar className='star_reting' /><FaStar className='star_reting' /><FaStar className='star_reting' /></span><span className='review_text'>1500 Reviews</span></p>
                       </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 topHotels_content" >
                       <div className='topHotels__img_div card'>
                        <div className='topHotels_img'>
                        <img  src={img2} alt="" />
                        <p className='topHotels_icon'> <span><CiHeart  className="heart" /></span></p>
                        </div>
                       <div className='card_details'>
                        <p><span className='location'><CiLocationOn /> </span>Dubai, UAE</p>
                        <h4>The Royal King Hotel</h4>
                        <p className='review'> <span><FaStar className='star_reting' /><FaStar className='star_reting' /><FaStar className='star_reting' /><FaStar className='star_reting' /><FaStar className='star_reting' /></span><span className='review_text'>1500 Reviews</span></p>
                       </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 topHotels_content" >
                       <div className='topHotels__img_div card'>
                        <div className='topHotels_img'>
                        <img  src={img3} alt="" />
                        <p className='topHotels_icon'> <span><CiHeart  className="heart" /></span></p>
                        </div>
                       <div className='card_details'>
                        <p><span className='location'><CiLocationOn /> </span>London, United Kingdom</p>
                        <h4>The House Hotel</h4>
                        <p className='review'> <span><FaStar className='star_reting' /><FaStar className='star_reting' /><FaStar className='star_reting' /><FaStar className='star_reting' /><FaStar className='star_reting' /></span><span className='review_text'>1500 Reviews</span></p>
                       </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 topHotels_content" >
                       <div className='topHotels__img_div card'>
                        <div className='topHotels_img'>
                        <img  src={img4} alt="" />
                        <p className='topHotels_icon'> <span><CiHeart  className="heart" /></span></p>
                        </div>
                       <div className='card_details'>
                        <p><span className='location'><CiLocationOn /> </span>Casablanca, Morocco</p>
                        <h4>Caravelle Hotel</h4>
                        <p className='review'> <span><FaStar className='star_reting' /><FaStar className='star_reting' /><FaStar className='star_reting' /><FaStar className='star_reting' /><FaStar className='star_reting' /></span><span className='review_text'>1500 Reviews</span></p>
                       </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 topHotels_content" >
                       <div className='topHotels__img_div card'>
                        <div className='topHotels_img'>
                        <img  src={img5} alt="" />
                        <p className='topHotels_icon'> <span><CiHeart  className="heart" /></span></p>
                        </div>
                       <div className='card_details'>
                        <p><span className='location'><CiLocationOn /> </span>Sharm El-Sheikh, Egypt</p>
                        <h4>Sunshine Hotel</h4>
                        <p className='review'> <span><FaStar className='star_reting' /><FaStar className='star_reting' /><FaStar className='star_reting' /><FaStar className='star_reting' /><FaStar className='star_reting' /></span><span className='review_text'>1500 Reviews</span></p>
                       </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 topHotels_content" >
                       <div className='topHotels__img_div card'>
                        <div className='topHotels_img'>
                        <img  src={img6} alt="" />
                        <p className='topHotels_icon'> <span><CiHeart  className="heart" /></span></p>
                        </div>
                       <div className='card_details'>
                        <p><span className='location'><CiLocationOn /> </span>Riyadh, Saudi Arabia</p>
                        <h4>The Main Hotel</h4>
                        <p className='review'> <span><FaStar className='star_reting' /><FaStar className='star_reting' /><FaStar className='star_reting' /><FaStar className='star_reting' /><FaStar className='star_reting' /></span><span className='review_text'>1500 Reviews</span></p>
                       </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        </div>
    );
};

export default TopHotels;



