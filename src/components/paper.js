import React from "react"
import "../styles/paper.css"

const Paper = ({ children }) => (
  <div className="row" id="paper">
    <div className="paper">{children}</div>
  </div>
)

export default Paper
