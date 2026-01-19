const logotext = "THANYA";
const meta = {
    title: "Thanya Mysore Santhosh",
    description: "I'm Thanya Mysore Santhosh, a Data Science Master's student at Northeastern University specializing in Machine Learning, NLP, and LLMs",
};

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
  export const dataabout = {
    title: "Academic & Professional Profile",
    aboutme:
      "I am a Master of Science student in Data Science at Northeastern University’s Khoury College of Computer Sciences, with an expected graduation in May 2026. I hold a strong foundation in Computer Science and specialize in Machine Learning, Deep Learning, Natural Language Processing, and Large Language Models. My experience spans academic research, teaching, and industry, including building scalable data pipelines, developing retrieval-augmented generation systems, and deploying production-grade machine learning models. My interests focus on designing robust, interpretable AI systems with real-world impact.",
  };


export const researchFocus = [
  "Machine Learning and Deep Learning systems for real-world deployment",
  "Large Language Models, NLP pipelines, and retrieval-augmented generation",
  "Anomaly detection, model interpretability, and AI reliability",
  "Scalable data engineering and ML infrastructure on cloud platforms",
];

export const experience = [
  {
    role: "Research Assistant",
    org: "Northeastern University",
    period: "Sep 2025 – Present",
  },
  {
    role: "Head Teaching Assistant",
    org: "Northeastern University — Intermediate Python for Data Science",
    period: "May 2025 – Present",
  },
  {
    role: "Data Science Intern",
    org: "66 Degrees",
    period: "Jul 2023 – Feb 2024",
  },
];

export const skillsGrouped = [
  {
    category: "Programming Languages",
    items: ["Python", "R", "Java", "C++", "JavaScript", "SQL", "Bash"],
  },
  {
    category: "Machine Learning & AI",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Large Language Models",
      "Anomaly Detection",
      "Model Interpretability (SHAP)",
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "FastAPI",
      "Streamlit",
      "LangGraph",
    ],
  },
  {
    category: "Data Engineering",
    items: [
      "Apache Airflow",
      "Google BigQuery",
      "Snowflake",
      "PostgreSQL",
      "Vector Databases (Qdrant)",
      "ETL Pipelines",
    ],
  },
  {
    category: "Cloud & MLOps",
    items: [
      "Google Cloud Platform (GCP)",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Jenkins",
    ],
  },
];
  
  const dataportfolio = [
    {
      title: "Automated Due Diligence & Market Intelligence Agent",
      summary:
        "Multi-agent RAG system using LangGraph to analyze SEC filings, news, and Wikipedia with CI/CD deployment.",
      img: require("./assets/images/projects/due-diligence.png"),
      link: "https://github.com/thanya0802/Automated-Due-Diligence-Market-Intelligence-Agent-MLOps",
    },
    {
      title: "LLM-Assisted NER for Job Description Intelligence",
      summary:
        "BiLSTM-CRF and LLM-assisted pipeline for structured entity extraction from job postings.",
      img: require("./assets/images/projects/ner.png"),
      link: "https://github.com/thanya0802/Named-Entity-Recognition-on-LinkedIn-Job-Postings",
    },
    {
        title: "Cybersecurity Threat Detection in Telesurgery Systems",
        summary:
          "Machine learning pipelines for anomaly detection and threat classification in telesurgery systems using ensemble models, with SHAP-based interpretability.",
        img: require("./assets/images/projects/cybersecurity.png"),
        link: "https://github.com/thanya0802/Cybersecurity-Threat-Detection-in-Telesurgery-Systems", // update if needed
      },
      {
        title: "Credit Risk Modeling for P2P Lending",
        summary:
          "Full-stack peer-to-peer lending platform with ML-based interest rate prediction and default risk classification.",
        img: require("./assets/images/projects/p2p.jpeg"),
        link: "https://github.com/thanya0802/Credit-Risk-Modelling-for-Peer-to-Peer-Money-Lending", // replace
      },
  ];

const contactConfig = {
    YOUR_EMAIL: "msthanya8@gmail.com",
    YOUR_FONE: "(857) 339-8544",
    description:
      "I'm always open to discussing new opportunities, research collaborations, or interesting data science projects. Feel free to reach out!",
    WEB3FORMS_KEY: "c0dd2f65-96e7-4854-b5f8-cc262e5db2b4"
  };
  

const socialprofils = {
    github: "https://github.com/thanya0802",
    linkedin: "https://www.linkedin.com/in/thanyamysoresanthosh/",
};
export {
    meta,
    dataportfolio,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};