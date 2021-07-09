import React from "react";

export function LengthJudge(props) {
  if (props.people.length > 5) {
    return <h3>That's a lot of people</h3>
  } else {
    return <h3>This is still a small directory</h3>
  }
}