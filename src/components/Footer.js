import React, {useContext} from "react";

export function Footer({message, logout}) {
  return (<div>
      <p> Ending the paragraph here {message}</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}