import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  // 👇 set your canonical origin (use your domain or GH Pages URL)
  metadataBase: new URL('https://shivharibaral.com'),

  title: 'Shiv Hari Baral — Data Engineer',
  description:
    'I’m a Data Engineer building scalable, cloud-native ETL pipelines and real-time streaming systems. Apache Spark • Kafka • Airflow • dbt • Snowflake • Databricks • AWS/GCP.',
  keywords: [
    'Data Engineer','ETL Developer','Python','SQL','PySpark','Apache Spark','Apache Airflow','dbt',
    'Apache Kafka','Snowflake','Redshift','BigQuery','Data Warehousing','Data Modeling',
    'Data Lakehouse','AWS','Azure','GCP','CI/CD','Jenkins','Docker','Kubernetes'
  ],
  authors: [{ name: 'Shiv Hari Baral' }],
  creator: 'Shiv Hari Baral',

  openGraph: {
    title: 'Shiv Hari Baral — Data Engineer Portfolio',
    description:
      'Projects in streaming, lakehouse, and cost-efficient data platforms. See builds with Spark, Kafka, Airflow, dbt, Snowflake, and Databricks.',
    url: 'https://shivharibaral.com',
    siteName: 'Shiv Hari Baral — Portfolio',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Shiv Hari Baral — Data Engineer Portfolio' }],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Shiv Hari Baral — Data Engineer',
    description:
      'Streaming + lakehouse builds on AWS/GCP with Spark, Kafka, Airflow, dbt, Snowflake, Databricks.',
    creator: '@your_twitter', // or remove if none
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 }
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
