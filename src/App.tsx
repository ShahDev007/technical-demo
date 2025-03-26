// import Image from "./gabriela-fernandez.jpg";
import "./App.css";

export default function Home() {
  return (
    <div className="page-container">
      <header className="header">
        <nav className="nav-container">
          <h1 className="site-title">Dr. Gabriela Fernandez</h1>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <section id="about" className="section">
          <div className="about-container">
            <img
              src="/gabriela-fernandez.jpg"
              alt="Prof. Gabriela Fernandez"
              className="profile-image"
            />
            <div className="about-content">
              <h2 className="section-title">About Prof. Gabriela Fernandez</h2>
              <p className="about-text">
                Dr. Gabriela Fernandez is the Director of the Metabolism of
                Cities Living Lab and Adjunct Faculty for the Master of Science
                in Big Data Analytics Program (BDA) at San Diego State
                University. She also serves as Graduate Advisor for the Master
                of Science in Big Data Analytics Program (physical and BDA
                Online SDSU Global School).
              </p>
              <button className="primary-button">Download CV</button>
            </div>
          </div>
        </section>

        <section id="research" className="section">
          <h2 className="section-title">Research Interests</h2>
          <div className="cards-grid">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Urban Metabolism</h3>
              </div>
              <div className="card-content">
                <p>
                  Research on urban resource flows and sustainable city
                  development through data analytics.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Big Data Analytics</h3>
              </div>
              <div className="card-content">
                <p>
                  Application of data science techniques to understand complex
                  urban systems and environmental challenges.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Geographic Information Science</h3>
              </div>
              <div className="card-content">
                <p>
                  Spatial analysis and GIS applications for urban planning and
                  environmental management.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="publications" className="section">
          <h2 className="section-title">Selected Publications</h2>
          <div className="publications-list">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Publication Title 1</h3>
                <p className="card-subtitle">Journal Name, Year</p>
              </div>
              <div className="card-content">
                <p>Brief description or abstract of the publication.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Publication Title 2</h3>
                <p className="card-subtitle">Journal Name, Year</p>
              </div>
              <div className="card-content">
                <p>Brief description or abstract of the publication.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Publication Title 3</h3>
                <p className="card-subtitle">Journal Name, Year</p>
              </div>
              <div className="card-content">
                <p>Brief description or abstract of the publication.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <div className="contact-card">
            <div className="contact-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <p className="contact-text">
              Get in touch with Dr. Gabriela Fernandez
            </p>
            <p className="contact-subtext">
              For research inquiries, collaboration opportunities, or speaking
              engagements
            </p>
            <p className="contact-email">
              Email:{" "}
              <a href="mailto:gfernandez2@sdsu.edu">gfernandez2@sdsu.edu</a>
            </p>
            <p className="contact-location">Location: Storm Hall - 329</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p className="copyright">
            &copy; 2025 Dr. Gabriela Fernandez. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">ResearchGate</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
