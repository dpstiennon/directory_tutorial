import React from "react";

export default function PersonCard(props) {
  return <div style={{backgroundColor: 'green'}}>
    <ul>
      <li>{props.person.name}</li>
      <li>{props.person.address}</li>
      <li>{props.person.email}</li>
    </ul>
  </div>
}