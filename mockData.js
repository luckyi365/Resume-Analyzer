const mockData = {
  software_engineer: {
    roleTitle: "Software Engineer (Full Stack)",
    resumeText: `ALEX MERCER
San Francisco, CA | alex.mercer@email.dev | +1 (555) 019-2834 | github.com/alexm-dev | linkedin.com/in/alex-mercer | alexmercer.dev

PROFESSIONAL SUMMARY
Senior Full Stack Engineer with 6+ years of experience designing, building, and scaling high-performance web applications. Expert in Python (Django, FastAPI), JavaScript (React, Node.js), and cloud-native architecture. Passionate about API optimization, microservices, and automating delivery pipelines.

EDUCATION
Stanford University
B.S. in Computer Science | GPA: 3.82
Graduated: June 2020
Relevant Coursework: Distributed Systems, Databases, Software Engineering, Algorithms

EXPERIENCE
TechScale Solutions | Senior Software Engineer
San Francisco, CA | 2022 - Present
- Led a team of 4 engineers to migrate legacy monolith to FastAPI microservices, reducing API response latency by 42% and decoupling 5 key product modules.
- Built a real-time analytics dashboard using React, WebSockets, and Redis, enabling 5,000+ concurrent users to view live event updates under 50ms.
- Optimized complex PostgreSQL query joins and introduced Redis caching, reducing peak DB response times by 35% and saving $12k/year in RDS scaling costs.
- Mentored 3 junior developers and established code review guidelines, improving pull request approval velocity by 25%.

AppForge Inc. | Software Engineer
Denver, CO | 2020 - 2022
- Developed and maintained core e-commerce backend APIs in Django and PostgreSQL, processing $4.2M in annual transactions with 99.98% uptime.
- Integrated Stripe payment gateway and third-party shipping APIs (FedEx/UPS), resolving checkout bugs and reducing card failure rates by 14%.
- Automated unit testing and CI/CD pipelines using GitHub Actions and Jest, increasing overall code coverage from 62% to 88%.

PROJECTS
Real-time Analytics Engine | React, FastAPI, Redis, PostgreSQL
- Processed 10M+ daily events under 50ms latency, enabling real-time dashboard updates for concurrent users.
- Implemented pub/sub pattern in Redis for scalable WebSockets distribution.

Serverless Deployment Pipeline | AWS Lambda, GitHub Actions, Terraform, S3
- Automated multi-environment deployments, reducing release cycles from 2 days to 15 minutes.
- Configured Terraform configurations for secure IAM policy mappings and serverless API Gateways.

TECHNICAL SKILLS
- Programming Languages: Python, JavaScript, SQL, HTML5, CSS3, Bash
- Frameworks: React, Node.js, FastAPI, Django, Express
- Databases & Caching: PostgreSQL, Redis, MongoDB
- Cloud Platforms: AWS (EC2, S3, RDS, Lambda, API Gateway)
- DevOps & Tools: Docker, Git, GitHub Actions, CI/CD, Terraform
- Soft Skills: Team Leadership, Technical Communication, Problem Solving, Agile, Mentoring

CERTIFICATIONS
- AWS Certified Solutions Architect - Associate (Credential ID: AWS-ASA-9921)
- Certified ScrumMaster (CSM - Scrum Alliance)`,
    jobDescription: `Position: Senior Full Stack Engineer (SaaS Platform)
Location: San Francisco, CA (Hybrid)
Experience: 5+ years of software engineering experience

About the Role:
We are looking for a Senior Full Stack Engineer to lead the design and development of our next-generation SaaS product. You will collaborate with product, design, and engineering teams to build clean, responsive frontends and scale our microservices backend architecture.

Required Skills & Experience:
- 5+ years of professional software engineering experience.
- Expert-level coding in Python (FastAPI/Django) and modern JavaScript (React.js).
- Strong experience with relational databases, specifically PostgreSQL.
- Hands-on experience with cloud deployment and containerization (Docker, AWS EC2, S3, RDS).
- Proven track record setup/managing CI/CD pipelines (GitHub Actions or Jenkins).
- Solid system design capabilities and understanding of microservices.

Preferred Skills:
- Experience with container orchestration using Kubernetes (EKS).
- Familiarity with Go (Golang) for building high-concurrency microservices.
- Experience with GraphQL APIs.
- Master's degree in Computer Science or related field.

Key Responsibilities:
- Design, build, and maintain scalable APIs and responsive user interfaces.
- Lead microservices migration and decouple legacy web modules.
- Optimize database structures, queries, and caching mechanisms.
- Drive engineering best practices, unit testing, code quality, and CD automation.
- Mentor team members and participate in code reviews.`,
    parsedResume: {
      name: "Alex Mercer",
      contact: "alex.mercer@email.dev | +1 (555) 019-2834 | San Francisco, CA",
      summary: "Senior Full Stack Engineer with 6+ years of experience designing, building, and scaling high-performance web applications. Expert in Python (Django/FastAPI), JavaScript (React, Node.js), and cloud-native architecture.",
      education: [
        { degree: "B.S. in Computer Science", institution: "Stanford University", year: "2016-2020", gpa: "3.82" }
      ],
      experience: [
        { role: "Senior Software Engineer", company: "TechScale Solutions", period: "2022 - Present", description: "Led a team of 4 engineers to migrate legacy monolith to FastAPI microservices. Built real-time dashboard using React and WebSockets. Optimized database queries, reducing response times by 35%." },
        { role: "Software Engineer", company: "AppForge Inc.", period: "2020 - 2022", description: "Developed and maintained e-commerce backend in Django and PostgreSQL. Integrated Stripe payment gateway and automated unit tests, increasing coverage to 88%." }
      ],
      projects: [
        { name: "Real-time Analytics Engine", tech: "FastAPI, Redis, PostgreSQL, React", impact: "Processed 10M+ daily events under 50ms latency, enabling real-time dashboard updates for 5k concurrent users." },
        { name: "Serverless Deployment Pipeline", tech: "AWS Lambda, GitHub Actions, Terraform", impact: "Automated multi-environment deployments, reducing release cycles from 2 days to 15 minutes." }
      ],
      skills: {
        languages: ["Python", "JavaScript", "SQL", "HTML5", "CSS3", "Bash"],
        frameworks: ["React", "Node.js", "FastAPI", "Django", "Express"],
        databases: ["PostgreSQL", "Redis", "MongoDB"],
        cloud: ["AWS (EC2, S3, RDS, Lambda)"],
        devops: ["Docker", "Git", "GitHub Actions", "CI/CD", "Terraform"],
        soft: ["Team Leadership", "Problem Solving", "Technical Communication", "Agile Methodologies", "Mentoring"]
      },
      certifications: ["AWS Certified Solutions Architect - Associate", "Certified ScrumMaster (CSM)"],
      links: { github: "github.com/alexm-dev", linkedin: "linkedin.com/in/alex-mercer", portfolio: "alexmercer.dev" }
    },
    analysis: {
      overallScore: 84,
      verdict: "Strong Match",
      verdictDescription: "The candidate exhibits deep expertise in the core tech stack (Python, React, databases) and fits the seniority requirements. Key strengths include system design, microservices migration, and cloud deployments. The candidate is only missing secondary requirements (Kubernetes and Go). Recommended for immediate technical screen.",
      componentScores: {
        skills: 88,
        experience: 85,
        projects: 90,
        education: 90,
        certifications: 80,
        tools: 85,
        keywords: 80,
        softSkills: 85
      },
      matchingSkills: [
        { skill: "Python", resumeEvidence: "6+ years of experience, FastAPI & Django frameworks", jdEvidence: "Expert knowledge of Python or similar backend languages", match: 100 },
        { skill: "React", resumeEvidence: "Built real-time dashboard using React and WebSockets", jdEvidence: "Proficient in modern frontend frameworks, specifically React", match: 100 },
        { skill: "PostgreSQL", resumeEvidence: "Maintained Django backend in PostgreSQL", jdEvidence: "Experience with relational databases (SQL / PostgreSQL)", match: 100 },
        { skill: "AWS (Cloud Deployment)", resumeEvidence: "AWS Certified Solutions Architect, S3, RDS, Lambda", jdEvidence: "Experience deploying and managing applications on AWS cloud environments", match: 95 },
        { skill: "Docker (Containerization)", resumeEvidence: "Terraform & GitHub Actions deployment pipelines", jdEvidence: "Familiarity with containerization and orchestration platforms", match: 90 },
        { skill: "CI/CD", resumeEvidence: "Automated multi-environment deployments using GitHub Actions", jdEvidence: "Setup and optimize continuous integration and delivery pipelines", match: 95 }
      ],
      missingSkills: {
        critical: [],
        important: [
          { skill: "Kubernetes", reason: "The JD lists container orchestration (Kubernetes/EKS) as a core requirement for their microservices scale.", courses: "Certified Kubernetes Administrator (CKA), Kubernetes Deep Dive on ACG" },
          { skill: "Go (Golang)", reason: "JD mentions Go as a preferred secondary language for high-concurrency microservices.", courses: "Go: The Complete Developer's Guide (Udemy)" }
        ],
        niceToHave: [
          { skill: "GraphQL", reason: "Listed under 'preferred API technologies'.", courses: "GraphQL Introduction (Apollo Odyssey)" }
        ]
      },
      keywordAnalysis: {
        matched: ["FastAPI", "React", "PostgreSQL", "AWS", "CI/CD", "Docker", "Microservices", "REST API", "System Design", "Agile"],
        missing: ["Kubernetes", "Go", "GraphQL", "EKS", "Unit Testing", "Jest"],
        density: 4.2,
        optimizationScore: 78,
        searchVisibility: "High"
      },
      experienceAnalysis: {
        relevant: "6 years of professional software engineering, matching the 5+ years requirement in the JD. Led microservices migration.",
        transferable: "Agile methodologies, team mentoring, and cloud architecture are highly transferable to this mid-to-senior scale position.",
        missing: "Scale handling with container orchestrators (Kubernetes) and cross-language microservice coordination.",
        industryFit: "Strong fit in SaaS and E-commerce domains.",
        yearsRequired: 5,
        yearsAvailable: 6
      },
      projectEvaluation: [
        { name: "Real-time Analytics Engine", relevance: "High", tech: "FastAPI, Redis, PostgreSQL, React", impact: "Processed 10M+ daily events under 50ms latency.", innovation: "Medium-High. Implemented pub/sub pattern in Redis for web sockets.", similarity: 90, score: 92 },
        { name: "Serverless Deployment Pipeline", relevance: "High", tech: "AWS Lambda, GitHub Actions, Terraform", impact: "Reduced release cycles from 2 days to 15 minutes.", innovation: "High. Automated multi-account AWS state management.", similarity: 85, score: 88 }
      ],
      educationAnalysis: {
        degreeRelevance: "Excellent. Stanford B.S. in Computer Science is highly relevant.",
        cgpaRelevance: "Strong (3.82 GPA is excellent and meets all academic screening filters).",
        courseRelevance: "Relevant coursework in Distributed Systems, Databases, and Algorithms.",
        mastersPreference: "JD prefers M.S. or equivalent, but candidate's Stanford B.S. plus 6 years of experience bypasses this requirement."
      },
      certificationAnalysis: {
        relevant: [
          { name: "AWS Certified Solutions Architect - Associate", rank: 1, value: "High. Directly validates AWS skills required in JD." }
        ],
        missing: [
          { name: "Certified Kubernetes Administrator (CKA)", rank: 2, value: "Highly recommended to fill the Kubernetes knowledge gap." }
        ],
        recommended: [
          { name: "AWS Certified Developer", rank: 3, value: "Complements solutions architect with hands-on coding validation." }
        ]
      },
      heatmap: {
        programming: 90,
        ml: 10,
        ai: 15,
        cloud: 85,
        databases: 90,
        devops: 75,
        frontend: 80,
        backend: 95,
        dataEngineering: 70,
        visualization: 60
      },
      softSkillAnalysis: {
        communication: { rating: 90, evidence: "Mentored junior developers, technical documentation writing." },
        leadership: { rating: 85, evidence: "Led a team of 4 engineers during the FastAPI microservices migration." },
        problemSolving: { rating: 90, evidence: "Reduced DB query response times by 35%, scaling processing to 10M+ daily events." },
        teamwork: { rating: 85, evidence: "Collaborated in Agile sprints, cross-functional releases." },
        ownership: { rating: 90, evidence: "Owned deployment pipelines and serverless automation end-to-end." },
        adaptability: { rating: 80, evidence: "Adapted tech stack from legacy Monolith (Django) to Microservices (FastAPI)." },
        analyticalThinking: { rating: 92, evidence: "Monitored latencies and bottlenecks under 50ms limits." },
        recruiterConfidence: "High"
      },
      strengths: [
        "Proven experience in API performance optimization (35% database load reduction, 50ms web service latency).",
        "Strong cloud engineering foundations with AWS Certified Solutions Architect credential.",
        "Demonstrated technical leadership leading a team of 4 through a successful core system migration."
      ],
      weaknesses: [
        "Lacks hands-on container orchestration experience (Kubernetes/EKS) specified in the job description's infrastructure requirements.",
        "No experience in Go (Golang) which is listed as the preferred secondary language for high-performance services."
      ],
      riskAssessment: {
        level: "Low-Medium",
        explanation: "The core backend and frontend requirements are fully satisfied. The lack of Kubernetes experience is a minor risk that can be mitigated quickly with training."
      },
      interviewProbability: {
        phoneScreen: 95,
        technicalRound: 80,
        finalRound: 70,
        offerProbability: 60,
        assumptions: "Assumes strong performance in behavioral screen due to leadership experience, and robust system design skills in technical round. Passing standard coding assessment is expected."
      },
      improvementRoadmap: {
        high: [
          { item: "Add Kubernetes Projects", description: "Deploy a microservice cluster using Minikube or EKS, and add it under projects." },
          { item: "Rewrite Experience Bullets", description: "Use STAR method on AppForge role to emphasize achievements and data scale." }
        ],
        medium: [
          { item: "Certifications", description: "Earn Certified Kubernetes Administrator (CKA) or show active preparation." },
          { item: "LinkedIn/GitHub Clean-up", description: "Add keywords like 'FastAPI', 'Microservices', and link the AWS/Terraform configurations." }
        ],
        low: [
          { item: "Explore Go (Golang)", description: "Build a simple microservice in Go to list on the resume as 'Familiar'." }
        ]
      },
      bulletImprovements: [
        { original: "Led a team of 4 engineers to migrate legacy monolith to FastAPI microservices.", improved: "Spearheaded the migration of a legacy Python monolith to FastAPI microservices for a team of 4, reducing API response latency by 42% and decoupling 5 key product modules.", impact: "Reduced API response latency by 42% and increased release agility." },
        { original: "Optimized database queries, reducing response times by 35%.", improved: "Refactored complex PostgreSQL query joins and introduced Redis caching, reducing peak DB response times by 35% and saving $12k/year in RDS scaling costs.", impact: "Reduced response times by 35% and saved $12k/year in infrastructure cost." },
        { original: "Developed and maintained e-commerce backend in Django.", improved: "Architected core checkout APIs in Django/PostgreSQL, integrating Stripe to process $4.2M in annual transactions with 99.98% uptime.", impact: "Processed $4.2M and maintained 99.98% checkout uptime." }
      ],
      missingActionVerbs: ["Spearheaded", "Architected", "Refactored", "Streamlined", "Orchestrated", "Decoupled"],
      suggestedJobRoles: {
        bestFit: ["Senior Backend Engineer", "Full Stack Engineer (React/Python)", "API Engineer"],
        goodFit: ["Cloud Software Engineer", "DevOps Engineer (Junior/Mid)", "Software Architect"],
        stretchRoles: ["Engineering Manager", "Principal Software Engineer"],
        notRecommended: ["Data Scientist", "Frontend Specialist (CSS/UX focus)", "Embedded Systems Developer"]
      },
      learningRoadmap: {
        thirtyDays: { title: "Kubernetes Foundations", items: ["Complete Kubernetes for Developers course.", "Deploy local Django/FastAPI app into Minikube using Helm charts."] },
        sixtyDays: { title: "Go (Golang) Microservices", items: ["Learn Go syntax and standard library.", "Build a high-performance logging or notification microservice in Go."] },
        ninetyDays: { title: "Advanced MLOps & CKA", items: ["Study for and complete CKA (Certified Kubernetes Administrator) exam.", "Integrate local Prometheus and Grafana metrics on Kubernetes."] },
        oneEightyDays: { title: "System Architecture", items: ["Read 'Designing Data-Intensive Applications' to master distributed database patterns.", "Design a complete multi-region serverless API setup using Terraform."] }
      },
      recruiterFeedback: "Alex Mercer is an extremely strong backend-heavy full-stack developer. His Stanford CS background and clear progression into senior roles make him highly attractive. The project outcomes are well-quantified. The lack of Kubernetes is the only major friction point for our current infrastructure scaling plans, but his solid AWS knowledge suggests he will pick it up quickly. Strongly recommend moving to the next stage."
    }
  },
  data_scientist: {
    roleTitle: "Data Scientist / ML Engineer",
    resumeText: `SARAH CHEN
Boston, MA | sarah.chen@email.ai | +1 (617) 555-8831 | github.com/schen-ai | linkedin.com/in/sarah-chen-ai | sarahchen.ai

PROFESSIONAL SUMMARY
Data Scientist & Machine Learning Engineer with 4+ years of experience designing and deploying deep learning models in production environments. Expert in computer vision, PyTorch, and NLP. Strong background in mathematical modeling, experimental design, and cloud-native MLOps.

EDUCATION
Massachusetts Institute of Technology (MIT)
M.S. in Artificial Intelligence & Decision Making | GPA: 3.94
Graduated: June 2022
B.S. in Mathematics and Computer Science | GPA: 3.88
Graduated: June 2020

EXPERIENCE
NeuralEdge Systems | Machine Learning Engineer
Boston, MA | 2022 - Present
- Designed and trained custom YOLOv8 object detection models using PyTorch for real-time robotic sorting, achieving 96.4% mean Average Precision (mAP) and reducing sorting errors by 22%.
- Created a production-grade NLP pipeline using BERT and Hugging Face to classify customer inquiries into 18 categories, improving router routing accuracy by 31%.
- Engineered MLOps pipelines using MLflow, Docker, and AWS SageMaker to automate model training, logging, and serving, reducing deployment time from 1 week to 1.5 hours.
- Collaborated with data engineering to set up Snowflake and dbt workflows, speeding up training feature generation by 3x.

MIT CSAIL | Research Assistant (ML)
Cambridge, MA | 2020 - 2022
- Conducted research on unsupervised domain adaptation for synthetic image classification, resulting in a co-authored publication at CVPR 2022.
- Built PyTorch and TensorFlow training pipelines on compute clusters (SLURM), reducing training epochs by 20% using distributed training strategies.

PROJECTS
Visual Inspection System | PyTorch, OpenCV, Docker, AWS
- Built an edge computer vision application deployed in Docker containers to identify defects in manufacturing lines with 98.2% accuracy.
- Managed inference speed optimization using TensorRT, achieving 45 FPS on NVIDIA Jetson.

Clinical Text Summarizer | Transformers, Hugging Face, FastAPI
- Fine-tuned T5 model on 50,000 medical records to generate 2-sentence clinical summaries, achieving a ROUGE-2 score of 0.61.
- Served the model via a FastAPI web server Dockerized and deployed on AWS ECS.

TECHNICAL SKILLS
- Programming: Python, R, C++, SQL, Bash
- Machine Learning & AI: PyTorch, TensorFlow, scikit-learn, Hugging Face (Transformers), OpenCV, Keras
- Data Engineering & Databases: SQL, PostgreSQL, Snowflake, dbt, Pandas, NumPy
- Cloud & MLOps: AWS (SageMaker, S3, EC2, ECS), MLflow, Docker, Git, CI/CD
- Soft Skills: Analytical Thinking, Research Writing, Presentation, Teamwork, Problem Solving

CERTIFICATIONS
- DeepLearning.AI TensorFlow Developer Professional Certificate
- AWS Certified Machine Learning - Specialty (Credential ID: AWS-MLS-8761)`,
    jobDescription: `Position: Machine Learning Engineer (Computer Vision Focus)
Location: Boston, MA (Onsite)
Experience: 3+ years of experience in ML modeling and deployment

About the Role:
We are seeking a talented Machine Learning Engineer to join our core AI team. In this role, you will develop state-of-the-art computer vision models and integrate them into our automated physical inspection platforms.

Required Skills & Experience:
- 3+ years of experience building and deploying machine learning models.
- Expert knowledge of deep learning frameworks, specifically PyTorch or TensorFlow.
- Experience in computer vision fields (Object Detection, Image Segmentation, OpenCV).
- Experience deploying ML models in production (Docker, AWS SageMaker, ECS, or Kubernetes).
- Strong programming skills in Python and SQL.
- Strong mathematical background (probability, statistics, linear algebra).

Preferred Skills:
- M.S. or Ph.D. in Computer Science, AI, or Mathematics.
- Publication record in top-tier AI conferences (CVPR, ICCV, NeurIPS, etc.).
- Experience with edge-computing hardware optimization (TensorRT, NVIDIA Jetson).
- Setup of data pipelines with Snowflake or dbt.

Key Responsibilities:
- Design, train, and evaluate deep learning models for visual inspection.
- Build clean, reproducible training pipelines (MLflow / Weights & Biases).
- Optimize models for low-latency edge deployment (NVIDIA Jetson / TensorRT).
- Collaborating with cross-functional teams to design schemas and extract training data.`,
    parsedResume: {
      name: "Sarah Chen",
      contact: "sarah.chen@email.ai | +1 (617) 555-8831 | Boston, MA",
      summary: "Data Scientist & Machine Learning Engineer with 4+ years of experience designing and deploying deep learning models in production environments. Expert in computer vision, PyTorch, and NLP.",
      education: [
        { degree: "M.S. in Artificial Intelligence", institution: "Massachusetts Institute of Technology (MIT)", year: "2020-2022", gpa: "3.94" },
        { degree: "B.S. in Mathematics and Computer Science", institution: "MIT", year: "2016-2020", gpa: "3.88" }
      ],
      experience: [
        { role: "Machine Learning Engineer", company: "NeuralEdge Systems", period: "2022 - Present", description: "Designed and trained custom YOLOv8 object detection models using PyTorch. Created NLP pipeline using BERT. Engineered MLOps pipelines using MLflow, Docker, and AWS SageMaker." },
        { role: "Research Assistant (ML)", company: "MIT CSAIL", period: "2020 - 2022", description: "Conducted research on unsupervised domain adaptation for synthetic image classification." }
      ],
      projects: [
        { name: "Visual Inspection System", tech: "PyTorch, OpenCV, Docker, AWS, TensorRT", impact: "Defect identification with 98.2% accuracy, achieving 45 FPS on NVIDIA Jetson via TensorRT." },
        { name: "Clinical Text Summarizer", tech: "Transformers, Hugging Face, FastAPI, Docker, AWS ECS", impact: "Fine-tuned T5 model on 50,000 medical records, achieving a ROUGE-2 score of 0.61." }
      ],
      skills: {
        languages: ["Python", "R", "C++", "SQL", "Bash"],
        frameworks: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "OpenCV", "Keras"],
        databases: ["SQL", "PostgreSQL", "Snowflake", "dbt"],
        cloud: ["AWS (SageMaker, S3, EC2, ECS)"],
        devops: ["Docker", "MLflow", "Git", "CI/CD"],
        soft: ["Analytical Thinking", "Research Writing", "Presentation", "Teamwork", "Problem Solving"]
      },
      certifications: ["DeepLearning.AI TensorFlow Developer Professional Certificate", "AWS Certified Machine Learning - Specialty"],
      links: { github: "github.com/schen-ai", linkedin: "linkedin.com/in/sarah-chen-ai", portfolio: "sarahchen.ai" }
    },
    analysis: {
      overallScore: 92,
      verdict: "Excellent Match",
      verdictDescription: "Sarah is an exceptional candidate for this Computer Vision ML role. She holds an M.S. in AI from MIT, CVPR publication record, hands-on production computer vision experience (YOLOv8, OpenCV, TensorRT, Jetson), and solid AWS SageMaker MLOps foundation. Every core and preferred criteria is met or exceeded. Highly recommend skipping behavioral and scheduling directly for technical panel.",
      componentScores: {
        skills: 95,
        experience: 90,
        projects: 95,
        education: 98,
        certifications: 90,
        tools: 92,
        keywords: 92,
        softSkills: 90
      },
      matchingSkills: [
        { skill: "PyTorch / TensorFlow", resumeEvidence: "Custom YOLOv8 in PyTorch, TensorRT optimizations, TensorFlow certified", jdEvidence: "Expert knowledge of deep learning frameworks, specifically PyTorch or TensorFlow", match: 100 },
        { skill: "Computer Vision", resumeEvidence: "YOLOv8 object detection, OpenCV visual inspection system, 45 FPS edge processing", jdEvidence: "Experience in computer vision fields (Object Detection, Image Segmentation)", match: 100 },
        { skill: "AWS SageMaker & MLOps", resumeEvidence: "SageMaker, MLflow, Docker model deployment automation", jdEvidence: "Experience deploying ML models in production (Docker, AWS SageMaker, ECS)", match: 98 },
        { skill: "NVIDIA Jetson / TensorRT", resumeEvidence: "TensorRT inference optimizations at 45 FPS on Jetson hardware", jdEvidence: "Experience with edge-computing hardware optimization (TensorRT, NVIDIA Jetson)", match: 100 },
        { skill: "Snowflake / dbt", resumeEvidence: "dbt and Snowflake schema designs for 3x feature speedup", jdEvidence: "Preferred experience with data pipelines (Snowflake / dbt)", match: 100 }
      ],
      missingSkills: {
        critical: [],
        important: [],
        niceToHave: [
          { skill: "Kubernetes (EKS)", reason: "JD mentions Kubernetes as alternative production deployment platform; candidate utilizes Docker + AWS ECS/SageMaker.", courses: "Docker & Kubernetes: The Practical Guide (Academind)" }
        ]
      },
      keywordAnalysis: {
        matched: ["PyTorch", "YOLOv8", "Computer Vision", "Object Detection", "OpenCV", "SageMaker", "TensorRT", "Jetson", "MLflow", "Snowflake", "dbt", "CVPR", "Publications"],
        missing: ["Kubernetes", "Weights & Biases", "Image Segmentation"],
        density: 5.6,
        optimizationScore: 92,
        searchVisibility: "Outstanding"
      },
      experienceAnalysis: {
        relevant: "4 years of ML experience (2 years industry, 2 years MIT CSAIL). Expert focus in computer vision and deployment.",
        transferable: "NLP workflows and distributed compute management are transferable, showing robust engineering flexibility.",
        missing: "None. Fits all critical experience profiles.",
        industryFit: "Perfect alignment with visual automation/inspection industrial needs.",
        yearsRequired: 3,
        yearsAvailable: 4
      },
      projectEvaluation: [
        { name: "Visual Inspection System", relevance: "Excellent", tech: "PyTorch, OpenCV, Docker, AWS, TensorRT, NVIDIA Jetson", impact: "Defect identification at 45 FPS with 98.2% accuracy on edge hardware.", innovation: "High. Integrated NVIDIA TensorRT bindings for latency reduction.", similarity: 100, score: 98 },
        { name: "Clinical Text Summarizer", relevance: "Medium-High", tech: "Transformers, Hugging Face, FastAPI, AWS ECS", impact: "Fine-tuned T5 model, served via FastAPI.", innovation: "Medium-High. Handled healthcare sequence constraints.", similarity: 70, score: 85 }
      ],
      educationAnalysis: {
        degreeRelevance: "Outstanding. MIT M.S. in AI is the top academic credential in the field.",
        cgpaRelevance: "Flawless (3.94 GPA in M.S., 3.88 in B.S.).",
        courseRelevance: "MIT CS and Math foundations cover linear algebra, statistics, and neural nets completely.",
        mastersPreference: "JD requests M.S./Ph.D. Candidate holds MIT M.S. in AI, fully meeting preferences."
      },
      certificationAnalysis: {
        relevant: [
          { name: "AWS Certified Machine Learning - Specialty", rank: 1, value: "High. Validates enterprise MLOps capability in AWS." },
          { name: "TensorFlow Developer Professional Certificate", rank: 2, value: "Medium-High. Validates core deep learning implementation." }
        ],
        missing: [],
        recommended: [
          { name: "NVIDIA Jetson AI Specialist", rank: 1, value: "Excellent specialization for CV edge inference." }
        ]
      },
      heatmap: {
        programming: 88,
        ml: 96,
        ai: 98,
        cloud: 80,
        databases: 85,
        devops: 80,
        frontend: 20,
        backend: 75,
        dataEngineering: 85,
        visualization: 70
      },
      softSkillAnalysis: {
        communication: { rating: 92, evidence: "Presented findings, published peer-reviewed research at CVPR." },
        leadership: { rating: 75, evidence: "Led feature schema collaboration with the data engineering team." },
        problemSolving: { rating: 96, evidence: "Optimized YOLOv8 visual models and compressed models for edge devices." },
        teamwork: { rating: 90, evidence: "Worked alongside CSAIL research groups and commercial developers." },
        ownership: { rating: 88, evidence: "Developed entire MLOps workflow from database hooks to SageMaker scripts." },
        adaptability: { rating: 85, evidence: "Transitioned from pure research environment (CSAIL) to fast-paced startup." },
        analyticalThinking: { rating: 98, evidence: "Rigorous research background in mathematics, statistics, and linear algebra." },
        recruiterConfidence: "Outstanding"
      },
      strengths: [
        "Unparalleled education pedigree (MIT M.S. and B.S.) in Mathematics & AI.",
        "Proven edge device and hardware-level optimization (TensorRT, NVIDIA Jetson, 45 FPS execution).",
        "Peer-reviewed research record at CVPR, validating cutting-edge conceptual capabilities."
      ],
      weaknesses: [
        "Relatively early-career in pure industrial environments (2 years industry post-grad, though supplemented by 2 years academic research).",
        "Lack of extensive Kubernetes (EKS) experience, though mitigated by strong AWS ECS and SageMaker deploy records."
      ],
      riskAssessment: {
        level: "Low",
        explanation: "The profile is top-tier. Academic credentials, direct computer vision experience, and cloud deployment history leave almost zero risks."
      },
      interviewProbability: {
        phoneScreen: 99,
        technicalRound: 90,
        finalRound: 80,
        offerProbability: 75,
        assumptions: "High probability of progressing rapidly. Expected to excel in coding, ML theory, and system architecture challenges."
      },
      improvementRoadmap: {
        high: [
          { item: "Highlight Git repositories", description: "Ensure the visual inspection project repository is open source and linked clearly." }
        ],
        medium: [
          { item: "Address Kubernetes", description: "Add a line explaining Docker usage is container-orchestration ready for Kubernetes." }
        ],
        low: [
          { item: "Add PyTorch certifications", description: "While TensorFlow certified, PyTorch is her primary tool; list advanced PyTorch workshops." }
        ]
      },
      bulletImprovements: [
        { original: "Designed and trained custom YOLOv8 object detection models using PyTorch.", improved: "Designed and trained custom YOLOv8 object detection models using PyTorch, achieving 96.4% mAP and reducing physical robotic sorting errors by 22%.", impact: "Achieved 96.4% mAP and cut physical defects by 22%." },
        { original: "Engineered MLOps pipelines using MLflow and Docker.", improved: "Engineered robust MLOps workflows using MLflow, Docker, and AWS SageMaker, compressing model deployment latency from 1 week to 1.5 hours.", impact: "Reduced deployment cycles by 98% (from 168 hours to 1.5 hours)." }
      ],
      missingActionVerbs: ["Spearheaded", "Championed", "Orchestrated", "Accelerated", "Refactored"],
      suggestedJobRoles: {
        bestFit: ["Machine Learning Engineer (Computer Vision)", "Computer Vision Researcher", "MLOps Engineer"],
        goodFit: ["Data Scientist (Deep Learning)", "Research Scientist (AI)"],
        stretchRoles: ["Senior ML Architect", "AI Tech Lead"],
        notRecommended: ["Data Analyst (SQL/Excel focus)", "Frontend Developer", "Database Administrator"]
      },
      learningRoadmap: {
        thirtyDays: { title: "Production Kubernetes", items: ["Complete Kubernetes fundamentals.", "Deploy local PyTorch service to Kubernetes using Docker."] },
        sixtyDays: { title: "Advanced Edge AI", items: ["Experiment with ONNX Runtime optimizations on Jetson.", "Deep dive into low-bit quantization (INT8/FP16) on YOLO models."] },
        ninetyDays: { title: "Distributed Training at Scale", items: ["Explore PyTorch Lightning and Megatron-LM for multi-GPU configurations.", "Implement deep learning checkpointing and scheduling on Ray."] },
        oneEightyDays: { title: "Generative CV & Diffusion", items: ["Research diffusion models for synthetic training data generation.", "Implement Stable Diffusion pipelines to expand visual dataset diversity."] }
      },
      recruiterFeedback: "Sarah Chen is an exceptional applicant. Her MIT credential combined with CVPR publication sets her in the top 2% of candidates. Crucially, she possesses hands-on edge deployment experience (Jetson/TensorRT) which directly solves our physical inspection device needs. She is a low-risk, high-reward hire. Recommend bypassing standard coding screening and moving directly to a specialized system design interview."
    }
  },
  product_manager: {
    roleTitle: "Technical Product Manager",
    resumeText: `MARCUS VANCE
Seattle, WA | marcus.vance@email.com | +1 (206) 555-0145 | linkedin.com/in/marcus-vance-pm | marcusvance.co

PROFESSIONAL SUMMARY
Product Manager with 3+ years of experience leading cross-functional teams in agile environments. Skilled in user research, writing detailed PRDs, roadmap creation, and product analytics. Background in business administration and basic software development.

EDUCATION
University of Washington
B.A. in Business Administration | GPA: 3.45
Graduated: June 2021
Minor in Information Systems

EXPERIENCE
CloudSaaS Tech | Associate Product Manager
Seattle, WA | 2023 - Present
- Owned the onboarding experience roadmap, conducting user research and identifying 4 key drop-off points, which reduced signup friction by 18%.
- Wrote detailed PRDs and collaborated with 8 developers and 2 designers to launch a new Slack integration, securing 12,000 new active accounts within 6 months.
- Analyzed product usage using Mixpanel and SQL queries, creating dashboards to guide weekly feature priorities.
- Managed sprint backlogs, user stories, and daily standups in Jira.

InnoGrowth Corp. | Product Intern / Analyst
Seattle, WA | 2021 - 2023
- Gathered product feedback from customer support logs, categorizing feature requests to assist PMs in quarterly planning.
- Conducted competitor analysis on 5 regional cloud competitors, identifying a pricing gap that led to a subscription adjustment increasing average revenue per user (ARPU) by 4%.

PROJECTS
Personal Portfolio and Blog | HTML, CSS, JavaScript, Netlify
- Developed a personal static website to display case studies, receiving 1,500 monthly views.
- Wired basic Slack notifications to capture user feedback forms.

TECHNICAL SKILLS & TOOLS
- Product Management: Agile, Scrum, Kanban, Jira, Confluence, Product Roadmapping, User Stories, PRDs
- Analytics: Mixpanel, Google Analytics, Excel, SQL (Basic)
- Tech Foundations: HTML5, CSS3, JavaScript (Basic), GitHub (Basic)
- Soft Skills: Communication, Organization, Stakeholder Management, User Empathy, Presentation

CERTIFICATIONS
- Certified Scrum Product Owner (CSPO - Scrum Alliance)
- Product School Product Manager Certificate (PMC)`,
    jobDescription: `Position: Technical Product Manager (Cloud Platforms)
Location: Seattle, WA
Experience: 5+ years of product management experience with technical products

About the Role:
We are looking for a Technical Product Manager to lead the expansion of our Cloud Infrastructure API management platform. You will translate complex cloud configurations into simple developer features and work closely with platform engineers to build reliable SDKs and APIs.

Required Skills & Experience:
- 5+ years of experience as a Product Manager, preferably managing APIs, developer platforms, or cloud infrastructure.
- Strong technical background: Ability to read code, write SQL queries, and discuss system design, databases, or API protocols (REST, gRPC) with backend engineers.
- Mastery of Agile/Scrum methodologies, Jira, and writing technical PRDs.
- Experience with product analytics platforms (Mixpanel, Amplitude, or Datadog).
- Excellent stakeholder communication skills, bridging the gap between business executives and senior developers.

Preferred Skills:
- B.S. or M.S. in Computer Science, Software Engineering, or a highly technical field.
- Experience deploying or managing workloads on AWS, GCP, or Azure.
- Experience writing API documentation or building developer tools.

Key Responsibilities:
- Define the product vision and multi-year roadmap for our developer API suite.
- Write highly technical PRDs detailing request/response JSON schemas, rate limits, and authentication.
- Work closely with platform developers to prioritize technical debt vs. customer-facing features.`,
    parsedResume: {
      name: "Marcus Vance",
      contact: "marcus.vance@email.com | +1 (206) 555-0145 | Seattle, WA",
      summary: "Product Manager with 3+ years of experience leading cross-functional teams in agile environments. Skilled in user research, roadmap creation, and product analytics.",
      education: [
        { degree: "B.A. in Business Administration", institution: "University of Washington", year: "2017-2021", gpa: "3.45" }
      ],
      experience: [
        { role: "Associate Product Manager", company: "CloudSaaS Tech", period: "2023 - Present", description: "Owned onboarding roadmap, reduced signup friction by 18%. Launched Slack integration, gaining 12k accounts." },
        { role: "Product Intern / Analyst", company: "InnoGrowth Corp.", period: "2021 - 2023", description: "Gathered feedback, conducted competitor analysis on regional cloud platforms." }
      ],
      projects: [
        { name: "Personal Portfolio and Blog", tech: "HTML, CSS, JavaScript, Netlify", impact: "Static site showcasing product case studies, receiving 1,500 monthly views." }
      ],
      skills: {
        languages: ["SQL (Basic)", "HTML5", "CSS3", "JavaScript (Basic)"],
        frameworks: ["Not Mentioned"],
        databases: ["Not Mentioned"],
        cloud: ["Not Mentioned"],
        devops: ["GitHub (Basic)"],
        soft: ["Agile/Scrum", "PRDs", "Jira", "Confluence", "User Stories", "Communication", "Stakeholder Management", "User Empathy"]
      },
      certifications: ["Certified Scrum Product Owner (CSPO)", "Product School Product Manager Certificate"],
      links: { linkedin: "linkedin.com/in/marcus-vance-pm" }
    },
    analysis: {
      overallScore: 58,
      verdict: "Weak Match",
      verdictDescription: "Marcus has promising foundations in product management, specifically Agile sprints, Jira tracking, and onboarding optimization. However, this role is for a highly technical Product Manager managing Cloud APIs. Marcus lacks the 5+ years seniority requirement (possesses 3 years, including internships), lacks CS or engineering training, and has no experience in cloud architecture (AWS/GCP), API architectures (REST/gRPC schemas), or platform infrastructure. The risk of recruitment mismatch is high.",
      componentScores: {
        skills: 45,
        experience: 50,
        projects: 30,
        education: 60,
        certifications: 80,
        tools: 65,
        keywords: 50,
        softSkills: 85
      },
      matchingSkills: [
        { skill: "Agile & Jira Sprints", resumeEvidence: "CSPO certified, managed sprints and standups in Jira", jdEvidence: "Mastery of Agile/Scrum methodologies and Jira workflows", match: 100 },
        { skill: "SQL (Basic)", resumeEvidence: "Analyzed product usage using basic SQL queries", jdEvidence: "Ability to write SQL queries and discuss database tables", match: 70 },
        { skill: "PRD Writing", resumeEvidence: "Wrote detailed PRDs for onboarding features and Slack integrations", jdEvidence: "Writing technical PRDs for developer platforms", match: 80 },
        { skill: "Product Analytics", resumeEvidence: "Created Mixpanel dashboard metrics to guide roadmap choices", jdEvidence: "Experience with product analytics platforms like Mixpanel", match: 90 }
      ],
      missingSkills: {
        critical: [
          { skill: "API Architecture (REST/gRPC)", reason: "JD requires defining schemas, rate limits, and security protocols for developer APIs; candidate has only managed integration UI.", courses: "Designing APIs with Swagger, REST API Design on Coursera" },
          { skill: "Cloud Infrastructure (AWS/GCP)", reason: "Platform operates on cloud infrastructure. Candidate has no documented cloud knowledge.", courses: "AWS Cloud Practitioner, Google Cloud Digital Leader" }
        ],
        important: [
          { skill: "System Design Concepts", reason: "Required to hold architecture trade-off discussions with senior platform backend engineers.", courses: "System Design for Product Managers" },
          { skill: "Developer Tools (SDKs)", reason: "JD specifies building developer tools and SDK roadmaps.", courses: "Managing Developer Products (Product School)" }
        ],
        niceToHave: []
      },
      keywordAnalysis: {
        matched: ["Agile", "Scrum", "PRDs", "Jira", "Mixpanel", "SQL", "Roadmap", "User Stories"],
        missing: ["Cloud Infrastructure", "APIs", "REST", "gRPC", "JSON Schemas", "SDKs", "AWS", "Platform Engineering", "System Design"],
        density: 2.1,
        optimizationScore: 48,
        searchVisibility: "Low-Medium"
      },
      experienceAnalysis: {
        relevant: "3 years of product management, including internship/analyst roles. Needs 5+ years of technical product management.",
        transferable: "Agile rituals, Slack integration releases, user onboarding flows, and analytics methodologies are valuable but too front-end/business focused.",
        missing: "Platform engineering coordination, API schema drafting, and cloud environment operations.",
        industryFit: "Business-focused SaaS experience. Lacks API/infrastructure platform industry alignment.",
        yearsRequired: 5,
        yearsAvailable: 3
      },
      projectEvaluation: [
        { name: "Personal Portfolio and Blog", relevance: "Low", tech: "HTML, CSS, JavaScript, Netlify", impact: "Static site with 1,500 monthly views.", innovation: "Low. Simple static website template.", similarity: 20, score: 30 }
      ],
      educationAnalysis: {
        degreeRelevance: "Moderate-Low. B.A. in Business Administration is business-focused. JD prefers Computer Science or technical B.S.",
        cgpaRelevance: "Average (3.45 GPA). Meets standard business filters but lacks technical CS validation.",
        courseRelevance: "Basic database operations from Information Systems minor, but missing core networking, systems, or software architecture coursework.",
        mastersPreference: "Not Mentioned"
      },
      certificationAnalysis: {
        relevant: [
          { name: "Certified Scrum Product Owner (CSPO)", rank: 1, value: "High. Directly validates agile management capabilities." }
        ],
        missing: [
          { name: "AWS Certified Cloud Practitioner", rank: 2, value: "Highly recommended to build developer credibility." }
        ],
        recommended: [
          { name: "API Product Management Certification", rank: 3, value: "Critical to show understanding of schema specifications." }
        ]
      },
      heatmap: {
        programming: 30,
        ml: 5,
        ai: 5,
        cloud: 10,
        databases: 40,
        devops: 10,
        frontend: 45,
        backend: 30,
        dataEngineering: 20,
        visualization: 65
      },
      softSkillAnalysis: {
        communication: { rating: 85, evidence: "Bridged business users and engineers for Slack integrations." },
        leadership: { rating: 80, evidence: "Managed team of 8 developers and 2 designers on onboarding projects." },
        problemSolving: { rating: 70, evidence: "Identified onboarding drop-off points, but lacks complex engineering problem solving." },
        teamwork: { rating: 88, evidence: "Facilitated daily standups and cross-team alignment in agile sprints." },
        ownership: { rating: 82, evidence: "Owned the customer onboarding onboarding funnel dashboard." },
        adaptability: { rating: 75, evidence: "Adapted to startup culture from intern to Associate PM." },
        analyticalThinking: { rating: 78, evidence: "Created Mixpanel priority dashboards based on usage metrics." },
        recruiterConfidence: "Moderate"
      },
      strengths: [
        "Strong understanding of product analytics tools (Mixpanel) and customer onboarding metrics.",
        "Formal certification in agile processes (CSPO).",
        "Direct experience coordinating developers and designers on functional features (Slack integration)."
      ],
      weaknesses: [
        "Lack of cloud experience (AWS, Azure, GCP) or backend systems understanding.",
        "Does not meet the 5+ years of PM experience required for this senior platform role.",
        "Missing technical background (computer science degree or equivalent API design experience)."
      ],
      riskAssessment: {
        level: "High",
        explanation: "The candidate's business background and lack of platform/cloud training present a high risk of struggle when negotiating complex infrastructure priorities and API designs with senior engineering teams."
      },
      interviewProbability: {
        phoneScreen: 40,
        technicalRound: 15,
        finalRound: 5,
        offerProbability: 2,
        assumptions: "Likely filtered out early due to lack of years of experience and lack of CS/cloud keywords. Technical interview would present significant systems challenges."
      },
      improvementRoadmap: {
        high: [
          { item: "Target Non-Technical PM Roles", description: "Refocus search on B2B SaaS or growth product management roles where business skills are highly valued." },
          { item: "Earn Cloud Certifications", description: "Study and pass the AWS Cloud Practitioner exam to build baseline cloud technical literacy." }
        ],
        medium: [
          { item: "Contribute to API products", description: "Shadow technical PMs at his current company on developer portal workflows." },
          { item: "Build API Projects", description: "Design a public Postman collection or code a simple node.js API to demonstrate technical hands-on capability." }
        ],
        low: [
          { item: "Add GitHub Link", description: "Commit simple portfolio projects to Github to verify ability to coordinate with developers' environment." }
        ]
      },
      bulletImprovements: [
        { original: "Wrote detailed PRDs and collaborated with developers to launch Slack integration.", improved: "Authored technical PRDs for a Slack integration backend and coordinated a sprint team of 8 developers to launch, driving a 15% increase in acquisition representing 12,000 active accounts in 6 months.", impact: "Gained 12,000 accounts with 15% acquisition spike." },
        { original: "Analyzed product usage using Mixpanel and SQL queries.", improved: "Queried postgres usage schemas in SQL and configured Mixpanel dashboards, identifying 4 user friction zones, resulting in an onboarding optimization that slashed signup drop-offs by 18%.", impact: "Slashed signup drop-offs by 18%." }
      ],
      missingActionVerbs: ["Spearheaded", "Formulated", "Synthesized", "Negotiated", "Standardized"],
      suggestedJobRoles: {
        bestFit: ["Growth Product Manager", "Associate Product Manager", "Product Analyst"],
        goodFit: ["B2B SaaS PM", "Scrum Master", "Project Manager"],
        stretchRoles: ["Technical PM (Cloud Platforms)"],
        notRecommended: ["Platform Architect", "Data Engineer", "Machine Learning PM"]
      },
      learningRoadmap: {
        thirtyDays: { title: "API Fundamentals", items: ["Complete 'APIs for Beginners' course.", "Learn how REST APIs structure JSON payloads, headers, and HTTP verbs."] },
        sixtyDays: { title: "Cloud Essentials", items: ["Pass AWS Cloud Practitioner exam.", "Understand S3, EC2, API Gateway configurations."] },
        ninetyDays: { title: "Technical PRD Mastery", items: ["Study open-source API documentation (Stripe, Twilio).", "Practice writing mock schemas and error response specs for a sample API."] },
        oneEightyDays: { title: "Database Systems", items: ["Learn advanced SQL joins, indexing, and normalization rules.", "Deploy a small Express/PostgreSQL backend app to Heroku/Render."] }
      },
      recruiterFeedback: "Marcus Vance is a competent Growth PM but is highly unsuited for this specific Technical PM role. His profile lacks cloud infrastructure depth, API architecture design, and the 5+ years of PM experience required. While his CSPO certification is useful, his degree in business does not offset the deep developer focus of our API platforms. I do not recommend moving forward for this position."
    }
  }
};
window.mockData = mockData;
if (typeof module !== 'undefined' && module.exports) {
  module.exports = mockData;
}
