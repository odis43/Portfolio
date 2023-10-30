import React from "react";
import "./Experience.css";
import { ReactComponent as Manulife } from "/Users/odi/Documents/Portfolio/portfolio/src/SVGs/manulife.svg";
import { ReactComponent as Resume } from "/Users/odi/Documents/Portfolio/portfolio/src/SVGs/resume.svg";
import { Timeline } from "antd";
import healthcare from "/Users/odi/Documents/Portfolio/portfolio/src/Photos/healthcare.png";
import manulife from "/Users/odi/Documents/Portfolio/portfolio/src/Photos/manulife.png";
import bp from "/Users/odi/Documents/Portfolio/portfolio/src/SVGs/bp.png";
import { forwardRef } from "react";

const Experience = forwardRef((props, ref) => {
  const { refExperience } = props;
  return (
    <div ref={refExperience} id="Experience" className="experience-container">
      <div className="experience">
        <h2>Experience</h2>
      </div>

      <Timeline className="Timeline">
        <Timeline.Item
          className="TimelineItem"
          dot={<img className="timelineIcon" src={bp} />}
        >
          <div className="timelineContent">
            <h3 className="workTitle">UW Blueprint</h3>
            <h4 className="workPosition">
              Full Stack Developer | May 2023 - present
            </h4>
            <ul className="timelinePara">
              <li>
                Developed a robust platform to facilitate streamlined operations
                for Algoma’s Children’s Aid Society, achieving enhanced
                efficiency through the migration of legacy spreadsheets and the
                implementation of advanced data organization features.
              </li>
              <li>
                Implemented a global user search feature by integrating custom
                endpoints within the internal API working in conjunction with
                Postgres, enabling rapid access to data from hundreds of users.
              </li>
              <li>
                Engineered the front-end presentation of users’ search results
                using custom React components and useState hooks, providing a
                dynamic and responsive environment for users.
              </li>
              <li>
                Crafted a scalable front-end skeleton for the user dashboard,
                adhering to relevant React design principles which allowed for
                effortless integration of additional functionalities by future
                developers.
              </li>
            </ul>
          </div>
        </Timeline.Item>
        <Timeline.Item
          className="TimelineItem"
          dot={<img className="timelineIcon" src={healthcare} />}
        >
          <div className="timelineContent">
            <h3 className="workTitle">HealthCare Systems R&A</h3>
            <h4 className="workPosition">
              Machine Learning Engineer | January 2023 - March 2023
            </h4>
            <ul className="timelinePara">
              <li>
                Engineered a visually interactive game utilizing a machine
                learning model trained to classify user movements, resulting in
                the achievement of a project milestone two weeks ahead of
                schedule.
              </li>
              <li>
                Implemented an algorithm for extracting and evaluating a set of
                new data features, resulting in a 40% improvement in the
                classification accuracy of the model.
              </li>
              <li>
                Developed a hybrid neural network architecture, actively
                harnessing the potential of both LSTM and CNN layers, resulting
                in significant accuracy improvements across all classes of the
                data set.
              </li>
            </ul>
          </div>
        </Timeline.Item>
        <Timeline.Item dot={<img className="timelineIcon" src={manulife} />}>
          <div className="timelineContent">
            <h3 className="workTitle">Manulife</h3>
            <h4 className="workPosition">
              Data Engineer | April 2022 - August 2022
            </h4>
            <ul className="timelinePara">
              <li>
                Effectively harnessed the Devo Platform to filter and refine
                extensive data logs, resulting in a notable 10% reduction in
                redundant metric alerts.
              </li>
              <li>
                Constructed an automation tool for seamless data transfer
                between AWS S3 and Azure Blob storage, ensuring the safety of
                thousands of archived data logs.
              </li>
              <li>
                Refined the performance of the Devo platform by 30% through
                optimized LINQ scripting.
              </li>
            </ul>
          </div>
        </Timeline.Item>
      </Timeline>
    </div>
  );
});

export default Experience;
