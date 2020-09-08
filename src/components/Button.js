import React from "react";

export default function Button(props) {
  const {
    type,
    style,
    text,
    onClick,
    ...other
  } = props;

  return <button type="button" className={`${type}-button button_${style}`} {...other} onClick={onClick} />
};
