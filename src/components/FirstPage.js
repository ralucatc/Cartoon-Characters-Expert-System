import React from 'react';

const FirstPage = ({ onQuizStart }) => {

  const title = "Cartoon Characters Expert System";
  
  const header_style = {
    fontSize: 36,
    color: "black",
    textAlign: "center",
    padding : "10px",
    marginBottom: "30px",
  };

  const button = {
    fontSize: 24,
    marginBottom : "20px",
  };

  return(
    <div className="card">
      <div className="card-content">
        <h1>{title}</h1>
        <div className="content">
          <h2 style={header_style} > Find your cartoon spirit!</h2>
          <button className="button is-danger is-light is-medium is-outlined " onClick={onQuizStart} style={button}>Start Quiz</button>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
