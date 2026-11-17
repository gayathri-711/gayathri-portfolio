import { useState } from "react";
import {
  Mail,
  Download,
  ArrowRight,
  Award,
  BookOpen,
  Atom,
  Code2,
  Server,
  Database,
  Wrench,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gayatrisenthamarai@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const projects = [
    {
      number: "01",
      category: "QUANTUM MACHINE LEARNING",
      filterCategory: "Quantum & AI",
      title: "Noise-Aware Feature Selection for QCNN",
      description:
        "Research proposing and experimentally evaluating a Noise-Aware Feature Selection framework for Quantum Convolutional Neural Networks under realistic noise models.",
      technologies: ["Qiskit", "Python", "QML", "QCNN", "PCA"],
      github: "https://github.com/gayathri-711",
      label: "Research",
      image: "/projects/qcnn-quantum.jpg",
      highlights: [
        "PCA-based feature reduction: 8 quantum features reduced to 6 optimal features (25% reduction)",
        "RY rotational encoding & depolarizing / bit-flip / phase-flip noise modeling",
        "Benchmarked on noisy quantum simulators using IBM Qiskit",
      ],
    },
    {
      number: "02",
      category: "FULL STACK DEVELOPMENT",
      filterCategory: "Full Stack",
      title: "Enterprise Learning Platform",
      description:
        "A full-stack learning and career guidance platform featuring interactive courses, assessments, coding playgrounds, certifications, and AI-powered career roadmaps.",
      technologies: [
        "React",
        "Spring Boot",
        "MySQL",
        "JWT",
        "Gemini API",
      ],
      github: "https://github.com/gayathri-711/gayathri_Enterprise_learning--fsd",
      label: "GitHub",
      image: "/projects/learning-platform.jpg",
      highlights: [
        "Role-based secure authentication with JWT & Spring Security",
        "Integrated Gemini API for automated assessment feedback & roadmaps",
        "Real-time code execution sandbox and module progress tracking",
      ],
    },
    {
      number: "03",
      category: "FULL STACK DEVELOPMENT",
      filterCategory: "Full Stack",
      title: "AI Job Management Portal",
      description:
        "A full-stack job application portal enabling candidates to register, upload resumes, search tailored listings, and track applications with role-based recruiter portals.",
      technologies: [
        "React",
        "Java",
        "Spring Boot",
        "MySQL",
      ],
      github: "https://github.com/gayathri-711/AI-Job-Management-Portal",
      label: "GitHub",
      image: "/projects/job-portal.jpg",
      highlights: [
        "Resume upload pipeline with structured applicant profile parsing",
        "Recruiter dashboard with applicant status tracking pipeline",
        "Robust RESTful backend with normalized relational schema in MySQL",
      ],
    },
    {
      number: "04",
      category: "MACHINE LEARNING",
      filterCategory: "Quantum & AI",
      title: "Intelligent Risk Assessment Model",
      description:
        "Research focused on intelligent risk assessment and accident prevention in hazardous industries using machine learning techniques. (Scopus Indexed Publication)",
      technologies: [
        "Python",
        "Machine Learning",
        "Data Analysis",
      ],
      github: "https://github.com/gayathri-711",
      label: "Scopus Publication",
      image: "/projects/risk-assessment.jpg",
      highlights: [
        "Predictive hazard classification and failure mode early warning",
        "Time-series sensor telemetry anomaly detection algorithms",
        "Published in Scopus-indexed research proceedings (2026)",
      ],
    },
    {
      number: "05",
      category: "IEEE CONFERENCE",
      filterCategory: "Research",
      title: "Risk Analysis in Chemical Industries",
      description:
        "Research on risk analysis methodologies in chemical industries to identify hazards, assess process vulnerabilities, and prevent catastrophic failures.",
      technologies: [
        "Risk Analysis",
        "Safety Engineering",
        "Research",
      ],
      github: "https://github.com/gayathri-711",
      label: "IEEE Paper",
      image: "/projects/chemical-risk.jpg",
      highlights: [
        "Presented at peer-reviewed IEEE International Conference",
        "Structured hazard identification and chemical process risk matrices",
        "Actionable industrial protocols for safety compliance & prevention",
      ],
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.filterCategory === activeFilter);

  const skillGroups = [
    {
      title: "Quantum & AI",
      icon: Atom,
      skills: [
        "Qiskit",
        "Quantum Machine Learning",
        "QCNN",
        "PCA",
        "RY Encoding",
        "Noise Modeling",
        "Machine Learning",
      ],
    },
    {
      title: "Programming",
      icon: Code2,
      skills: [
        "Java",
        "Python",
        "JavaScript",
        "SQL",
        "C",
      ],
    },
    {
      title: "Frontend",
      icon: Sparkles,
      skills: [
        "React",
        "Next.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Vite",
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        "Spring Boot",
        "FastAPI",
        "Flask",
        "Node.js",
        "Express.js",
        "REST APIs",
      ],
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Maven",
        "Postman",
        "Vercel",
        "Render",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eafaf1] via-[#f7fcf9] to-white text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">

      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-emerald-100/80 bg-white/80 backdrop-blur-xl shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="flex items-center gap-2 text-xl font-bold tracking-wider text-slate-900 group"
          >
            <div className="h-8 w-8 rounded-full overflow-hidden border border-emerald-300 ring-2 ring-emerald-100">
              <img src="/profile.jpg" alt="Gayathri D." className="h-full w-full object-cover object-top" />
            </div>
            <span>
              GAYATHRI<span className="text-emerald-600">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#home" className="transition hover:text-emerald-600">Home</a>
            <a href="#about" className="transition hover:text-emerald-600">About</a>
            <a href="#skills" className="transition hover:text-emerald-600">Skills</a>
            <a href="#projects" className="transition hover:text-emerald-600">Projects</a>
            <a href="#research" className="transition hover:text-emerald-600">Research</a>
            <a href="#experience" className="transition hover:text-emerald-600">Experience</a>
            <a href="#achievements" className="transition hover:text-emerald-600">Achievements</a>
            <a href="#contact" className="transition hover:text-emerald-600">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-emerald-500/30 bg-emerald-50/80 px-5 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-600 hover:text-white shadow-xs"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16"
      >
        {/* Soft Background glow effects */}
        <div className="absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-emerald-300/25 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-teal-200/30 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-12">

          {/* HERO LEFT (Col 7) */}
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              Computer Science & Engineering • Quantum Minor
            </div>

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-700">
              Quantum Computing × AI × Software
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Building the <span className="text-slate-500">future with</span>
              <span className="block mt-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-700 bg-clip-text text-transparent">
                Code × AI × Quantum
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              I'm <span className="font-bold text-slate-900">Gayathri D.</span>, an engineering undergraduate at{" "}
              <span className="text-slate-800 font-semibold">Rajalakshmi Institute of Technology</span> exploring
              Noise-Aware Quantum Machine Learning (QCNN), Artificial Intelligence, and scalable full-stack software development.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 font-semibold text-white shadow-md shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-500"
              >
                <span>Explore Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-7 py-3.5 font-semibold text-slate-700 shadow-xs transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-700"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://github.com/gayathri-711"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-xs transition hover:border-emerald-400 hover:text-emerald-700"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/gayathri-dhanasekaran-17518a32a"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-xs transition hover:border-emerald-400 hover:text-emerald-700"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:gayatrisenthamarai@gmail.com"
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-xs transition hover:border-emerald-400 hover:text-emerald-700"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* HERO RIGHT - USER PHOTO WITH QUANTUM ORBIT FRAME (Col 5) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative flex items-center justify-center py-6">

              {/* Ambient Glows */}
              <div className="absolute h-80 w-80 rounded-full bg-emerald-300/30 blur-[90px]" />
              <div className="absolute h-72 w-72 rounded-full bg-teal-200/35 blur-[70px]" />

              {/* Decorative Quantum Orbit Rings */}
              <div className="absolute h-[340px] w-[340px] rounded-full border border-dashed border-emerald-300/60 animate-[spin_40s_linear_infinite]" />
              <div className="absolute h-[390px] w-[390px] rounded-full border border-emerald-200/40" />

              {/* Floating Top Badge: Quantum Vertical */}
              <div className="absolute -top-4 z-20 flex items-center gap-2 rounded-full border border-emerald-200 bg-white/95 px-4 py-1.5 shadow-md backdrop-blur-md">
                <Atom className="h-4 w-4 animate-spin text-emerald-600" style={{ animationDuration: "12s" }} />
                <span className="text-xs font-bold text-emerald-800">Quantum Computing Vertical</span>
              </div>

              {/* User Portrait Photo Card */}
              <div className="relative z-10 h-72 w-72 md:h-80 md:w-80 overflow-hidden rounded-3xl border-4 border-white bg-white shadow-2xl shadow-emerald-600/15 ring-8 ring-emerald-100/80">
                <img
                  src="/profile.jpg"
                  alt="Gayathri D. - Computer Science Engineer"
                  className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
                />
              </div>

              {/* Floating Bottom Left Badge: Status */}
              <div className="absolute -bottom-5 -left-4 z-20 rounded-2xl border border-emerald-200/80 bg-white/95 px-4 py-2.5 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Status</p>
                </div>
                <p className="mt-0.5 text-xs font-bold text-slate-800">Open to Roles & Research</p>
              </div>

              {/* Floating Bottom Right Badge: Research */}
              <div className="absolute -bottom-3 -right-3 z-20 rounded-2xl border border-teal-200/80 bg-white/95 px-4 py-2.5 shadow-xl backdrop-blur-md">
                <p className="text-[10px] font-bold uppercase tracking-wider text-teal-700">Publication</p>
                <p className="mt-0.5 text-xs font-bold text-slate-800">Scopus & IEEE</p>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center hidden md:block">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-500">
            Scroll to explore
          </p>
          <div className="mx-auto mt-2 h-6 w-px bg-gradient-to-b from-emerald-500 to-transparent" />
        </div>
      </section>

      {/* =====================================================
          HIGHLIGHTS STRIP
      ====================================================== */}
      <section className="relative px-6 py-6 -mt-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-emerald-100 bg-white/90 p-5 shadow-xs text-center backdrop-blur-xs">
              <p className="text-3xl font-extrabold text-emerald-600">8.37</p>
              <p className="mt-1 text-xs font-medium text-slate-600">CGPA / 10 • Quantum Minor</p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white/90 p-5 shadow-xs text-center backdrop-blur-xs">
              <p className="text-3xl font-extrabold text-teal-600">200+</p>
              <p className="mt-1 text-xs font-medium text-slate-600">LeetCode Problems Solved</p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white/90 p-5 shadow-xs text-center backdrop-blur-xs">
              <p className="text-3xl font-extrabold text-emerald-600">2 Papers</p>
              <p className="mt-1 text-xs font-medium text-slate-600">Scopus & IEEE Conference</p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white/90 p-5 shadow-xs text-center backdrop-blur-xs">
              <p className="text-3xl font-extrabold text-teal-600">1500+</p>
              <p className="mt-1 text-xs font-medium text-slate-600">SkillRack Problems Solved</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}
      <section
        id="about"
        className="relative overflow-hidden border-y border-emerald-100/60 bg-white/60 px-6 py-28 backdrop-blur-xs"
      >
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-teal-300/15 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            01 — About
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-slate-900 md:text-5xl">
            About Me
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-12 items-start">
            
            {/* Story & Biography (Col 7) */}
            <div className="md:col-span-7 space-y-6">
              <p className="text-lg leading-relaxed text-slate-600">
                I am a Computer Science and Engineering undergraduate at{" "}
                <span className="font-semibold text-slate-800">Rajalakshmi Institute of Technology, Chennai</span>,
                pursuing the <span className="font-semibold text-emerald-700">Quantum Computing Vertical</span> as a minor.
              </p>

              <p className="text-lg leading-relaxed text-slate-600">
                My passion lies at the intersection of emerging quantum computing algorithms, machine learning research,
                and scalable full-stack development. I build production-grade web systems in Java and React while conducting
                cutting-edge research on Noise-Aware Quantum Convolutional Neural Networks (QCNNs).
              </p>

              {/* Profile Card snippet */}
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5 flex items-center gap-4">
                <div className="h-16 w-16 shrink-0 rounded-2xl overflow-hidden border border-emerald-200 shadow-sm">
                  <img src="/profile.jpg" alt="Gayathri D." className="h-full w-full object-cover object-top" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Gayathri D.</h4>
                  <p className="text-xs text-emerald-700 font-semibold">B.E. Computer Science & Engineering (2024–2028)</p>
                  <p className="text-xs text-slate-500">Rajalakshmi Institute of Technology • Minor in Quantum Computing</p>
                </div>
              </div>
            </div>

            {/* Current Focus Card (Col 5) */}
            <div className="md:col-span-5 rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Current Technical Focus
              </p>

              <div className="mt-6 space-y-5">
                <div className="rounded-2xl border border-emerald-100/60 bg-emerald-50/40 p-4">
                  <div className="flex items-center gap-2">
                    <Atom className="h-4 w-4 text-emerald-600" />
                    <p className="font-bold text-emerald-800">Quantum Machine Learning</p>
                  </div>
                  <p className="mt-1 text-xs text-slate-600">
                    Noise-aware QCNN • RY Rotational Encoding • PCA Feature Reduction • IBM Qiskit
                  </p>
                </div>

                <div className="rounded-2xl border border-teal-100/60 bg-teal-50/40 p-4">
                  <div className="flex items-center gap-2">
                    <Server className="h-4 w-4 text-teal-600" />
                    <p className="font-bold text-teal-800">Full Stack Systems</p>
                  </div>
                  <p className="mt-1 text-xs text-slate-600">
                    Java • Spring Boot • React • MySQL • JWT Authentication • RESTful APIs
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-100/60 bg-emerald-50/40 p-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-emerald-600" />
                    <p className="font-bold text-emerald-800">Applied Artificial Intelligence</p>
                  </div>
                  <p className="mt-1 text-xs text-slate-600">
                    Predictive Industrial Safety Modeling • Gemini API Integration • Data Science
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          EDUCATION
      ====================================================== */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Education
          </p>

          <div className="mt-8 rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Rajalakshmi Institute of Technology
                </h3>
                <p className="mt-2 text-slate-600 font-medium">
                  B.E. Computer Science and Engineering
                </p>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-100">
                  <Atom className="h-3 w-3" />
                  Quantum Computing Vertical — Minor
                </div>
              </div>

              <div className="md:text-right">
                <span className="inline-block rounded-full bg-emerald-100/80 px-4 py-1 text-sm font-bold text-emerald-800">
                  2024 — 2028
                </span>
                <p className="mt-2 text-lg font-bold text-slate-800">
                  CGPA: 8.37 / 10
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Bharathiyar Matric Higher Secondary School
                </h3>
                <p className="mt-1 text-slate-600">
                  Higher Secondary Certificate
                </p>
              </div>
              <div className="md:text-right">
                <span className="inline-block rounded-full bg-slate-100 px-4 py-1 text-sm font-bold text-slate-700">
                  91.5%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SKILLS
      ====================================================== */}
      <section
        id="skills"
        className="relative overflow-hidden border-y border-emerald-100/60 bg-white/60 px-6 py-28 backdrop-blur-xs"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            02 — Skills
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Technical Skills
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.title}
                  className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {group.title}
                    </h3>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-emerald-100 bg-emerald-50/70 px-3 py-1.5 text-xs font-semibold text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-100/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED PROJECTS (WITH PROJECT PHOTOS & HIGHLIGHTS)
      ====================================================== */}
      <section
        id="projects"
        className="relative overflow-hidden px-6 py-28"
      >
        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-emerald-300/15 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
                03 — Projects
              </p>
              <h2 className="mt-3 text-4xl font-extrabold text-slate-900 md:text-5xl">
                Featured Projects
              </h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Production-ready software applications, machine learning architectures, and quantum computing implementations.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {["All", "Quantum & AI", "Full Stack", "Research"].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition cursor-pointer ${
                    activeFilter === category
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "border border-emerald-200 bg-white text-slate-600 hover:border-emerald-400 hover:text-emerald-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                className="group rounded-3xl border border-emerald-100 bg-white overflow-hidden shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Project Image Banner */}
                  <div className="relative aspect-video w-full overflow-hidden bg-emerald-50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-100 shadow-sm">
                      {project.category}
                    </div>

                    <div className="absolute top-3 right-3 rounded-full bg-slate-900/70 backdrop-blur-md px-2.5 py-0.5 text-xs font-mono font-bold text-white">
                      {project.number}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-7">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition">
                      {project.title}
                    </h3>

                    <p className="mt-3 leading-relaxed text-slate-600 text-sm">
                      {project.description}
                    </p>

                    {/* Highlights bullet points */}
                    {project.highlights && (
                      <div className="mt-4 space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-600">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technology Pills */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-emerald-100 bg-emerald-50/70 px-2.5 py-1 text-xs font-semibold text-emerald-800"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-7 pb-6 pt-2 flex items-center justify-between border-t border-slate-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/80 px-4 py-2 text-xs font-bold text-emerald-700 transition hover:bg-emerald-600 hover:text-white"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>View GitHub</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>

                  <span className="rounded-full bg-teal-50 px-3.5 py-1 text-xs font-bold text-teal-700 border border-teal-100">
                    {project.label}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          RESEARCH & PUBLICATIONS
      ====================================================== */}
      <section
        id="research"
        className="relative overflow-hidden border-y border-emerald-100/60 bg-white/60 px-6 py-28 backdrop-blur-xs"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            04 — Research
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Research & Publications
          </h2>

          <div className="mt-12 space-y-6">

            {/* QCNN */}
            <article className="rounded-3xl border border-emerald-200 bg-white p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  QUANTUM MACHINE LEARNING RESEARCH
                </span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                  Pre-print / Project
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Noise-Aware Feature Selection for Quantum Convolutional Neural Networks (QCNN)
              </h3>

              <p className="mt-3 max-w-4xl leading-relaxed text-slate-600">
                Proposed and experimentally evaluated a Noise-Aware Feature Selection framework for QCNNs. Applied PCA
                to reduce inputs to 8 quantum features, implemented RY rotational encoding, and evaluated bit-flip,
                depolarizing, and phase-flip noise models to demonstrate noise resilience on quantum simulators.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-emerald-100 bg-emerald-50/70 px-3 py-1.5 text-xs font-bold text-emerald-800">
                  8 Quantum Features
                </span>
                <span className="rounded-full border border-emerald-100 bg-emerald-50/70 px-3 py-1.5 text-xs font-bold text-emerald-800">
                  6 Selected Features (25% Reduction)
                </span>
                <span className="rounded-full border border-emerald-100 bg-emerald-50/70 px-3 py-1.5 text-xs font-bold text-emerald-800">
                  RY Rotational Encoding
                </span>
                <span className="rounded-full border border-emerald-100 bg-emerald-50/70 px-3 py-1.5 text-xs font-bold text-emerald-800">
                  IBM Qiskit
                </span>
              </div>
            </article>

            {/* ML PAPER */}
            <article className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  SCOPUS INDEXED PUBLICATION
                </span>
                <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-800">
                  Published 2026
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Intelligent Risk Assessment Model for Accident Prevention in Hazardous Industries Using Machine Learning
              </h3>

              <p className="mt-3 leading-relaxed text-slate-600">
                Peer-reviewed research paper introducing an intelligent predictive risk assessment model designed for accident
                prevention in high-risk industrial environments utilizing advanced classification algorithms and sensor monitoring.
              </p>
            </article>

            {/* IEEE */}
            <article className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  IEEE CONFERENCE PAPER
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                  Presented at IEEE Conference
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Risk Analysis in Chemical Industries
              </h3>

              <p className="mt-3 leading-relaxed text-slate-600">
                Comprehensive research paper on risk analysis methodologies in chemical process plants to systematically identify
                hazards, process safety vulnerabilities, and operational failure scenarios.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ====================================================== */}
      <section
        id="experience"
        className="px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            05 — Experience
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Experience & Internships
          </h2>

          <div className="mt-12 space-y-6">

            <article className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Java Full Stack Developer
                </span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                  2026
                </span>
              </div>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Zidio Development
              </h3>

              <p className="mt-4 max-w-4xl leading-relaxed text-slate-600">
                Engineered full-stack features using Java, Spring Boot, and MySQL. Designed RESTful endpoints, implemented
                secure authentication mechanisms, optimized relational database queries, and integrated responsive frontend views.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-emerald-100 bg-emerald-50/70 px-3 py-1 text-xs font-semibold text-emerald-800">Java</span>
                <span className="rounded-full border border-emerald-100 bg-emerald-50/70 px-3 py-1 text-xs font-semibold text-emerald-800">Spring Boot</span>
                <span className="rounded-full border border-emerald-100 bg-emerald-50/70 px-3 py-1 text-xs font-semibold text-emerald-800">MySQL</span>
                <span className="rounded-full border border-emerald-100 bg-emerald-50/70 px-3 py-1 text-xs font-semibold text-emerald-800">REST APIs</span>
              </div>
            </article>

            <article className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  VIRTUAL INTERNSHIP
                </span>
                <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-800">
                  Infosys Springboard
                </span>
              </div>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Java Full Stack Developer Intern
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                Completed the Java Full Stack Developer virtual internship program, gaining hands-on exposure to enterprise
                Java web development patterns, MVC architectures, and full-stack software lifecycle.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* =====================================================
          ACHIEVEMENTS & CERTIFICATIONS
      ====================================================== */}
      <section
        id="achievements"
        className="relative overflow-hidden border-y border-emerald-100/60 bg-white/60 px-6 py-28 backdrop-blur-xs"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            06 — Achievements
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Achievements & Certifications
          </h2>

          {/* Metric Cards */}
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm text-center">
              <p className="text-4xl font-extrabold text-emerald-600">200+</p>
              <p className="mt-2 text-sm font-medium text-slate-600">LeetCode Problems Solved</p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm text-center">
              <p className="text-4xl font-extrabold text-teal-600">1500+</p>
              <p className="mt-2 text-sm font-medium text-slate-600">SkillRack Problems Solved</p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm text-center">
              <p className="text-4xl font-extrabold text-emerald-600">20+</p>
              <p className="mt-2 text-sm font-medium text-slate-600">GitHub Repositories</p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm text-center">
              <p className="text-4xl font-extrabold text-teal-600">100</p>
              <p className="mt-2 text-sm font-medium text-slate-600">Days LeetCode Streak</p>
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="mt-10 rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-emerald-600" />
              <h3 className="text-2xl font-bold text-slate-900">
                Professional Certifications
              </h3>
            </div>

            <div className="mt-6 grid gap-4 text-sm font-medium text-slate-700 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-emerald-100/80 bg-emerald-50/40 p-4">
                <span className="text-xs font-bold text-emerald-700 uppercase">NPTEL Elite</span>
                <p className="mt-1 font-bold text-slate-900">Design & Analysis of Algorithms</p>
              </div>

              <div className="rounded-2xl border border-emerald-100/80 bg-emerald-50/40 p-4">
                <span className="text-xs font-bold text-emerald-700 uppercase">NPTEL Elite</span>
                <p className="mt-1 font-bold text-slate-900">Machine Learning</p>
              </div>

              <div className="rounded-2xl border border-teal-100/80 bg-teal-50/40 p-4">
                <span className="text-xs font-bold text-teal-700 uppercase">Microsoft</span>
                <p className="mt-1 font-bold text-slate-900">Foundations of AI Internship</p>
              </div>

              <div className="rounded-2xl border border-emerald-100/80 bg-emerald-50/40 p-4">
                <span className="text-xs font-bold text-emerald-700 uppercase">UiPath</span>
                <p className="mt-1 font-bold text-slate-900">Robotic Process Automation</p>
              </div>

              <div className="rounded-2xl border border-teal-100/80 bg-teal-50/40 p-4">
                <span className="text-xs font-bold text-teal-700 uppercase">MongoDB University</span>
                <p className="mt-1 font-bold text-slate-900">MongoDB Database Certifications</p>
              </div>

              <div className="rounded-2xl border border-emerald-100/80 bg-emerald-50/40 p-4">
                <span className="text-xs font-bold text-emerald-700 uppercase">Automation</span>
                <p className="mt-1 font-bold text-slate-900">n8n Workflow Automation & Celonis</p>
              </div>
            </div>
          </div>

          {/* Leadership & Activities */}
          <div className="mt-6 rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-emerald-600" />
              <h3 className="text-2xl font-bold text-slate-900">
                Leadership & Extracurriculars
              </h3>
            </div>
            <p className="mt-4 leading-relaxed text-slate-600">
              Event Organizer and Coordinator for college technical symposia and department hackathons. Active Club Member
              of <span className="font-semibold text-slate-800">Infinitus Club (Mathematics)</span>, Department of Computer Science & Engineering.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ====================================================== */}
      <section
        id="contact"
        className="relative overflow-hidden px-6 py-28"
      >
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/20 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            07 — Contact
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
            Let's Connect
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Interested in software engineering roles, full-stack development, or quantum computing & AI research collaborations?
            I'd love to chat.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:gayatrisenthamarai@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 font-semibold text-white shadow-md shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-500"
            >
              <Mail className="h-4 w-4" />
              <span>Email Me</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-6 py-3.5 font-semibold text-slate-700 shadow-xs transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-700 cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span className="text-emerald-600">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href="https://github.com/gayathri-711"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-6 py-3.5 font-semibold text-slate-700 shadow-xs transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-700"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub ↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/gayathri-dhanasekaran-17518a32a"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-6 py-3.5 font-semibold text-slate-700 shadow-xs transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-700"
            >
              <LinkedinIcon className="h-4 w-4" />
              <span>LinkedIn ↗</span>
            </a>
          </div>

          <p className="mt-8 text-sm font-medium text-slate-500">
            gayatrisenthamarai@gmail.com
          </p>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="border-t border-emerald-100 bg-emerald-50/50 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 md:flex-row md:text-left">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full overflow-hidden border border-emerald-200">
              <img src="/profile.jpg" alt="Gayathri D." className="h-full w-full object-cover object-top" />
            </div>
            <p className="font-semibold text-slate-700">© 2026 Gayathri D.</p>
          </div>
          <p>
            Quantum Computing • AI • Full Stack Software Engineering
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
