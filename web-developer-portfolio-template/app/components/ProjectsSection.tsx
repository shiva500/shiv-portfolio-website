import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
  return (
    <section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
          Featured Data Engineering Projects
        </h2>

        <div className="space-y-8 sm:space-y-12">
          {[
            {
              title: 'GridSense Lakehouse (Streaming + Batch)',
              description:
                'Real-time energy telemetry platform on Databricks unifying Kafka streams and batch drops into Delta Lake with a Bronze-Silver-Gold medallion model.',
              metrics: {
                throughput: '1.2M evts/sec',
                latency: '< 500 ms',
                uptime: '99.9% SLA',
              },
              techDetails: [
                'Kafka → Databricks Structured Streaming (exactly-once)',
                'Delta Live Tables with expectations & Change Data Feed',
                'Gold marts served via Databricks SQL and Looker',
                'OPTIMIZE + ZORDER; Unity Catalog RBAC and lineage',
              ],
              image: '/code.jpg',
            },
            {
              title: 'RevOps ELT on GCP (dbt + Composer)',
              description:
                'End-to-end ELT for product, billing, and marketing data (HubSpot, Stripe, web events) into BigQuery for ARR/MRR, churn, and LTV dashboards.',
              metrics: {
                freshness: '5 min',
                costReduction: '45% lower',
                tests: '350+ dbt tests',
              },
              techDetails: [
                'Fivetran ingestion + dbt models (semantic layer for KPIs)',
                'Airflow/Cloud Composer orchestration with backfills',
                'Partitioning & clustering; materialized views in BigQuery',
                'Great Expectations for data quality + Slack alerts',
              ],
              image: '/code.jpg',
            },
            {
              title: 'FHIR/HL7 Healthcare Ingestion (Multi-Cloud)',
              description:
                'HIPAA-compliant pipelines normalizing EHR, claims, and device data across AWS, Azure, and GCP into curated analytics layers.',
              metrics: {
                recordsDaily: '5B+ rows/day',
                piiLeak: '0 incidents',
                speedup: '3x query boost',
              },
              techDetails: [
                'Auto Loader to Delta Lake; schema enforcement & evolution',
                'SCD2 patient registry via MERGE; CDC from Debezium',
                'Power BI, Looker, and QuickSight on Gold datasets',
                'Terraform + CI/CD (GitHub Actions) for jobs and DLT',
              ],
              image: '/code.jpg',
            },
          ].map((project) => (
            <div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{project.description}</p>

                  {/* Operational Metrics */}
                  <div className="space-y-3">
                    <h4 className="text-base sm:text-lg font-semibold">Operational Metrics</h4>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-blue-400">{value}</div>
                          <div className="text-sm text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Implementation */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                      Technical Implementation
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                      {project.techDetails.map((detail) => (
                        <li key={detail} className="flex items-center gap-2">
                          <span className="text-green-400">▹</span>
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative h-full min-h-[300px] lg:min-h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
