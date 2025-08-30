import { useState } from 'react'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>CV Builder</h1>          
      </header>

      <div className="cv-builder">
        <div className="builder-tabs">
          <button className="tab content active">Content</button>
          <button className="tab style">Style</button>
        </div>
        <div className="builder-sections">
          <section className="section personal-info">
            <h2>Personal Info</h2>
            <div className="placeholder">Personal Info Form</div>
          </section>

          <section className="section Experience">
            <h2>Experience</h2>
            <div className="placeholder">Experience Form</div>
          </section>

          <section className="section Education">
            <h2>Education</h2>
            <div className="placeholder">Education Form</div>
          </section>

          <section className="section Skills">
            <h2>Skills</h2>
            <div className="placeholder">Skills Form</div>
          </section>
        </div>
      </div>

      <div className="cv-preview">
        <div className="preview-header">
        </div>

        <div className="preview-body">
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 CV Builder. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
