import React from "react"

const Paper = ({ children }) => (
  <div
    className="row"
    style={{
      paddingLeft: window.innerWidth > 768 ? "8em" : "1em",
      paddingRight: window.innerWidth > 768 ? "8em" : "1em",
    }}
  >
    <div className="paper">{children}</div>
  </div>
)

export default Paper
