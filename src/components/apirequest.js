import React, { Component } from 'react';
import axios from 'axios';

const Contact = (props) => {
  let dets = {from:props.email,subject:props.subject,body:props.message};


  console.log('MAKING REQUEST NOW');
  let url = process.env.API_URL + "photoContact";
  axios.post(url,props)
  .then(res => {
//    console.log(res);
//    console.log(res.data);
    console.log(res);
    return res.data;
  });
}

const GetGallery = cat => {

let url = process.env.API_URL + cat;

  return axios.get(url)
  .then(res => {
//    console.log(res);
//    console.log(res.data);

    return res.data;
  });
}

export{
  Contact,
  GetGallery
}
