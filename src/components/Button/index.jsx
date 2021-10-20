import React from "react";

export default function Button(props) {
  return (
    <button className={props.className} style={props.style} onClick={props.action}>
      {props.title}
    </button>
  );
}
