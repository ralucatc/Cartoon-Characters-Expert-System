import React, { useEffect, useState } from 'react';

 import { formatTime } from '../utils';

const FinalPage = ({ data, onReset, time }) => {

  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>Tadaaaa dadaaa</h3>
          <p> Something, something .. Maybe Dexter, maybe Johnny Bravo</p>
          <p><strong>Your time: </strong>{formatTime(time)}</p>
          <button className="button is-success" onClick={onReset}>Try again!</button>
        </div>
      </div>
    </div>
  );
}

export default FinalPage;