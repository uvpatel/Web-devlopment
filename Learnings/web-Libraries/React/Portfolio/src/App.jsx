import React from "react"

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">My Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-dark text-light text-center d-flex align-items-center" style={{ height: "100vh" }}>
        <div className="container">
          <h1 className="display-4">Hi, I’m <span className="text-warning">Your Name</span></h1>
          <p className="lead">I’m a Full Stack Developer & Data Scientist</p>
          <a href="#projects" className="btn btn-warning btn-lg mt-3">View My Work</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="https://via.placeholder.com/400" alt="About" className="img-fluid rounded" />
            </div>
            <div className="col-md-6">
              <h2>About Me</h2>
              <p>
                I’m passionate about building scalable web applications and solving real-world problems with AI/ML.
                I enjoy learning new technologies and applying them to impactful projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-light py-5">
        <div className="container text-center">
          <h2>Skills</h2>
          <div className="row mt-4">
            <div className="col-md-3"><div className="card p-3"><h4>React</h4></div></div>
            <div className="col-md-3"><div className="card p-3"><h4>Python</h4></div></div>
            <div className="col-md-3"><div className="card p-3"><h4>Machine Learning</h4></div></div>
            <div className="col-md-3"><div className="card p-3"><h4>SQL</h4></div></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <div className="container text-center">
          <h2>Projects</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Project 1" />
                <div className="card-body">
                  <h5 className="card-title">Project One</h5>
                  <p className="card-text">A short description of the project.</p>
                  <a href="#" className="btn btn-dark">View</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Project 2" />
                <div className="card-body">
                  <h5 className="card-title">Project Two</h5>
                  <p className="card-text">A short description of the project.</p>
                  <a href="#" className="btn btn-dark">View</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Project 3" />
                <div className="card-body">
                  <h5 className="card-title">Project Three</h5>
                  <p className="card-text">A short description of the project.</p>
                  <a href="#" className="btn btn-dark">View</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-light py-5">
        <div className="container text-center">
          <h2>Contact Me</h2>
          <form className="mt-4">
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-dark">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3">
        <p>© {new Date().getFullYear()} Your Name | All Rights Reserved</p>
      </footer>
    </>
  )
}

export default App
