import type { Metadata } from "next";
import Image from "next/image";
import { site } from "../site";

export const metadata: Metadata = {
  title: "UI Portfolio",
  description: "UI design showcase of web and mobile applications.",
};

export default function UiPortfolioPage() {
  return (
    <main className="main noise hero-bg">
      <section className="section section-color-e">
        <div className="container">
          <div className="design-grid stagger">
            {site.uiDesigns.map((design, index) => (
              <article key={design.title} className={`design-card d${Math.min((index % 6) + 1, 6)}`}>
                <div className="design-frame">
                  <div className="project-type">{design.appType} App</div>
                  {design.image ? (
                    <Image
                      src={design.image}
                      alt={`${design.title} screenshot`}
                      width={520}
                      height={980}
                      className="design-img"
                    />
                  ) : (
                    <p className="hint-code" style={{ margin: "12px" }}>
                      Add image path
                    </p>
                  )}
                </div>
                <div className="design-content">
                  <h3>{design.title}</h3>
                  <p className="design-meta">{design.summary}</p>
                  {design.images?.length ? (
                    <div className="design-shot-grid">
                      {design.images.map((imagePath, screenshotIndex) => (
                        <div key={imagePath} className="design-shot">
                          <Image
                            src={imagePath}
                            alt={`${design.title} screen ${screenshotIndex + 1}`}
                            width={220}
                            height={420}
                            className="design-shot-image"
                          />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
