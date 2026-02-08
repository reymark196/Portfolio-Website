'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { siteConfig } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>
					{/* Photo above on mobile, left on desktop */}
					<motion.div variants={fadeIn('down', 0.3)} className="relative h-[420px] lg:h-[540px] order-1 rounded-lg overflow-hidden">
						<Image
							src="/profile.png"
							alt="Reymark Garcia"
							fill
							className={`${siteConfig.profileImageCover ? 'object-cover' : 'object-contain'} object-center rounded-lg`}
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)} className="space-y-6 order-2">
						<h1 className="text-4xl font-bold">About Me</h1>
						<p className="text-lg text-muted-foreground">
							I'm an AI/ML Engineer with 5+ years of experience specializing in Machine Learning, Deep Learning,
							Generative AI, Large Language Models, and RAG. I design and build production-grade, end-to-end
							intelligent systems—applying strong software engineering principles, prompt engineering, agentic AI
							workflows, and scalable model serving to deliver reliable, maintainable solutions.
						</p>
						<div className="space-y-4">
							<h2 className="text-4xl font-bold">My Journey</h2>
							<p className="text-lg text-muted-foreground">
								From my Bachelor's in Computer Science at De La Salle University Manila to roles at Zenovo AI,
								GenAI.Labs, Stratpoint Technologies, and Senti Techlabs, I've focused on NLP, computer vision,
								LLM/RAG systems, and MLOps. I'm based in Trece Martires City, Cavite, Philippines, and have
								worked with teams in the US and across the Philippines.
							</p>
						</div>
						<Button className="mt-6" asChild>
							<a href="/Reymark_Garcia.pdf" download>
								Download CV <ArrowDownCircle className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>
				</motion.div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Education</h3>
								<p className="text-muted-foreground">
									Bachelor's in Computer Science from De La Salle University Manila (2017–2021),
									with a foundation in Data Structures, Algorithms, ML, and Deep Learning.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Experience</h3>
								<p className="text-muted-foreground">
									5+ years across Zenovo AI, GenAI.Labs, Stratpoint Technologies, and Senti Techlabs—
									from AI/ML intern to Technical Lead building LLM/RAG platforms and production ML systems.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Skills</h3>
								<p className="text-muted-foreground">
									PyTorch, TensorFlow, LangChain, RAG, prompt engineering, FastAPI, Django, React/Next.js,
									AWS, Docker/Kubernetes, MLOps (MLflow, Airflow). English & Filipino.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}