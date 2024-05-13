import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import './Contact.css'
import App from './../../../assets/travel/contact/App Store.png'
import Google from './../../../assets/travel/contact/Google Play.png'
import Huawei from './../../../assets/travel/contact/Huawei Appgallery.png'
import facebook from './../../../assets/travel/contact/Facebook.png'
import Insta from './../../../assets/travel/contact/Insta.png'
import Linkedin from './../../../assets/travel/contact/Linkedin.png'
import Snap from './../../../assets/travel/contact/Snap.png'
import Tele from './../../../assets/travel/contact/Tele.png'
import Whats from './../../../assets/travel/contact/Whats.png'
import X from './../../../assets/travel/contact/X.png'
import logo from './../../../../public/Vector.png'
import './Contact.css'
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { CiGlobe } from "react-icons/ci";
const Contact = () => {
    return (
        <div className="footer_main">
            <div className=" container">
                <div className="footer_top_content" style={{ margin: '40px 12px' }}>
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-4 col-xl-4" >
                            <h4 className="contact_header mb-0">QUON</h4>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="routes"><span className="route_icon"><MdOutlineKeyboardArrowRight /></span><span className="route_text">About Us</span></p>
                                    <p className="routes"><span className="route_icon"><MdOutlineKeyboardArrowRight /></span><span className="route_text">Privacy & Policy</span></p>
                                    <p className="routes"><span className="route_icon"><MdOutlineKeyboardArrowRight /></span><span className="route_text">FAQs</span></p>
                                </div>
                                <div>
                                    <p className="routes"><span className="route_icon"><MdOutlineKeyboardArrowRight /></span><span className="route_text">Contact Us</span></p>
                                    <p className="routes"><span className="route_icon"><MdOutlineKeyboardArrowRight /></span><span className="route_text">My Account</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-5 col-xl-4 " >
                            <h4 className="contact_header">Need Help ?</h4>
                            <p className="routes "><span className="route_contact_icon"><FiPhone /></span><span className="route_text">( +966 ) 5123456789</span></p>
                            <p className="routes "><span className="route_contact_icon"><HiOutlineMail /></span><span className="route_text">support@quou.com</span></p>
                            <p>
                                <span><img className="social_icon" src={facebook} alt="" /></span>
                                <span><img className="social_icon" src={Insta} alt="" /></span>
                                <span><img className="social_icon" src={Whats} alt="" /></span>
                                <span><img className="social_icon" src={Snap} alt="" /></span>
                                <span><img className="social_icon" src={Linkedin} alt="" /></span>
                                <span><img className="social_icon" src={Tele} alt="" /></span>
                                <span><img className="social_icon" src={X} alt="" /></span>
                            </p>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 col-xl-4" >
                            <p className="contact_header">Download our app now!</p>

                            <p className="routes"><img className="img-fluid" src={Google} alt="" /></p>
                            <p className="routes"><img className="img-fluid" src={App} alt="" /></p>

                            <p className="routes"><img className="img-fluid" src={Huawei} alt="" /></p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="row ">
                        <div className="col-12 col-md-6 col-lg-5 col-xl-3">
                            <div className="d-flex  justify-content-between align-items-center">
                                <div>
                                    <img className="footer_logo" src={logo} alt="" />
                                </div>
                                <div>
                                    <p className="footer_content mb-0">All rights reserved. Quon 2023</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-1 col-lg-3 col-xl-6">
                        </div>
                        <div className="col-12 col-md-5 px-0 col-lg-4 col-xl-3">
                            <div className="d-flex footer_selects justify-content-between align-items-center">
                                <div >
                                    <p className="side_map mb-0 ">Site Map</p>
                                </div>

                                <div className="wrap-select-arrow border-0 menu_item">
                                    <select className="form-control active border-0 menu_item new_itemsf" >
                                        <option className='' selected="selected">العربية</option>
                                        <option className=''>العربية</option>
                                    </select>
                                    <div className="select-arrow ">
                                        <CiGlobe />
                                    </div>
                                </div>
                                <div>

                                    <select name="flavor" className="border-0 footer_sar new_itemsf">
                                        <option className="menu_item">Sar</option>
                                        <option className="menu_item">Sar</option>
                                        <option className="menu_item">Sar</option>
                                        <option className="menu_item">Sar</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        // </div >
    );
};
export default Contact;