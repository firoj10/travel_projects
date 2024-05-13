import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import './TopRoutes.css'

const TopRoutes = () => {
    return (
        <div className="container">
            <div style={{ margin: '0px 12px' }}>
                <div className="row">
                    <div className="col-12 col-md-3 " >


                    </div>
                    <div className="col-12 col-md-4 " >

                    </div>

                </div>
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3 " >
                        <h4 className="route_header">Top Flights Routes</h4>
                        <p className="routes"><span className="route_icon"><MdOutlineKeyboardArrowRight /></span><span className="route_text">Jeddah To Riyadh</span></p>
                        <p className="routes"><span className="route_icon"><MdOutlineKeyboardArrowRight /></span><span className="route_text">Cairo To Kuwait</span></p>
                        <p className="routes"><span className="route_icon"><MdOutlineKeyboardArrowRight /></span><span className="route_text">Dammam To Riyadh</span></p>
                        <p className="routes"><span className="route_icon"><MdOutlineKeyboardArrowRight /></span><span className="route_text">Dubai To Qatar</span></p>
                        <p className="routes"><span className="route_icon"><MdOutlineKeyboardArrowRight /></span><span className="route_text">Riyadh To Jeddah</span></p>

                    </div>
                    <div className="col-12 col-md-5 col-lg-4  col-xl-3" >
                        <h4 className="route_header">Top Hotel Destinations</h4>

                        <div className="d-flex justify-content-between">
                            <div>
                                <p className="routes"><span className="route_icon"><MdOutlineKeyboardArrowRight /></span><span className="route_text">Jeddah</span></p>
                                <p className="routes"><span className="route_icon"><MdOutlineKeyboardArrowRight /></span><span className="route_text">Cairo</span></p>
                                <p className="routes"><span className="route_icon"><MdOutlineKeyboardArrowRight /></span><span className="route_text">Kuwait</span></p>
                                <p className="routes"><span className="route_icon"><MdOutlineKeyboardArrowRight /></span><span className="route_text">Dubai</span></p>
                                <p className="routes"><span className="route_icon"><MdOutlineKeyboardArrowRight /></span><span className="route_text">Riyadh</span></p>
                            </div>
                            <div> <p className="routes"><span className="route_icon"><MdOutlineKeyboardArrowRight /></span><span className="route_text">Dammam</span></p>
                                <p className="routes"><span className="route_icon"><MdOutlineKeyboardArrowRight /></span><span className="route_text">London</span></p>
                                <p className="routes"><span className="route_icon"><MdOutlineKeyboardArrowRight /></span><span className="route_text">Italy</span></p></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default TopRoutes;