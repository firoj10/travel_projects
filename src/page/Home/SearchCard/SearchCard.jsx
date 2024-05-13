import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './SearchCard.css';
import { LuCalendarDays } from 'react-icons/lu';
import { RiArrowDownSLine } from 'react-icons/ri';
import SearchSuggestions from '../../Demo/SearchSuggestions';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SearchInput from './SearchInput';
import Counter from './Counter';





const SearchCard = () => {
    const [selectedClass, setSelectedClass] = useState('Economy');

    const [showCard, setShowCard] = useState(false);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    // const [infants, setInfants] = useState(0);



    const handleClassChange = (event) => {
        setSelectedClass(event.target.value);
    };
    const toggleCard = () => {
        setShowCard(!showCard);
    };

    const incrementCount = (type) => {
        switch (type) {
            case 'adults':
                if (adults < 10) setAdults(adults + 1);
                break;
            case 'children':
                if (children < 10) setChildren(children + 1);
                break;
            // case 'infants':
            //     if (infants < 10) setInfants(infants + 1);
            //     break;
            default:
                break;
        }
    };

    const decrementCount = (type) => {
        switch (type) {
            case 'adults':
                if (adults > 1) setAdults(adults - 1);
                break;
            case 'children':
                if (children > 0) setChildren(children - 1);
                break;
            // case 'infants':
            //     if (infants > 0) setInfants(infants - 1);
            //     break;
            default:
                break;
        }
    };





    //date_picker_code_start
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const formatDateRange = () => {
        if (startDate && endDate) {
            const startFormatted = startDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
            const endFormatted = endDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
            const endYear = endDate.getFullYear();
            const startYear = startDate.getFullYear();


            const yearPart = endYear !== startYear ? `, ${endYear}` : '';

            return `${startFormatted} - ${endFormatted}${yearPart}`;
        }
        return '';
    };

    //date_picker_code_end



    const [airportData, setairportData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch('./airport_data');
                const response = await fetch('./airport_data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setairportData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    // const [airportDatas, setAirportDatas] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('./airport_data.csv');
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const csvData = await response.text();
    //             const parsedData = Papa.parse(csvData, { header: true }).data;
    //             console.log(JSON.stringify(parsedData, null, 2)); // Logging parsedData in JSON format
    //             setAirportDatas(parsedData);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);




    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const handleFromChange = (e) => {
        setFromCity(e.target.value);
    };

    const handleToChange = (e) => {
        setToCity(e.target.value);
    };

    return (
        <div className=' '>
            <div className=' card ' style={{ boxShadow: '0px 0px 32px 0px #00000029', }}>
                <Tabs >
                    <TabList>
                        <Tab><button className='hotels_btn'>Flights</button></Tab>
                        <Tab><button className='hotels_btn'>Hotels</button></Tab>
                    </TabList>

                    <TabPanel >

                        <div className="" style={{ paddingRight: '18px', paddingLeft: '18px', }}>
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
                                    <div className="col-md-6 col-xl-3 forms" >
                                        <div className="search_div ">
                                            <label className="form-label search_label">From</label>
                                            <div>

                                                <SearchSuggestions

                                                    placeholder="From"
                                                    value={fromCity}
                                                    onChange={handleFromChange}
                                                    data={airportData}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xl-3 to " >
                                        <div className="search_div">
                                            <label className="form-label search_label">To</label>
                                            <SearchSuggestions
                                                placeholder="To"
                                                value={toCity}
                                                onChange={handleToChange}
                                                data={airportData}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xl-3 dates " >
                                        <div className="search_div">
                                            <label className="form-label  search_label">Dates</label>
                                            {/* <div className='check-in-check-out'>
                                                <input type="email" placeholder='20 Dec - 30 Dec, 2023' className="form-control  search_input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                <p className='clanders'><LuCalendarDays className='icons' /></p>
                                            </div>
                                            <DatePicker
                                            className='check-in-check-out'
                                            selectsRange={true}
                                            startDate={startDate}
                                            endDate={endDate}
                                            monthsShown={2}

                                            onChange={(update) => {
                                                setDateRange(update);
                                            }}
                                            isClearable={true}
                                            /> */}
                                            <div>
                                                <div className='check-in-check-out d-none'>
                                                    <input
                                                        type="text"
                                                        // value={startDate && endDate ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}` : ''}
                                                        value={formatDateRange()}
                                                        placeholder='Select Date Range'
                                                        className="form-control search_input"
                                                        id="exampleInputEmail1"
                                                        aria-describedby="emailHelp"
                                                        readOnly
                                                    />
                                                   
                                                </div>
                                                <div className=''> 
                                                <DatePicker
                                                    className="form-control search_input border-0"
                                                    placeholderText="Select Date Range"
                                                    selectsRange
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    monthsShown={2}
                                                    onChange={handleDateChange}
                                                    isClearable={false}
                                                    style={{ zIndex: '999' }}
                                                    dateFormat="d MMM yyyy"
                                                />
                                               
                                            </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xl-3 passengers" >
                                        <div className="search_div" >
                                            <label className="form-label  search_label">Passengers</label>
                                            <div className='check-in-check-out'>
                                               <div>
                                               <SearchInput
                                                    placeholder={`${selectedClass} /${adults} Adults / ${children} Children  `}
                                                    onClick={toggleCard}
                                                />
                                                
                                               </div>
                                                {showCard && (
                                                    <div className="card px-3 py-2" style={{ position: 'fixed' }}>
                                                        <div className="class-options row">
                                                            <div className='col-md-6'>
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        value="Economy Plus"
                                                                        checked={selectedClass === 'Economy Plus'}
                                                                        onChange={handleClassChange}
                                                                    />
                                                                    Economy Plus
                                                                </label>
                                                            </div>

                                                            <div className='col-md-6'>
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        value="Economy"
                                                                        checked={selectedClass === 'Economy'}
                                                                        onChange={handleClassChange}
                                                                    />
                                                                    Economy
                                                                </label>
                                                            </div>
                                                            <div className='col-md-6'>
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        value="Business"
                                                                        checked={selectedClass === 'Business'}
                                                                        onChange={handleClassChange}
                                                                    />
                                                                    Business
                                                                </label>
                                                            </div>
                                                            <div className='col-md-6'>
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        value="First Class"
                                                                        checked={selectedClass === 'First Class'}
                                                                        onChange={handleClassChange}
                                                                    />
                                                                    First Class
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <Counter
                                                            label="Adults"
                                                            count={adults}
                                                            onIncrement={() => incrementCount('adults')}
                                                            onDecrement={() => decrementCount('adults')}
                                                        />
                                                        <Counter
                                                            label="Children"
                                                            count={children}
                                                            onIncrement={() => incrementCount('children')}
                                                            onDecrement={() => decrementCount('children')}
                                                        />
                                                        {/* <Counter
                                                            label="Infants"
                                                            count={infants}
                                                            onIncrement={() => incrementCount('infants')}
                                                            onDecrement={() => decrementCount('infants')}
                                                        /> */}
                                                    </div>
                                                )}
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
                    <TabPanel >
                        <div className="" style={{ paddingRight: '18px', paddingLeft: '18px', }}>
                            <form>
                                <div className="row p-0" style={{ marginTop: '16px' }}>

                                    <div className="col-md-12 col-lg-4 forms" >
                                        <div className="search_div">
                                            <label className="form-label search_label"> Going To</label>
                                            <input type="email" placeholder='Riyadh, Saudi Arabia' className="form-control search_input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 to" >
                                        <div className="search_div">

                                            <label className="form-label  search_label">Check-in/Check-out</label>
                                            <div className='check-in-check-out'>
                                                <input type="email" placeholder='20 Dec - 30 Dec, 2023' className="form-control  search_input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                <p className='clanders'><LuCalendarDays className='icons' /></p>
                                            </div>


                                        </div>
                                    </div>
                                    <div className=" col-md-6 col-lg-4 passengers" >
                                        <div className="search_div">
                                            <label className="form-label  search_label">Passengers</label>
                                            <div className='check-in-check-out'>
                                                <input type="email" placeholder='Business / 1 Adults / 2 Childs' className="form-control search_input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                <p className='clanders'><RiArrowDownSLine className='icons' /></p>
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
        </div>
    );
};

export default SearchCard;