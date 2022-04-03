import React from 'react';

import { formatTime } from '../utils';

const FinalPage = ({ onReset, time, conclusion, image }) => {

  const title = "Cartoon Characters Expert System";
  
  const header_style = {
    fontSize: 36,
    color: "black",
    textAlign: "center",
  };

  const conclusion_style = {
    fontSize: 24,
    color: "#795f5f",
    textAlign: "center",
    marginBottom: "30px",  
  }

  const conclusion_time_style = {
    fontSize: 20,
    color: "#795f5f",
    textAlign: "center", 
    marginTop: "30px", 
  }

  if (!image) image = 'background.jpg';
    const avatarImage = require('../assets/' + image);

  return(
    <div className="card">
      <div className="card-content">
        <h1>{title}</h1>
        <div className="content">
          <h3 style={header_style} > Well done </h3>
          <p style={conclusion_style} > You have a personality like <strong>  {conclusion}!</strong></p>
          <img src={avatarImage} alt="Girl in a jacket" width="300" height="300" />
          <p style={conclusion_time_style} >Your time: <strong>{formatTime(time)}</strong></p>
          <button className="button is-danger is-light is-medium is-outlined " onClick={onReset}>Try again!</button>
        </div>
      </div>
    </div>
  );
}

export default FinalPage;