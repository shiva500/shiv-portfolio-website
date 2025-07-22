import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: '[Shiv Hari Baral] - Data Engineer',
	description:
		'I’m a passionate Data Engineer building scalable, cloud‑native ETL pipelines and real‑time streaming solutions.Specializing in Apache Spark, Snowflake, and AWS, I turn raw data into actionable insights that drive business impact.',
	keywords: [
		'Data Engineer',
		'ETL Developer',
		'Python',
		'SQL',
		'PySpark',
		'Apache Spark',
		'Apache Airflow',
		'dbt',
		'Apache Kafka',
		'Snowflake',
		'Redshift',
		'BigQuery',
		'Data Warehousing',
		'Data Modeling',
		'Data Lakehouse',
		'AWS',
		'Azure',
		'GCP',
		'CI/CD',
		'Jenkins',
		'Docker',
		'Kubernetes',
		'[Your Name]',
	],
	authors: [{ name: '[Your Name]' }],
	creator: '[Your Name]',
	openGraph: {
		title: '[Your Name] - Data Engineer Portfolio',
		description: 'Passionate data engineer crafting modern and engaging digital experiences. Explore my projects and development expertise.',
		url: 'https://your-domain.com',
		siteName: '[Your Name] - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: '[Your Name] - Data Engineer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: '[Your Name] - Data Engineer',
		description: 'Passionate data engineer crafting modern and engaging digital experiences. Explore my projects and development expertise.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
