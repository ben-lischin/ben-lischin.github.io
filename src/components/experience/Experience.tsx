import CompanyHeader from "./CompanyHeading";
import ExperienceBlock from "./ExperienceBlock";

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-header">
        <h2 className="section">Experience</h2>
      </div>
      <div className="timeline">
        <CompanyHeader
          company="Klaviyo"
          url="https://www.klaviyo.com/"
        />
        <ExperienceBlock
          title="Software Engineer II"
          dates="Sep 2026 - Current"
          datesShortened="9/26 - Current"
          description={
            <ul>
              <li>Email Platforms, Mobile Channels and Messaging Infrastructure</li>
            </ul>
          }
        />
        <ExperienceBlock
          title="Software Engineer I"
          dates="Jul 2025 - Sep 2026"
          datesShortened="7/25 - 9/26"
          description={
            <ul>
              <li>
                Reengineered the email channel provider's sync send path
                with concurrent batch sends, utilizing bulk queries and
                session caching. Raised peak throughput 66% (15M → 25M
                transmission/min) in load tests, and achieved 1.7x lower
                p99 send latency.
              </li>
              <li>
                Converted the account-to-sending-domain relationship from
                M:1 to M:N, enabling customers to isolate sensitive
                transactional and service email reputation from their standard
                marketing volume, and unlocking zero-downtime migration as
                traffic warms onto a new domain per type.
              </li>
              <li>
                Developed the self-serve KMTA Migration Wizard guiding 50K+
                companies off dedicated SendGrid infrastructure (sending domains,
                IPs, and click-tracking domains), saving over $9.6M in annual
                vendor cost; added comprehensive logging and dashboards for
                rollout monitoring, and rollback safety preserving vendor
                records. This consolidates users onto in-house Klaviyo MTA sending
                infra, offering better control, SMTP-level observability,
                and HIPAA compliance required for EU data residency.
              </li>
              <li>
                Architected an automated cron-based domain warming service, a
                Redis caching layer over domain lookups to reduce upstream service
                calls during send-time selection, warming synchronization mechanisms
                and APIs for domain lifecycle management.
              </li>
              <li>
                Redesigned our static domain DNS pattern to prevent DKIM CNAME record
                collisions from overwriting each other in the customer's DNS zone and
                silently breaking email authentication.
              </li>
              <li>
                Built campaign performance tooling and a React interface, providing
                new e2e send time visibility and identifying pipeline bottlenecks to
                accelerate the company push for enterprise scalability.
              </li>
            </ul>
          }
        />
        <ExperienceBlock
          title="Software Engineer Co-Op"
          dates="Jul 2024 - Dec 2024"
          datesShortened="7/24 - 12/24"
          description={
            <ul>
              <li>
                Created a dashboard providing visibility into Klaviyo's
                email sending metrics – designing a data collection
                system as well as building a centralized dashboard to
                present the information.
              </li>
              <li>
                Implemented thread-safe metric collection with
                goroutines, able to push data to DynamoDB and flush
                memory on interval. This was integrated directly into
                our batch event processing service, handling high-volume
                production traffic. Configured cron jobs to clean
                records and maintain historical rollups.
              </li>
              <li>
                Developed a REST API with Go and Gin, exposing the
                database via internal ingress secured to the company VPC
                as well as specified IP ranges.
              </li>
              <li>
                Designed a near real-time React interface to highlight
                these key metrics, including data visualizations and
                paginated tables, and support historical data downloads.
                The dashboard is regulated by user authentication with
                role-based access to the particular page.
              </li>
            </ul>
          }
        />
        <CompanyHeader
          company="Validity"
          url="https://www.validity.com/"
        />
        <ExperienceBlock
          title="Software Engineer Co-Op"
          dates="Aug 2023 - Apr 2024"
          datesShortened="8/23 - 4/24"
          description={
            <ul>
              <li>
                Completed POC and scoped work for a new PII redaction
                service used to protect sensitive user information in
                150M+ emails processed daily.
              </li>
              <li>
                Enhanced e2e automation testing efficiency for the
                DemandTools app by upgrading the Cypress test suite;
                optimized existing test scripts for improved reliability
                and maintainability, and added new coverage following TDD.
              </li>
              <li>
                Built a SenderScore POC data pipeline to assess the
                deliverability performance of 2M+ IPs in a daily rollup of
                S3 email data. Senders receive a score gauging their
                reputation as well as a summary report to inform them on
                where they may have been penalized. I implemented
                optimized clustering, normalization, and vector similarity
                computations to restrict deliverability comparisons to
                only senders of relative volume.
              </li>
              <li>
                Developed an Angular frontend for a new internal tool to
                help identify and maintain Product Qualified Leads.
              </li>
            </ul>
          }
        />
      </div>
    </section>
  );
};

export default Experience;
