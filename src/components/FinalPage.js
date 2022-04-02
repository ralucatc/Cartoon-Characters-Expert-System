import React from 'react';

import { formatTime } from '../utils';

const FinalPage = ({ data, onReset, time, conclusion, image }) => {

  if (!image) image = 'background.jpg';
const avatarImage = require('../assets/' + image);
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>Tadaaaa dadaaa</h3>
          <p> Bravo, esti {conclusion}</p>
          <img src={avatarImage} alt="Girl in a jacket" width="100" height="100"/>
          <p><strong>Your time: </strong>{formatTime(time)}</p>
          <button className="button is-success" onClick={onReset}>Try again!</button>
        </div>
      </div>
    </div>
  );
}

export default FinalPage;