import React, { Component } from 'react';
import Gallery1 from '../components/gallery1.js';

const Portfolio1 = (props) => {

  const cClass = "content "+props.color;

  return (
    <div className={cClass}>
      <div className="tile is-vertical is-12 gallery">
          <Gallery1 category={props.category} color={props.color}></Gallery1>
      </div>
    </div>
  );
}

export default Portfolio1
