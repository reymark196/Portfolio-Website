export const siteConfig = {
	name: 'Reymark Garcia — AI/ML Engineer',
	description:
		'AI/ML Engineer with 5+ years of experience specializing in Machine Learning, Deep Learning, Generative AI, LLMs, and RAG. Production-grade intelligent systems and software engineering.',
	mainNav: [
		{ title: 'Home', href: '/' },
		{ title: 'About', href: '/about' },
		{ title: 'Education', href: '/education' },
		{ title: 'Skills', href: '/skills' },
		{ title: 'Experience', href: '/experience' },
		{ title: 'Projects', href: '/projects' },
		{ title: 'Contact', href: '/contact' },
	],
	links: {
		github: 'https://github.com/reymark196',
		linkedin: 'https://linkedin.com/in/reymark-garcia-75a561373/',
		// twitter: 'https://x.com/garcia_rey84173',
		// whatsapp: 'https://wa.me/639927418450',
		email: 'mailto:reymarkgarcia040924@gmail.com',
		// phone: 'tel:+639927418450',
	},
	contact: {
		email: 'reymarkgarcia040924@gmail.com',
		location: 'Trece Martires City, Cavite, Philippines',
		// phone: '+63 992 741 8450',
	},
	/** When true, profile image fills the entire section (object-cover). When false, full image fits inside (object-contain). */
	profileImageCover: true,
};

export type Experience = {
	title: string;
	company: string;
	companyUrl?: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'AI Engineer | Technical Lead',
		company: 'Zenovo AI',
		companyUrl: 'https://zenovo.ai',
		location: 'Denver, Colorado, United States',
		startDate: 'July 2025',
		endDate: 'December 2025',
		description: [
			'Designed and led the development of a multi-tenant SaaS platform delivering customizable LLM/RAG-driven services, fully branded per customer via isolated tenant subdomains.',
			'Designed and implemented a production-scale multi-agent AI platform using LangChain, LangGraph, OpenAI APIs, and Model Context Protocol to enable standardized, extensible AI tool orchestration and context sharing across agents and services.',
			'Implemented MCP-based integrations to expose internal services (RFP parsers, document stores, scoring engines, retrieval APIs) as reusable, discoverable tools for LLM agents.',
			'Implemented Human-in-the-Loop workflows with approval gates, audit trails, override mechanisms, and LLM-as-a-Judge evaluation layers integrated into MCP-enabled agent flows.',
			'Optimized AI and platform performance through prompt engineering, vector index tuning, document chunking strategies, request batching, caching layers, and cost-efficient LLM usage.',
		],
		technologies: ['FastAPI', 'Next.js', 'PostgreSQL', 'pgvector', 'LangChain', 'LangGraph', 'OpenAI', 'MCP', 'Docker', 'CI/CD'],
	},
	{
		title: 'AI Engineer',
		company: 'GenAI.Labs',
		companyUrl: 'https://www.genai-labs.io/',
		location: 'San Diego, California, United States',
		startDate: 'November 2023',
		endDate: 'May 2025',
		description: [
			'Built an enterprise-grade, production AI performance-monitoring chatbot to automate large-scale data retrieval and accelerate real-time troubleshooting for support engineers.',
			'Designed and implemented a production medical imaging pipeline for echocardiogram analysis using PyTorch, Lightning, MONAI, and OpenCV, delivering automated labeling, classification, and grading.',
			'Developed an AI-driven automation platform for a seismic construction company, generating project documentation and compliance reports; built React-based dashboards integrated with Elasticsearch.',
			'Built and deployed predictive ML models for a SaaS platform using PyTorch, scikit-learn, XGBoost, and MLflow, integrating inference into MERN-based dashboards.',
		],
		technologies: ['PyTorch', 'MONAI', 'OpenCV', 'FastAPI', 'Airflow', 'PostgreSQL', 'React', 'Elasticsearch', 'Docker', 'MLflow'],
	},
	{
		title: 'AI Backend Developer',
		company: 'Stratpoint Technologies',
		companyUrl: 'https://stratpoint.com/',
		location: 'Mandaluyong, Metro Manila, Philippines',
		startDate: 'January 2023',
		endDate: 'November 2023',
		description: [
			'Led backend development for a strategic AI experimentation team, architecting scalable data processing and ML integration systems using Django and Django REST Framework.',
			'Built robust ETL pipelines for large-scale geospatial data aggregation and transformation, processing multi-source datasets from AWS S3, Google Earth Engine API, and climate repositories.',
			'Designed and developed RESTful APIs serving real-time predictive model outputs and geospatial analytics to frontend dashboards, implementing caching strategies with Redis that reduced average response times from 1.2s to 300ms.',
			'Developed containerized data processing microservices using Docker and Celery for asynchronous task execution, enabling parallel computation of solar irradiance analytics and site scoring across distributed cloud environments.',
		],
		technologies: ['Django', 'Django REST Framework', 'AWS S3', 'Redis', 'Docker', 'Celery', 'PostgreSQL'],
	},
	{
		title: 'AI/ML Engineer',
		company: 'Senti Techlabs, Inc',
		companyUrl: 'https://senti.ai/',
		location: 'Makati, Metro Manila, Philippines',
		startDate: 'August 2021',
		endDate: 'November 2022',
		description: [
			'Developed and maintained several ML/DL models for NLP tasks using PyTorch and early Hugging Face Transformers; improved model accuracy through systematic experimentation and hyperparameter tuning.',
			'Performed end-to-end fine-tuning of pre-trained transformer models, applying learning-rate scheduling, layer freezing/unfreezing, gradient accumulation, and batch-size tuning to improve convergence and performance under limited compute.',
			'Collaborated with data engineers to prepare training datasets, clean noisy text data, and create evaluation benchmarks for NLP workloads.',
			'Performed optimization tasks such as batching, caching, and basic quantization to reduce inference cost and latency on GPU-based servers.',
			'Implemented model-serving pipelines using FastAPI, creating reliable inference APIs deployed on AWS.',
			'Contributed to model monitoring and version control using MLflow, maintaining reproducible experiments and deployment-ready checkpoints.',
			'Designed and built internal document search and recommendation workflows using Sentence Transformers for embeddings and FAISS for similarity search.',
		],
		technologies: ['PyTorch', 'Hugging Face', 'FastAPI', 'AWS', 'MLflow', 'FAISS', 'Sentence Transformers'],
	},
	{
		title: 'AI/ML Engineering Intern',
		company: 'Senti Techlabs, Inc',
		companyUrl: 'https://senti.ai/',
		location: 'Makati, Metro Manila, Philippines',
		startDate: 'May 2020',
		endDate: 'August 2021',
		description: [
			'Assisted in developing NLP prototypes for text classification and keyword extraction using scikit-learn, spaCy, and small transformer models; handled dataset cleaning, exploratory analysis, and evaluation reporting.',
			'Supported AI/ML engineering and research workflows by experimenting with multiple NLP modeling approaches, benchmarking classical ML methods against transformer-based models, and documenting findings to inform design decisions.',
		],
		technologies: ['Python', 'scikit-learn', 'spaCy', 'NLP', 'Transformers'],
	},
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const DEFAULT_PROJECT_IMAGE = '/project.jpeg';

export const projects: Project[] = [
	{
		title: 'Multi-Tenant AI-Driven SaaS Platform',
		description:
			'This is an AI-driven SaaS platform that supports the full RFP and RFQ lifecycle, including requirement analysis, question and answer management, proposal authoring, compliance measurement, and team evaluation. By leveraging contextual AI and historical proposal intelligence, it significantly reduces response time while enabling organizations to produce consistent, compliant, and highly competitive submissions at scale.',		
		image: '/projects/rfp-saas.png',
		tags: ['OpenAI', 'Gemini', 'RAG', 'LangGraph', 'MCP', 'FastAPI', 'Next.js', 'PostgreSQL'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Production Medical Imaging Pipeline',
		description:
			'This platform is an AI-powered computer vision system that automates the labeling, classification, and grading of echocardiogram images, delivering highly accurate, real-time diagnostic insights. By replacing time-intensive manual analysis with scalable medical imaging AI, the platform dramatically reduces analysis time while improving diagnostic precision and clinician workflow efficiency.',
		image: '/projects/medical-pipeline.png',
		tags: ['PyTorch', 'OpenCV', 'MONAI', 'Lightning', 'CNN', 'Temporal Modeling', 'Image Segmentation'],
		link: 'https://www.icardio.ai/',
		repo: '#',
	},
	{
		title: 'AI Performance Monitoring Chatbot',
		description:
			'This system is a production-grade conversational system that enables real-time monitoring, analysis, and troubleshooting of AI models and enterprise services through a unified natural-language interface. It automates large-scale data retrieval across logs, metrics, and alerts, significantly reducing incident resolution time and accelerating support workflows in high-throughput environments.',
		image: '/projects/ai-monitoring.jpeg',
		tags: ['FastAPI', 'Azure OpenAI', 'LangChain', 'Prometheus', 'MLflow', 'Elasticsearch', 'Redis', 'PostgreSQL'],
		link: '#',
		repo: '#',
	},
	{
		title: 'AI Construction Compliance Platform',
		description:
			'This is an AI-driven automation platform designed for a seismic construction company to generate project documentation and regulatory compliance reports with greater accuracy and consistency. The platform features React-based dashboards integrated with Elasticsearch, providing enhanced reporting visibility, observability, and operational insights.',
		image: '/projects/seismic construction.jpeg',
		tags: ['OpenAI', 'RAG', 'CrewAI', 'Elasticsearch', 'Pandas', 'FastAPI', 'React'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Predictive ML Model Serving',
		description:
			'This is a predictive machine learning platform built to generate real-time business insights for a SaaS product and surface them directly within core user workflows. The system integrates production ML inference into MERN-based dashboards, enabling data-driven decision-making through embedded predictions and analytics.',
		image: '/projects/predictive-analytics.jpeg',
		tags: ['PyTorch', 'Scikit-learn', 'XGBoost', 'MLflow', 'Node.js', 'Express', 'MongoDB', 'React'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Geospatial & Climate Analytics',
		description:
			'This is a scalable AI platform designed to support large-scale geospatial data processing and real-time predictive analytics for climate and energy use cases. The system integrates distributed ETL pipelines, ML inference services, and high-performance APIs to deliver responsive geospatial insights to frontend dashboards under cost-efficient cloud constraints.',
		image: '/projects/geospatial-analytics.png',
		tags: ['Django REST Framework', 'Scikit-learn', 'Pandas', 'Google Earth Engine API', 'Redis', 'Celery', 'React'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Fine-Tuning Transformer for NLP',
		description:
			'Fine-tuned pre-trained transformer models for multiple NLP tasks using PyTorch and early Hugging Face Transformers, optimizing training stability and accuracy under limited compute constraints. Applied techniques such as learning-rate scheduling, layer freezing and unfreezing, gradient accumulation, and batch-size tuning to improve convergence and reduce inference cost.',
		image: '/projects/fine-tune transformer.png',
		tags: ['PyTorch', 'Hugging Face Transformers', 'Pandas', 'MLflow', 'AWS'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Semantic Search & Recommendation',
		description:
			'This is a semantic search and recommendation engine built to improve discovery and reuse of information across large collections of unstructured text. The system leverages transformer-based embeddings and vector similarity search to deliver fast, relevant results that support operational efficiency and decision-making.',
		image: '/projects/recommendation-engine.png',
		tags: ['Sentence Transformers', 'FAISS', 'PyTorch', 'FastAPI', 'AWS'],
		link: '#',
		repo: '#',
	}
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: "Bachelor's Degree in Computer Science",
		field: 'Computer Science',
		institution: 'De La Salle University Manila',
		location: 'Manila, Philippines',
		startDate: 'September 2017',
		endDate: 'June 2021',
		achievements: [
			'Academic foundation in Data Structures & Algorithms, Machine Learning, and Deep Learning, with emphasis on algorithmic analysis and modern neural network methods.',
		],
	},
];

export const DEFAULT_CERTIFICATION_IMAGE = '/certification.png';

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
	image?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'AWS Certified Machine Learning – Specialty',
		issuer: 'Amazon Web Services',
		date: '2024',
		id: 'AWS-ML-SP',
		url: 'https://aws.amazon.com/certification/',
		pdf: '/Reymark_Garcia.pdf',
		image: '/certification.png',
	},
	{
		title: 'Deep Learning Specialization',
		issuer: 'DeepLearning.AI (Coursera)',
		date: '2023',
		id: 'DL-SPEC',
		url: 'https://www.coursera.org/specializations/deep-learning',
		pdf: '/Reymark_Garcia.pdf',
		image: '/certification.png',
	},
	{
		title: 'Natural Language Processing with Deep Learning',
		issuer: 'Stanford Online',
		date: '2022',
		id: 'NLP-DL',
		url: 'https://online.stanford.edu/',
		pdf: '/Reymark_Garcia.pdf',
		image: '/certification.png',
	},
	{
		title: 'Professional Certificate in Python for Data Science and AI',
		issuer: 'IBM (Coursera)',
		date: '2021',
		id: 'IBM-PY-DS',
		url: 'https://www.coursera.org/',
		pdf: '/Reymark_Garcia.pdf',
		image: '/certification.png',
	},
	{
		title: 'MLOps Fundamentals',
		issuer: 'Google Cloud / Coursera',
		date: '2023',
		id: 'MLOPS-GCP',
		url: 'https://www.coursera.org/',
		pdf: '/Reymark_Garcia.pdf',
		image: '/certification.png',
	},
];

// Resume-aligned skill categories (display order)
export const SKILL_CATEGORY_ORDER = [
	'Programming Languages',
	'Machine Learning & Deep Learning',
	'Generative AI, LLMs & Agentic Systems',
	'Computer Vision & Image/Video Analysis',
	'Full Stack Engineering & Distributed Systems',
	'Cloud, DevOps & Infrastructure',
	'MLOps, Pipelines & Automation',
	'Languages',
] as const;

export type SkillCategory = (typeof SKILL_CATEGORY_ORDER)[number];

export type Skill = {
	name: string;
	level: number; // 1-10
	category: SkillCategory;
};

export const skills: Skill[] = [
	// Programming Languages
	{ name: 'Python', level: 10, category: 'Programming Languages' },
	{ name: 'JavaScript', level: 8, category: 'Programming Languages' },
	{ name: 'TypeScript', level: 8, category: 'Programming Languages' },
	{ name: 'Rust', level: 7, category: 'Programming Languages' },
	{ name: 'C++', level: 9, category: 'Programming Languages' },
	{ name: 'Java', level: 6, category: 'Programming Languages' },

	// Machine Learning & Deep Learning
	{ name: 'PyTorch', level: 10, category: 'Machine Learning & Deep Learning' },
	{ name: 'TensorFlow', level: 8, category: 'Machine Learning & Deep Learning' },
	{ name: 'scikit-learn', level: 10, category: 'Machine Learning & Deep Learning' },
	{ name: 'XGBoost', level: 8, category: 'Machine Learning & Deep Learning' },
	{ name: 'ONNX Runtime', level: 7, category: 'Machine Learning & Deep Learning' },
	{ name: 'Time-Series Forecasting', level: 8, category: 'Machine Learning & Deep Learning' },
	{ name: 'Recommendation Systems', level: 7, category: 'Machine Learning & Deep Learning' },
	{ name: 'Anomaly Detection', level: 7, category: 'Machine Learning & Deep Learning' },
	{ name: 'Hyperparameter Optimization', level: 9, category: 'Machine Learning & Deep Learning' },
	{ name: 'Model Quantization', level: 7, category: 'Machine Learning & Deep Learning' },

	// Generative AI, LLMs & Agentic Systems
	{ name: 'Large Language Models (GPT, Claude, Gemini, Llama)', level: 9, category: 'Generative AI, LLMs & Agentic Systems' },
	{ name: 'LangChain / LangGraph', level: 9, category: 'Generative AI, LLMs & Agentic Systems' },
	{ name: 'Hugging Face', level: 9, category: 'Generative AI, LLMs & Agentic Systems' },
	{ name: 'RAG Architectures', level: 9, category: 'Generative AI, LLMs & Agentic Systems' },
	{ name: 'Prompt Engineering', level: 9, category: 'Generative AI, LLMs & Agentic Systems' },
	{ name: 'Model Context Protocol (MCP)', level: 9, category: 'Generative AI, LLMs & Agentic Systems' },
	{ name: 'Function / Tool Calling', level: 9, category: 'Generative AI, LLMs & Agentic Systems' },
	{ name: 'Vector Databases (Pinecone, FAISS, Milvus)', level: 9, category: 'Generative AI, LLMs & Agentic Systems' },
	{ name: 'Graph Database (Neo4j, Apache AGE)', level: 8, category: 'Generative AI, LLMs & Agentic Systems' },
	{ name: 'Multi-Agent Architectures', level: 9, category: 'Generative AI, LLMs & Agentic Systems' },

	// Computer Vision & Image/Video Analysis
	{ name: 'OpenCV', level: 9, category: 'Computer Vision & Image/Video Analysis' },
	{ name: 'PILLOW', level: 7, category: 'Computer Vision & Image/Video Analysis' },
	{ name: 'Object Detection (YOLO)', level: 8, category: 'Computer Vision & Image/Video Analysis' },
	{ name: 'Image Segmentation', level: 7, category: 'Computer Vision & Image/Video Analysis' },
	{ name: 'OCR (Tesseract)', level: 6, category: 'Computer Vision & Image/Video Analysis' },
	{ name: 'Medical Imaging Pipelines', level: 7, category: 'Computer Vision & Image/Video Analysis' },
	{ name: 'Video Frame Analysis', level: 6, category: 'Computer Vision & Image/Video Analysis' },

	// Full Stack Engineering & Distributed Systems
	{ name: 'FastAPI', level: 10, category: 'Full Stack Engineering & Distributed Systems' },
	{ name: 'Django', level: 8, category: 'Full Stack Engineering & Distributed Systems' },
	{ name: 'Node.js / Express.js', level: 8, category: 'Full Stack Engineering & Distributed Systems' },
	{ name: 'React / Next.js', level: 8, category: 'Full Stack Engineering & Distributed Systems' },
	{ name: 'PostgreSQL', level: 8, category: 'Full Stack Engineering & Distributed Systems' },
	{ name: 'MongoDB', level: 7, category: 'Full Stack Engineering & Distributed Systems' },
	{ name: 'REST API / GraphQL / gRPC', level: 9, category: 'Full Stack Engineering & Distributed Systems' },
	{ name: 'WebSockets', level: 8, category: 'Full Stack Engineering & Distributed Systems' },
	{ name: 'Redis (Caching)', level: 8, category: 'Full Stack Engineering & Distributed Systems' },
	{ name: 'Microservices / Event-Driven', level: 9, category: 'Full Stack Engineering & Distributed Systems' },

	// Cloud, DevOps & Infrastructure
	{ name: 'AWS (EC2, S3, Lambda, RDS, SageMaker, Bedrock)', level: 8, category: 'Cloud, DevOps & Infrastructure' },
	{ name: 'GCP (Vertex AI)', level: 6, category: 'Cloud, DevOps & Infrastructure' },
	{ name: 'Azure', level: 6, category: 'Cloud, DevOps & Infrastructure' },
	{ name: 'Docker / Docker Compose', level: 8, category: 'Cloud, DevOps & Infrastructure' },
	{ name: 'Kubernetes', level: 8, category: 'Cloud, DevOps & Infrastructure' },
	{ name: 'Terraform', level: 7, category: 'Cloud, DevOps & Infrastructure' },
	{ name: 'GitHub Actions', level: 9, category: 'Cloud, DevOps & Infrastructure' },
	{ name: 'Load Balancing', level: 7, category: 'Cloud, DevOps & Infrastructure' },
	{ name: 'Monitoring (Prometheus, Grafana)', level: 7, category: 'Cloud, DevOps & Infrastructure' },

	// MLOps, Pipelines & Automation
	{ name: 'MLflow', level: 8, category: 'MLOps, Pipelines & Automation' },
	{ name: 'Airflow', level: 7, category: 'MLOps, Pipelines & Automation' },
	{ name: 'Kubeflow', level: 6, category: 'MLOps, Pipelines & Automation' },
	{ name: 'Model Registry', level: 7, category: 'MLOps, Pipelines & Automation' },
	{ name: 'CI/CD for ML', level: 8, category: 'MLOps, Pipelines & Automation' },
	{ name: 'A/B Testing', level: 8, category: 'MLOps, Pipelines & Automation' },

	// Languages
	{ name: 'English', level: 8, category: 'Languages' },
	{ name: 'Filipino', level: 10, category: 'Languages' },
];

export const DEFAULT_BLOG_IMAGE = '/blog.jpeg';

export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};

export const blogPosts: BlogPost[] = [
	{
		title: 'Building Production RAG Systems: From Prototype to Scale',
		excerpt: 'Lessons from designing and deploying RAG pipelines with LangChain, vector stores, and LLMs—including chunking strategies, retrieval tuning, and cost-efficient model selection.',
		date: 'Dec 2024',
		author: 'Reymark Garcia',
		image: '/blog.jpeg',
		slug: 'building-production-rag-systems',
	},
	{
		title: 'Medical Imaging Pipelines with PyTorch and MONAI',
		excerpt: 'How we built a production echocardiogram analysis pipeline: automated labeling, classification, and grading using PyTorch, Lightning, MONAI, and OpenCV.',
		date: 'Oct 2024',
		author: 'Reymark Garcia',
		image: '/blog.jpeg',
		slug: 'medical-imaging-pytorch-monai',
	},
	{
		title: 'Multi-Agent AI and the Model Context Protocol (MCP)',
		excerpt: 'Orchestrating LLM agents with MCP: exposing internal services as tools, standardizing context sharing, and designing human-in-the-loop workflows with approval gates and audit trails.',
		date: 'Sep 2024',
		author: 'Reymark Garcia',
		image: '/blog.jpeg',
		slug: 'multi-agent-ai-model-context-protocol',
	},
	{
		title: 'FastAPI for ML Inference: Lightweight, Reliable Serving',
		excerpt: 'Patterns for serving PyTorch and transformer models with FastAPI—batching, caching, quantization, and deployment on AWS for low-latency inference.',
		date: 'Jul 2024',
		author: 'Reymark Garcia',
		image: '/blog.jpeg',
		slug: 'fastapi-ml-inference-serving',
	},
	{
		title: 'Fine-Tuning Transformers for NLP Under Limited Compute',
		excerpt: 'Practical techniques for fine-tuning Hugging Face models: learning-rate scheduling, layer freezing, gradient accumulation, and batch-size tuning when GPU memory is tight.',
		date: 'May 2024',
		author: 'Reymark Garcia',
		image: '/blog.jpeg',
		slug: 'fine-tuning-transformers-limited-compute',
	},
	{
		title: 'LLM-as-a-Judge and Human-in-the-Loop for Compliance',
		excerpt: 'Using LLMs for automated quality control and compliance checks in document and proposal workflows—with override mechanisms, audit trails, and guardrails.',
		date: 'Mar 2024',
		author: 'Reymark Garcia',
		image: '/blog.jpeg',
		slug: 'llm-as-judge-human-in-the-loop-compliance',
	},
];