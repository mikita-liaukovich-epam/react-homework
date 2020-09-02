import React from "react";

export default (props) => {
  const {
    type,
    style,
    text,
    onClick,
    ...other
  } = props;

  return <button type="button" className={`${type}-button ${type}-button_${style}`} {...other} onClick={onClick} />
};
