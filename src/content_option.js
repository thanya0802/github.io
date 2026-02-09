const logotext = "THANYA";

const meta = {
  title: "Thanya Mysore Santhosh",
  description:
    "Thanya Mysore Santhosh — Data Science Master's student at Northeastern University specializing in Machine Learning, NLP, and Large Language Models.",
};

/* ================= INTRO ================= */

const introdata = {
  title: "I'm Thanya Mysore Santhosh",
  animated: {
    first: "I build machine learning systems",
    second: "I work with NLP and large language models",
    third: "I develop production-ready AI solutions",
  },
  description:
    "Master’s student in Data Science at Northeastern University with experience across Machine Learning, Natural Language Processing, and Large Language Models. I focus on building scalable, reliable AI systems that translate research into real-world applications.",
  your_img_url: require("./assets/images/portfolio-main.jpg"),
};

/* ================= ABOUT ================= */

const dataabout = {
  title: "Academic & Professional Profile",
  aboutme:
    "I am a Master of Science student in Data Science at Northeastern University’s Khoury College of Computer Sciences, with an expected graduation in May 2026. I hold a strong foundation in Computer Science and specialize in Machine Learning, Deep Learning, Natural Language Processing, and Large Language Models. My experience spans academic research, teaching, and industry, including building scalable data pipelines, developing retrieval-augmented generation systems, and deploying production-grade machine learning models. My interests focus on designing robust, interpretable AI systems with real-world impact.",
};

/* ================= RESEARCH FOCUS ================= */

 const researchFocus = [
  "Machine learning and deep learning systems for real-world deployment",
  "Large language models, NLP pipelines, and retrieval-augmented generation",
  "Anomaly detection, model interpretability, and AI reliability",
  "Scalable data engineering and ML infrastructure on cloud platforms",
];

/* ================= EXPERIENCE ================= */

const experience = [
  {
    role: "Research Assistant — Dialogue-to-Note Generation for Clinical Documentation",
    org: "Northeastern University",
    period: "Sep 2025 – Present",
    points: [
      "Applied NLP and LLM-based techniques to convert doctor–patient dialogues into SOAP-format clinical notes, supporting automated clinical documentation",
      "Experimented with prompt design and NLP-based information extraction to improve factual accuracy and section relevance in generated notes",
      "Evaluated LLM-generated clinical notes for hallucinations, omissions, and logical consistency, supporting reliability analysis in healthcare NLP research",
    ],
  },
  {
    role: "Research Assistant — LLM-Based Depression Cause Analysis from Twitter Data",
    org: "Northeastern University",
    period: "Sep 2025 – Present",
    points: [
      "Created a Twitter API–based pipeline to collect and preprocess 15,000+ mental-health–related tweets for depression analysis",
      "Designed an NLP classification pipeline using RoBERTa to detect depression-related tweets and LLaMA 3.3 70B for multi-label cause classification across social, economic, and psychological factors",
      "Applied BERTopic to extract latent themes beyond predefined categories and analyze patterns in community-level mental-health discourse",
    ],
  },
  {
    role: "Head Teaching Assistant — Intermediate Python Programming for Data Science",
    org: "Northeastern University",
    period: "Sep 2025 – Present",
    points: [
      "Managed and mentored 15 TAs, coordinating grading, labs, and office hours for 260+ students on Python OOP, debugging, and machine learning concepts",
      "Monitored grading of assignments, quizzes, and online discussions on classification, clustering, regression, and algorithmic problem solving, cutting query backlog by 30%",
      "Guided students and TAs in applying ML workflows including data preprocessing, model training, and evaluation, improving average student project scores by 15%",
    ],
  },
  {
    role: "Teaching Assistant — Python Programming for Data Science",
    org: "Northeastern University",
    period: "May 2025 – Jun 2025",
    points: [
      "Mentored 60+ students in Python, NumPy, pandas and matplotlib during office hours and review sessions, resolving 20+ weekly queries on debugging, data analysis and visualization",
      "Graded 100+ assignments and co-designed labs and quizzes, contributing to a 15% increase in average student performance",
      "Guided students through implementing data preprocessing, feature engineering, and EDA on real-world datasets",
    ],
  },
  {
    role: "Data Science Intern",
    org: "66 Degrees",
    period: "Jul 2023 – Feb 2024",
    points: [
      "Analyzed customer and marketing datasets using Python, SQL, BigQuery, and Snowflake on GCP, reducing manual analysis time by ~25%",
      "Contributed to customer segmentation and churn prediction models using BigQuery ML and Python, improving campaign targeting effectiveness by ~20%",
      "Built and maintained Looker dashboards on BigQuery to track churn rate, segment distribution, and campaign performance for weekly stakeholder reviews",
      "Collaborated with senior team members to review data workflows and model evaluation metrics, reducing recurring reporting effort by ~10 hours/week",
    ],
  },
  {
    role: "Data Science Intern",
    org: "Omnisimple",
    period: "Oct 2022 – Nov 2022",
    points: [
      "Cleaned and analyzed 100,000+ transaction records using Python, SQL, AWS S3, and EC2 to identify spending patterns and customer behavior segments",
      "Developed a logistic regression model to predict loan repayment delays using Python, achieving ~87% accuracy and supporting follow-up prioritization",
      "Contributed to a collaborative filtering–based recommendation prototype for financial products, supporting personalization experiments that improved conversion metrics by ~9%",
    ],
  },
  {
    role: "Machine Learning Engineer",
    org: "Varcons Technologies",
    period: "Aug 2022 – Sep 2022",
    points: [
      "Preprocessed and analyzed 10,000+ customer reviews and social posts using Python and NLP techniques, enabling structured sentiment modeling",
      "Built and compared sentiment classification models using TF-IDF, Word2Vec, SVM, and Naive Bayes, improving baseline model accuracy by ~12%",
      "Evaluated model outputs and sentiment distributions to derive marketing insights on brand perception and customer sentiment trends",
    ],
  },
  {
    role: "AI Engineer Intern",
    org: "Smartknower",
    period: "Jun 2022 – Jul 2022",
    points: [
      "Implemented computer vision preprocessing pipelines using OpenCV for gesture and handwritten digit (0–9) recognition, improving input image quality and consistency",
      "Trained and evaluated CNN-based classifiers using TensorFlow and Keras on labeled image datasets, achieving ~90% classification accuracy",
      "Integrated trained models into a real-time prediction demo, enabling sub-second inference and instant visual feedback during live testing",
    ],
  },
];

/* ================= SKILLS ================= */

const skillsGrouped = [
  {
    category: "Languages",
    items: [
      "Python",
      "R",
      "C++",
      "Java",
      "JavaScript",
      "SQL",
      "Bash / Shell Scripting",
    ],
  },
  {
    category: "Data Science & Machine Learning",
    items: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    category: "Distributed Data Processing",
    items: [
      "Apache Spark",
      "PySpark",
    ],
  },
  {
    category: "Data Platforms & Visualization",
    items: [
      "BigQuery",
      "BigQuery ML",
      "Snowflake",
      "Looker",
      "Tableau",
      "Power BI",
      "Streamlit",
      "Plotly",
    ],
  },
  {
    category: "Systems & MLOps",
    items: [
      "Docker",
      "Kubernetes",
      "Apache Airflow",
      "GitHub Actions",
      "FastAPI",
    ],
  },
  {
    category: "Generative AI & NLP",
    items: [
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Agentic AI",
      "LangGraph",
      "Qdrant",
      "Vector Databases",
      "Healthcare NLP",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      "Google Cloud Platform (GCP)",
      "Cloud Run",
      "Vertex AI",
      "AWS EC2",
      "AWS S3",
      "AWS CloudWatch",
      "AWS SageMaker",
    ],
  },
  {
    category: "Productivity Tools",
    items: [
      "Microsoft Word",
      "Excel",
      "PowerPoint",
    ],
  },
];

/* ================= PROJECTS ================= */

const dataportfolio = [
  {
    title: "Breast Cancer Risk Modelling & Clinical Decision Support",
    summary:
      "Machine learning models for benign vs malignant tumor prediction with risk stratification and interpretability for clinical decision support.",
    date: "Jan 2026 – Present",
    img: require("./assets/images/projects/breast_cancer.jpg"),
    link: "#", // add repo later if public
  },
  {
    title: "Automated Due Diligence & Market Intelligence Agent",
    summary:
      "Multi-agent RAG GenAI system to retrieve, analyze, and synthesize evidence-based insights from SEC filings, news, and Wikipedia.",
    date: "Sep 2025 – Dec 2025",
    img: require("./assets/images/projects/due-diligence.png"),
    link: "https://github.com/thanya0802/Automated-Due-Diligence-Market-Intelligence-Agent-MLOps",
  },
  {
    title: "LLM-Assisted Named Entity Recognition for Job Description Intelligence",
    summary:
      "BiLSTM-CRF and LLM-assisted pipeline for extracting structured entities from large-scale job postings.",
    date: "Jan 2025 – Apr 2025",
    img: require("./assets/images/projects/ner.png"),
    link: "https://github.com/thanya0802/Named-Entity-Recognition-on-LinkedIn-Job-Postings",
  },
  {
    title: "Cybersecurity Threat Detection in Telesurgery Systems",
    summary:
      "Machine learning pipelines for threat detection, anomaly prediction, and SHAP-based interpretability in telesurgery systems.",
    date: "Jan 2025 – Apr 2025",
    img: require("./assets/images/projects/cybersecurity.png"),
    link: "https://github.com/thanya0802/Cybersecurity-Threat-Detection-in-Telesurgery-Systems",
  },
  {
    title: "Credit Risk Modelling for Peer-to-Peer Lending",
    summary:
      "Full-stack P2P lending system with ML-based interest rate prediction and default risk classification.",
    date: "Sep 2024 – Dec 2024",
    img: require("./assets/images/projects/p2p.jpeg"),
    link: "https://github.com/thanya0802/Credit-Risk-Modelling-for-Peer-to-Peer-Money-Lending",
  },
];


/* ================= CONTACT ================= */

const contactConfig = {
  YOUR_EMAIL: "mysoresanthosh.th@northeastern.edu",
  YOUR_FONE: "(857) 339-8544",
  description:
    "I'm always open to discussing research collaborations, data science opportunities, or impactful AI projects. Feel free to reach out.",
  WEB3FORMS_KEY: "c0dd2f65-96e7-4854-b5f8-cc262e5db2b4",
};

/* ================= SOCIAL ================= */

const socialprofils = {
  github: "https://github.com/thanya0802",
  linkedin: "https://www.linkedin.com/in/thanyamysoresanthosh/",
};

export {
  logotext,
  meta,
  introdata,
  dataabout,
  researchFocus,
  experience,
  skillsGrouped,
  dataportfolio,
  contactConfig,
  socialprofils,
};
