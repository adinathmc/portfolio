import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay },
  }),
};

function App() {
  const accent = "#FFD0A6";

  return (
    <div
      className="min-h-screen overflow-x-hidden text-[#FFD0A6]"
      style={{ background: "linear-gradient(135deg, #FC3F00 0%, #C80302 100%)" }}
    >
      <motion.header
        className="mx-auto flex w-[min(1280px,95vw)] items-center gap-4 px-2 pt-6 text-[11px] uppercase tracking-wide sm:gap-6 sm:pt-9 sm:text-base"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
      >
        <nav
          className="flex flex-wrap items-center gap-2 sm:gap-4"
          style={{ fontFamily: '"Akira Expanded", "Arial Black", sans-serif' }}
        >
          {["ABOUT", "SKILLS", "PROJECTS", "ROLES", "CONTACT"].map((item) => (
            <a key={item} href="#" className="nav-pill">
              {item}
            </a>
          ))}
        </nav>
      </motion.header>

      <main className="mx-auto grid w-[min(1280px,95vw)] grid-cols-1 items-start gap-2 px-2 pt-4 sm:pt-8 md:grid-cols-[1.1fr_0.9fr]">
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="max-w-[900px] pl-1 pt-1 sm:pl-2 sm:pt-2 md:pl-12 md:pt-16"
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
            style={{ fontFamily: '"Fontspring Demo", "Trebuchet MS", sans-serif' }}
          >
            I am Adinath, a Computer Science student at CUSAT with a passion for
            AI, automation, and Backend development. I build things that are
            actually useful, from intelligent backends to data pipelines.
          </p>
          <div
            className="mt-10 space-y-3 text-lg uppercase sm:mt-14 sm:text-xl md:text-[19px]"
            style={{ fontFamily: '"Akira Expanded", "Arial Black", sans-serif' }}
          >
            <a
              href="#"
              className="block w-fit transition-transform hover:translate-x-1"
            >
              GRAB MY RESUME
            </a>
            <a
              href="#"
              className="block w-fit transition-transform hover:translate-x-1"
            >
              VIEW MY PROJECTS
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 pb-4 sm:mt-9 sm:gap-5 sm:pb-8">
            <a
              href="https://www.linkedin.com/in/adinathmc"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-md bg-[#FFD0A6] text-[#171725] transition-transform hover:-translate-y-0.5 sm:h-11 sm:w-11 md:h-12 md:w-12"
            >
              <span className="text-xl font-black leading-none sm:text-2xl md:text-[28px]">in</span>
            </a>
            <a
              href="https://github.com/adinathmc"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full bg-[#FFD0A6] text-[#171725] transition-transform hover:-translate-y-0.5 sm:h-11 sm:w-11 md:h-12 md:w-12"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current sm:h-6 sm:w-6 md:h-7 md:w-7">
                <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.39-2.05 1.03-2.77-.1-.27-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.06a9.3 9.3 0 0 1 5 0c1.9-1.34 2.75-1.06 2.75-1.06.55 1.43.2 2.48.1 2.75.64.72 1.03 1.64 1.03 2.77 0 3.96-2.34 4.83-4.57 5.09.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.28 10.28 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
              </svg>
            </a>
          </div>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="relative h-[360px] overflow-hidden sm:h-[500px] md:h-[700px]"
        >
          <img
            src="/hero-cutout.png"
            alt="Adinath portrait"
            className="absolute inset-0 h-full w-full object-contain object-right-bottom md:scale-[1.03]"
            draggable="false"
          />
        </motion.section>
      </main>
    </div>
  );
}

export default App;
