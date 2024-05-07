import './Destination.css'
import img1 from './../../../assets/travel/dest1.png'
import img2 from './../../../assets/travel/dest2.png'
import img3 from './../../../assets/travel/dest3.png'
import img4 from './../../../assets/travel/dest4.png'
import img5 from './../../../assets/travel/dest5.png'
import img6 from './../../../assets/travel/dest6.png'
const Destination = () => {
    return (
        <div className='destination_main' >
        <div className='container'>
            <div className='destination_heder_div'>
            <h2 className='destination_heder'>Top Destination</h2>
            <div className='arrow_line'></div>
            </div>
            <div className='destination_gallery'> 
                <div className="row  d-flex justify-content-between mx-0" >
                    <div className="col-lg-3 destination_main_content">
                       <div className='destination_img_div'>
                        <div className='destination_img'>
                        <img  src={img3} alt="" />
                        </div>
                        <p className='destination_name'>Qatar</p>
                        </div>
                    </div>
                    <div className="col-lg-3 destination_main_content">
                       <div className='destination_img_div'>
                        <div className='destination_img'>
                        <img  src={img4} alt="" />
                        </div>
                        <p className='destination_name'>Dubai</p>
                        </div>
                    </div>
                    <div className="col-lg-6 destination_main_content">
                       <div className='destination_img_div'>
                        <div className='destination_img'>
                        <img   src={img1} alt="" />
                        </div>
                        <p className='destination_name'>Kuwait</p>
                        </div>
                    </div>
                    <div className="col-lg-3 destination_main_content">
                       <div className='destination_img_div'>
                        <div className='destination_img'>
                        <img  src={img5} alt="" />
                        </div>
                        <p className='destination_name'>Jeddah</p>
                        </div>
                    </div>
                    <div className="col-lg-3 destination_main_content">
                       <div className='destination_img_div'>
                        <div className='destination_img'>
                        <img   src={img6} alt="" />
                        </div>
                        <p className='destination_name'>Riyadh</p>
                        </div>
                    </div>
                    <div className="col-lg-6 destination_main_content" >
                       <div className='destination_img_div'>
                        <div className='destination_img'>
                        <img  src={img2} alt="" />
                        </div>
                        <p className='destination_name'>Cairo</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        </div>
    );
};

export default Destination;

