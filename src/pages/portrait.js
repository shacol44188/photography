import React, { Component } from 'react';
import Gallery from '../components/gallery.js';

import sutton from '../images/sutton-portrait.png';
import bella from '../images/bella.png';
import finn from '../images/finn.png';


function Pets(){

  const images = [
    {
      original: sutton,
      thumbnail: sutton,
      description: 'Sutton!'
    },
    {
      original: bella,
      thumbnail: bella,
      description: 'Bella!'
    },
    {
      original: finn,
      thumbnail: finn,
      description: 'Finn!'
    }
  ]

  return (
    <Gallery images={images} color='cGrey'></Gallery>
  );
}

export default Pets;
