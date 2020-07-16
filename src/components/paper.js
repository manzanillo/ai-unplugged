import React from "react"

const Paper = ({ children }) => (
  <div className="row" style={{ paddingLeft: "8em", paddingRight: "8em" }}>
    <div className="paper">{children}</div>
  </div>
)

export default Paper
