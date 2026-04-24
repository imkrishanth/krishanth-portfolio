import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectSlider } from "../../components/project-slider";
import { site } from "../../site";

type ProjectUiPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return site.projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectUiPage({ params }: ProjectUiPageProps) {
  const { slug } = await params;
  const project = site.projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="main noise hero-bg">
      <section className="section section-color-d project-view-section">
        <div className="container">
          <p className="kicker">Project UI Preview</p>
          <h1 className="h1 page-title" style={{ marginTop: 6 }}>
            {project.title}
          </h1>
          {/* <p className="subhead page-subhead">{project.description}</p> */}
          <div className="page-nav" style={{ marginTop: 14 }}>
            <Link className="btn btn-secondary" href="/projects">
              Back to projects
            </Link>
          </div>

          <ProjectSlider
            title={project.title}
            images={project.screenshots ?? []}
            appType={project.appType}
          />
        </div>
      </section>
    </main>
  );
}
