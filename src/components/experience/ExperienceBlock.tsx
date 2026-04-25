import React from "react";
import { useState } from "react";

type ExperienceBlockProps = {
  title: string;
  dates: string;
  datesShortened: string;
  description: React.ReactNode;
};

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({
  title,
  dates,
  datesShortened,
  description,
}) => {
  const [expand, setExpand] = useState(false);
  const [locked, setLocked] = useState(false);
  return (
    <div>
      <div className="timeline-block timeline-block-right">
        <div className="marker"></div>
        <div className="timeline-content">
          <div className="position">{title}</div>
          <span className="inline-date">{datesShortened}</span>
          <div
            className="desc"
            onMouseEnter={() => setExpand(true)}
            onMouseLeave={() => {
              if (!locked) setExpand(false);
            }}
            onClick={(e) => {
              var lock = !locked;
              if ((e.target as HTMLElement).closest("span.expand")) {
                lock = false;
              }
              setLocked(lock);
            }}
          >
            <span
              className={`${expand ? "expand" : "hide"}`}
              onClick={() => setExpand(!expand)}
            />
            {!expand && <span> ...</span>}
            <div className={`desc-wrapper ${expand ? "open" : ""}`}>
              <div>{description}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="timeline-date timeline-date-right">{dates}</div>
    </div>
  );
};

export default ExperienceBlock;
