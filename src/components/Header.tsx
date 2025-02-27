import Link from 'next/link'
import React from 'react'
import AgentPulse from './AgentPulse'

export default function Header() {
	return (
		<header className="flex sticky top-0 z-50 right-0 left-0 ">
			<div>
				{/* left */}
				<div>
					<Link href={'/'}>
						<AgentPulse color="blue" size="medium" />
					</Link>
					<Link href={'/'}>
						<h1>AI Agent</h1>
					</Link>
				</div>
				{/* right */}
				<div>right</div>
			</div>
		</header>
	)
}
