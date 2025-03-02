import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import ClientWrapper from '@/components/ClientWrapper'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'AI Content Agent - Enhance Your Videos with AI-Powered Insights',
	description:
		'Elevate your video content with AI-driven analysis, transcription, and insights. Get started in seconds and unlock the full potential of your media.',
	viewport: 'width=device-width, initial-scale=1.0',
	robots: 'index, follow',
	openGraph: {
		title: 'AI Content Agent - Enhance Your Videos with AI-Powered Insights',
		description:
			'Elevate your video content with AI-driven analysis, transcription, and insights. Get started in seconds and unlock the full potential of your media.',
		url: 'https://ai-agent-saas-app-nextjs-typescript.vercel.app/',
		type: 'website',
		locale: 'en_US',
	},
	twitter: {
		card: 'summary_large_image',
		site: '@yourtwitterhandle',
		title: 'AI Content Agent - Enhance Your Videos with AI-Powered Insights',
		description:
			'Elevate your video content with AI-driven analysis, transcription, and insights. Get started in seconds and unlock the full potential of your media.',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased flex  flex-col h-screen`}>
				<ClientWrapper>{children}</ClientWrapper>
			</body>
		</html>
	)
}
