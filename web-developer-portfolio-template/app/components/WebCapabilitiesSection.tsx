import React from 'react';

export const WebCapabilitiesSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
          Modern Data Engineering Capabilities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: 'Lakehouse Architecture',
              icon: '🧱',
              features: [
                'Delta Lake with ACID',
                'Medallion (Bronze/Silver/Gold)',
                'Unity Catalog governance',
              ],
            },
            {
              title: 'Streaming Ingestion',
              icon: '⚡',
              features: [
                'Kafka / PubSub / Kinesis',
                'Structured Streaming (exactly-once)',
                'Watermarking & late-arrival handling',
              ],
            },
            {
              title: 'Orchestration & ELT',
              icon: '🧩',
              features: [
                'Delta Live Tables (DLT)',
                'Airflow / Cloud Composer / Workflows',
                'dbt / Dataform with backfills',
              ],
            },
            {
              title: 'Data Quality & Lineage',
              icon: '🛡️',
              features: [
                'Great Expectations / dbt tests',
                'DLT expectations & quarantine',
                'Change Data Feed (CDF) lineage',
              ],
            },
            {
              title: 'Warehousing & SQL',
              icon: '🏗️',
              features: [
                'BigQuery / Snowflake / Redshift / Databricks SQL',
                'Materialized views, partitions, clustering',
                'Z-ORDER and data skipping',
              ],
            },
            {
              title: 'Performance & Cost',
              icon: '🚀',
              features: [
                'OPTIMIZE, Auto Optimize, file compaction',
                'Photon, serverless SQL, caching',
                'Storage tiering & pruning',
              ],
            },
            {
              title: 'Security & Compliance',
              icon: '🔒',
              features: [
                'IAM/KMS, Key Vault, VPC Service Controls',
                'Row/column masking & PII tokenization',
                'Audit, lineage, HIPAA/GDPR/HITRUST',
              ],
            },
            {
              title: 'DevOps & IaC',
              icon: '🛠️',
              features: [
                'Terraform / CDK / ARM / Deployment Manager',
                'GitHub Actions CI/CD, Bundles',
                'Secrets management & policies',
              ],
            },
            {
              title: 'BI & Semantic Layer',
              icon: '📊',
              features: [
                'Looker / Power BI / Databricks SQL',
                'MRR, churn, LTV metric definitions',
                'Delta Sharing to partners',
              ],
            },
            {
              title: 'ML & Feature Pipelines',
              icon: '🤖',
              features: [
                'MLflow tracking & registry',
                'Feature Store (batch/online)',
                'Batch and real-time scoring',
              ],
            },
            {
              title: 'Observability & SLAs',
              icon: '🔭',
              features: [
                'DLT event log & alerts',
                'Cloud Monitoring/Watch/Log Analytics',
                'Freshness/error budgets & SLOs',
              ],
            },
            {
              title: 'Interoperability',
              icon: '🤝',
              features: [
                'CDC via Debezium',
                'Open tables (Delta/Iceberg/Hudi)',
                'External locations & cross-cloud',
              ],
            },
          ].map((category) => (
            <div
              key={category.title}
              className="group bg-[#161B22] p-6 rounded-lg hover:bg-[#21262D] transition-all"
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-3">{category.title}</h3>
              <ul className="space-y-2">
                {category.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-gray-400 group-hover:text-gray-300 transition-colors"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
