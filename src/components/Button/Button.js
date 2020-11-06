import React from "react";

export default function Button(props) {
  const {
    type,
    buttonType,
    style,
    text,
    onClick,
    ...other
  } = props;

  return <button type={buttonType} className={`${type}-button button_${style}`} {...other} onClick={onClick} />
};
