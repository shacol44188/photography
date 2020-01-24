import React, { Component } from 'react';
import Gallery from '../components/gallery.js';
import {GetGallery} from '../components/apirequest.js';

const Portfolio = (props) => {
  return (
    <div>
      <Gallery category={props.category} color={props.color}></Gallery>
    </div>
  );
}

export default Portfolio
