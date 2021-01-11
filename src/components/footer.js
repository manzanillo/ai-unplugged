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
      <img src="https://vg08.met.vgwort.de/na/6f46d9aa700441e99585aac5902baee2" width="1" height="1" alt="">
    </div>
  </footer>
)

export default Footer
