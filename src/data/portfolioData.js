export const portfolioData = {
  personal: {
    name: "MOHITH B",
    kanjiName: "智 慧 開 発",
    role: "Computer Science & Engineering Student",
    subRole: "Full-Stack Developer & AI/ML Specialist",
    tagline: "Building frontier full-stack platforms, computer vision applications, and AI-powered systems.",
    location: "Bengaluru, Karnataka, India",
    phone: "+91 9483242797",
    email: "mohithb70@email.com",
    linkedin: "https://linkedin.com/in/mohith-b-481a82378",
    github: "https://github.com/mohithb7atria-ai",
    summary: "Computer Science & Engineering student interested in full-stack development, AI/ML and building practical technology solutions. Experienced in web development, hackathons and collaborative technical projects. Highly proficient in Vibe Coding and AI-assisted development, with experience using AI coding tools to rapidly build, modify, debug, integrate and deploy applications across a wide range of modern technologies. Interested in contributing to developer communities through projects, technical initiatives and collaborative learning."
  },

  stats: [
    { value: "8.83", label: "Academic CGPA", sub: "Atria Institute of Tech" },
    { value: "Top 10", label: "SIH 2026 Selection", sub: "Hardware & Software Tracks" },
    { value: "1st Place", label: "Unimerge Hackathon", sub: "Most Impactful Project" },
    { value: "7+", label: "Certifications", sub: "Google Cloud, IBM, Infosys" }
  ],

  chapterChips: [
    { num: "01", title: "Systems", desc: "Full-stack web applications, REST APIs, and modern databases." },
    { num: "02", title: "Projects", desc: "ACE PREP, Food Genie, Human Collapse Detection & AI tools." },
    { num: "03", title: "Hackathons", desc: "Smart India Hackathon 2026 Top 10 & Unimerge Winner." },
    { num: "04", title: "Connect", desc: "Let’s discuss full-stack opportunities, AI projects, or ideas." }
  ],

  skills: {
    vibeCoding: {
      category: "Vibe Coding & AI Workflows",
      kanji: "人工知能",
      items: [
        "Advanced AI-Assisted Development",
        "Rapid Application Building",
        "AI-Powered Coding Workflows",
        "Code Generation & Prototyping",
        "Automated Debugging & Refactoring",
        "API Integration & Database Wiring",
        "Deployment Across Modern Stacks"
      ]
    },
    webDev: {
      category: "Full-Stack Web Development",
      kanji: "全階層開発",
      items: [
        "React.js",
        "Node.js",
        "Express.js",
        "JavaScript (ES6+)",
        "HTML5 & CSS3",
        "Stripe Payment Processing",
        "RESTful API Design"
      ]
    },
    aiMl: {
      category: "AI/ML & Computer Vision",
      kanji: "視覚認識",
      items: [
        "OpenCV",
        "MediaPipe Pose & Tracking",
        "Machine Learning Fundamentals",
        "Generative AI & LLM Workflows",
        "Python AI Ecosystem"
      ]
    },
    tools: {
      category: "Databases, Cloud & Tools",
      kanji: "基盤技術",
      items: [
        "MongoDB",
        "Supabase",
        "Git & GitHub",
        "VS Code",
        "Google Cloud Platform",
        "Google AppSheet"
      ]
    }
  },

  projects: [
    {
      id: "ace-prep",
      num: "01",
      title: "ACE PREP",
      subtitle: "Full-Stack JEE & NEET Preparation Platform",
      category: "Full-Stack Web App",
      kanji: "学習基盤",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Auth", "Tailwind CSS"],
      description: "Developed a full-stack learning platform engineered specifically for competitive examination prep (JEE & NEET). Features student authentication, interactive test analytics, custom dashboards, and structured learning modules.",
      highlights: [
        "Architected responsive student & admin dashboards for tracking exam prep metrics.",
        "Engineered secure user authentication and persistent state management.",
        "Designed learning-focused features with clean component modularity."
      ],
      github: "https://github.com/mohithb7atria-ai",
      demoUrl: "https://github.com/mohithb7atria-ai",
      badge: "Featured Full-Stack"
    },
    {
      id: "collapse-detection",
      num: "02",
      title: "Real-Time Human Collapse Detection System",
      subtitle: "Webcam Computer-Vision Fall Monitoring",
      category: "Computer Vision & AI",
      kanji: "安全監視",
      tech: ["Python", "OpenCV", "MediaPipe Pose", "Machine Learning"],
      description: "Developed a real-time computer-vision system capable of detecting human collapse or fall events instantly using live webcam feeds. Utilizes MediaPipe Pose landmark tracking and threshold analysis for high-confidence emergency alerts.",
      highlights: [
        "Tracks key body landmark coordinates continuously in real-time.",
        "Triggers rapid posture state changes to flag fall events immediately.",
        "Built using lightweight Python libraries for low-latency edge performance."
      ],
      github: "https://github.com/mohithb7atria-ai",
      demoUrl: "https://github.com/mohithb7atria-ai",
      badge: "AI & Computer Vision"
    },
    {
      id: "food-genie",
      num: "03",
      title: "Food Genie",
      subtitle: "AI-Powered Food Ordering System",
      category: "Full-Stack E-Commerce",
      kanji: "自動注文",
      tech: ["React.js", "Node.js", "Express.js", "Stripe API", "JavaScript", "CSS3"],
      description: "Primary internship project developed at WebStack Academy. Features AI-powered food browsing, interactive cart management, real-time order tracking, and secure online payment processing powered by Stripe.",
      highlights: [
        "Integrated Stripe checkout workflow for secure online payment processing.",
        "Built responsive cart management and dynamic food browsing interfaces.",
        "Engineered backend REST API services with Node.js and Express.js."
      ],
      github: "https://github.com/mohithb7atria-ai",
      demoUrl: "https://github.com/mohithb7atria-ai",
      badge: "WebStack Academy Project"
    },
    {
      id: "smart-route-buddy",
      num: "04",
      title: "Smart Route Buddy",
      subtitle: "AI-Assisted Smart Transportation & Route Guidance",
      category: "AI & Mobility",
      kanji: "経路誘導",
      tech: ["Python", "AI Algorithms", "Smart Mobility", "Geolocation APIs"],
      description: "Conceptualized and developed an AI-assisted smart transportation system designed for intelligent route awareness, real-time navigation support, and automated travel recommendations.",
      highlights: [
        "Intelligent route optimization based on live trip parameters.",
        "Focus on safety awareness and contextual travel assistance.",
        "Designed modular AI algorithms for rapid route computation."
      ],
      github: "https://github.com/mohithb7atria-ai",
      demoUrl: "https://github.com/mohithb7atria-ai",
      badge: "Smart Mobility Concept"
    },
    {
      id: "smart-volunteer-system",
      num: "05",
      title: "Smart Volunteer System",
      subtitle: "Community Technology & Coordination Platform",
      category: "Web Application",
      kanji: "地域貢献",
      tech: ["React.js", "Node.js", "Community Tech", "Database Management"],
      description: "Developed a platform concept for volunteer coordination and community participation. Focuses on managing volunteer profiles, organizing activities, scheduling events, and tracking community impact metrics.",
      highlights: [
        "Streamlined event registration and volunteer task allocation.",
        "Created an intuitive interface for community event organizers.",
        "Emphasized modular architecture for easy community scaling."
      ],
      github: "https://github.com/mohithb7atria-ai",
      demoUrl: "https://github.com/mohithb7atria-ai",
      badge: "Community Tech"
    }
  ],

  sihHackathon: {
    year: "2026",
    event: "SMART INDIA HACKATHON 2026",
    kanji: "全国大会",
    tracks: [
      {
        track: "Top 10 – Hardware Track",
        code: "SIH26039",
        title: "AI-Powered Underground Mine Safety, Monitoring and Rescue System",
        description: "Worked on a comprehensive technology solution focused on underground mine safety, hazard monitoring, environmental gas sensing, and emergency rescue decision support."
      },
      {
        track: "Top 10 – Software Track",
        code: "SIH26097",
        title: "AI-Driven Voice Assistant for Livelihood Mapping & NSQF-Aligned Skilling Recommendations",
        description: "Worked on a voice-based solution concept for livelihood mapping, multi-lingual voice interaction, and personalized NSQF-aligned skill-development recommendations."
      }
    ]
  },

  experience: [
    {
      role: "Web Development Intern",
      company: "WebStack Academy",
      location: "Bengaluru, India",
      period: "June 2026 – July 2026",
      kanji: "就業体験",
      points: [
        "Developed 'Food Genie,' an AI-powered food ordering system as the primary internship project.",
        "Built responsive and interactive web interfaces using React.js, JavaScript, HTML, and CSS.",
        "Developed backend API services using Node.js and Express.js.",
        "Implemented food browsing, cart management, and online ordering functionality.",
        "Integrated Stripe for secure online payment processing.",
        "Used Git and GitHub for version control and collaborative project development."
      ]
    }
  ],

  achievements: [
    {
      title: "Winner – Most Impactful Project",
      org: "Unimerge Hackathon",
      desc: "Awarded 1st place for designing and engineering the most impactful technological solution."
    },
    {
      title: "Top 10 SIH 2026 Selection (Hardware Track)",
      org: "Atria Institute of Technology Internal Selection",
      desc: "Selected in Top 10 for AI-Powered Underground Mine Safety System."
    },
    {
      title: "Top 10 SIH 2026 Selection (Software Track)",
      org: "Atria Institute of Technology Internal Selection",
      desc: "Selected in Top 10 for AI-Driven Voice Assistant for Skilling Recommendations."
    },
    {
      title: "Atria AI Club Leadership",
      org: "Atria AI Club",
      desc: "Active Designer & Technical Member guiding club initiatives and technical events."
    }
  ],

  principles: [
    {
      num: "01",
      title: "Start with the Mechanism",
      kanji: "構造理解",
      desc: "Building AI vision scripts and full-stack engines from first principles builds true intuition for how tools work under the hood."
    },
    {
      num: "02",
      title: "Make Systems Inspectable",
      kanji: "可視化",
      desc: "Real-time MediaPipe pose landmarks, clear API responses, and clean state logs turn invisible processes into usable interfaces."
    },
    {
      num: "03",
      title: "Accelerate with Vibe Coding",
      kanji: "高速開発",
      desc: "Leveraging cutting-edge AI coding tools to rapidly build, test, debug, and deploy applications across modern web frameworks."
    },
    {
      num: "04",
      title: "Build Beyond the Interface",
      kanji: "実用基盤",
      desc: "A reliable product connects intuitive frontends with secure Stripe payments, persistent MongoDB storage, and robust Node backends."
    },
    {
      num: "05",
      title: "Keep the Boundaries Honest",
      kanji: "誠実設計",
      desc: "Transparently document system constraints, optimize low-latency algorithms, and focus on clean maintainable code."
    }
  ],

  education: [
    {
      degree: "B.E. – Computer Science & Engineering",
      institution: "Atria Institute of Technology",
      location: "Bengaluru",
      period: "2025 – Present",
      grade: "CGPA: 8.83",
      kanji: "大学教育",
      highlight: "Specializing in Full-Stack Web Development, AI/ML, and Computer Vision."
    },
    {
      degree: "Higher Secondary Education",
      institution: "Presidency PU College",
      location: "Bengaluru",
      period: "2023",
      grade: "Completed",
      kanji: "高等教育",
      highlight: "Strong foundation in Mathematics, Physics, and Computer Science."
    }
  ],

  certifications: [
    { name: "App Building with AppSheet", issuer: "Google Cloud Skills Boost", year: "2025" },
    { name: "Develop with Apps Script and AppSheet", issuer: "Google Developers Group", year: "2025" },
    { name: "Building a Website on Google Cloud", issuer: "Google Cloud Skills Boost", year: "2025" },
    { name: "Get Started with API Gateway", issuer: "Google Cloud Skills Boost", year: "2025" },
    { name: "Tata – GenAI Powered Data Analytics Job Simulation", issuer: "Forage", year: "2026" },
    { name: "Python Certification", issuer: "Infosys Springboard", year: "2026" },
    { name: "Artificial Intelligence Fundamentals", issuer: "IBM SkillsBuild", year: "2026" }
  ],

  languages: ["English", "Kannada", "Hindi", "Telugu"]
};
