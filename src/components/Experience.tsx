import { useState } from "react";
import { openLink } from "../utils";

const Experience = () => {
    const [expand1, setExpand1] = useState(false);
    const [expand2, setExpand2] = useState(false);
    const [expand3, setExpand3] = useState(false);

    return (
        <section id="experience">
            <h2 className="section">Experience</h2>
            <hr />
            <div className="timeline">
               <div>
                  <div className="timeline-block timeline-block-right">
                        <div className="marker" onClick={() => openLink('https://www.klaviyo.com/')}></div>
                        <div className="timeline-content">
                            <h3 onClick={() => openLink('https://www.klaviyo.com/')}>Klaviyo</h3>
                            <span className="inline-date">7/24 - 12/24</span>
                            <div className="position">Software Engineer Co-Op</div>
                            <span 
                                className={`${expand3 ? "expand" : "hide"}`}
                                onClick={() => setExpand3(!expand3)}
                            />
                            {!expand3 && 
                                <>
                                    <span> ...</span>
                                    <div className="buffer"></div>
                                </>
                            }
                            {expand3 && 
                                <div className="desc">
                                    <p>Member of the Klaviyo Mail Transfer Agent (KMTA) team, Klaviyo's in-house email service provider.</p>
                                    <p>My co-op project was to create a dashboard providing visibility into Klaviyo's email sending metrics – designing a data collection system as well as building a centralized dashboard to present the information.</p>
                                    <p>Implemented thread-safe metric collection with goroutines, able to push data to DynamoDB and flush memory on interval. This was integrated directly into our batch event processing service, handling high-volume production traffic. Configured cron jobs to clean records and maintain historical rollups.</p>
                                    <p>Developed a REST API with Go and Gin, exposing the database via internal ingress secured to the company VPC as well as specified IP ranges.</p>
                                    <p>Designed a near real-time React interface to highlight these key metrics, including data visualizations and paginated tables, and support historical data downloads. The dashboard is regulated by user authentication with role-based access to the particular page.</p>
                                </div>
                            }
                        </div>
                  </div>
                  <div className="timeline-date timeline-date-right">Jul 2024 - Dec 2024</div>
               </div>
                
               <div>
                  <div className="timeline-block timeline-block-left">
                        <div className="marker" onClick={() => openLink('https://www.validity.com/')}></div>
                        <div className="timeline-content">
                            <h3 onClick={() => openLink('https://www.validity.com/')}>Validity</h3>
                            <span className="inline-date">12/23 - 4/24</span>
                            <div className="position">Software Engineer Intern</div>
                            <span 
                                className={`${expand2 ? "expand" : "hide"}`}
                                onClick={() => setExpand2(!expand2)}
                            />
                            {!expand2 && 
                                <>
                                    <span className="buffer"> ...</span>
                                    <div className="buffer"></div>
                                </>
                            }
                            {expand2 && 
                                <div className="desc">
                                    {/* <p>After my first Co-Op at Validity, I was given an opportunity to continue my work part-time during the Spring semester.&lrm;</p> */}
                                    <p>Continuing my work part-time during the Spring semester, I fleshed out a final POC SenderScore algorithm to assess the performance of 2M+ IPs in a daily rollup of S3 email data. I implemented optimized clustering, normalization, and vector similarity computations to ensure any deliverability comparisons affecting sender reputation are only made between senders of relative volume. At the end of the evaluation, senders receive a score gauging their reputation as well as a summary report to inform them on where they may have been penalized.&lrm;</p>
                                    <p>In the remaining time, I developed an Angular frontend for a new Product Qualified Leads module in our internal software. This included integrating new backend API endpoints to maximize search and filter efficiency for managing new company leads.&lrm;</p>
                                </div>
                            }
                        </div>
                  </div>
                  <div className="timeline-date timeline-date-left">Dec 2023 - Apr 2024</div>
               </div>
               
                <div className="timeline-block timeline-block-right">
                   <div className="marker" onClick={() => openLink('https://www.validity.com/')}></div>
                   <div className="timeline-content">
                        <h3 onClick={() => openLink('https://www.validity.com/')}>Validity</h3>
                        <span className="inline-date">8/23 - 12/23</span>
                        <div className="position">Software Engineer Co-Op</div>
                        <span 
                            className={`${expand1 ? "expand" : "hide"}`}
                            onClick={() => setExpand1(!expand1)}
                        />
                        {!expand1 && <span> ...</span>}
                        {expand1 && 
                            <div className="desc">
                                <p>Regularly completed spikes and thoroughly researched proof of concept for project planning. For example, I scoped the implementation of a PII−redaction service that would be used to protect sensitive user information in 150M+ emails processed daily.</p>
                                {/* <p>Identified code issues and inefficiencies, producing solutions in an agile development environment.</p> */}
                                <p>Enhanced e2e automation testing efficiency for the DemandTools app by upgrading the Cypress test suite; optimized existing test scripts for improved reliability and maintainability, and added new coverage following TDD.</p>
                                <p>Queried 300B+ entries of email data across live S3 buckets to identify new leads, driving critical marketing decisions.</p>
                                <p>Towards the end of my Co-Op, I began working on SenderScore, a project I would continue into my next experience.</p>
                            </div>
                        }
                   </div>
                </div>
                <div className="timeline-date timeline-date-right">Aug 2023 - Dec 2023</div>
    
             </div>
         </section>
    );
}

export default Experience;