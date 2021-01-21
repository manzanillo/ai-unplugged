import React from "react"

import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "0rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Activities"
      description="Check out the download material for all activities below."
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
        <ul style={{ color: COLORS.gray, textAlign: "left" }}>
          <li>
            <a href="activity1.pdf">Monkey cards (for print)</a>
          </li>
          <li>
            <a href="activity1.pptx">Monkey cards (presentation)</a>
          </li>
        </ul>
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
        <ul style={{ color: COLORS.gray, textAlign: "left" }}>
          <li>
            <a href="activity2.pdf">Image cards</a>
          </li>
        </ul>
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
        <ul style={{ color: COLORS.gray, textAlign: "left" }}>
          <li>
            <a href="activity3.pdf">Board game</a>
          </li>
          <li>
            <a href="activity3-german.pdf">Computer rules (German)</a>
          </li>
          <li>
            <a href="activity3-english.pdf">Computer rules (English)</a>
          </li>
          <li>
            <a href="activity3-korean.pdf">Computer rules (Korean)</a>
          </li>
          <li>
            <a href="https://www.stefanseegerer.de/schlag-das-krokodil/">
              Online version
            </a>
          </li>
          <li>
            Figures for 3D printer:{" "}
            Monkey{" "}(<a href="https://www.tinkercad.com/things/8FYM8kdDZwF">2D</a>,
                        {" "}
                        <a href="https://www.tinkercad.com/things/8EuT24CJEyX-3d-monkey-for-ai-unplugged">3D</a>
                        )
            ,{" "}
               Crocodile (<a href="https://www.tinkercad.com/things/a4BmRyLw6bQ">2D</a>,{" "} 
                          <a href="https://www.tinkercad.com/things/kBmGgxcegq0-3d-croco-for-ai-unplugged">3D</a>)
          </li>
        </ul>
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
        <ul style={{ color: COLORS.gray, textAlign: "left" }}>
          <li>
            <a href="activity3.pdf">Board game</a>
          </li>
          <li>
            <a href="activity4-german.pdf">Computer rules (German)</a>
          </li>
          <li>
            <a href="activity4-english.pdf">Computer rules (English)</a>
          </li>
          <li>
            <a href="activity4-korean.pdf">Computer rules (Korean)</a>
          </li>
        </ul>
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
        <ul style={{ color: COLORS.gray, textAlign: "left" }}>
          <li>
            <a href="activity5-german.pdf">Questions for Computer (German)</a>
          </li>
          <li>
            <a href="https://classic.csunplugged.org/wp-content/uploads/2014/12/unplugged-20-the_turing_test_0.pdf">
              Questions for Computer (English)
            </a>
          </li>
        </ul>
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
        <h3>Further inspiration</h3>
        <ul style={{ color: COLORS.gray, textAlign: "left" }}>
          <li>
            <a href="https://www.teachermagazine.com.au/articles/ai-classroom-activity-facial-recognition"
               rel="noopener"
               target="_blank">Facial Recognition (external link)</a>
          </li>
          <li>
            <a href="https://teachinglondoncomputing.org/resources/inspiring-unplugged-classroom-activities/the-brain-in-a-bag-activity/"
               rel="noopener"
               target="_blank">
                  Brain-in-a-Bag (external link)
            </a>
          </li>
          <li>
            <a href="https://computingeducation.de/proj-snaip-B/"
               rel="noopener"
               target="_blank">
                 Unsupervised Learning (external link, German)
            </a>
          </li>
        </ul>
      </div>
    </content>

    <p
      style={{
        color: COLORS.gray,
        textAlign: "center",
        marginTop: "2em",
      }}
    >
      <i>
        Korean translation: Shinok Kang, Wonil Kim, Injoo Kim, Horim Park,
        Sukjae Yang, Doyoung Lee and Jinsook Lim
      </i>
    </p>
    <p
      style={{
        color: COLORS.gray,
        textAlign: "center",
        marginTop: "2em",
      }}
    >
      <i>
         If you are interested in translating the brochure into your language, just email us at hi(at)aiunplugged.org. 
      </i>
    </p>
  </div>
)

export default Content
