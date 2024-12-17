import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const MultipleProgressBars = () => {
  return (
    <div>
      <p>HTML5 90%</p>
      <ProgressBar variant="danger" now={90}/>
      <p>CSS 80%</p>
      <ProgressBar  variant="info" now={80}/>
      <p>JAVASCRIPT</p>
      <ProgressBar  variant="warning" now={70}/>
      <p>PHP 60%</p>
      <ProgressBar variant="success" now={60}/>
      <p>REACT</p>
      <ProgressBar  now={50}/>
    </div>
  );
};

export default MultipleProgressBars;