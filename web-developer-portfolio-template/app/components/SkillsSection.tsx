import React from 'react';

export const SkillsSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 bg-[#161B22]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center">
          Technical Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {[
            {
              category: 'Lakehouse & Streaming',
              icon: '🌊',
              color: 'from-blue-500 to-indigo-700',
              skills: [
                { name: 'Apache Spark & PySpark', level: 95 },
                { name: 'Databricks & Delta Lake', level: 93 },
                { name: 'Structured Streaming', level: 90 },
                { name: 'Kafka / PubSub / Kinesis', level: 90 },
              ],
            },
            {
              category: 'Orchestration & ELT',
              icon: '🧩',
              color: 'from-emerald-500 to-green-700',
              skills: [
                { name: 'Airflow / Cloud Composer / Workflows', level: 92 },
                { name: 'dbt & Dataform', level: 88 },
                { name: 'Auto Loader & CDC (Debezium, CDF)', level: 86 },
                { name: 'Batch + Streaming Pipelines', level: 94 },
              ],
            },
            {
              category: 'Cloud & Warehouses',
              icon: '☁️',
              color: 'from-cyan-500 to-sky-700',
              skills: [
                { name: 'GCP (BigQuery, GCS, Dataflow)', level: 92 },
                { name: 'AWS (S3, Glue, Redshift)', level: 86 },
                { name: 'Azure (Synapse, ADF, ADLS)', level: 84 },
                { name: 'Snowflake', level: 85 },
              ],
            },
            {
              category: 'Governance & Data Quality',
              icon: '🛡️',
              color: 'from-rose-500 to-pink-700',
              skills: [
                { name: 'Unity Catalog & RBAC', level: 88 },
                { name: 'Great Expectations & dbt tests', level: 90 },
                { name: 'Lineage & Data Catalog', level: 89 },
                { name: 'HIPAA / GDPR / HITRUST', level: 87 },
              ],
            },
            {
              category: 'DevOps & IaC',
              icon: '🚀',
              color: 'from-purple-500 to-fuchsia-700',
              skills: [
                { name: 'Terraform & CDK', level: 88 },
                { name: 'GitHub Actions / CI-CD', level: 90 },
                { name: 'Docker & Kubernetes (GKE/EKS/AKS)', level: 84 },
                { name: 'Observability (Cloud Monitoring/Watch)', level: 85 },
              ],
            },
            {
              category: 'BI & Analytics Enablement',
              icon: '📊',
              color: 'from-amber-500 to-orange-700',
              skills: [
                { name: 'SQL & Data Modeling (Star/Snowflake)', level: 92 },
                { name: 'Looker / Power BI / Databricks SQL', level: 88 },
                { name: 'Materialized Views & Tuning', level: 90 },
                { name: 'Semantic Layer (MRR, churn, LTV)', level: 86 },
              ],
            },
          ].map((category) => (
            <div
              key={category.category}
              className="bg-[#21262D] rounded-lg p-6 transform hover:scale-[1.02] transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#30363D] rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} animate-expand origin-left`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
