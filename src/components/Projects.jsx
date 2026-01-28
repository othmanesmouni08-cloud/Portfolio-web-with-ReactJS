export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <h3>📝 Blog Backend (MongoDB & Express)</h3>
          <p>
            Backend blog application built with Node.js, Express, and MongoDB,
            implementing RESTful APIs, database models, and CRUD operations.
          </p>
          <a
            href="https://github.com/othmanesmouni08-cloud/blog_backend_mongosse"
            target="_blank"
            rel="noopener"
          >
            View on GitHub →
          </a>
        </div>

        <div className="project-card">
          <h3>🔐 Sessions & Cookies Authentication</h3>
          <p>
            Backend project demonstrating session-based authentication and cookies
            management using Express.js, focusing on security and user state handling.
          </p>
          <a
            href="https://github.com/othmanesmouni08-cloud/sessions-and-cookies"
            target="_blank"
            rel="noopener"
          >
            View on GitHub →
          </a>
        </div>

        <div className="project-card">
          <h3>📰 Blog Backend (Node & Express)</h3>
          <p>
            Blog backend built with Node.js and Express.js, featuring routing,
            middleware usage, and API structure for scalable backend development.
          </p>
          <a
            href="https://github.com/othmanesmouni08-cloud/blog_backend"
            target="_blank"
            rel="noopener"
          >
            View on GitHub →
          </a>
        </div>

        <div className="project-card">
          <h3>🎨 Personal Portfolio Website</h3>
          <p>
            Personal portfolio website built with HTML, CSS, and JavaScript,
            featuring a dark aesthetic design, animated navigation, and
            structured sections to present skills, projects, and contact information.
          </p>
          <a
            href="https://github.com/othmanesmouni08-cloud/Portfolio-web"
            target="_blank"
            rel="noopener"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
