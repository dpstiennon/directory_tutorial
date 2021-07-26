import React from "react";
import {Link} from "react-router-dom";

export function Footer(props) {
  return (<div>
      <p> Ending the paragraph here {props.message}</p>
      <Link to="/">Logout</Link>
    </div>
  )
}