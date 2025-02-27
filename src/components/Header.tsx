import Link from 'next/link'
import React from 'react'
import AgentPulse from './AgentPulse'

import Auth from './auth/Auth'
import { DarkModeToggle } from './ui/ModeToggle'

export default function Header() {
	return (
		<header className="flex sticky top-0 z-50 right-0 left-0 dark:border-gray-600 border-gray-100 border-b">
			<div className="container flex items-center justify-between mx-auto px-4 md:px-0 bg-white/80 backdrop-blur-sm   dark:bg-gray-900 ">
				{/* left */}
				<div className="flex">
					<Link href={'/'} className="flex  gap-3 items-center h-16">
						<AgentPulse color="blue" size="small" />
						<h1 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
							AI Agent
						</h1>
					</Link>
				</div>
				{/* right */}
				<div className="flex items-center  flex-1  space-x-5 justify-end">
					<DarkModeToggle />
					<Auth />
				</div>
			</div>
		</header>
	)
}
