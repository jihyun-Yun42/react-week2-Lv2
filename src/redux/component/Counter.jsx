import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { plusN, minusN } from '../modules/counter';

function Counter() {
  const [number, setNumber] = useState(0);
  const counter = useSelector((state) => {
    return state.counter;
  });
  const dispatch = useDispatch();
  return (
    <>
      <p>현재 카운트 : {counter.number}</p>
      <div>
        <input
          type="number"
          value={number}
          onChange={(event) => {
            const { value } = event.target;
            setNumber(+value);
          }}
        />
      </div>
      <button onClick={() => dispatch(plusN(number))}>+</button>

      <button onClick={() => dispatch(minusN(number))}>-</button>
    </>
  );
}

export default Counter;
