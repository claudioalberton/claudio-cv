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
        "Meetings Hub: Created a centralized hub with automation of all demos and updates of the entire company in one place with one source of truth",
        "Device Lifecycle & Asset Management: Implemented scalable logistics and resale strategy for device distribution",
        "Cost & Subscription Optimization: Conducted software audits and refined licensing strategy",
        "IT Support & Employee Experience: Built Jira-based support model and standardized onboarding/offboarding",
        "Internal IT Management System: Designed centralized platform for devices, subscriptions, and lifecycle management",
        "Automation & Governance: Created Slack-to-Jira workflows and automated renewal alerts",
        "AI Integration: Utilize AI tools in daily work routine for programming, code generation, planning, and automation",
        "Musicalia: Developed fully functional music guessing game with multiplayer mode and 3 game types using 8 AIs (https://music-guess-game-mu.vercel.app/)",
        "Laptop Logistics Solution: Created innovative solution to resolve company laptop logistics challenges"
      ]
    },
    {
      company: "Truck Center Automotive Equipments",
      role: "Technology Development Manager (Acting Board Member, 2023–2025)",
      location: "Araucária, Brazil",
      period: "Dec 2019 - Present",
      duration: "5 years 11 months",
      technologies: [".NET C#", "Visual Studio", "Full Stack", "AForge", "OpenCV", "OCR", "Pascal Delphi", "Scrum"],
      responsibilities: [
        "Acting Board Member (2023–2025): Represented company leadership during executive transition, overseeing R&D and manufacturing strategy",
        "Directed development of patented 3D alignment systems adopted nationwide across Latin America",
        "Modernized ERP architecture and cloud infrastructure (AWS, SQL Server, .NET)",
        "Full Stack Developer and Architect of 3D Aligner Software and Geometria Software, used in world's most advanced laser alignment systems",
        "Structured development department with project management and planning to streamline innovation and solutions to the automotive market",
        "AI Integration: Utilize AI tools in daily work routine for programming assistance, code generation, planning, and development optimization",
        "Implemented and managed tax incentives ('Lei do Bem' and 'Ex-tarifário'), successfully qualifying projects for government incentives with significant annual tax reductions",
        "Established partnerships with solution providers and developed ecosystem of integrated automotive equipment solutions"
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
        "Responsible for the operation of the company's IT infrastructure and management software (CRM, ERP), as well as for technological innovations and the management of department staff",
        "Development of custom control software for industrial management",
        "Participation in designing sales incentive campaigns and merchandising materials",
        "Management and creation of online advertising campaigns using the Google Adwords tool to boost web results"
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
        "DBA responsible for the database",
        "Responsible for deploying the company's first ERP system (Octopus), which covered all departments",
        "Migrated the databases from the two previous systems to the SQL Server database",
        "Developed new ERP modules using the Pascal Delphi language and SQL"
      ]
    },
    {
      company: "Esense Sistemas",
      role: "Software Developer",
      location: "Curitiba, Brazil",
      period: "Jan 2006 - Jun 2006",
      duration: "6 months",
      responsibilities: [
        "Worked as a software developer in Java and served as an Oracle DBA for the Compiere ERP system",
        "Gained experience in developing new system functionalities, creating queries, views, and procedures, as well as in managing the database"
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
