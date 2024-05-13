import React from 'react';

const SearchInput = ({ placeholder, onClick }) => {
  return (
    <input
      type="email"
      placeholder={placeholder}
      className="form-control search_input"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      onClick={onClick}
    />
  );
};

export default SearchInput;