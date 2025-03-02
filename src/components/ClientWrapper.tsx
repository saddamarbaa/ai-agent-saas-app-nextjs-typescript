'use client'

import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from './theme-provider'
import { Toaster } from './ui/sonner'

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
				<Toaster />
			</ThemeProvider>
		</ClerkProvider>
	)
}
