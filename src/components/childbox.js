import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

const ChildBoxLink = (props) =>
{
  return(
    <div className={props.cName}>
      <p className="title">
        <NavLink to={props.link}>
          <img src={props.img} />
          <h4>{props.title}</h4>
        </NavLink>
      </p>
    </div>
  );
}

export default ChildBoxLink
