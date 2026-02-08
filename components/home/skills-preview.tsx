'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { skills, SKILL_CATEGORY_ORDER } from '@/lib/constants';
import { staggerContainer, fadeIn } from '@/lib/motion';

// Show first 4 resume categories on home preview, 3 top skills per category
const PREVIEW_CATEGORIES = SKILL_CATEGORY_ORDER.slice(0, 4);
const TOP_SKILLS_PER_CATEGORY = 3;

export function SkillsPreview() {
	return (
		<section className="py-16 md:py-24">
			<div className="container px-4">
				<SectionHeader
					title="Technical Skills"
					description="Key competencies aligned with my resume—Programming, ML/DL, Gen AI & LLMs, and more."
				/>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10"
				>
					{PREVIEW_CATEGORIES.map((category, catIndex) => {
						const categorySkills = skills
							.filter((s) => s.category === category)
							.sort((a, b) => b.level - a.level)
							.slice(0, TOP_SKILLS_PER_CATEGORY);
						return (
							<motion.div
								key={category}
								variants={fadeIn('up', 0.1 * (catIndex + 1))}
								className="space-y-6"
							>
								<Card>
									<CardContent className="p-6">
										<h3 className="text-lg font-bold mb-4">{category}</h3>
										<div className="space-y-4">
											{categorySkills.map((skill, index) => (
												<div key={index}>
													<div className="flex justify-between mb-1">
														<span className="text-sm">{skill.name}</span>
														<span className="text-muted-foreground text-sm">{skill.level}/10</span>
													</div>
													<div className="skill-bar">
														<motion.div
															className="skill-progress"
															initial={{ width: 0 }}
															whileInView={{ width: `${skill.level * 10}%` }}
															viewport={{ once: true }}
															transition={{ duration: 1, delay: index * 0.1 }}
														/>
													</div>
												</div>
											))}
										</div>
									</CardContent>
								</Card>
							</motion.div>
						);
					})}
				</motion.div>

				<div className="flex justify-center mt-10">
					<Button asChild>
						<Link href="/skills">
							View All Skills <ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
