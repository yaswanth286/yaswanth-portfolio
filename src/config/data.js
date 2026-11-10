
export const personal = {
  name: 'Yaswanth Yadlapalli',
  title: 'Full Stack Developer | AI/ML Enthusiast',
  location: 'India',
  email: 'yadlapalliyaswanth08@gmail.com',
  phone: '+91 9494678234',
  github: 'https://github.com/yaswanth286',
  githubUsername: 'yaswanth286',
  linkedin: 'https://www.linkedin.com/in/yaswanth22',
  intro:
    "Hi, I'm Yaswanth Yadlapalli, a Computer Science graduate passionate about building full-stack applications and intelligent software solutions. I work with Python, JavaScript, React, FastAPI, SQL databases and AI/ML technologies to develop practical, user-focused applications.",
  heroDescription:
    'Passionate Computer Science graduate who enjoys transforming ideas into functional applications. Experienced in developing full-stack systems, REST APIs, database-driven applications and machine learning solutions.',
  about: [
    'I am a Computer Science graduate from The Apollo University with a strong interest in full-stack development and artificial intelligence. Through internships and personal projects, I have gained practical experience building web applications, implementing authentication systems, working with databases and developing machine learning solutions.',
    'I enjoy learning new technologies, solving problems and building applications that solve real-world challenges.',
  ],
};

// TODO: Add your Google Drive view link here
export const resumeConfig = {
  viewUrl: 'https://drive.google.com/file/d/1qYqiph3WB2WMhjOrpPXiawVoWJzpPgcb/view?usp=drivesdk',
  downloadFile: '/Yaswanth_Yadlapalli_Resume.pdf',
  downloadFilename: 'Yaswanth_Yadlapalli_Resume.pdf',
};

export const achievements = [
  { label: 'B.Tech CSE Graduate', icon: 'GraduationCap' },
  { label: 'CGPA: 9.32 / 10', icon: 'Star' },
  { label: '2 Internship Experiences', icon: 'Briefcase' },
  { label: 'Full Stack & AI/ML Projects', icon: 'Code2' },
];

export const education = [
  {
    period: '2022 – 2026',
    degree: 'B.Tech – Computer Science and Engineering',
    institution: 'The Apollo University, Andhra Pradesh',
    score: 'CGPA: 9.32 / 10',
  },
  {
    period: '2020 – 2022',
    degree: 'Intermediate – MPC',
    institution: 'VIT Junior College, Andhra Pradesh',
    score: 'Percentage: 97.3%',
  },
];

export const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
      { name: 'C', icon: 'https://cdn.simpleicons.org/c/A8B9CC' },
      { name: 'SQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
      { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css3/1572B6' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi/009688' },
      { name: 'Flask', icon: 'https://cdn.simpleicons.org/flask/FFFFFF' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
      { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
      { name: 'SQLite', icon: 'https://cdn.simpleicons.org/sqlite/003B57' },
      { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase/3ECF8E' },
    ],
  },
  {
    title: 'Concepts & Domains',
    skills: [
      { name: 'Machine Learning', icon: null },
      { name: 'Artificial Intelligence', icon: null },
      { name: 'Generative AI', icon: null },
      { name: 'NLP', icon: null },
      { name: 'OOP', icon: null },
      { name: 'DBMS', icon: null },
      { name: 'Operating Systems', icon: null },
      { name: 'Web Development', icon: null },
    ],
  },
];

export const experience = [
  {
    role: 'Software Developer Intern',
    company: 'AIMSR',
    period: 'July 2024 – October 2024',
    type: 'Internship',
    responsibilities: [
      'Developed and tested modules for a Hospital Management and Electronic Health Record (EHR) System.',
      'Implemented patient registration, doctor consultations and digital prescriptions.',
      'Worked on role-based access control.',
      'Collaborated with the development team to debug issues and improve secure patient data management.',
      'Helped reduce manual errors in healthcare workflows.',
    ],
  },
  {
    role: 'AI Intern',
    company: 'Yhills',
    period: 'March 2024 – May 2024',
    type: 'Internship',
    responsibilities: [
      'Developed a Machine Learning-based Music Recommendation System.',
      'Used TF-IDF and cosine similarity to recommend songs.',
      'Performed data preprocessing and feature extraction.',
      'Used Python, Pandas and NumPy for dataset preparation and analysis.',
      'Implemented and evaluated recommendation pipelines.',
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Support Ticket System',
    description: 'Developed a full-stack support ticket management application for customers and support agents. Includes ticket creation, assignment, comments, status and priority updates, JWT authentication, role-based authorization and automated API tests.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Jest', 'Supertest'],
    github: 'https://github.com/yaswanth286/support-ticket-system',
    live: 'https://support-ticket-system-h0ke.onrender.com/login',
    featured: true,
  },
  {
    id: 2,
    title: 'Milk Manager Pro',
    description: 'Built a full-stack dairy management application to manage customers, daily milk deliveries, additional quantities, paneer and cream sales, payments and monthly billing. Includes outstanding balance calculations and secure authentication.',
    technologies: ['React.js', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'REST APIs', 'JWT'],
    github: 'https://github.com/yaswanth286/milk-manager-pro',
    live: null,
    liveNote: 'Live demo coming soon',
    featured: true,
  },
  {
    id: 3,
    title: 'Hospital Management & EHR System',
    description: 'Developed modules for a Hospital Management and Electronic Health Record System during my Software Developer Internship at AIMSR. Implemented patient registration, doctor consultations, digital prescriptions and role-based access control.',
    technologies: ['Flask', 'MySQL', 'React.js', 'Firebase Auth', 'JWT', 'RBAC'],
    github: null,
    githubNote: 'Repository available on request',
    live: null,
    featured: true,
  },
  {
    id: 4,
    title: 'Music Recommendation System',
    description: 'Developed a machine learning-based music recommendation system that suggests similar songs using TF-IDF and cosine similarity. Performed data preprocessing, feature extraction and exploratory data analysis.',
    technologies: ['Python', 'Machine Learning', 'TF-IDF', 'Cosine Similarity', 'Pandas', 'NumPy'],
    github: 'https://github.com/yaswanth286/music-recommendation-system',
    live: null,
    featured: true,
  },
  {
    id: 5,
    title: 'AI Mentor – CareerPath',
    description: 'Built an AI-powered career learning platform with personalized onboarding, career-path recommendations, skill discovery and an interactive career visualization. Includes a Next.js frontend and Django REST backend with JWT authentication and PostgreSQL support.',
    technologies: ['Next.js', 'React', 'Django REST Framework', 'Python', 'PostgreSQL', 'JWT', 'Groq'],
    github: 'https://github.com/yaswanth286/AI-Mentor',
    live: null,
    featured: true,
  },
  {
    id: 6,
    title: 'Tulas International School – Website Redesign',
    description: 'Created a responsive, animated redesign of the Tulas International School homepage with scroll-triggered reveals, animated counters, theme switching, testimonial carousel and responsive navigation.',
    technologies: ['React 18', 'Vite', 'CSS', 'Framer Motion', 'Vercel'],
    github: 'https://github.com/yaswanth286/tis-frontend-assignment',
    live: 'https://tis-frontend-assignment.vercel.app/',
    featured: true,
  },
  {
    id: 7,
    title: 'Student Registration Portal',
    description: 'Developed a PHP and MySQL student portal with student registration, login, profile management, admin dashboard, student record management, document uploads and role-based access control.',
    technologies: ['PHP 8', 'MySQL', 'HTML', 'CSS', 'Bootstrap 5'],
    github: 'https://github.com/yaswanth286/student-portal',
    live: null,
    featured: true,
  },
  {
    id: 8,
    title: 'IRP Learning Management System',
    description: 'A learning management system project. Explore the GitHub repository for its implementation, features and technology details.',
    technologies: ['Learning Management System'],
    github: 'https://github.com/yaswanth286/IRP_LMS',
    live: null,
    featured: true,
  },
];

// EmailJS configuration — set via environment variables
// Create a .env file with these values (see README)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
