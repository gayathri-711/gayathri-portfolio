function App() {
  const projects = [
    {
      number: "01",
      category: "QUANTUM MACHINE LEARNING",
      title: "Noise-Aware Feature Selection for QCNN",
      description:
        "Research project proposing and experimentally evaluating a Noise-Aware Feature Selection framework for Quantum Convolutional Neural Networks.",
      technologies: ["Qiskit", "Python", "QML", "QCNN", "PCA"],
      github: "https://github.com/gayathri-711",
      label: "Research",
    },

    {
      number: "02",
      category: "FULL STACK DEVELOPMENT",
      title: "Enterprise Learning Platform",
      description:
        "A full-stack learning and career guidance platform featuring courses, assessments, coding practice, certifications and career roadmaps.",
      technologies: [
        "React",
        "Spring Boot",
        "MySQL",
        "JWT",
        "Gemini API",
      ],
      github: "https://github.com/gayathri-711",
      label: "GitHub",
    },

    {
      number: "03",
      category: "FULL STACK DEVELOPMENT",
      title: "Job Portal",
      description:
        "A full-stack job portal allowing users to register, upload resumes and apply for jobs with role-based access and backend integration.",
      technologies: [
        "React",
        "Java",
        "Spring Boot",
        "MySQL",
      ],
      github: "https://github.com/gayathri-711",
      label: "GitHub",
    },

    {
      number: "04",
      category: "MACHINE LEARNING",
      title: "Intelligent Risk Assessment Model",
      description:
        "Research focused on intelligent risk assessment and accident prevention in hazardous industries using machine learning techniques.",
      technologies: [
        "Python",
        "Machine Learning",
        "Data Analysis",
      ],
      github: "https://github.com/gayathri-711",
      label: "Research",
    },

    {
      number: "05",
      category: "IEEE CONFERENCE",
      title: "Risk Analysis in Chemical Industries",
      description:
        "Research on risk analysis methodologies in chemical industries to identify hazards, safety risks and process failures.",
      technologies: [
        "Risk Analysis",
        "Safety",
        "Research",
      ],
      github: "https://github.com/gayathri-711",
      label: "Publication",
    },
  ];

  const skillGroups = [
    {
      title: "Quantum & AI",
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
      skills: [
        "React",
        "Next.js",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Vite",
      ],
    },

    {
      title: "Backend",
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
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
      ],
    },

    {
      title: "Tools",
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
    <div className="min-h-screen bg-[#08111f] text-slate-100">

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#1e3a5f] bg-[#08111f]/90 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a
            href="#home"
            className="text-xl font-bold tracking-wider"
          >
            GAYATHRI
            <span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-400 md:flex">

            <a href="#home" className="transition hover:text-cyan-400">
              Home
            </a>

            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>

            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>

            <a href="#research" className="transition hover:text-cyan-400">
              Research
            </a>

            <a href="#experience" className="transition hover:text-cyan-400">
              Experience
            </a>

            <a
              href="#achievements"
              className="transition hover:text-cyan-400"
            >
              Achievements
            </a>

            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>

          </div>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/30 px-5 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400 hover:text-[#08111f]"
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
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
      >

        {/* Background effects */}

        <div className="absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-cyan-400/5 blur-[120px]" />

        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-2">


          {/* HERO LEFT */}

          <div>

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-slate-300">

              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#38bdf8]" />

              Computer Science Engineer

            </div>


            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
              Quantum Computing × AI × Software
            </p>


            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">

              Building the

              <span className="block text-slate-400">
                future with
              </span>

              <span className="block bg-gradient-to-r from-white via-cyan-200 to-violet-400 bg-clip-text text-transparent">
                Code × AI × Quantum
              </span>

            </h1>


            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">

              I'm{" "}
              <span className="text-white">
                Gayathri D.
              </span>
              , a Computer Science undergraduate exploring
              Quantum Machine Learning, Artificial Intelligence
              and full-stack software development.

            </p>


            {/* BUTTONS */}

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-[#08111f] shadow-[0_0_30px_rgba(56,189,248,0.15)] transition hover:-translate-y-1 hover:bg-cyan-300"
              >
                Explore Projects →
              </a>


              <a
                href="/resume.pdf"
                download
                className="rounded-full border border-cyan-400/20 bg-[#0d1b2a] px-7 py-3.5 font-semibold text-slate-100 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300"
              >
                Download Resume
              </a>

            </div>


            {/* SOCIAL LINKS */}

            <div className="mt-8 flex gap-3">

              <a
                href="https://github.com/gayathri-711"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#1e3a5f] bg-[#0d1b2a] px-5 py-2.5 text-sm text-slate-400 transition hover:border-cyan-400/40 hover:text-cyan-300"
              >
                GitHub ↗
              </a>


              <a
                href="https://www.linkedin.com/in/gayathri-dhanasekaran-17518a32"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#1e3a5f] bg-[#0d1b2a] px-5 py-2.5 text-sm text-slate-400 transition hover:border-cyan-400/40 hover:text-cyan-300"
              >
                LinkedIn ↗
              </a>

            </div>

          </div>


          {/* QUANTUM VISUAL */}

          <div className="relative flex items-center justify-center">

            <div className="absolute h-80 w-80 rounded-full bg-cyan-400/5 blur-[80px]" />


            <div className="relative flex h-80 w-80 items-center justify-center rounded-full border border-cyan-400/20 md:h-[430px] md:w-[430px]">

              {/* Orbits */}

              <div className="absolute inset-10 rounded-full border border-cyan-400/15" />

              <div className="absolute inset-24 rounded-full border border-violet-400/20" />

              <div className="absolute inset-36 rounded-full border border-slate-400/10" />


              {/* Nodes */}

              <div className="absolute left-1/2 top-5 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_25px_#38bdf8]" />

              <div className="absolute bottom-16 right-12 h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_25px_#a78bfa]" />

              <div className="absolute bottom-24 left-12 h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_25px_#67e8f9]" />


              {/* Center */}

              <div className="flex h-32 w-32 items-center justify-center rounded-full border border-cyan-400/30 bg-[#0d1b2a] text-6xl shadow-[0_0_80px_rgba(56,189,248,0.12)]">
                ⚛
              </div>

            </div>


            {/* Floating cards */}

            <div className="absolute left-0 top-10 rounded-xl border border-cyan-400/20 bg-[#0d1b2a]/90 px-4 py-3 shadow-lg backdrop-blur-md">

              <p className="text-xs text-slate-500">
                RESEARCH
              </p>

              <p className="mt-1 text-sm font-semibold text-cyan-300">
                Quantum ML
              </p>

            </div>


            <div className="absolute bottom-8 right-0 rounded-xl border border-violet-400/20 bg-[#0d1b2a]/90 px-4 py-3 shadow-lg backdrop-blur-md">

              <p className="text-xs text-slate-500">
                BUILDING
              </p>

              <p className="mt-1 text-sm font-semibold text-violet-300">
                Full Stack Apps
              </p>

            </div>

          </div>

        </div>


        {/* Scroll indicator */}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">

          <p className="text-[10px] uppercase tracking-[0.35em] text-slate-600">
            Scroll to explore
          </p>

          <div className="mx-auto mt-3 h-8 w-px bg-gradient-to-b from-cyan-400 to-transparent" />

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section
        id="about"
        className="relative overflow-hidden bg-[#0d1b2a] px-6 py-32"
      >

        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-violet-500/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">

          <p className="text-sm uppercase tracking-widest text-cyan-400">
            01 — About
          </p>


          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            About Me
          </h2>


          <div className="mt-10 grid gap-10 md:grid-cols-2">


            <div>

              <p className="text-lg leading-8 text-slate-400">

                I am a Computer Science and Engineering undergraduate
                at Rajalakshmi Institute of Technology, Chennai,
                pursuing the Quantum Computing Vertical as a minor.

              </p>


              <p className="mt-6 text-lg leading-8 text-slate-400">

                My interests span Quantum Machine Learning,
                Artificial Intelligence, cybersecurity and
                full-stack software development.

              </p>

            </div>


            <div className="rounded-3xl border border-[#1e3a5f] bg-[#11263a]/70 p-8">

              <p className="text-sm uppercase tracking-widest text-slate-500">
                Current Focus
              </p>


              <div className="mt-6 space-y-6">

                <div>

                  <p className="font-semibold text-cyan-300">
                    Quantum Machine Learning
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    QML • QCNN • Qiskit • Noise-aware research
                  </p>

                </div>


                <div>

                  <p className="font-semibold text-violet-300">
                    Full Stack Development
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    React • Java • Spring Boot • MySQL
                  </p>

                </div>


                <div>

                  <p className="font-semibold text-cyan-300">
                    Artificial Intelligence
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Machine Learning • AI applications
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

          <p className="text-sm uppercase tracking-widest text-cyan-400">
            Education
          </p>


          <div className="mt-10 rounded-3xl border border-[#1e3a5f] bg-[#0d1b2a] p-8">

            <div className="flex flex-col justify-between gap-5 md:flex-row">

              <div>

                <h3 className="text-2xl font-bold">
                  Rajalakshmi Institute of Technology
                </h3>

                <p className="mt-2 text-slate-400">
                  B.E. Computer Science and Engineering
                </p>

                <p className="mt-1 text-slate-500">
                  Quantum Computing Vertical — Minor
                </p>

              </div>


              <div className="md:text-right">

                <p className="text-cyan-400">
                  2024 — 2028
                </p>

                <p className="mt-2 text-slate-400">
                  CGPA: 8.37 / 10
                </p>

              </div>

            </div>

          </div>


          <div className="mt-5 rounded-3xl border border-[#1e3a5f] bg-[#0d1b2a] p-8">

            <h3 className="text-xl font-bold">
              Bharathiyar Matric Higher Secondary School
            </h3>

            <p className="mt-2 text-slate-400">
              Higher Secondary Certificate — 91.5%
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          SKILLS
      ====================================================== */}

      <section
        id="skills"
        className="bg-[#0d1b2a] px-6 py-32"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-sm uppercase tracking-widest text-cyan-400">
            02 — Skills
          </p>


          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Technical Skills
          </h2>


          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {skillGroups.map((group) => (

              <div
                key={group.title}
                className="rounded-3xl border border-[#1e3a5f] bg-[#11263a]/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_10px_40px_rgba(56,189,248,0.05)]"
              >

                <h3 className="text-xl font-semibold">
                  {group.title}
                </h3>


                <div className="mt-5 flex flex-wrap gap-2">

                  {group.skills.map((skill) => (

                    <span
                      key={skill}
                      className="rounded-full border border-[#1e3a5f] bg-[#08111f] px-3 py-1.5 text-sm text-slate-400 transition hover:border-cyan-400/40 hover:text-cyan-300"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <section
        id="projects"
        className="relative overflow-hidden px-6 py-32"
      >

        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-cyan-400/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          <p className="text-sm uppercase tracking-widest text-cyan-400">
            03 — Projects
          </p>


          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Featured Projects
          </h2>


          <p className="mt-5 max-w-2xl text-slate-400">
            Software engineering, artificial intelligence and
            quantum computing projects.
          </p>


          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {projects.map((project) => (

              <article
                key={project.title}
                className="group rounded-3xl border border-[#1e3a5f] bg-[#0d1b2a] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_15px_50px_rgba(56,189,248,0.06)]"
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm text-cyan-400">
                    {project.category}
                  </span>

                  <span className="text-sm text-slate-600">
                    {project.number}
                  </span>

                </div>


                <h3 className="mt-5 text-2xl font-bold">
                  {project.title}
                </h3>


                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>


                <div className="mt-6 flex flex-wrap gap-2">

                  {project.technologies.map((technology) => (

                    <span
                      key={technology}
                      className="rounded-full bg-[#08111f] px-3 py-1.5 text-xs text-slate-400"
                    >
                      {technology}
                    </span>

                  ))}

                </div>


                <div className="mt-7 flex items-center gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-cyan-400/20 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400 hover:text-[#08111f]"
                  >
                    View GitHub ↗
                  </a>


                  <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                    {project.label}
                  </span>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          RESEARCH
      ====================================================== */}

      <section
        id="research"
        className="bg-[#0d1b2a] px-6 py-32"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-sm uppercase tracking-widest text-cyan-400">
            04 — Research
          </p>


          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Research & Publications
          </h2>


          <div className="mt-12 space-y-5">


            {/* QCNN */}

            <article className="rounded-3xl border border-cyan-400/20 bg-[#11263a] p-8">

              <span className="text-sm text-cyan-400">
                QUANTUM MACHINE LEARNING
              </span>


              <h3 className="mt-4 text-2xl font-bold">
                Noise-Aware Feature Selection for Quantum
                Convolutional Neural Networks
              </h3>


              <p className="mt-4 max-w-4xl leading-7 text-slate-400">

                Proposed and experimentally evaluated a Noise-Aware
                Feature Selection framework for QCNNs. Applied PCA
                to reduce inputs to 8 quantum features, implemented
                RY rotational encoding and evaluated bit-flip,
                depolarizing and phase-flip noise.

              </p>


              <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#08111f] px-3 py-1.5 text-xs text-cyan-300">
                  8 Quantum Features
                </span>

                <span className="rounded-full bg-[#08111f] px-3 py-1.5 text-xs text-cyan-300">
                  6 Selected Features
                </span>

                <span className="rounded-full bg-[#08111f] px-3 py-1.5 text-xs text-cyan-300">
                  25% Reduction
                </span>

                <span className="rounded-full bg-[#08111f] px-3 py-1.5 text-xs text-cyan-300">
                  Qiskit
                </span>

              </div>

            </article>


            {/* ML PAPER */}

            <article className="rounded-3xl border border-[#1e3a5f] bg-[#11263a]/70 p-8">

              <span className="text-sm text-violet-400">
                SCOPUS INDEXED PUBLICATION
              </span>


              <h3 className="mt-4 text-2xl font-bold">
                Intelligent Risk Assessment Model for Accident
                Prevention in Hazardous Industries Using Machine Learning
              </h3>


              <p className="mt-4 leading-7 text-slate-400">

                Research paper on intelligent risk assessment and
                accident prevention in hazardous industries using
                machine learning techniques.

              </p>


              <p className="mt-5 text-sm text-slate-500">
                Published 2026
              </p>

            </article>


            {/* IEEE */}

            <article className="rounded-3xl border border-[#1e3a5f] bg-[#11263a]/70 p-8">

              <span className="text-sm text-violet-400">
                IEEE CONFERENCE PAPER
              </span>


              <h3 className="mt-4 text-2xl font-bold">
                Risk Analysis in Chemical Industries
              </h3>


              <p className="mt-4 leading-7 text-slate-400">

                Research on risk analysis methodologies in chemical
                industries to identify hazards, safety risks and
                process failures.

              </p>


              <p className="mt-5 text-sm text-slate-500">
                Presented at an IEEE conference
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
        className="px-6 py-32"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-sm uppercase tracking-widest text-cyan-400">
            05 — Experience
          </p>


          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Experience
          </h2>


          <div className="mt-12 space-y-5">


            <article className="rounded-3xl border border-[#1e3a5f] bg-[#0d1b2a] p-8">

              <p className="text-sm text-cyan-400">
                2026
              </p>


              <h3 className="mt-2 text-2xl font-bold">
                Zidio Development
              </h3>


              <p className="mt-1 text-slate-400">
                Java Full Stack Developer
              </p>


              <p className="mt-6 max-w-4xl leading-7 text-slate-400">

                Worked with Java, Spring Boot and MySQL for
                full-stack web application development. Built REST
                APIs, implemented authentication mechanisms and
                integrated frontend components with backend systems.

              </p>


              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#08111f] px-3 py-1.5 text-xs text-slate-400">
                  Java
                </span>

                <span className="rounded-full bg-[#08111f] px-3 py-1.5 text-xs text-slate-400">
                  Spring Boot
                </span>

                <span className="rounded-full bg-[#08111f] px-3 py-1.5 text-xs text-slate-400">
                  MySQL
                </span>

                <span className="rounded-full bg-[#08111f] px-3 py-1.5 text-xs text-slate-400">
                  REST APIs
                </span>

              </div>

            </article>


            <article className="rounded-3xl border border-[#1e3a5f] bg-[#0d1b2a] p-8">

              <p className="text-sm text-violet-400">
                VIRTUAL INTERNSHIP
              </p>


              <h3 className="mt-2 text-2xl font-bold">
                Infosys Springboard
              </h3>


              <p className="mt-1 text-slate-400">
                Java Full Stack Developer
              </p>


              <p className="mt-5 leading-7 text-slate-400">

                Completed the Java Full Stack Developer virtual
                internship with practical exposure to Java-based
                full-stack web application development.

              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          ACHIEVEMENTS
      ====================================================== */}

      <section
        id="achievements"
        className="bg-[#0d1b2a] px-6 py-32"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-sm uppercase tracking-widest text-cyan-400">
            06 — Achievements
          </p>


          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Achievements
          </h2>


          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl border border-[#1e3a5f] bg-[#11263a]/70 p-7">

              <p className="text-4xl font-bold text-cyan-300">
                200+
              </p>

              <p className="mt-3 text-slate-400">
                LeetCode problems solved
              </p>

            </div>


            <div className="rounded-3xl border border-[#1e3a5f] bg-[#11263a]/70 p-7">

              <p className="text-4xl font-bold text-violet-300">
                1500+
              </p>

              <p className="mt-3 text-slate-400">
                SkillRack problems solved
              </p>

            </div>


            <div className="rounded-3xl border border-[#1e3a5f] bg-[#11263a]/70 p-7">

              <p className="text-4xl font-bold text-cyan-300">
                20+
              </p>

              <p className="mt-3 text-slate-400">
                GitHub repositories
              </p>

            </div>


            <div className="rounded-3xl border border-[#1e3a5f] bg-[#11263a]/70 p-7">

              <p className="text-4xl font-bold text-violet-300">
                100
              </p>

              <p className="mt-3 text-slate-400">
                Days LeetCode Challenge
              </p>

            </div>

          </div>


          {/* Certifications */}

          <div className="mt-10 rounded-3xl border border-[#1e3a5f] bg-[#11263a]/70 p-8">

            <h3 className="text-2xl font-bold">
              Certifications
            </h3>


            <div className="mt-6 grid gap-3 text-slate-400 md:grid-cols-2">

              <p>• NPTEL Elite — Design & Analysis of Algorithms</p>

              <p>• NPTEL Elite — Machine Learning</p>

              <p>• DSA using Python</p>

              <p>• Microsoft Foundations of AI Internship</p>

              <p>• UiPath Certification</p>

              <p>• n8n Workflow Automation</p>

              <p>• Celonis Certification</p>

              <p>• MongoDB Certifications</p>

            </div>

          </div>


          {/* Leadership */}

          <div className="mt-5 rounded-3xl border border-[#1e3a5f] bg-[#11263a]/70 p-8">

            <h3 className="text-2xl font-bold">
              Leadership & Activities
            </h3>


            <p className="mt-5 max-w-4xl leading-7 text-slate-400">

              Event Organizer and Coordinator for college technical
              events and student activities. Club Member of Infinitus
              Club (Math), Department of Computer Science Engineering.

            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT
      ====================================================== */}

      <section
        id="contact"
        className="relative overflow-hidden px-6 py-32"
      >

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[120px]" />


        <div className="relative mx-auto max-w-4xl text-center">

          <p className="text-sm uppercase tracking-widest text-cyan-400">
            07 — Contact
          </p>


          <h2 className="mt-5 text-5xl font-bold md:text-7xl">
            Let's Connect
          </h2>


          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">

            Interested in software development, artificial
            intelligence or quantum computing research?
            Let's connect and build something meaningful.

          </p>


          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="mailto:gayatrisenthamarai@gmail.com"
              className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-[#08111f] transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              Email Me
            </a>


            <a
              href="https://github.com/gayathri-711"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#1e3a5f] bg-[#0d1b2a] px-7 py-3 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              GitHub ↗
            </a>


            <a
              href="https://www.linkedin.com/in/gayathri-dhanasekaran-17518a32"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#1e3a5f] bg-[#0d1b2a] px-7 py-3 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              LinkedIn ↗
            </a>

          </div>


          <p className="mt-10 text-sm text-slate-600">
            gayatrisenthamarai@gmail.com
          </p>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-[#1e3a5f] bg-[#08111f] px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-center text-sm text-slate-600 md:flex-row md:text-left">

          <p>
            © 2026 Gayathri D.
          </p>

          <p>
            Quantum Computing • AI • Software Engineering
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;