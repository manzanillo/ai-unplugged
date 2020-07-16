import React from "react"

import feature from "../images/feature.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "0rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Activities"
      description="Check out the download material for the individual activities below."
    />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>Activity 1</h3>
        <p style={{ color: COLORS.gray }}>
          Includes plugins for analytics, building sitemaps, and optimizing
          images
        </p>
      </div>
    </content>

    <content
      style={{
        display: "grid",
        alignItems: "left",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>Activity 2</h3>
        <p style={{ color: COLORS.gray }}>
          Includes plugins for analytics, building sitemaps, and optimizing
          images
        </p>
      </div>
    </content>
    <content
      style={{
        display: "grid",
        alignItems: "left",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>Activity 3</h3>
        <p style={{ color: COLORS.gray }}>
          Includes plugins for analytics, building sitemaps, and optimizing
          images
        </p>
      </div>
    </content>
    <content
      style={{
        display: "grid",
        alignItems: "left",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>Activity 4</h3>
        <p style={{ color: COLORS.gray }}>
          Includes plugins for analytics, building sitemaps, and optimizing
          images
        </p>
      </div>
    </content>
    <content
      style={{
        display: "grid",
        alignItems: "left",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>Activity 5</h3>
        <p style={{ color: COLORS.gray }}>
          Includes plugins for analytics, building sitemaps, and optimizing
          images
        </p>
      </div>
    </content>
  </div>
)

export default Content
