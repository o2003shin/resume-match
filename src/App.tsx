import resumeLogo from './assets/paper-logo.png'
import './App.css'
import { useState } from 'react'
import { compareKeywords } from './utils/textAnalyzer'
import type { analysisResult } from './interfaces/comparisonResult.interface'
import ResultCard from './components/ResultCard'

function App() {

  const [resume, setResume] = useState<string>('')
  const [jobDesc, setJobDesc] = useState<string>('')
  const [ result, setResult ] = useState<boolean>(false);
  const [ analysis, setAnalysis ] = useState<analysisResult>({});

  const handleClick = () => {
    console.log("Button Clicked")
    if (result == false) { 
      setResult(true);
    }
    // Get the results
    setAnalysis(compareKeywords(resume, jobDesc)); 
  }

  const handleResumeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log("Changes in resume detected");
    setResume(e.target.value);
    // setResult(false);
  }

  const handleJobDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log("Changes in job description detected");
    setJobDesc(e.target.value);
    // setResult(false);
  }

  return (
    <>
      <div className="logo-title">
        <img src={resumeLogo} className="logo resume" alt="Resume logo" />
        <h1 style={{
          fontSize: "32px"
        }}>Resume Match</h1>
      </div>
      <div className="resume-job-input">
        <div className="text-boxes">
          <section className="user-text">
            <div className="resume">
              <label>
                <h4>Paste your resume</h4>
                <textarea placeholder='Resume'
                  value={resume}
                  onChange={handleResumeChange} />
              </label>
            </div>
            <div className="job-description">
              <label>
                <h4>Paste your job description</h4>
                <textarea placeholder='Job description'
                  value={jobDesc}
                  onChange={handleJobDescChange} />
              </label>
            </div>
          </section>
          <button onClick={handleClick}>Compare</button>
          {result && (
            <>
              <h2>Results</h2>
              <ResultCard analysis={analysis}/>
            </>
          )}
          <h2 style={{
            fontSize: "28px"
          }}>What is Resume Match?</h2>
          <p style={{
            fontSize: "18px"
          }}>
            Resume Match allows you to compare your resume with a job description.<br/>
            Keywords are taken from both your resume and the job description and a match percentage is calculated.<br/>
            You get to see what matching and missing keywords.
          </p>
        </div>
      </div>
    </>
  )
}

export default App
