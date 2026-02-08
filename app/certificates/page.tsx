'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FileDown, ExternalLink, Award } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { certificates, DEFAULT_CERTIFICATION_IMAGE } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function CertificatesPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<motion.div
						variants={fadeIn('down', 0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">Certificates</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Professional certifications and achievements that demonstrate my expertise
							and commitment to continuous learning.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
						{certificates.map((cert, index) => (
							<motion.div
								key={index}
								variants={fadeIn('up', 0.2 * index)}
								className="flex min-h-[420px]"
							>
								<Card className="card-gradient overflow-hidden flex flex-col w-full h-full">
									<div className="relative h-40 w-full bg-muted shrink-0">
										<Image
											src={cert.image ?? DEFAULT_CERTIFICATION_IMAGE}
											alt={cert.title}
											fill
											className="object-contain p-4"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>
									</div>
									<CardContent className="p-6 flex-1 flex flex-col min-h-0">
										<div className="flex items-start gap-4 flex-1 min-h-[7rem]">
											<Award className="h-8 w-8 text-primary shrink-0" />
											<div className="min-w-0">
												<h2 className="text-xl font-semibold mb-2 line-clamp-2">{cert.title}</h2>
												<p className="text-muted-foreground">{cert.issuer}</p>
												<p className="text-sm text-muted-foreground mt-2">
													Issued: {cert.date}
												</p>
												{cert.id && (
													<p className="text-sm text-muted-foreground">
														Certificate ID: {cert.id}
													</p>
												)}
											</div>
										</div>
									</CardContent>
									<CardFooter className="p-6 pt-0 gap-2 shrink-0">
										{cert.url && (
											<Button size="sm" variant="outline" asChild>
												<a href={cert.url} target="_blank" rel="noreferrer">
													<ExternalLink className="h-4 w-4 mr-2" />
													Verify
												</a>
											</Button>
										)}
										{cert.pdf && (
											<Button size="sm" variant="outline" asChild>
												<a href={cert.pdf} download>
													<FileDown className="h-4 w-4 mr-2" />
													Download
												</a>
											</Button>
										)}
									</CardFooter>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}