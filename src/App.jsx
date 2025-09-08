import { useState } from 'react'
import CVBuilder from './components/CVBuilder/CVBuilder.jsx'
import CVPreview from './components/Preview/CVPreview.jsx'
import useCVData from './hooks/useCVData.js'

function App() {
  const cvDataHook = useCVData()
  const currentYear = new Date().getFullYear()
  return (
    <div className="app">

      {/* CV Builder */}
      <CVBuilder cvDataHook={cvDataHook}/>
      
      {/* CV Preview */}
      <CVPreview cvData={cvDataHook.cvData}/>

      <footer className="footer">
        <p>© {currentYear} CV Builder. Made with ❤️ by zunemoe in Auckland.</p>
      </footer>
    </div>
  )
}

export default App
