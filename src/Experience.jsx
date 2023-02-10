import React from "react";
import "./Experience.css";
import { ReactComponent as Manulife } from "./manulife.svg";
import { ReactComponent as Resume } from "./resume.svg";
import { Timeline } from "antd";
import healthcare from "./healthcare.png";
import manulife from "./manulife.png";
import { forwardRef } from "react";

const Experience = forwardRef((props,ref) => {
  const {refExperience} = props;
  return (
    <div ref={refExperience} id="Experience" className="experience-container">
      <div className="experience">
        <h2>Experience</h2>
      </div>

      <Timeline className="Timeline">
        <Timeline.Item className="TimelineItem" dot={<img className="timelineIcon" src={healthcare}/>}>
          <div className="timelineContent">
            <h3 className="workTitle">HealthCare Systems R&A</h3>
            <h4 className="workPosition">
              Machine Learning Engineer | January 2023 - present
            </h4>
            <ul >
              <li>Successfully developed a visually interactive game and designed an efficient training algorithm for a classifier, resulting in meeting team project milestones.</li>
              <li>Designed and implemented an algorithm for extracting and evaluating discrete wavelet features, resulting in a significant improvement in classification accuracy.</li>
              <li>Implemented, trained, and evaluated a neural network utilizing discrete wavelet features, resulting in improved classification accuracy.</li>
              <li>Efficiently resolved issues in a convolutional neural network, significantly accelerating workflow for other engineers.</li>
            </ul>
          </div>
        </Timeline.Item>
        <Timeline.Item dot={<img className="timelineIcon" src={manulife} />}>
          <div className="timelineContent">
            <h3 className="workTitle">Manulife</h3>
            <h4 className="workPosition">
             Data Engineer | April 2022 - August 2022
            </h4>
            <ul>
              <li>Utilized the Devo Platform to efficiently maintain large data logs.</li>
              <li>Designed and implemented an automation tool for seamless data transfer between AWS S3 and Azure Blob storage.</li>
              <li>Significantly boosted the performance of the Devo platform by 30% through optimized LINQ scripting.</li>
              <li>Successfully collaborated with cross-functional teams in Asia and North America to resolve troubleshooting issues with the Devo platform.</li>
            </ul>
          </div>
        </Timeline.Item>
      </Timeline>
    </div>
  );
});

export default Experience;
