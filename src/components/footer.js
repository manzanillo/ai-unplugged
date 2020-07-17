import React from "react"

import { COLORS } from "../styles/constants"

const Footer = () => (
  <footer
    style={{
      padding: "1rem",
      backgroundColor: COLORS.lightGray,
    }}
  >
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "space-between",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 240px))",
        padding: "1rem 2rem",
        fontSize: ".85rem",
      }}
    >
      <div style={{ color: COLORS.blue, fontWeight: 700 }}>
        <a
          style={{ textDecoration: "none" }}
          href="mailto:stefan.seegerer@fau.de"
        >
          Contact Us
        </a>
      </div>
      <div style={{ color: COLORS.gray }}>
        Made with <span style={{ color: "#e25555" }}>&#9829;</span>
        {` `}
        by Stefan Seegerer and Annabel Lindner
      </div>
    </div>
  </footer>
)

export default Footer
