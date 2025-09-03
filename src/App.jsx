import { useState } from 'react'
import CVBuilder from './components/CVBuilder.jsx'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>CV Builder</h1>          
      </header>

      {/* CV Builder */}
      <CVBuilder />
      
      {/* CV Preview */}
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
