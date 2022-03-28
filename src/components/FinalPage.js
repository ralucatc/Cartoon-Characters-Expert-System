import React from 'react';

 import { formatTime } from '../utils';

const FinalPage = ({ data, onReset, time, conclusion }) => {


  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>Tadaaaa dadaaa</h3>
          <p> Bravo, esti {conclusion}</p>
          <p><strong>Your time: </strong>{formatTime(time)}</p>
          <button className="button is-success" onClick={onReset}>Try again!</button>
        </div>
      </div>
    </div>
  );
}

export default FinalPage;