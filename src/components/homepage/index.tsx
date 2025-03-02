import React from 'react'
import AgentPulse from '../AgentPulse'

export default function HomePageContent() {
  return (
		<div className="flex-1 container mx-auto p-6 md:p-8">
			{/* Hero Section */}
			<section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
				<div className="max-w-4xl mx-auto">
					<div className="flex flex-col items-center text-center gap-8 mb-12">
						{/* Improved Pulse Animation */}
						<AgentPulse size="large" color="blue" />
						<h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
							Transform Your Video Content with{' '}
							<span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
								AI-Powered Insights
							</span>
						</h1>
						<p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
							Unlock the true potential of your videos with our AI-powered
							content agent. From transcription and analysis to actionable
							insights, we make video optimization quick and easy. Enhance
							engagement and drive results in no time.
						</p>
						{/* Call to Action Button */}
						<a
							href="#"
							className="mt-6 px-8 py-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition-all ease-in-out duration-300 transform hover:scale-105">
							Get Started Now
						</a>
					</div>
				</div>
			</section>

			{/* YouTube Link Input Section */}
			<section className="py-12 bg-white dark:bg-gray-800">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-8">
						Analyze a YouTube Video
					</h2>
					<form className="flex flex-col items-center  md:flex-row gap-4">
						<input
							type="text"
							placeholder="Enter YouTube video link"
							className="w-full md:w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
						/>
						<button
							type="submit"
							className="mt-4 md:mt-0 px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition-all ease-in-out duration-300 transform hover:scale-105">
							Analyze Video
						</button>
					</form>
				</div>
			</section>

			{/* Feature Section */}
			<section className="py-12 bg-gray-100 dark:bg-gray-900">
				<div className="max-w-5xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-8">
						Why Choose Our AI Content Agent?
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Feature 1 */}
						<div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
								AI-Driven Insights
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								Access real-time analytics and tailored insights to maximize the
								impact of your video content. Improve performance, discover
								trends, and boost engagement with data-backed decisions.
							</p>
						</div>
						{/* Feature 2 */}
						<div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
								Seamless Transcription
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								Our powerful transcription engine instantly converts your video
								content into accurate, readable text. Use this for easy
								repurposing of content across platforms and for accessibility.
							</p>
						</div>
						{/* Feature 3 */}
						<div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
								Lightning-Fast Setup
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								Our intuitive setup process ensures you can get started in no
								time. Upload your videos, and let our AI handle the rest —
								allowing you to focus on your creative process.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="py-12 bg-white dark:bg-gray-800">
				<div className="max-w-5xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-8">
						How It Works
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Step 1 */}
						<div className="p-6">
							<span className="inline-block mb-4 text-3xl text-blue-600 dark:text-blue-400">
								1️⃣
							</span>
							<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
								Upload Your Video
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								Simply upload your video file to the platform, and let the AI
								process it efficiently.
							</p>
						</div>
						{/* Step 2 */}
						<div className="p-6">
							<span className="inline-block mb-4 text-3xl text-blue-600 dark:text-blue-400">
								2️⃣
							</span>
							<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
								Analyze & Transcribe
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								Our AI agent transcribes the video and analyzes it for insights,
								providing valuable data to improve your content strategy.
							</p>
						</div>
						{/* Step 3 */}
						<div className="p-6">
							<span className="inline-block mb-4 text-3xl text-blue-600 dark:text-blue-400">
								3️⃣
							</span>
							<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
								Download & Share
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								Download your transcriptions and insights, ready to share and
								use in creating compelling content.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Newsletter Section */}
		</div>
	)
}
