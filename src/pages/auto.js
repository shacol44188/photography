import React, { Component } from 'react';
import Gallery from '../components/gallery.js';


function RealEstate(){

  const images = [
    {
      original: 'http://lorempixel.com/1000/600/nature/1/',
      thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      description: 'This is a sample description... I wonder what happens?'
    },
    {
      original: 'http://lorempixel.com/1000/600/nature/2/',
      thumbnail: 'http://lorempixel.com/250/150/nature/2/'
    },
    {
      original: 'http://lorempixel.com/1000/600/nature/3/',
      thumbnail: 'http://lorempixel.com/250/150/nature/3/'
    }
  ]

  return (
    <Gallery images={images} color='cRed'></Gallery>
  );
}

export default RealEstate;
