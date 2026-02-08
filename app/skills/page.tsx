'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Sparkles, Eye, Layers, Cloud, Workflow, Languages } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { skills, SKILL_CATEGORY_ORDER, type Skill } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
	'Programming Languages': <Code2 className="h-6 w-6 text-primary" />,
	'Machine Learning & Deep Learning': <Cpu className="h-6 w-6 text-primary" />,
	'Generative AI, LLMs & Agentic Systems': <Sparkles className="h-6 w-6 text-secondary" />,
	'Computer Vision & Image/Video Analysis': <Eye className="h-6 w-6 text-accent" />,
	'Full Stack Engineering & Distributed Systems': <Layers className="h-6 w-6 text-primary" />,
	'Cloud, DevOps & Infrastructure': <Cloud className="h-6 w-6 text-secondary" />,
	'MLOps, Pipelines & Automation': <Workflow className="h-6 w-6 text-accent" />,
	'Languages': <Languages className="h-6 w-6 text-primary" />,
};

function SkillCategory({
	title,
	skillsInCategory,
	icon,
	delay,
}: {
	title: string;
	skillsInCategory: Skill[];
	icon: React.ReactNode;
	delay: number;
}) {
	if (skillsInCategory.length === 0) return null;
	return (
		<motion.div variants={fadeIn('up', delay)}>
			<Card className="card-gradient h-full">
				<CardContent className="p-6">
					<div className="flex items-center gap-2 mb-6">
						{icon}
						<h2 className="text-xl font-semibold">{title}</h2>
					</div>
					<div className="space-y-4">
						{skillsInCategory.map((skill, index) => (
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
										transition={{ duration: 1, delay: index * 0.05 }}
									/>
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
}

export default function SkillsPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<motion.div variants={fadeIn('down', 0.2)} className="text-center mb-12">
						<h1 className="text-4xl font-bold mb-4">Skills & Expertise</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Technical abilities and tools aligned with my resume from programming and ML/DL to Gen AI, full stack, cloud, and MLOps.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{SKILL_CATEGORY_ORDER.map((category, index) => (
							<SkillCategory
								key={category}
								title={category}
								skillsInCategory={skills.filter((s) => s.category === category)}
								icon={CATEGORY_ICONS[category] ?? <Cpu className="h-6 w-6 text-primary" />}
								delay={0.1 * (index + 1)}
							/>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
