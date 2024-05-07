import './WhyUs.css'
import Plane from './../../../assets/travel/why_us/Plane.png'
import Hotel from './../../../assets/travel/why_us/Hotel.png'
import Payment from './../../../assets/travel/why_us/Payment.png'
const WhyUs = () => {

    return (
        <div className=' Why_us_main' >
          <div className="container">
          <div className='destination_heder_div'>
                <h2 className='destination_heder'>Why Us</h2>
                <div className='arrow_line'></div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className='text-center whyus_content'>
                        <img src={Plane} alt="" />
                        <p>1500 Daily Flight Bookings</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='text-center whyus_content'>
                        <img src={Hotel} alt="" />
                        <p>Over 2000 Hotels Around <br /> The World</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='text-center whyus_content'>
                        <img src={Payment} alt="" />
                        <p>Safe & guaranteed payment  <br /> methods</p>
                    </div>
                </div>
            </div>
          </div>





        </div>
    );
};

export default WhyUs;