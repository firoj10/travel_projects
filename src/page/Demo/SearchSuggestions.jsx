import React, { useState } from 'react';
import './SearchSuggestions.css'
import { GiCommercialAirplane } from 'react-icons/gi';
function SearchSuggestions({ placeholder, value, onChange, data }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedAirport, setSelectedAirport] = useState(null);
    const [showSecondInput, setShowSecondInput] = useState(false);
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (value.length > 2) {
            const filteredSuggestions = data.filter((airport) =>
                airport.City_name.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
        onChange(e); 
    };

    const handleSelect = (selectedAirport) => {
        setSearchTerm(`${selectedAirport?.City_name}-${selectedAirport?.Airport_Code}-${selectedAirport?.World_Area_Code}`);
        setSelectedAirport(selectedAirport);
        setShowSecondInput(false);
        setSuggestions([]);
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder={placeholder}
                className="form-control search_input"
            />
            {showSecondInput && selectedAirport && (
                <input
                    type="text"
                    value={`${selectedAirport.City_name} - ${selectedAirport.Airport_Code} - ${selectedAirport.World_Area_Code}`}
                    onChange={() => { }}
                    className="form-control search_input"
                />
            )}
            <div className='mt-2 px-2 rounded suggestions_list_div' style={{ zIndex: '999', borderTop: '0px', overflowY: 'scroll', maxHeight: '200px', display: 'inline-block', position: 'fixed' }}>
                {suggestions.map((airport) => (
                    <div className='suggestions_list border-bottom'
                        key={airport.Airport_Code}
                        // key={airport.Airport_Code}
                        onClick={() => handleSelect(airport)}
                    >
                        {/* {airport.Country_name}, {airport.City_name}, {airport.Airport_Code}, {airport.World_Area_Code} */}
                        <div className='d-flex   justify-content-between align-items-center py-2'>
                            <div>
                                <div className='d-flex align-items-center justify-content-between'>
                                <div className='suggestions_icon'>
                                        <GiCommercialAirplane />
                                    </div>
                                    <div>
                                        <h4 className='suggestions_title'>{airport.City_name}, {airport?.Country_name}</h4>
                                        <p className='suggestions_content'>{airport.Airport_Name}</p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div>
                                <button className='btn suggestions_btn'> {airport.Airport_Code}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchSuggestions;
