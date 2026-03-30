export interface Apprenticeship {
  id: string;
  title: string;
  company: string;
  industry: string;
  salary?: string;
  level?: "6" | "7";
  university?: string;
  duration?: string;
  description?: string;
  location?: string;
  degree_partner?: string;
  requirements?: string;
  deadline?: string;
  company_url?: string;
  apply_url?: string;
  application_status: "open" | "closing_soon" | "unknown" | "reference_only";
  closing_date?: string;
  
  // New details page fields
  what_you_will_do?: string;
  what_you_will_learn?: string;
  benefits?: string;
  application_process?: string;
  who_we_are_looking_for?: string;
  uni_description?: string;
  degree_name?: string;
  company_description?: string;

}

export interface Application {
  id: string;
  apprenticeship_id: string;
  status: ApplicationStatus;
  notes: string;
  status_history: StatusHistoryEntry[];
  created_at: string;
  updated_at: string;
}

export type ApplicationStatus =
  | "Interested"
  | "Applied"
  | "In Review"
  | "Interview"
  | "Offer"
  | "Rejected"
  | "Withdrawn";

export interface StatusHistoryEntry {
  status: ApplicationStatus;
  timestamp: string;
}

export interface Resource {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  is_free: boolean;
  price?: number;
  bundle_included: boolean;
  free_items: string[];
  premium_items: string[];
  extra_resources_count?: number;
  bgColor: string;
  iconBgColor: string;
}

// Global flags
export const GLOBAL_FLAGS = {
  open_count: 8,
  closing_soon_count: 2,
};

export const MOCK_APPRENTICESHIPS: Apprenticeship[] = [
  {
    id: "1",
    title: "Technology Degree Apprenticeship",
    company: "Dyson",
    industry: "Engineering",
    salary: "£22,000",
    level: "6",
    university: "University of Warwick",
    duration: "4 years",
    description: "Join Dyson's award-winning degree apprenticeship programme. You'll work on real engineering challenges while earning a BEng degree, with rotations across our technology teams.",
    location: "Malmesbury, Wiltshire",
    requirements: "A-levels in Maths and Physics (or equivalent). Passion for engineering and problem-solving.",
    deadline: "31 March 2026",
    company_url: "https://dyson.com",
    apply_url: "https://careers.dyson.com",
    application_status: "open",
    
    // Detailed sections
    company_description: "Dyson is a global technology company that transforms every category it enters with radical and iconic reinventions that work, perform and look very different.",
    what_you_will_do: "<ul><li>Work alongside world-class engineers on real projects</li><li>Contribute to the design and development of future Dyson technology</li><li>Rotate through different engineering disciplines to find your specialism</li><li>Present your work to senior leadership and technical experts</li></ul>",
    what_you_will_learn: "Gain a full BEng (Hons) in Engineering, specializing in Mechanical, Electronics, or Software Engineering. You'll master advanced CAD, rapid prototyping, and sophisticated data analysis.",
    benefits: "<ul><li>Competitive salary with annual reviews</li><li>Full funding for your degree tuition fees</li><li>Generous holiday entitlement</li><li>Subsidized cafes and free gym membership</li><li>Relocation support if needed</li></ul>",
    application_process: "<ol><li>Online application with CV and motivational questions</li><li>Online assessments (Games-based and Situational Judgement)</li><li>Technical interview with Dyson engineers</li><li>Assessment centre at the Dyson campus</li></ol>",
    who_we_are_looking_for: "We seek restless minds—people who are never satisfied with the status quo and are determined to solve the world's most difficult problems through engineering.",
    uni_description: "The Dyson Institute of Engineering and Technology is a higher education provider located on Dyson's research campus in Wiltshire, partnership with the University of Warwick.",
    degree_name: "BEng (Hons) Engineering",
  },
  {
    id: "2",
    title: "Digital & Technology Solutions Apprenticeship",
    company: "Goldman Sachs",
    industry: "Finance",
    salary: "£28,000",
    level: "6",
    university: "Queen Mary University of London",
    duration: "4 years",
    description: "Build a career in technology at one of the world's leading investment banks. You'll gain a BSc in Digital & Technology Solutions while working on critical financial systems.",
    location: "London",
    requirements: "A-levels including Maths (A grade or above). Strong analytical and communication skills.",
    deadline: "15 March 2026",
    company_url: "https://goldmansachs.com",
    apply_url: "https://goldmansachs.com/careers",
    application_status: "closing_soon",
    closing_date: "2026-03-15",
  },
  {
    id: "3",
    title: "Chartered Manager Degree Apprenticeship",
    company: "Unilever",
    industry: "FMCG",
    salary: "£21,500",
    level: "6",
    university: "Manchester Metropolitan University",
    duration: "4 years",
    description: "Develop leadership skills while earning a BA (Hons) in Chartered Management. Rotate across Unilever's business functions including marketing, supply chain, and finance.",
    location: "Multiple UK locations",
    requirements: "112 UCAS points. Demonstrated leadership potential.",
    deadline: "28 February 2026",
    company_url: "https://unilever.com",
    apply_url: "https://careers.unilever.com",
    application_status: "closing_soon",
    closing_date: "2026-02-28",
  },
  {
    id: "4",
    title: "Software Engineering Apprenticeship",
    company: "BBC",
    industry: "Media",
    salary: "£20,000",
    level: "6",
    university: "University of Birmingham",
    duration: "3.5 years",
    description: "Join the BBC's technology team and help shape the future of media. Build software used by millions while earning a degree in Software Engineering.",
    location: "London / Salford",
    degree_partner: "University of Birmingham",
    requirements: "A-levels including a STEM subject. Genuine interest in technology and media.",
    deadline: "30 April 2026",
    apply_url: "https://bbc.co.uk/careers",
    application_status: "open",
  },
  {
    id: "5",
    title: "Accounting Degree Apprenticeship",
    company: "PwC",
    industry: "Professional Services",
    salary: "£24,000",
    level: "7",
    university: "University of Leeds",
    duration: "5 years",
    description: "Train as a chartered accountant while earning a degree. Work with some of the UK's largest companies and gain ACA qualification alongside your BSc.",
    location: "Birmingham / Leeds / Manchester",
    requirements: "128 UCAS points including Maths.",
    deadline: "1 May 2026",
    company_url: "https://pwc.co.uk",
    apply_url: "https://pwc.co.uk/careers",
    application_status: "open",
  },
  {
    id: "6",
    title: "Data Science Degree Apprenticeship",
    company: "GSK",
    industry: "Pharmaceutical",
    salary: "£23,500",
    level: "7",
    university: "Aston University",
    duration: "4 years",
    description: "Apply data science to real pharmaceutical challenges. Analyse clinical trial data, build predictive models, and earn a BSc in Data Science.",
    location: "Stevenage / London",
    requirements: "A-levels in Maths and a science subject.",
    deadline: "20 April 2026",
    company_url: "https://gsk.com",
    apply_url: "https://gsk.com/careers",
    application_status: "open",
  },
  {
    id: "7",
    title: "Cyber Security Apprenticeship",
    company: "GCHQ",
    industry: "Government",
    salary: "£21,000",
    level: "6",
    duration: "3 years",
    description: "Protect the UK's national security while developing cutting-edge cyber skills. Work on real intelligence operations from day one.",
    location: "Cheltenham",
    requirements: "A-levels or equivalent. Must be a British citizen. SC clearance required.",
    deadline: "15 March 2026",
    apply_url: "https://gchq.gov.uk/careers",
    application_status: "open",
  },
  {
    id: "8",
    title: "Engineering Degree Apprenticeship",
    company: "Rolls-Royce",
    industry: "Aerospace",
    salary: "£19,500",
    level: "7",
    university: "University of Derby",
    duration: "5 years",
    description: "Design and build power systems that shape the future of aviation, energy, and defence. Earn a BEng in Mechanical Engineering.",
    location: "Derby",
    requirements: "A-levels in Maths and Physics (B grades or above).",
    deadline: "31 March 2026",
    company_url: "https://rolls-royce.com",
    apply_url: "https://rolls-royce.com/careers",
    application_status: "open",
  },
  {
    id: "9",
    title: "Business Management Apprenticeship",
    company: "Accenture",
    industry: "Consulting",
    salary: "£22,000",
    level: "6",
    university: "BPP University",
    duration: "3 years",
    description: "Help leading organisations solve complex challenges. Gain real consulting experience while studying towards a BA in Business Management.",
    location: "London",
    application_status: "reference_only",
  },
  {
    id: "10",
    title: "Civil Engineering Apprenticeship",
    company: "Balfour Beatty",
    industry: "Construction",
    salary: "£18,000",
    university: "Loughborough University",
    duration: "5 years",
    description: "Build the UK's infrastructure—from railways to hospitals. Earn a BEng in Civil Engineering while working on major national projects.",
    location: "UK-wide",
    application_status: "reference_only",
  },
];

export const MOCK_APPLICATIONS: Application[] = [
  {
    id: "app-1",
    apprenticeship_id: "2",
    status: "Applied",
    notes: "Submitted online application. Waiting for response.",
    status_history: [
      { status: "Interested", timestamp: "2026-01-15T10:00:00Z" },
      { status: "Applied", timestamp: "2026-01-20T14:30:00Z" },
    ],
    created_at: "2026-01-15T10:00:00Z",
    updated_at: "2026-01-20T14:30:00Z",
  },
  {
    id: "app-2",
    apprenticeship_id: "4",
    status: "Interview",
    notes: "Phone interview scheduled for next week.",
    status_history: [
      { status: "Interested", timestamp: "2026-01-10T09:00:00Z" },
      { status: "Applied", timestamp: "2026-01-12T11:00:00Z" },
      { status: "In Review", timestamp: "2026-01-25T08:00:00Z" },
      { status: "Interview", timestamp: "2026-02-05T16:00:00Z" },
    ],
    created_at: "2026-01-10T09:00:00Z",
    updated_at: "2026-02-05T16:00:00Z",
  },
  {
    id: "app-3",
    apprenticeship_id: "1",
    status: "Interested",
    notes: "",
    status_history: [
      { status: "Interested", timestamp: "2026-02-20T12:00:00Z" },
    ],
    created_at: "2026-02-20T12:00:00Z",
    updated_at: "2026-02-20T12:00:00Z",
  },
];

export const MOCK_RESOURCES: Resource[] = [
  {
    id: "res-1",
    title: "CV & Application Shortlisting Pack",
    subtitle: "CV templates, evidence translation, and application form frameworks to help your experience come across clearly at shortlisting.",
    description: "CV templates, evidence translation, and application form frameworks.",
    icon: "FileText",
    is_free: false,
    price: 16.99,
    bundle_included: true,
    free_items: ["Foundational CV Template", "CV & Application Preview Guide"],
    premium_items: ["2 Competitive CV Templates", "Cover Sheet Template & Guide", "Evidence Translation Guide"],
    extra_resources_count: 2,
    bgColor: "#E8F3E8",
    iconBgColor: "#C8E6C9"
  },
  {
    id: "res-2",
    title: "Online Tests Mastery",
    subtitle: "Guides for every online assessment type used in competitive apprenticeship applications — from SJTs and psychometrics to gamified and immersive tests.",
    description: "Guides for every online assessment type.",
    icon: "Monitor",
    is_free: false,
    price: 17.99,
    bundle_included: true,
    free_items: ["Assessment Types Decoder"],
    premium_items: ["SJT & Work Scenarios Guide", "Numerical Reasoning Guide", "Verbal Reasoning Guide"],
    extra_resources_count: 3,
    bgColor: "#FFF3E0",
    iconBgColor: "#FFE0B2"
  },
  {
    id: "res-3",
    title: "Assessment Centre Playbook",
    subtitle: "Exercise-by-exercise preparation for group tasks, in-tray simulations, written assessments, and presentations at assessment centres.",
    description: "Exercise-by-exercise preparation for assessment centres.",
    icon: "Users",
    is_free: false,
    price: 19.99,
    bundle_included: true,
    free_items: ["What Actually Happens at an AC", "Group exercise format overview", "One worked example"],
    premium_items: ["Group Exercise Guide", "In-Tray / E-Tray Simulation Guide", "Written Assessment Guide"],
    extra_resources_count: 2,
    bgColor: "#E3F2FD",
    iconBgColor: "#BBDEFB"
  },
  {
    id: "res-4",
    title: "Interview Mastery",
    subtitle: "Techniques and question banks for every interview format.",
    description: "Interview preparation.",
    icon: "MessageSquare",
    is_free: false,
    price: 21.99,
    bundle_included: true,
    free_items: ["Interview Preparation Preview"],
    premium_items: ["Question & Model Answer Bank (100+)", "Recorded Video Interview Guide", "Live Interview Guide"],
    bgColor: "#F3E5F5",
    iconBgColor: "#E1BEE7"
  },
  {
    id: "res-5",
    title: "Networking & Insight Events Kit",
    subtitle: "Scripts, question banks, and preparation frameworks to help you make the most of employer events and insight days.",
    description: "Networking guide.",
    icon: "Calendar",
    is_free: false,
    price: 13.99,
    bundle_included: true,
    free_items: ["Networking Preview"],
    premium_items: ["Networking & Insight Events Guide (pitches, scripts, smart questions)"],
    bgColor: "#E0F2F1",
    iconBgColor: "#B2DFDB"
  },
  {
    id: "res-6",
    title: "Start Strong: Degree Apprenticeship Survival Guide",
    subtitle: "Workplace guidance, communication templates, and a structured plan for your first 90 days as a degree apprentice.",
    description: "Survival guide for the first 90 days.",
    icon: "Zap",
    is_free: false,
    price: 13.99,
    bundle_included: true,
    free_items: ["Start Strong Preview"],
    premium_items: ["Start Strong Guide (week 1, manager relationships, confidence)", "Professional Comms Templates"],
    bgColor: "#FCE4EC",
    iconBgColor: "#F8BBD0"
  },
];

export const BUNDLE_PRICE = 69.99;

export const STATUS_COLORS: Record<ApplicationStatus, string> = {
  Interested: "bg-status-interested",
  Applied: "bg-status-applied",
  "In Review": "bg-status-in-review",
  Interview: "bg-status-interview",
  Offer: "bg-status-offer",
  Rejected: "bg-status-rejected",
  Withdrawn: "bg-status-withdrawn",
};
