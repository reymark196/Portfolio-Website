'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { ArrowRight, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

const TITLE_PART_1 = 'AI/ML Engineer';
const TITLE_PART_2 = 'Software Engineer';

export function HeroSection() {
	const [titleIndex, setTitleIndex] = useState(0);
	const [displayedTitle, setDisplayedTitle] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);

	// Typewriter effect for animated title
	useEffect(() => {
		const parts = [TITLE_PART_1, TITLE_PART_2];
		const current = parts[titleIndex];

		if (!isDeleting) {
			if (displayedTitle.length < current.length) {
				const timer = setTimeout(() => {
					setDisplayedTitle(current.slice(0, displayedTitle.length + 1));
				}, 80);
				return () => clearTimeout(timer);
			}
			const pause = setTimeout(() => setIsDeleting(true), 2000);
			return () => clearTimeout(pause);
		}

		if (displayedTitle.length > 0) {
			const timer = setTimeout(() => {
				setDisplayedTitle(displayedTitle.slice(0, -1));
			}, 50);
			return () => clearTimeout(timer);
		}
		setIsDeleting(false);
		setTitleIndex((i) => (i + 1) % parts.length);
	}, [titleIndex, displayedTitle, isDeleting]);

	return (
		<section className="relative overflow-hidden hero-gradient-bg">
			{/* Content */}
			<div className="container relative z-10 px-4 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 min-h-[90vh]">
				{/* Profile image - above content on mobile, left on desktop */}
				<motion.div
					variants={fadeIn('right', 0.2)}
					initial="hidden"
					animate="show"
					className="flex-shrink-0 order-1"
				>
					<div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-2xl">
						<Image
							src="/profile.png"
							alt="Reymark Garcia"
							fill
							className={`${siteConfig.profileImageCover ? 'object-cover' : 'object-contain'} object-center`}
							sizes="(max-width: 768px) 224px, 320px"
							priority
							onError={(e) => {
								// Fallback if no profile image
								const target = e.target as HTMLImageElement;
								target.style.display = 'none';
								if (target.nextElementSibling) {
									(target.nextElementSibling as HTMLElement).style.display = 'flex';
								}
							}}
						/>
						<div
							className="absolute inset-0 bg-muted flex items-center justify-center text-4xl font-bold text-muted-foreground"
							style={{ display: 'none' }}
							aria-hidden
						>
							RG
						</div>
					</div>
				</motion.div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-2xl text-center lg:text-left order-2"
				>
					<motion.h1
						variants={fadeIn('up', 0.2)}
						className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
					>
						<span className="text-foreground">Reymark Garcia</span>
					</motion.h1>

					<motion.div
						variants={fadeIn('up', 0.3)}
						className="mt-3 text-xl md:text-2xl lg:text-3xl font-semibold min-h-[2.5rem] flex items-center justify-center lg:justify-start flex-wrap gap-1"
					>
						<span className="text-gradient animate-typewriter-cursor inline-block">
							{displayedTitle}
						</span>
					</motion.div>

					<motion.p
						variants={fadeIn('up', 0.5)}
						className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl"
					>
						AI/ML Engineer with 5+ years of experience specializing in Machine Learning, Deep Learning, Generative AI, LLMs, and RAG. I design and build production-grade, end-to-end intelligent systems applying strong software engineering principles, prompt engineering, agentic AI workflows, and scalable model serving to deliver reliable, maintainable solutions.
					</motion.p>

					<motion.div
						variants={fadeIn('up', 0.7)}
						className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
					>
						<Button size="lg" asChild>
							<Link href="/projects">
								View Projects <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
						<Button size="lg" variant="outline" asChild>
							<Link href="/Reymark_Garcia.pdf" download>
								Download CV <FileDown className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</motion.div>
				</motion.div>
			</div>

			{/* Bottom gradient */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
		</section>
	);
}
