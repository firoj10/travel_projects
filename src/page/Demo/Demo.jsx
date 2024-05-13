// import React, { useState } from 'react';
// import SearchSuggestions from './SearchSuggestions'; // Import your search suggestions component
// import airportData from './../../../public/airport_data.json';

// function Demo() {
//     // State for the 'From' and 'To' fields
//     const [fromCity, setFromCity] = useState('');
//     const [toCity, setToCity] = useState('');

//     // Handler functions to update the 'From' and 'To' fields
//     const handleFromChange = (e) => {
//         setFromCity(e.target.value);
//     };

//     const handleToChange = (e) => {
//         setToCity(e.target.value);
//     };

//     return (
//         <form>
//             <div className="row p-0" style={{ marginTop: '16px' }}>
//                 <div className="col-md-6 col-xl-3 forms">
//                     <div className="search_div">
//                         <label className="form-label search_label">From</label>
//                         {/* Use the search suggestions component for 'From' input */}
//                         <SearchSuggestions
//                             placeholder="From"
//                             value={fromCity}
//                             onChange={handleFromChange}
//                             data={airportData}
//                         />
//                     </div>
//                 </div>
//                 <div className="col-md-6 col-xl-3 to">
//                     <div className="search_div">
//                         <label className="form-label search_label">To</label>
//                         {/* Use the search suggestions component for 'To' input */}
//                         <SearchSuggestions
//                             placeholder="To"
//                             value={toCity}
//                             onChange={handleToChange}
//                             data={airportData}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </form>
//     );
// }

// export default Demo;
