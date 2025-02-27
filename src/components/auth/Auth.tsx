'use client'
import React from 'react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

import { Button } from '../ui/button'

export default function Auth() {
	return (
		<>
			<SignedIn>
				<Button variant={'outline'}>
					<Link href={'/'}>Mange Plan</Link>
				</Button>

				<div className="p-2 w-10 h-10 items-center justify-center rounded-full bg-blue-100 border-blue-200 border flex ">
					<UserButton />
				</div>
			</SignedIn>
			<SignedOut>
				<SignInButton mode="modal">
					<Button className="lowercase py-2 text-lg bg-gradient-to-r from-blue-600 to-blue-400">
						Sign In
					</Button>
				</SignInButton>
			</SignedOut>
		</>
	)
}
