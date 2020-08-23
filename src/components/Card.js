import React from "react";

export default (props) => {
  return (
    <a className="card" href="#">
      <div className="card--image-wrapper">
        <img src={props.assetsPath + props.src} alt={props.title} />
      </div>
      <div className="card--info">
        <h3>{props.title}</h3>
        <p>{props.year}</p>
      </div>
      <p>{props.genre}</p>
      <div className="kebab-menu"></div>
    </a>
  );
};
