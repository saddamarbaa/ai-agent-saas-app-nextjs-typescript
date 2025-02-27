import React from 'react'

type Props = {
	size?: 'small' | 'medium' | 'large'
	color?: 'blue' | 'green' | 'purple'
}

function AgentPulse({ color = 'blue', size = 'medium' }: Props) {
	const sizeClasses = {
		small: 'w-5 h-5',
		medium: 'w-12 h-12',
		large: 'w-16 h-16',
	}

	const colorClass = {
		blue: 'bg-blue-500',
		green: 'bg-green-500',
		purple: 'bg-purple-500',
	}

	// Additional glow effect and smoother pulse animation
	const glowClass = {
		blue: 'shadow-blue-500/50',
		green: 'shadow-green-500/50',
		purple: 'shadow-purple-500/50',
	}

	return (
		<div
			className={`
				${sizeClasses[size]} 
				${colorClass[color]} 
				${glowClass[color]} 
				rounded-full 
				animate-pulse 
				shadow-lg 
				transform-gpu 
				transition-all
				ease-in-out
				duration-500 
				cursor-pointer
			`}
		/>
	)
}

export default AgentPulse
