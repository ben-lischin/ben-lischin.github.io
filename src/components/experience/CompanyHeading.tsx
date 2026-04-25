import React from "react";
import { openLink } from "../../utils";

type CompanyHeaderProps = {
  company: string;
  url: string;
};

const CompanyHeader: React.FC<CompanyHeaderProps> = ({ company, url }) => {
  return (
    <div className="timeline-block timeline-block-right">
      <div className="timeline-content">
        <h3 onClick={() => openLink(url)}>
          {company}
        </h3>
      </div>
    </div>
  );
};

export default CompanyHeader;
