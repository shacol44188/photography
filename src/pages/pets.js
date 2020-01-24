import React, { Component } from 'react';
import Gallery from '../components/gallery.js';


const Pets = (props) => {

  return (
    <div>
      <Gallery category={props.category} color='cGrey'></Gallery>
    </div>
  );
}

export default Pets;
