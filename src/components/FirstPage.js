import React from 'react';

const FirstPage = ({ onQuizStart }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Find your cartoon spirit</h1>
          <button className="button is-danger is-light is-medium is-outlined " onClick={onQuizStart}>Start Quiz</button>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;

// https://bulma.io/documentation/elements/button/