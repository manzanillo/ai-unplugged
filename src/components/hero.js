import React from "react"
import PropTypes from "prop-types"

import headerImage from "../images/header.png"
import mainImage from "../images/main.jpg"
import Paper from "../components/paper"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "6rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <Paper>
      <h1 style={{ textAlign: "center" }}>AI Unplugged</h1>
      <p style={{ textAlign: "center" }}>
        Activities and teaching material on artificial intelligence. Download
        the brochure in German, English, Korean, or Portuguese (BR).
      </p>
      <div style={{ textAlign: "center" }}>
        <button
          style={{ margin: "1em" }}
          onClick={() => (window.location.href = "german.pdf")}
        >
          German
        </button>
        <button
          style={{ margin: "1em" }}
          onClick={() => (window.location.href = "english.pdf")}
        >
          English
        </button>
        <button
          style={{ margin: "1em" }}
          onClick={() => (window.location.href = "korean.pdf")}
        >
          Korean
        </button>
        <button
          style={{ margin: "1em" }}
          onClick={() => (window.location.href = "portuguese.pdf")}
        >
          Portuguese
        </button>
        <button
          style={{ margin: "1em" }}
          onClick={() => (window.location.href = "espanol.pdf")}
        >
          Spanish
        </button>
        <button
          style={{ margin: "1em" }}
          onClick={() => (window.location.href = "swedish.pdf")}
        >
          Swedish
        </button>
      </div>
      <div style={{ margin: 60, position: "relative" }}>
        <img src={mainImage} alt="Some content" />
      </div>
    </Paper>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
