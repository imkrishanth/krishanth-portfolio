import { site } from "../site";
import Link from "next/link";

export const metadata = {
  title: "Resume",
  description: "Resume and contact details.",
};

export default function ResumePage() {
  return (
    <main className="noise hero-bg main">
      <div className="container container-narrow section">
        <div className="panel">
          <p className="kicker">Downloads</p>
          <h1 className="h2" style={{ fontSize: 34 }}>
            Resume
          </h1>
          <p className="lead">
            Add your PDF at <span className="hint-code">public/resume.pdf</span>{" "}
            and then update the button on the homepage to link directly to it.
          </p>

          <div className="cta-row">
            <a className="btn btn-primary" href={`mailto:${site.links.email}`}>
              Email {site.name}
            </a>
            <Link className="btn btn-secondary" href="/">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
