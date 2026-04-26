export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  duration?: string;
  technologies?: string[];
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Patent {
  name: string;
  description?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  summary: string;
  keyAchievements: string[];
  experience: Experience[];
  education: Education[];
  coreCompetencies: string[];
  technicalExpertise: string[];
  languages: Language[];
  patents: Patent[];
}

export const resumeData: ResumeData = {
  name: "Claudio Alberton Batista",
  title: "Technology Development Manager | Senior IT Operations Engineer | Software Architect",
  location: "Araucária, Paraná, Brazil",
  email: "claudioalberton11@gmail.com",
  linkedin: "www.linkedin.com/in/claudio-alberton-batista-366891120",
  summary: "Technology Development Manager and Software Architect with 19+ years leading innovation across automotive manufacturing and gaming industries. Designed patented 3D alignment systems deployed across Latin America, and currently modernizing global IT infrastructure and automation for a Canadian game studio. Architected world-class software including the world's most advanced laser alignment systems and Latin America's first AI-powered 3D aligner. Specializes in full-stack development (.NET, SQL Server), cloud solutions (AWS), AI-powered workflows, and building scalable systems that drive measurable productivity gains. Results include multiple patents and enterprise-level automation solutions for major brands.",
  keyAchievements: [
    "Aligner Digi 4: World's most advanced laser aligner for light and heavy vehicles, detecting laser beams at distances exceeding 20 meters",
    "Aligner Digi 5: New version of the world's most advanced aligner with more robust software and cloud services integration",
    "Aligner 3D Flash: First three-dimensional aligner in Latin America for light vehicles",
    "Aligner 3D Flash II: AI-powered aligner with integrated camera for vehicle plate detection",
    "TcDataCloud: AWS-based automated solution for real-time vehicle database updates",
    "Dynamic Software Block: Windows service with AWS management portal for proactive application control (Dynamic Blocking; Integrated Management Portal; Offline Self-Locking Mechanism)",
    "Randon Automation: Developed production line automation software for Randon, integrating their factory systems with our software and equipment, significantly increasing factory productivity"
  ],
  experience: [
    {
      company: "Uken Games",
      role: "Senior IT Operations Engineer",
      location: "Toronto, Canada",
      period: "April 2025 - Present",
      responsibilities: [
        "Internal Management Platform: Designed and launched a centralized system to control device lifecycles, subscriptions, and approvals",
        "Workflow Integration: Unified operations across Slack, BambooHR, and internal systems; engineered Slack-to-Jira workflows with full audit logs",
        "AI & Scalability: Architected AI workflows and proprietary tools to automate playable ad production, delivering dozens of interactive creatives while drastically reducing overhead",
        "Service Management: Built a Jira-based support model with streamlined prioritization and automated workflows",
        "Lifecycle Governance: Standardized onboarding/offboarding documentation and established foundations for zero-touch deployment",
        "Process Reliability: Increased response reliability through structured automation and proactive renewal dashboards",
        "Device Logistics: Implemented scalable distribution and secure return logistics; introduced a resale strategy for post-upgrade equipment",
        "SaaS Management: Conducted software audits and refined licensing strategies to optimize costs and strengthen access governance",
        "Data Traceability: Improved asset accuracy through a comprehensive audit of Hexnode and BambooHR records",
        "Musicalia: Developed fully functional music guessing game with multiplayer mode and 3 game types using 8 AIs (https://music-guess-game-mu.vercel.app/)"
      ]
    },
    {
      company: "Truck Center Automotive Equipments",
      role: "Technology Development Manager",
      location: "Araucária, Brazil",
      period: "Dec 2019 - Present",
      duration: "5 years 11 months",
      technologies: [".NET C#", "Visual Studio", "Full Stack", "AForge", "OpenCV", "OCR", "Pascal Delphi", "Scrum"],
      responsibilities: [
        "Product Ecosystem: Lead Architect for the 3D Aligner and Geometria software suites, overseeing full-stack development in .NET C# and Delphi",
        "Computer Vision: Engineered advanced image processing pipelines using OpenCV and AForge, integrating OCR detection for automated data capture",
        "Systems Design: Responsible for the end-to-end architecture and planning of new-to-market automotive diagnostic tools",
        "Agile Leadership: Directed software development lifecycles (SDLC) using Scrum methodologies, managing project timelines, and cross-functional teams",
        "Strategic Partnerships: Established and managed key alliances with global solution providers to enhance product capabilities",
        "Business Expansion: Led the development of innovative software for new product lines, ensuring market competitiveness and continuous improvement of legacy systems",
        "Tax Incentives (Lei do Bem): Successfully implemented and managed 'Lei do Bem' and 'Ex-tarifário' protocols, securing government incentives by qualifying R&D projects",
        "Compliance & ROI: Navigated complex regulatory landscapes to ensure product development was both tax-efficient and compliant with national standards"
      ]
    },
    {
      company: "Truck Center",
      role: "IT Manager",
      location: "Araucária, Brazil",
      period: "Jan 2011 - Dec 2019",
      duration: "9 years",
      technologies: ["SQL Server", "Delphi Pascal", "Active Directory", "ERP Korp", ".NET C#", "Teamwork"],
      responsibilities: [
        "Ecosystem Management: Led IT infrastructure operations and the administration of vital systems, including Active Directory and Korp ERP",
        "Industrial Software Development: Engineered custom software for industrial control and management using .NET C#, Delphi, and SQL Server",
        "Team Leadership: Managed the IT department staff, prioritizing operational efficiency and the implementation of technological innovations",
        "Performance Marketing: Orchestrated online advertising campaigns via Google Ads, focusing on conversion optimization and web visibility results",
        "Sales Strategy: Collaborated on the design of sales incentive campaigns and the development of high-impact merchandising materials",
        "Digital Transformation: Bridged the gap between technology and commercial goals, ensuring CRM tools and automation directly supported revenue objectives"
      ]
    },
    {
      company: "Truck Center",
      role: "System Administrator",
      location: "Araucária, Brazil",
      period: "Feb 2007 - Jan 2011",
      duration: "4 years",
      technologies: ["Pascal Delphi", "SQL Server", "Oracle"],
      responsibilities: [
        "ERP Implementation & Data Migration: Orchestrated the digital transformation of the company’s operations by leading the deployment of its first unified ERP system, integrating all departments into a single data ecosystem",
        "Full-Scale Deployment: Led the end-to-end implementation of the Octopus ERP, successfully onboarding all business units and standardizing cross-departmental workflows",
        "Custom Module Engineering: Developed and optimized specialized ERP modules using Pascal Delphi and SQL to meet specific business logic requirements",
        "Strategic Database Migration: Managed the complex migration of legacy data from multiple disparate systems into a centralized SQL Server and Oracle environment, ensuring data integrity and zero downtime"
      ]
    },
    {
      company: "Esense Sistemas",
      role: "Software Developer",
      location: "Curitiba, Brazil",
      period: "Jan 2006 - Jun 2006",
      duration: "6 months",
      responsibilities: [
        "System Architecture: Developed and implemented new functionalities for the Compiere ERP using Java, ensuring alignment with business requirements and scalability",
        "Backend Logic: Engineered complex business rules and system enhancements to streamline operational workflows",
        "Oracle Management: Served as the Oracle DBA, responsible for the health, security, and maintenance of the ERP’s database environment",
        "Advanced Data Engineering: Designed and optimized sophisticated queries, views, and stored procedures to improve system performance and data retrieval",
        "Data Integrity: Managed database schemas and performance tuning to support high-availability operations"
      ]
    }
  ],
  education: [
    {
      degree: "MBA in Software Engineering",
      institution: "Universidade Tecnológica Federal do Paraná",
      period: "Aug 2021 - Oct 2022"
    },
    {
      degree: "Information Systems",
      institution: "Centro Universitário UniOpet",
      period: "Mar 2005 - Mar 2008"
    },
    {
      degree: "Post-Graduate in Databases",
      institution: "Universidade Positivo",
      period: "All coursework completed; final project pending."
    }
  ],
  coreCompetencies: [
    "IT Operations & Infrastructure Management",
    "Team Leadership & Vendor Management",
    "Systems Automation & Cloud Governance (AWS)",
    "AI-Powered Planning & Process Optimization",
    "Device Lifecycle Management",
    "Software Architecture & ERP Modernization",
    "AI-Assisted Development & Strategic Automation",
    "R&D Innovation",
    "Executive Technology Strategy"
  ],
  technicalExpertise: [
    "Languages & Frameworks: C#, .NET, Next.js, TypeScript, Tailwind CSS, SQL Server",
    "Cloud & DevOps: AWS, Google Cloud, Docker, CI/CD, Infrastructure Automation",
    "Computer Vision & AI Tools: OpenCV, AForge, OCR Systems, Image Processing",
    "Databases: SQL Server, Oracle",
    "Other Tools: Active Directory, Visual Studio, Pascal Delphi, Microsoft Office Suite, Google Workspace",
    "Project Management Tools: Jira, Teamwork, Scrum/Agile"
  ],
  languages: [
    { name: "English", level: "Full Professional" },
    { name: "Spanish", level: "Professional Working" },
    { name: "Portuguese", level: "Native" }
  ],
  patents: [
    {
      name: "3D FLASH SOFTWARE",
      description: "First three-dimensional vehicle alignment software in Latin America"
    },
    {
      name: "GEOMETRIA 3",
      description: "Advanced vehicle geometry analysis software"
    },
    {
      name: "Alinhador DIGI 4",
      description: "World's most advanced laser aligner with 20+ meter range capability"
    }
  ]
};
