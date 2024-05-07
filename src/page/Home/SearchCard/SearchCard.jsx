import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './SearchCard.css';

import { LuCalendarDays } from 'react-icons/lu';
import { RiArrowDownSLine } from 'react-icons/ri';

const SearchCard = () => {

    return (
        <div className='container card ' style={{boxShadow: '0px 0px 32px 0px #00000029'}}>



            <Tabs >
                <TabList>
                    <Tab><button className='hotels_btn'>Flights</button></Tab>
                    <Tab><button className='hotels_btn'>Hotels</button></Tab>
                </TabList>

                <TabPanel>
                    <div className="" style={{ paddingRight: '18px', paddingLeft: '18px',
 }}>
                        <div>
                            <div className="trip_search">
                                <div className="trip_search_btn ms-0">
                                    <button className='round_trip  ms-0'>Round-trip</button>
                                </div>
                                <div className="trip_search_btn">
                                    <button className='round_trip'>One-way</button>
                                </div>
                                <div className="trip_search_btn">
                                    <button className='round_trip'>Multi-city</button>
                                </div>
                            </div>
                        </div>
                        <form>
                            <div className="row p-0" style={{ marginTop: '16px' }}>
                                <div className="col-md-3 forms" >
                                    {/* <div className="col-md-3" style={{ paddingLeft:     '3px', paddingRight:     '3px' }}> */}
                                    <div className="search_div ">
                                        <label className="form-label search_label">From</label>
                                        <input type="email" placeholder='Cairo, Egypt' className="form-control search_input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="col-md-3 to " >
                                    <div className="search_div">
                                        <label className="form-label search_label">To</label>
                                        <input type="email" placeholder='Riyadh, Saudi Arabia' className="form-control search_input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="col-md-3 dates " >
                                    <div className="search_div">
                                        <label className="form-label  search_label">Dates</label>
                                        <div className='check-in-check-out'>
                                    <input type="email" placeholder='20 Dec - 30 Dec, 2023' className="form-control  search_input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <p className='clanders'><LuCalendarDays  className='icons'/></p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-3 passengers" >
                                    <div className="search_div">
                                        <label className="form-label  search_label">Passengers</label>
                                        <div className='check-in-check-out'>
                                    <input type="email" placeholder='Business / 1 Adults / 2 Childs' className="form-control search_input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <p className='clanders'><RiArrowDownSLine className='icons'/></p>
                                    </div>                                    </div>
                                </div>
                            </div>


                            <div className='search_btn_div'>
                                <button type="submit" className="search_btn">Search</button>
                            </div>
                        </form>
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="" style={{ paddingRight: '18px', paddingLeft: '18px' }}>
                    <form>
                        <div className="row p-0" style={{ marginTop: '16px' }}>
                            {/* <div className="col-md-3" style={{ paddingLeft: '12px', paddingRight: '9px' }}>
                                <div className="search_div ">
                                    <label className="form-label search_label">From</label>
                                    <input type="email" placeholder='Cairo, Egypt' className="form-control search_input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div> */}
                            <div className="col-md-4 forms" >
                                <div className="search_div">
                                    <label className="form-label search_label"> Going To</label>
                                    <input type="email" placeholder='Riyadh, Saudi Arabia' className="form-control search_input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className="col-md-4 to" >
                                <div className="search_div">
                                   
                                    <label className="form-label  search_label">Check-in/Check-out</label>
                                    <div className='check-in-check-out'>
                                    <input type="email" placeholder='20 Dec - 30 Dec, 2023' className="form-control  search_input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <p className='clanders'><LuCalendarDays  className='icons'/></p>
                                    </div>
                                  

                                </div>
                            </div>
                            <div className="col-md-4 passengers" >
                                <div className="search_div">
                                    <label className="form-label  search_label">Passengers</label>
                                    <div className='check-in-check-out'>
                                    <input type="email" placeholder='Business / 1 Adults / 2 Childs' className="form-control search_input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <p className='clanders'><RiArrowDownSLine className='icons'/></p>
                                    </div>
                                
                                </div>
                            </div>
                        </div>


                        <div className='search_btn_div'>
                            <button type="submit" className="search_btn">Search</button>
                        </div>
                    </form>
                    </div>
                </TabPanel>
            </Tabs>





        </div>
    );
};

export default SearchCard;