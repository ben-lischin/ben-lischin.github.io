import { useState } from "react";
import { openLink } from "../utils";

const Experience = () => {
    const [expand1, setExpand1] = useState(false);
    const [expand2, setExpand2] = useState(false);
    const [expand3, setExpand3] = useState(false);

    return (
        <section id="experience">
            <div className="section-header">
                <h2 className="section">Experience</h2>
            </div>
            {/* <hr /> */}
            <div className="timeline">
               <div>
                  <div className="timeline-block timeline-block-right">
                    <div className="timeline-content">
                        <h3 onClick={() => openLink('https://www.klaviyo.com/')}>Klaviyo</h3>
                    </div>
                  </div>
                  <div className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <div className="position">Software Engineer I</div>
                            <span className="inline-date">7/25 - Current</span>
                            <div className="desc">
                                <span 
                                    className={`${expand3 ? "expand" : "hide"}`}
                                    onClick={() => setExpand3(!expand3)}
                                />
                                {!expand3 && 
                                    <span> ...</span>
                                }
                                {expand3 && 
                                    <ul>
                                        <li>Software Engineer on Email Platforms.</li>
                                    </ul>
                                }
                            </div>
                        </div>
                  </div>
                  <div className="timeline-date timeline-date-right">Jul 2025 - Current</div>
                  <div className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <div className="position">Software Engineer Co-Op</div>
                              <span className="inline-date">7/24 - 12/24</span>
                              <div className="desc">
                                <span 
                                    className={`${expand2 ? "expand" : "hide"}`}
                                    onClick={() => setExpand2(!expand2)}
                                />
                                {!expand2 && 
                                    <span> ...</span>
                                }
                                {expand2 && 
                                    <ul>
                                        <li>Created a dashboard providing visibility into Klaviyo's email sending metrics – designing a data collection system as well as building a centralized dashboard to present the information.</li>
                                        <li>Implemented thread-safe metric collection with goroutines, able to push data to DynamoDB and flush memory on interval. This was integrated directly into our batch event processing service, handling high-volume production traffic. Configured cron jobs to clean records and maintain historical rollups.</li>
                                        <li>Developed a REST API with Go and Gin, exposing the database via internal ingress secured to the company VPC as well as specified IP ranges.</li>
                                        <li>Designed a near real-time React interface to highlight these key metrics, including data visualizations and paginated tables, and support historical data downloads. The dashboard is regulated by user authentication with role-based access to the particular page.</li>
                                    </ul>
                                }
                              </div>
                        </div>
                  </div>
                  <div className="timeline-date timeline-date-right">Jul 2024 - Dec 2024</div>
               </div>
                <div className="timeline-block timeline-block-right">
                  <div className="timeline-content">
                  <div className="buffer"></div>
                  <h3 onClick={() => openLink('https://www.validity.com/')}>Validity</h3>
                </div>
                </div>
                <div className="timeline-block timeline-block-right">
                   <div className="marker"></div>
                   <div className="timeline-content">
                        <div className="position">Software Engineer Co-Op</div>
                        <span className="inline-date">8/23 - 4/24</span>
                        <div className="desc">
                            <span 
                                className={`${expand1 ? "expand" : "hide"}`}
                                onClick={() => setExpand1(!expand1)}
                            />
                            {!expand1 && <span> ...</span>}
                            {expand1 && 
                                <ul>
                                    <li>Completed POC and scoped work for a new PII redaction service used to protect sensitive user information in 150M+ emails processed daily.</li>
                                    <li>Enhanced e2e automation testing efficiency for the DemandTools app by upgrading the Cypress test suite; optimized existing test scripts for improved reliability and maintainability, and added new coverage following TDD.</li>
                                    <li>Built a SenderScore POC data pipeline to assess the deliverability performance of 2M+ IPs in a daily rollup of S3 email data. Senders receive a score gauging their reputation as well as a summary report to inform them on where they may have been penalized. I implemented optimized clustering, normalization, and vector similarity computations to restrict deliverability comparisons to only senders of relative volume.</li>
                                    <li>Developed an Angular frontend for a new internal tool to help identify and maintain Product Qualified Leads.</li>
                                </ul>
                            }
                        </div>
                   </div>
                </div>
                <div className="timeline-date timeline-date-right">Aug 2023 - Apr 2024</div>
             </div>
         </section>
    );
}

export default Experience;