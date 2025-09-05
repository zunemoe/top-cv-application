import { useState } from 'react'
import CVBuilder from './components/CVBuilder/CVBuilder.jsx'
import CVPreview from './components/Preview/CVPreview.jsx'
import useCVData from './hooks/useCVData.js'

function App() {
  const cvDataHook = useCVData()

  return (
    <div className="app">
      <header className="header">
        <h1>CV Builder</h1>          
      </header>

      {/* CV Builder */}
      <CVBuilder cvDataHook={cvDataHook}/>
      
      {/* CV Preview */}
      <CVPreview cvData={cvDataHook.cvData}/>

      <footer className="footer">
        <p>© 2025 CV Builder. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
