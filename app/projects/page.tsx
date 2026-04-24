import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "../components/reveal";
import { site } from "../site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Full project list from Rathees Krishanth portfolio.",
};

export default function ProjectsPage() {
  return (
    <main className="main noise hero-bg">
      <section className="section section-color-d">
        <div className="container">
          <Reveal delayMs={60}>
            <div className="page-grid stagger">
              {site.projects.map((project, index) => (
                <article key={project.title} className={`project-full d${Math.min((index % 6) + 1, 6)}`}>
                  <h3>{project.title}</h3>
                  <p className="design-meta">{project.description}</p>

                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <Link className="btn btn-ui" href={`/projects/${project.slug}`}>
                      See UI Portfolio
                    </Link>
                    {project.href ? (
                      <a
                        className="btn btn-secondary"
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live -&gt;
                      </a>
                    ) : null}
                    {project.repo ? (
                      <a
                        className="btn btn-secondary"
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code -&gt;
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
