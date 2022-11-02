import React from "react";
import "./list.css";

export default function List(props) {
  return (
    <ul className="list_wrapp-item list__text">
      {props.item.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
}
