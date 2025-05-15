import resumeLogo from './assets/paper-logo.png'
import './App.css'
import { useState } from 'react'

function App() {

  const [resume, setResume] = useState<string>('')
  const [jobDesc, setJobDesc] = useState<string>('')

  return (
    <>
      <div className="logo-title">
        <img src={resumeLogo} className="logo resume" alt="Resume logo" />
        <h1>Resume Match</h1>
      </div>
      <div className="resume-job-input">
        <div className="text-boxes">
          <section className="user-text">
            <div className="resume">
              <label>
                <h4>Paste your resume</h4>
                <textarea placeholder='Resume'
                  defaultValue={''}
                  value={resume}
                  onChange={e => setResume(e.target.value)} />
              </label>
            </div>
            <div className="job-description">
              <label>
                <h4>Paste your job description</h4>
                <textarea placeholder='Job description'
                  defaultValue={''}
                  value={jobDesc}
                  onChange={e => setJobDesc(e.target.value)} />
              </label>
            </div>
          </section>
          {/* Tesing: REMOVE LATER */}
          {(resume != '' || jobDesc != '') && (
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px"
            }}>
              <p>
                {resume}
              </p>
              <p>
                {jobDesc}
              </p>
            </div>
          )}
          <button>Analyze</button>
        </div>
      </div>
    </>
  )
}

export default App
