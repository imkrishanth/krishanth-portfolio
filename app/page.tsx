import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./components/reveal";
import { site } from "./site";

const featuredProjectTitles = ["Talents Explorer", "22 Yards", "Bodhi"];

const featuredProjects = featuredProjectTitles
  .map((title) =>
    site.projects.find((project) =>
      project.title.toLowerCase().includes(title.toLowerCase())
    )
  )
  .filter((project): project is (typeof site.projects)[number] => Boolean(project));

export default function Home() {
  return (
    <div className="page">
      <main id="top" className="main">
        <section className="noise hero-bg hero-unified">
          <Reveal className="hero-ref-shell" delayMs={70}>
            <div className="hero-ref-inner">
              <div className="hero-ref-body">
                <div className="hero-ref-content">
                  <h1 className="hero-ref-title">
                    Hi, I&apos;m {site.name}
                  </h1>
                  <p className="hero-ref-role">Software Engineer / Specialist in Front end development</p>
                  <p className="hero-ref-copy">{site.headline}</p>

                  <div className="hero-ref-actions">
                    <a className="hero-btn hero-btn-primary" href="#projects">
                      Hire Me
                    </a>
                    <a className="hero-btn hero-btn-outline" href="#contact">
                      Let&apos;s Talk
                    </a>
                    <a className="hero-btn hero-btn-outline" href="/Rathees_Krishanth.pdf" download>
                      Download CV
                    </a>
                  </div>

                  <div className="hero-ref-socials">
                    <a href={site.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <GitHubIcon />
                    </a>
                    <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <LinkedInIcon />
                    </a>
                    <a href={`mailto:${site.links.email}`} aria-label="Email">
                      <MailIcon />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>
        </section>

        <section id="about" className="section section-border section-color-a">
          <div className="container">
            <Reveal className="split" delayMs={40}>
              <div>
                <p className="kicker">A quick snapshot</p>
                <h2 className="h2">About</h2>
                <p className="lead">How I work, what I care about, and what you can expect.</p>
              </div>
              <div>
                <p className="subhead" style={{ marginTop: 0 }}>
                  {site.about}
                </p>
                <div className="about-grid stagger">
                  <InfoCard title="Quality" body="Clean architecture, readable code, and thoughtful UI details." />
                  <InfoCard title="Performance" body="Fast load times, sensible animations, and great Lighthouse scores." />
                  <InfoCard title="Collaboration" body="Clear communication, iteration, and pragmatic delivery." />
                  <InfoCard title="Accessibility" body="Keyboard friendly, contrast-aware, and semantic HTML." />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="skills" className="section section-border section-color-b">
          <div className="container">
            <Reveal delayMs={40}>
              <p className="kicker">Tools I use</p>
              <h2 className="h2">Skills</h2>
              <p className="lead">A quick view of my everyday stack.</p>

              <div className="badge-row stagger">
                {site.skills.map((skill, index) => (
                  <Badge key={skill} variant="soft" className={`d${Math.min((index % 6) + 1, 6)}`}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="experience" className="section section-border section-color-c">
          <div className="container">
            <Reveal delayMs={40}>
              <div className="projects-head">
                <div>
                  <p className="kicker">Professional journey</p>
                  <h2 className="h2">Experience</h2>
                  <p className="lead">Roles and responsibilities across engineering and academia.</p>
                </div>
              </div>

              <div className="experience-grid stagger">
                {site.experiences.map((item, index) => (
                  <ExperienceCard
                    key={`${item.company}-${item.role}`}
                    className={`d${Math.min(index + 1, 6)}`}
                    role={item.role}
                    company={item.company}
                    period={item.period}
                    location={item.location}
                    summary={item.summary}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="projects" className="section section-color-d">
          <div className="container">
            <Reveal delayMs={40}>
              <div className="projects-head">
                <div>
                  <p className="kicker">Selected work</p>
                  <h2 className="h2">Projects</h2>
                  <p className="lead">
                    Showing Talents Explorer, 22 Yards, and Bodhi. Open full list in <span className="hint-code">View more</span>.
                  </p>
                </div>

                <Link className="btn btn-secondary hide-sm" href="/projects">
                  View more -&gt;
                </Link>
              </div>

              <div className="project-grid stagger">
                {featuredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    className={`d${Math.min(index + 1, 6)}`}
                    slug={project.slug}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    href={project.href}
                    repo={project.repo}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="section section-top section-color-e">
          <div className="container">
            <Reveal className="panel" delayMs={50}>
              <div className="split">
                <div>
                  <p className="kicker">Contact</p>
                  <h2 className="h2">Let&apos;s build something great</h2>
                  <p className="lead">
                    Tell me about your project or role and I will reply with next steps, timelines, and a clear plan.
                  </p>
                </div>
                <div>
                  <div className="cta-row stagger" style={{ marginTop: 0 }}>
                    <a className="btn btn-primary d1" href={`mailto:${site.links.email}`}>
                      Email me
                    </a>
                    <a
                      className="btn btn-secondary d2"
                      href={site.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a
                      className="btn btn-secondary d3"
                      href={site.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a className="btn btn-secondary d4" href="/Rathees_Krishanth.pdf" download>
                      Download CV
                    </a>
                  </div>
                  <p className="lead" style={{ marginTop: 10, fontSize: 14 }}>
                    {site.links.phone} | Languages: {site.languages.join(", ")}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner anim a-up d2">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="footer-links stagger">
            {site.socials().map((social, index) => (
              <a
                key={social.label}
                className={`d${Math.min(index + 1, 6)}`}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function Badge({
  children,
  className,
  variant = "solid",
}: {
  children: ReactNode;
  className?: string;
  variant?: "solid" | "soft";
}) {
  const badgeClass = variant === "soft" ? "badge badge-soft" : "badge";
  return <span className={`${badgeClass} ${className ?? ""}`.trim()}>{children}</span>;
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="info-card">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

function ProjectCard({
  slug,
  title,
  description,
  tags,
  href,
  repo,
  className,
}: {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  className?: string;
}) {
  return (
    <div className={`project ${className ?? ""}`.trim()}>
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="project-links">
        <Link className="btn btn-ui" href={`/projects/${slug}`}>
          See UI Portfolio
        </Link>
        {href ? (
          <a className="btn btn-secondary" href={href} target="_blank" rel="noopener noreferrer">
            Live -&gt;
          </a>
        ) : null}
        {repo ? (
          <a className="btn btn-secondary" href={repo} target="_blank" rel="noopener noreferrer">
            Code -&gt;
          </a>
        ) : null}
      </div>
    </div>
  );
}

function ExperienceCard({
  role,
  company,
  period,
  location,
  summary,
  className,
}: {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  className?: string;
}) {
  return (
    <div className={`experience-card ${className ?? ""}`.trim()}>
      <div className="experience-pin" aria-hidden="true" />
      <div className="experience-head">
        <p className="experience-role">{role}</p>
        <p className="experience-period">{period}</p>
      </div>
      <p className="experience-company">
        {company}
        {location ? ` | ${location}` : ""}
      </p>
      <p className="experience-summary">{summary}</p>
    </div>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M12 .5A12 12 0 0 0 8.2 24c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.9 2.2 3.4 1.6.1-.7.4-1.1.7-1.4-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.4-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.2 0 0 .9-.3 3.2 1.1a10.8 10.8 0 0 1 5.8 0c2.2-1.4 3.2-1.1 3.2-1.1.6 1.7.2 2.9.1 3.2.7.9 1.1 1.9 1.1 3.2 0 4.6-2.8 5.6-5.4 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.9-3-1.9 0-2.2 1.5-2.2 2.9V21h-4V9Z" />
    </svg>
  );
}


