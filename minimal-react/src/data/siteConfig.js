export const siteConfig = {
    // ── Personal Info ─────────────────────────────────────
    name: "Manthan Mittal",
    tagline: "AI Engineer • Full‑Stack Developer • Creator",
    location: "Ahmedabad, India",
    phone: "+91 8200681650",
    email: "manthanmittal93@gmail.com",
    resumeUrl: "/Manthan_resume.pdf",

    // ── Social Links ─────────────────────────────────────
    socials: [
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/manthanmittal",
            icon: "linkedin",
        },
        {
            name: "GitHub",
            url: "https://github.com/manthanmittal",
            icon: "github",
        },
        {
            name: "Twitter",
            url: "https://twitter.com/manthanmittal",
            icon: "twitter",
        },
    ],

    // ── About ────────────────────────────────────────────
    about: [
        "I am an AI Engineer and Full-Stack Developer based in Ahmedabad, India. With a strong foundation in both software engineering and artificial intelligence, I specialize in building intelligent web applications that solve real-world problems.",
        "My journey started with a B.E. in Information Technology, followed by an M.Sc. in Artificial Intelligence where I researched Generative AI and Computer Vision. I have hands-on experience building autonomous agents, RAG systems, and scalable full-stack platforms.",
        "I am particularly passionate about Large Language Models (LLMs) and their application in automating complex workflows. My thesis on Zero-Shot Text-to-Video Generation explored the frontiers of multimodal AI, and I continue to stay at the bleeding edge of this rapidly evolving field.",
        "When I'm not coding, I'm likely exploring the latest in AI research, contributing to open source, or writing about technology."
    ],

    // ── Education ───────────────────────────────────────
    education: [
        {
            degree: "M.Sc. in Artificial Intelligence",
            institution: "University of Essex",
            year: "2022 – 2024",
            details: [
                "Specialised in Machine Learning, NLP, and Computer Vision.",
                "Thesis: “Zero‑Shot Text‑to‑Video Generation using Diffusion Models”.",
            ],
        },
        {
            degree: "B.E. in Information Technology",
            institution: "Ahmedabad Institute of Technology",
            year: "2018 – 2022",
            details: [
                "Graduated with First Class Honors.",
                "President of the Coding Club – organized hackathons and workshops.",
            ],
        },
    ],

    // ── Experience (Timeline) ───────────────────────────
    experience: [
        {
            role: "AI Research Intern",
            company: "DeepVision Labs",
            period: "Jun 2023 – Aug 2023",
            location: "Remote",
            points: [
                "Developed a prototype for a Text‑to‑Video generator using Stable Diffusion.",
                "Implemented a custom CLIP‑based similarity scoring pipeline.",
                "Published a technical blog post that received 5k+ reads.",
            ],
        },
        {
            role: "Full‑Stack Engineer Intern",
            company: "Roxigym",
            period: "Jan 2023 – Apr 2023",
            location: "Ahmedabad, India",
            points: [
                "Built RESTful APIs with Node.js/Express and integrated Stripe payments.",
                "Designed responsive admin dashboard with React + Tailwind.",
                "Reduced page‑load time by 35 % through lazy loading and code‑splitting.",
            ],
        },
        {
            role: "Software Engineer",
            company: "Freelance",
            period: "2022 – Present",
            location: "Remote",
            points: [
                "Delivered end‑to‑end web‑automation agents (Web Task Autopilot).",
                "Created DocInsight – a Retrieval‑Augmented Generation Q&A system.",
                "Open‑sourced multiple libraries on GitHub (⭐ 2.5k total).",
            ],
        },
    ],

    // ── Skills ───────────────────────────────────────────
    skills: {
        languages: ["Python", "JavaScript/TypeScript", "C++", "Java"],
        frameworks: [
            "React", "Next.js", "Node.js/Express", "Tailwind CSS",
            "Framer Motion", "TensorFlow", "PyTorch"
        ],
        tools: [
            "Git", "Docker", "Vercel", "Netlify", "AWS (S3, Lambda)",
            "Jest", "Cypress"
        ],
    },

    // ── Projects ────────────────────────────────────────
    projects: [
        {
            title: "AI Video Generator",
            description: "Converts text prompts into short AI-generated videos using diffusion and transformer pipelines.",
            techStack: ["Python", "PyTorch", "Diffusion Models", "HuggingFace", "FFmpeg"],
            highlights: [
                "Implemented latent diffusion models for high-fidelity generation.",
                "Optimized inference pipeline for faster video synthesis."
            ],
            github: "https://github.com/manthanmittal/ai-video-gen",
            demo: "#"
        },
        {
            title: "Intelligent Document Q&A System",
            description: "Upload documents and get accurate answers using embeddings and a retrieval-augmented generation pipeline.",
            techStack: ["Node.js", "Python", "Vector DB", "OpenAI", "React"],
            highlights: [
                "Built a scalable RAG pipeline for handling large PDF documents.",
                "Integrated vector search for semantic query understanding."
            ],
            github: "https://github.com/manthanmittal/doc-qa",
            demo: "#"
        },
        {
            title: "Autonomous Web Navigator",
            description: "An AI agent that performs tasks in a browser using LLM reasoning + Playwright.",
            techStack: ["Node.js", "Playwright", "LangChain", "Puppeteer"],
            highlights: [
                "Designed an agentic loop for multi-step web interactions.",
                "Achieved high success rate on complex form-filling tasks."
            ],
            github: "https://github.com/manthanmittal/web-navigator",
            demo: "#"
        },
        {
            title: "Sleep Pattern Analyzer",
            description: "Analyzes sleep data to detect irregularities using ML classification models.",
            techStack: ["Python", "pandas", "scikit-learn", "PyTorch", "Streamlit"],
            highlights: [
                "Trained classification models to detect sleep anomalies.",
                "Visualized sleep metrics with interactive Streamlit dashboards."
            ],
            github: "https://github.com/manthanmittal/sleep-analyzer",
            demo: "#"
        },
        {
            title: "Random MAC Optimization",
            description: "Uses neural networks & graph neural networks to optimize MAC layer scheduling.",
            techStack: ["PyTorch", "PyG", "Jupyter"],
            highlights: [
                "Applied GNNs to model wireless network topology.",
                "Improved scheduling efficiency compared to traditional algorithms."
            ],
            github: "https://github.com/manthanmittal/mac-optimization",
            demo: "#"
        },
        {
            title: "Roxigym – Full-Stack Fitness Web App",
            description: "Fitness app with login, workout routines, progress tracking, exercise library, and nutrition logging.",
            techStack: ["React", "Node.js", "MongoDB", "JWT", "Vercel"],
            highlights: [
                "Developed full-stack features including auth and database management.",
                "Deployed a responsive PWA for mobile users."
            ],
            github: "https://github.com/manthanmittal/roxigym",
            demo: "https://roxigym.vercel.app"
        }
    ],

    // ── Certifications (optional) ───────────────────────
    certifications: [
        {
            name: "Deep Learning Specialization",
            issuer: "Coursera – Andrew Ng",
            year: "2023",
        },
        {
            name: "AWS Certified Solutions Architect – Associate",
            issuer: "Amazon Web Services",
            year: "2022",
        },
    ],
};
