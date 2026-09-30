
"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Navbar from "../components/Navbar";
import CustomCursor from "../components/CustomCursor";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const pageRef = useRef(null);

  /* =========================================
     LENIS SMOOTH SCROLL
  ========================================= */

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let animationFrame;

    const raf = (time) => {
      lenis.raf(time);
      ScrollTrigger.update();
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  /* =========================================
     GSAP ANIMATIONS
  ========================================= */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =====================================
         HERO
      ===================================== */

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      heroTimeline
        .from(".navbar", {
          y: -30,
          opacity: 0,
          duration: 0.8,
        })
        .from(
          ".hero-role",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.35"
        )
        .from(
          ".hero-domain",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.45"
        )
        .from(
          ".hero-label",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          ".first-name",
          {
            y: 100,
            opacity: 0,
            duration: 1,
          },
          "-=0.15"
        )
        .from(
          ".last-name",
          {
            y: 100,
            opacity: 0,
            duration: 1,
          },
          "-=0.7"
        )
        .from(
          ".hero-description",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.45"
        )
        .from(
          ".hero-skills",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".hero-bottom",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        );

      /* =====================================
         ABOUT HEADER
      ===================================== */

      gsap.from(".about-header", {
        scrollTrigger: {
          trigger: ".about",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      /* =====================================
         ABOUT CONTENT
      ===================================== */

      gsap.from(".about-title span", {
        scrollTrigger: {
          trigger: ".about-main",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      });

      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: ".about-main",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "power4.out",
      });

      gsap.from(".about-tags span", {
        scrollTrigger: {
          trigger: ".about-tags",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
      });

      /* =====================================
         PROJECTS HEADER
      ===================================== */

      gsap.from(".projects-header", {
        scrollTrigger: {
          trigger: ".projects",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      /* =====================================
         PROJECT CARDS
      ===================================== */

      gsap.utils.toArray(".project-card").forEach((card) => {
        const number = card.querySelector(".project-number");
        const info = card.querySelector(".project-info");
        const visual = card.querySelector(".project-visual");

        const projectTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        });

        projectTimeline
          .from(number, {
            x: -25,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          })
          .from(
            info,
            {
              y: 70,
              opacity: 0,
              duration: 0.9,
              ease: "power4.out",
            },
            "-=0.3"
          )
          .from(
            visual,
            {
              y: 70,
              opacity: 0,
              scale: 0.94,
              duration: 1.1,
              ease: "power4.out",
            },
            "-=0.65"
          );
      });

      /* =====================================
         PROJECT VISUAL PARALLAX
      ===================================== */

      gsap.utils.toArray(".project-visual").forEach((visual) => {
        gsap.to(visual, {
          y: -25,
          ease: "none",
          scrollTrigger: {
            trigger: visual,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      /* =====================================
         SKILLS HEADER
      ===================================== */

      gsap.from(".skills-header", {
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      /* =====================================
         SKILL GROUPS
      ===================================== */

      gsap.utils.toArray(".skill-group").forEach((group) => {
        const label = group.querySelector(".skill-group-label");
        const items = group.querySelectorAll(".skill-item");

        const skillTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: group,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        skillTimeline
          .from(label, {
            x: -35,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          })
          .from(
            items,
            {
              x: 50,
              opacity: 0,
              duration: 0.55,
              stagger: 0.08,
              ease: "power3.out",
            },
            "-=0.35"
          );
      });

      /* =====================================
         SKILLS FOOTER
      ===================================== */

      gsap.from(".skills-footer", {
        scrollTrigger: {
          trigger: ".skills-footer",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

            /* =====================================
         EXPERIENCE ANIMATION
      ===================================== */

      gsap.from(".experience-header", {
        scrollTrigger: {
          trigger: ".experience",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".experience-meta", {
        scrollTrigger: {
          trigger: ".experience-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".experience-company", {
        scrollTrigger: {
          trigger: ".experience-main",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: -70,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".experience-details", {
        scrollTrigger: {
          trigger: ".experience-main",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: 70,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "power4.out",
      });

      gsap.from(".experience-point", {
        scrollTrigger: {
          trigger: ".experience-points",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 25,
        opacity: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".experience-tech span", {
        scrollTrigger: {
          trigger: ".experience-tech",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        y: 15,
        opacity: 0,
        duration: 0.45,
        stagger: 0.07,
        ease: "power3.out",
      });

      gsap.from(".experience-footer", {
        scrollTrigger: {
          trigger: ".experience-footer",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      /* =====================================
   EDUCATION ANIMATION
===================================== */

gsap.from(".education-header", {
  scrollTrigger: {
    trigger: ".education",
    start: "top 75%",
    toggleActions: "play none none reverse",
  },
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
});

gsap.from(".education-year", {
  scrollTrigger: {
    trigger: ".education-content",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  y: 25,
  opacity: 0,
  duration: 0.7,
  ease: "power3.out",
});

gsap.from(".education-degree", {
  scrollTrigger: {
    trigger: ".education-main",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  x: -70,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
});

gsap.from(".education-details", {
  scrollTrigger: {
    trigger: ".education-main",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  x: 70,
  opacity: 0,
  duration: 1,
  delay: 0.15,
  ease: "power4.out",
});

gsap.from(".education-info div", {
  scrollTrigger: {
    trigger: ".education-info",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
  y: 20,
  opacity: 0,
  duration: 0.55,
  stagger: 0.12,
  ease: "power3.out",
});

gsap.from(".certifications-heading", {
  scrollTrigger: {
    trigger: ".certifications",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
  y: 25,
  opacity: 0,
  duration: 0.7,
  ease: "power3.out",
});

gsap.from(".certification-item", {
  scrollTrigger: {
    trigger: ".certification-list",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
  x: 50,
  opacity: 0,
  duration: 0.6,
  stagger: 0.12,
  ease: "power3.out",
});

gsap.from(".education-footer", {
  scrollTrigger: {
    trigger: ".education-footer",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
  y: 20,
  opacity: 0,
  duration: 0.6,
  ease: "power3.out",
});

/* =====================================
   CONTACT ANIMATION
===================================== */

gsap.from(".contact-header", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 75%",
    toggleActions: "play none none reverse",
  },
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
});

gsap.from(".contact-title span", {
  scrollTrigger: {
    trigger: ".contact-main",
    start: "top 75%",
    toggleActions: "play none none reverse",
  },
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.15,
  ease: "power4.out",
});

gsap.from(".contact-details", {
  scrollTrigger: {
    trigger: ".contact-main",
    start: "top 75%",
    toggleActions: "play none none reverse",
  },
  x: 70,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power4.out",
});

gsap.from(".contact-email", {
  scrollTrigger: {
    trigger: ".contact-email",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
  y: 25,
  opacity: 0,
  duration: 0.7,
  ease: "power3.out",
});

gsap.from(".contact-links a", {
  scrollTrigger: {
    trigger: ".contact-links",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
  y: 20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  ease: "power3.out",
});

gsap.from(".contact-footer", {
  scrollTrigger: {
    trigger: ".contact-footer",
    start: "top 95%",
    toggleActions: "play none none reverse",
  },
  y: 20,
  opacity: 0,
  duration: 0.6,
  ease: "power3.out",
});

      ScrollTrigger.refresh();
    }, pageRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main ref={pageRef}>
      <Navbar />
      <CustomCursor />

      {/* =====================================
          HERO
      ===================================== */}

      <section className="hero">
        <div className="hero-top">
          <div className="hero-role">
            <span className="status-dot"></span>
            <span>SOFTWARE DEVELOPMENT INTERN</span>
          </div>

          <div className="hero-domain">
            FRONTEND DEVELOPMENT
            <span>×</span>
            AI / ML
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-label">
            <span>01</span>
            <span>INTRODUCTION</span>
          </div>

          <h1 className="hero-name">
            <span className="first-name">Avni</span>
            <span className="last-name">Sharma</span>
          </h1>

          <div className="hero-description">
            <h2>
              Turning ideas into
              <span> thoughtful digital experiences.</span>
            </h2>

            <p>
              I build clean, responsive and interactive digital experiences
              while exploring the intersection of frontend development and AI.
            </p>
          </div>

          <div className="hero-skills">
            <span>React.js</span>
            <i></i>
            <span>JavaScript</span>
            <i></i>
            <span>AI / ML</span>
            <i></i>
            <span>Gemini API</span>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="scroll-indicator">
            <span className="scroll-line"></span>
            <span>SCROLL TO EXPLORE</span>
          </div>

          <div className="hero-location">BASED IN INDIA</div>
        </div>
      </section>

      {/* =====================================
          ABOUT
      ===================================== */}

      <section className="about" id="about">
        <div className="about-header">
          <div className="section-number">
            <span>02</span>
            <span>ABOUT ME</span>
          </div>

          <p className="about-intro">
            A frontend-focused developer with a growing interest in
            AI-powered digital experiences.
          </p>
        </div>

        <div className="about-main">
          <div className="about-title">
            <span>BUILDING</span>
            <span>
              WITH <em>CURIOUSITY.</em>
            </span>
          </div>

          <div className="about-content">
            <p>
              I am a Software Development Intern focused on building clean,
              responsive and user-friendly web interfaces.
            </p>

            <p>
              My work mainly revolves around frontend development using
              HTML, CSS, JavaScript and React.js, while I continue exploring
              AI, machine learning and AI-powered applications.
            </p>

            <p>
              I enjoy turning ideas into practical digital experiences and
              learning new technologies by building real projects.
            </p>

            <div className="about-tags">
              <span>FRONTEND</span>
              <span>REACT.JS</span>
              <span>JAVASCRIPT</span>
              <span>AI / ML</span>
              <span>PROBLEM SOLVING</span>
            </div>
          </div>
        </div>

        <div className="about-footer">
          <span>BASED IN INDIA</span>
          <span>OPEN TO LEARNING & BUILDING</span>
        </div>
      </section>

      {/* =====================================
          PROJECTS
      ===================================== */}

      <section className="projects" id="projects">
        <div className="projects-header">
          <div className="section-number">
            <span>03</span>
            <span>SELECTED PROJECTS</span>
          </div>

          <p className="projects-intro">
            A collection of projects where I experiment, build and turn ideas
            into working digital experiences.
          </p>
        </div>

        <div className="projects-list">

          {/* PROJECT 01 */}

          <article className="project-card">
            <div className="project-number">01</div>

            <div className="project-info">
              <div className="project-type">
                AI / FRONTEND
              </div>

              <h2>Luna</h2>

              <h3>Your Mood Companion</h3>

              <p>
                An AI-powered mood and relaxation experience designed to help
                users explore their mood, interact with an AI companion and
                discover calming activities.
              </p>

              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Gemini API</span>
              </div>

              <a
                href="https://phenomenal-tulumba-8fe0b1.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <span>VIEW LIVE PROJECT</span>
                <span className="project-arrow">↗</span>
              </a>
            </div>

            <div className="project-visual luna-visual">
              <div className="visual-glow"></div>
              <div className="visual-orbit orbit-one"></div>
              <div className="visual-orbit orbit-two"></div>

              <div className="visual-center">
                <span>LUNA</span>
                <small>MOOD COMPANION</small>
              </div>
            </div>
          </article>

          {/* PROJECT 02 */}

          <article className="project-card project-reverse">
            <div className="project-number">02</div>

            <div className="project-info">
              <div className="project-type">
                FRONTEND / MANAGEMENT
              </div>

              <h2>StaySphere</h2>

              <h3>Hotel & Management Resources</h3>

              <p>
                A responsive frontend website created around hotel management
                resources, with structured interfaces, reusable components and
                responsive layouts for different screen sizes.
              </p>

              <div className="project-tech">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Responsive UI</span>
              </div>

              <a
                href="https://stay-sphere-hotel-resources-and-man.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <span>VIEW LIVE PROJECT</span>
                <span className="project-arrow">↗</span>
              </a>
            </div>

            <div className="project-visual stay-visual">
              <div className="stay-window">
                <div className="stay-window-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="stay-content">
                  <div className="stay-sidebar"></div>

                  <div className="stay-main">
                    <div className="stay-heading"></div>

                    <div className="stay-grid">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* PROJECT 03 */}

          <article className="project-card">
            <div className="project-number">03</div>

            <div className="project-info">
              <div className="project-type">
                PRODUCTIVITY / WEB APP
              </div>

              <h2>Daily Task</h2>

              <h3>Personalization</h3>

              <p>
                A personalized task management experience combining daily
                planning, diet tracking, analytics, profile management and
                authentication into one application.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>TypeScript</span>
                <span>Tailwind</span>
                <span>Convex</span>
                <span>Vite</span>
              </div>
            </div>

            <div className="project-visual task-visual">
              <div className="task-circle">
                <span>01</span>
              </div>

              <div className="task-lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </article>

        </div>

        <div className="projects-footer">
          <span>MORE PROJECTS</span>
          <span>COMING SOON</span>
        </div>
      </section>

      {/* =====================================
          SKILLS
      ===================================== */}

      <section className="skills-section" id="skills">
        <div className="skills-header">
          <div className="section-number">
            <span>04</span>
            <span>SKILLS & TOOLS</span>
          </div>

          <p className="skills-intro">
            Technologies I use to build interfaces and explore
            AI-powered digital experiences.
          </p>
        </div>

        <div className="skills-content">

          {/* FRONTEND */}

          <div className="skill-group">
            <div className="skill-group-label">
              <span>01</span>
              <span>FRONTEND</span>
            </div>

            <div className="skill-items">
              <div className="skill-item">
                <span className="skill-name">HTML5</span>
                <span className="skill-index">01</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">CSS3</span>
                <span className="skill-index">02</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">JavaScript</span>
                <span className="skill-index">03</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">React.js</span>
                <span className="skill-index">04</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">
                  Responsive Web Design
                </span>
                <span className="skill-index">05</span>
              </div>
            </div>
          </div>

          {/* AI / DEVELOPMENT */}

          <div className="skill-group">
            <div className="skill-group-label">
              <span>02</span>
              <span>AI / DEVELOPMENT</span>
            </div>

            <div className="skill-items">
              <div className="skill-item">
                <span className="skill-name">Python</span>
                <span className="skill-index">01</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">AI / ML</span>
                <span className="skill-index">02</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">NLP</span>
                <span className="skill-index">03</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">Gemini API</span>
                <span className="skill-index">04</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">C / Java</span>
                <span className="skill-index">05</span>
              </div>
            </div>
          </div>

          {/* TOOLS */}

          <div className="skill-group">
            <div className="skill-group-label">
              <span>03</span>
              <span>TOOLS & OTHER</span>
            </div>

            <div className="skill-items">
              <div className="skill-item">
                <span className="skill-name">Git / GitHub</span>
                <span className="skill-index">01</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">VS Code</span>
                <span className="skill-index">02</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">PyCharm</span>
                <span className="skill-index">03</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">Basic SQL</span>
                <span className="skill-index">04</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">TypeScript</span>
                <span className="skill-index">05</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">Netlify</span>
                <span className="skill-index">06</span>
              </div>
            </div>
          </div>

        </div>

        <div className="skills-footer">
          <span>CONTINUOUSLY LEARNING</span>
          <span>BUILD • EXPERIMENT • IMPROVE</span>
        </div>
      </section>

      {/* =====================================
    EXPERIENCE
===================================== */}

<section className="experience" id="experience">
  <div className="experience-header">
    <div className="section-number">
      <span>05</span>
      <span>EXPERIENCE</span>
    </div>

    <p className="experience-intro">
      Learning, building and contributing to real-world
      software development.
    </p>
  </div>

  <div className="experience-content">

    <div className="experience-meta">
      <span>2026 — PRESENT</span>
      <span>JAIPUR, INDIA</span>
    </div>

    <div className="experience-main">

      <div className="experience-company">
        <span className="experience-label">
          SOFTWARE DEVELOPMENT INTERN
        </span>

        <h2>
          WebSquare
          <span>Software Pvt. Ltd.</span>
        </h2>
      </div>

      <div className="experience-details">

        <p className="experience-summary">
          Working on web interfaces and software development
          workflows while gaining hands-on experience with
          frontend technologies and real-world applications.
        </p>

        <div className="experience-points">

          <div className="experience-point">
            <span>01</span>
            <p>
              Building clean and responsive web interfaces using
              HTML, CSS, JavaScript and React.js.
            </p>
          </div>

          <div className="experience-point">
            <span>02</span>
            <p>
              Working with existing application workflows,
              debugging issues and improving frontend experiences.
            </p>
          </div>

          <div className="experience-point">
            <span>03</span>
            <p>
              Using Git and GitHub for development workflows,
              version control and collaboration.
            </p>
          </div>

          <div className="experience-point">
            <span>04</span>
            <p>
              Exploring practical software development while
              learning how real-world projects are designed,
              developed and maintained.
            </p>
          </div>

        </div>

        <div className="experience-tech">
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>
          <span>REACT.JS</span>
          <span>GIT</span>
          <span>GITHUB</span>
        </div>

      </div>
    </div>
  </div>

  <div className="experience-footer">
    <span>PROFESSIONAL EXPERIENCE</span>
    <span>LEARNING THROUGH BUILDING</span>
  </div>
</section>

      {/* =====================================
          EDUCATION
      ===================================== */}

      <section className="education" id="education">
        <div className="education-header">
          <div className="section-number">
            <span>06</span>
            <span>EDUCATION</span>
          </div>

          <p className="education-intro">
            The academic foundation behind my journey into software
            development, AI and technology.
          </p>
        </div>

        <div className="education-content">
          <div className="education-year">
            <span>2023</span>
            <span>—</span>
            <span>2027</span>
          </div>

          <div className="education-main">
            <div className="education-degree">
              <span className="education-label">
                BACHELOR OF TECHNOLOGY
              </span>

              <h2>
                Computer Science
                <span>Artificial Intelligence & Machine Learning</span>
              </h2>
            </div>

            <div className="education-details">
              <h3>
                University of Engineering
                <span>and Management</span>
              </h3>

              <div className="education-info">
                <div>
                  <span>CGPA</span>
                  <strong>7.90 / 10</strong>
                </div>

                <div>
                  <span>STATUS</span>
                  <strong>EXPECTED 2027</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="certifications">
          <div className="certifications-heading">
            <span>07</span>
            <span>CERTIFICATIONS</span>
          </div>

          <div className="certification-list">
            <div className="certification-item">
              <span>01</span>

              <div>
                <h3>Internet of Things</h3>
                <p>NPTEL</p>
              </div>

              <span className="certification-arrow">↗</span>
            </div>

            <div className="certification-item">
              <span>02</span>

              <div>
                <h3>
                  Databases and SQL for Data Science with Python
                </h3>
                <p>Coursera</p>
              </div>

              <span className="certification-arrow">↗</span>
            </div>
          </div>
        </div>

        <div className="education-footer">
          <span>LEARN • BUILD • GROW</span>
          <span>ACADEMIC FOUNDATION</span>
        </div>
      </section>

            {/* =====================================
          CONTACT
      ===================================== */}

      <section className="contact" id="contact">
        <div className="contact-header">
          <div className="section-number">
            <span>08</span>
            <span>CONTACT</span>
          </div>

          <p className="contact-intro">
            Have an idea, opportunity or simply want to connect?
            Let's start a conversation.
          </p>
        </div>

        <div className="contact-main">
          <div className="contact-title">
            <span>LET'S</span>
            <span>
              WORK <em>TOGETHER.</em>
            </span>
          </div>

          <div className="contact-details">
            <p className="contact-description">
              I'm always interested in learning, building and
              exploring new opportunities in software development,
              frontend and AI.
            </p>

            <a
              href="mailto:sharmaavnii861@gmail.com"
              className="contact-email"
            >
              <span>sharmaavnii861@gmail.com</span>
              <span>↗</span>
            </a>

            <div className="contact-links">
              <a
                href="https://linkedin.com/in/avni-sharma-5a7014287"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
                <span>↗</span>
              </a>

              <a
                href="https://github.com/avni-099"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
                <span>↗</span>
              </a>

              <a href="tel:8619827778">
                PHONE
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <div>
            <span>AVNI SHARMA</span>
            <span>SOFTWARE DEVELOPMENT INTERN</span>
          </div>

          <div>
            <span>© 2026</span>
            <span>BUILT WITH NEXT.JS</span>
          </div>
        </div>
      </section>
    </main>
  );
}