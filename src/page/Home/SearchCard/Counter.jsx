import React from 'react';
import './Counter.css'

const Counter = ({ label, count, onIncrement, onDecrement }) => {
  return (
    <div>
      <label>{label}</label>
      <div className='d-flex justify-content-left align items-center'>
        <p className='increments-btn' onClick={onDecrement} disabled={count === 0}>-</p>
        <p className='increments-count'>{count}</p>
        <p className='increments-btn' onClick={onIncrement} disabled={count === 10}>+</p>
      </div>
    </div>
  );
};

export default Counter;