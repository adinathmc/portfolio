import { BrowserRouter, NavLink, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { education, profile, projects, roles, skills } from "./data/profile";

const container = "mx-auto w-[min(1120px,94vw)]";
const titleFont = '"Akira Expanded", "Arial Black", sans-serif';
const bodyFont = '"Kame Free", "Trebuchet MS", sans-serif';
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const pageTransition = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

function Section({ title, subtitle, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-2xl border border-[#FFD0A6]/20 bg-black/25 p-5 sm:p-8 md:p-10"
    >
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-3xl uppercase text-[#FFD0A6] sm:text-4xl"
        style={{ fontFamily: titleFont }}
      >
        {title}
      </motion.h1>
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-3 max-w-3xl text-orange-100/90 sm:text-lg"
          style={{ fontFamily: bodyFont }}
        >
          {subtitle}
        </motion.p>
      ) : null}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="mt-6"
      >
        {children}
      </motion.div>
    </motion.section>
  );
}

function Layout({ children }) {
  const location = useLocation();
  const nav = [
    ["About", "/about"],
    ["Skills", "/skills"],
    ["Projects", "/projects"],
    ["Roles", "/roles"],
    ["Contact", "/contact"],
  ];

  return (
    <div
      className="min-h-screen pb-10 text-orange-50"
      style={{ background: "linear-gradient(135deg, #E84A1A 0%, #B31512 100%)" }}
    >
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`${container} pt-6 sm:pt-8`}
      >
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <NavLink
            to="/"
            className="text-base tracking-wide text-[#FFD0A6] transition-opacity hover:opacity-80 sm:text-lg"
            style={{ fontFamily: titleFont }}
          >
            {profile.name}
          </NavLink>
          <motion.nav
            className="flex flex-wrap gap-2"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {nav.map(([label, to]) => (
              <motion.div key={label} variants={cardVariant}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `nav-pill text-xs uppercase sm:text-sm ${isActive ? "bg-[#FFD0A6]/20 text-[#FFD0A6]" : "text-orange-100"
                    }`
                  }
                  style={{ fontFamily: titleFont }}
                >
                  {label}
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>
        </div>
      </motion.header>
      <main className={container}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function HomePage() {
  const accent = "#FFD0A6";

  return (
    <div
      className="h-screen overflow-hidden flex flex-col text-[#FFD0A6]"
      style={{ background: "linear-gradient(135deg, #E84A1A 0%, #B31512 100%)" }}
    >
      <motion.header
        className="mx-auto flex w-[min(1280px,95vw)] items-center gap-4 px-2 pt-5 text-[11px] uppercase tracking-wide sm:gap-6 sm:pt-6 sm:text-base"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
      >
        <nav
          className="flex flex-wrap items-center gap-2 sm:gap-4"
          style={{ fontFamily: '"Akira Expanded", "Arial Black", sans-serif' }}
        >
          <NavLink to="/about" className="nav-pill">
            ABOUT
          </NavLink>
          <NavLink to="/skills" className="nav-pill">
            SKILLS
          </NavLink>
          <NavLink to="/projects" className="nav-pill">
            PROJECTS
          </NavLink>
          <NavLink to="/roles" className="nav-pill">
            ROLES
          </NavLink>
          <NavLink to="/contact" className="nav-pill">
            CONTACT
          </NavLink>
        </nav>
      </motion.header>

      <main className="flex-1 mx-auto grid w-[min(1280px,95vw)] grid-cols-1 items-stretch gap-2 px-2 pt-3 sm:pt-4 md:grid-cols-[1fr_1fr]">
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="max-w-[900px] pl-1 pt-1 sm:pl-2 sm:pt-2 md:pl-6 md:pt-8"
        >
          <h1
            className="max-w-none text-4xl leading-[0.9] font-black sm:text-5xl md:text-[86px] md:whitespace-nowrap"
            style={{
              color: accent,
              fontFamily: '"Akira Expanded", "Arial Black", sans-serif',
            }}
          >
            ADINATH M C
          </h1>
          <p
            className="mt-2 text-[10px] uppercase sm:text-[12px] md:text-[17px] md:leading-[1.1]"
            style={{ fontFamily: '"Akira Expanded", "Arial Black", sans-serif' }}
          >
            CS STUDENT · AI ENTHUSIAST · BACKEND DEVELOPER
          </p>
          <p
            className="mt-4 max-w-[700px] text-[20px] leading-[1.14] font-semibold sm:text-[22px] md:text-[20px]"
            style={{ fontFamily: '"Kame Free", "Trebuchet MS", sans-serif' }}
          >
            I am Adinath, a Computer Science student at CUSAT with a passion for
            AI, automation, and Backend development. I build things that are
            actually useful, from intelligent backends to data pipelines.
          </p>
          <div
            className="mt-10 space-y-3 text-lg uppercase sm:mt-14 sm:text-xl md:text-[19px]"
            style={{ fontFamily: '"Akira Expanded", "Arial Black", sans-serif' }}
          >
            <div className="flex items-center gap-3">
              <a href="/Adinath_M_C_Resume.pdf" target="_blank" rel="noreferrer" className="block w-fit underline underline-offset-4 decoration-2 transition-transform hover:translate-x-1">
                GRAB MY RESUME <span className="inline-block rotate-[-135deg]">↓</span>
              </a>
              <a href="/Adinath_M_C_Resume.pdf" download="Adinath_M_C_Resume.pdf" className="inline-flex items-center gap-1 rounded-md bg-[#FFD0A6] px-2 py-1 text-[11px] font-bold text-[#171725] no-underline transition-transform hover:scale-105">
                PDF<span className="text-[9px]">↓</span>
              </a>
            </div>
            <NavLink to="/projects" className="block w-fit underline underline-offset-4 decoration-2 transition-transform hover:translate-x-1">
              VIEW MY PROJECTS <span className="inline-block rotate-[-135deg]">↓</span>
            </NavLink>
          </div>

          <div className="mt-6 flex items-center gap-4 pb-2 sm:mt-7 sm:gap-5 sm:pb-4">
            <motion.a
              href={profile.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-md bg-[#FFD0A6] text-[#171725] sm:h-11 sm:w-11 md:h-12 md:w-12"
              whileHover={{ scale: 1.15, y: -4, boxShadow: "0 8px 25px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current sm:h-6 sm:w-6 md:h-7 md:w-7">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
            <motion.a
              href={profile.github}
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full bg-[#FFD0A6] text-[#171725] sm:h-11 sm:w-11 md:h-12 md:w-12"
              whileHover={{ scale: 1.15, y: -4, boxShadow: "0 8px 25px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current sm:h-6 sm:w-6 md:h-7 md:w-7">
                <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.39-2.05 1.03-2.77-.1-.27-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.06a9.3 9.3 0 0 1 5 0c1.9-1.34 2.75-1.06 2.75-1.06.55 1.43.2 2.48.1 2.75.64.72 1.03 1.64 1.03 2.77 0 3.96-2.34 4.83-4.57 5.09.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.28 10.28 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
              </svg>
            </motion.a>
          </div>
        </motion.section>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="relative flex items-end justify-center md:justify-end h-full"
        >
          <img
            src="/hero-cutout.png"
            alt="Adinath portrait"
            className="w-[140%] sm:w-[150%] md:w-[170%] lg:w-[160%] xl:w-[150%] max-w-none h-auto object-contain object-bottom md:translate-x-[5%] lg:translate-x-[8%] xl:translate-x-[6%]"
            draggable="false"
          />
        </motion.div>
      </main>
    </div>
  );
}

function AboutPage() {
  return (
    <Layout>
      <Section title="About" subtitle="Academic profile and background">
        <motion.div className="space-y-4" variants={stagger} initial="hidden" animate="show">
          <motion.p variants={cardVariant} className="text-orange-50/95 sm:text-lg" style={{ fontFamily: bodyFont }}>
            {profile.summary}
          </motion.p>
          <motion.div
            variants={cardVariant}
            whileHover={{ scale: 1.02, borderColor: "rgba(255,208,166,0.4)", backgroundColor: "rgba(0,0,0,0.3)" }}
            className="rounded-xl border border-[#FFD0A6]/20 bg-black/20 p-5 transition-shadow hover:shadow-lg hover:shadow-black/20"
          >
            <h2 className="text-xl uppercase text-[#FFD0A6]" style={{ fontFamily: titleFont }}>
              {education.institute}
            </h2>
            <p className="mt-1" style={{ fontFamily: bodyFont }}>{education.location}</p>
            <p className="mt-3" style={{ fontFamily: bodyFont }}>{education.degree}</p>
            <p className="mt-1" style={{ fontFamily: bodyFont }}>GPA: {education.gpa}</p>
            <p className="mt-1" style={{ fontFamily: bodyFont }}>Expected Graduation: {education.expected}</p>
          </motion.div>
        </motion.div>
      </Section>
    </Layout>
  );
}

function SkillsPage() {
  return (
    <Layout>
      <Section title="Technical Skills" subtitle="Core engineering and tooling strengths">
        <motion.div className="grid gap-3 sm:grid-cols-2" variants={stagger} initial="hidden" animate="show">
          {skills.map((item) => (
            <motion.div
              key={item.label}
              variants={cardVariant}
              whileHover={{ scale: 1.03, borderColor: "rgba(255,208,166,0.4)", backgroundColor: "rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl border border-[#FFD0A6]/20 bg-black/20 p-5 cursor-default transition-shadow hover:shadow-lg hover:shadow-black/20"
            >
              <p className="text-sm uppercase text-[#FFD0A6]" style={{ fontFamily: titleFont }}>
                {item.label}
              </p>
              <p className="mt-2 text-orange-50/95 sm:text-lg" style={{ fontFamily: bodyFont }}>
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </Layout>
  );
}

function ProjectsPage() {
  return (
    <Layout>
      <Section title="Projects" subtitle="Selected work and engineering impact">
        <motion.div className="space-y-4" variants={stagger} initial="hidden" animate="show">
          {projects.map((project) => (
            <motion.article
              key={project.name}
              variants={cardVariant}
              whileHover={{ scale: 1.02, borderColor: "rgba(255,208,166,0.4)", backgroundColor: "rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl border border-[#FFD0A6]/20 bg-black/20 p-5 cursor-default transition-shadow hover:shadow-lg hover:shadow-black/20"
            >
              <h3 className="text-xl uppercase text-[#FFD0A6]" style={{ fontFamily: titleFont }}>
                {project.name}
              </h3>
              <p className="mt-1 text-orange-100/90" style={{ fontFamily: bodyFont }}>
                {project.stack} · {project.year}
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-orange-50/95" style={{ fontFamily: bodyFont }}>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </Section>
    </Layout>
  );
}

function RolesPage() {
  return (
    <Layout>
      <Section title="Leadership & Volunteer Experience" subtitle="Responsibility, initiative, and team impact">
        <motion.div className="space-y-4" variants={stagger} initial="hidden" animate="show">
          {roles.map((role) => (
            <motion.article
              key={role.title}
              variants={cardVariant}
              whileHover={{ scale: 1.02, borderColor: "rgba(255,208,166,0.4)", backgroundColor: "rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl border border-[#FFD0A6]/20 bg-black/20 p-5 cursor-default transition-shadow hover:shadow-lg hover:shadow-black/20"
            >
              <h3 className="text-xl uppercase text-[#FFD0A6]" style={{ fontFamily: titleFont }}>
                {role.title}
              </h3>
              <p className="mt-1 text-orange-100/90" style={{ fontFamily: bodyFont }}>
                {role.org} · {role.location}
              </p>
              <p className="text-sm text-orange-100/80" style={{ fontFamily: bodyFont }}>{role.duration}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-orange-50/95" style={{ fontFamily: bodyFont }}>
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </Section>
    </Layout>
  );
}

function ContactPage() {
  return (
    <Layout>
      <Section title="Contact" subtitle="Open to internships, projects, and collaborations">
        <motion.div className="grid gap-3 sm:grid-cols-2" variants={stagger} initial="hidden" animate="show">
          {[
            {
              label: "Phone",
              value: profile.phone,
              href: `tel:${profile.phone}`,
              cta: "Call",
            },
            {
              label: "Email",
              value: profile.email,
              href: `mailto:${profile.email}`,
              cta: "Email",
            },
            {
              label: "LinkedIn",
              value: "linkedin.com/in/adinathmc",
              href: profile.linkedin,
              cta: "Open",
              external: true,
            },
            {
              label: "GitHub",
              value: "github.com/adinathmc",
              href: profile.github,
              cta: "Open",
              external: true,
            },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={cardVariant}
              whileHover={{ scale: 1.03, borderColor: "rgba(255,208,166,0.4)", backgroundColor: "rgba(0,0,0,0.35)" }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl border border-[#FFD0A6]/20 bg-black/20 p-5 cursor-default transition-shadow hover:shadow-lg hover:shadow-black/20"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase text-[#FFD0A6]" style={{ fontFamily: titleFont }}>
                    {item.label}
                  </p>
                  <p
                    className="mt-1 break-words sm:text-lg"
                    style={{ fontFamily: bodyFont, userSelect: "text" }}
                  >
                    {item.value}
                  </p>
                </div>
                <motion.a
                  className="nav-pill bg-[#FFD0A6]/20 text-[#FFD0A6]"
                  href={item.href}
                  style={{ fontFamily: titleFont }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,208,166,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {item.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/roles" element={<RolesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
