'use client'

import Header from './Header'
import Footer from './footer'

export default function PageWrapper({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}
