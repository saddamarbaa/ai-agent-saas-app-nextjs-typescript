'use client'

import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from './theme-provider'

export default function ClientWrapper({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange>
				{children}
			</ThemeProvider>
		</ClerkProvider>
	)
}
