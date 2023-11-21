import React from 'react'
import '../Styles/Skill.css'

function Skills() {
  return (
    <div className='skills'>
      <div className='skillContainer'>
        <div className='skill_titleCenter'>
            <p>Tech stacks that farmilar up tp some extend...</p>
        </div>

        <div className='skilss-items'>

            <div className='skills-item'>
                <div className='skill-info'>
                    <p>React</p>
                    <p>70%</p>
                </div>
                
                <div className='progress-line' data-percent="70%">
                    <span style={{width:"70%"}}></span>
                </div>
            </div>

            <div className='skills-item'>
                <div className='skill-info'>
                    <p>Java</p>
                    <p>60%</p>
                </div>
                
                <div className='progress-line' data-percent="70%">
                    <span style={{width:"60%"}}></span>
                </div>
            </div>

            <div className='skills-item'>
                <div className='skill-info'>
                    <p>.NET</p>
                    <p>80%</p>
                </div>
                
                <div className='progress-line' data-percent="70%">
                    <span style={{width:"80%"}}></span>
                </div>
            </div>

            <div className='skills-item'>
                <div className='skill-info'>
                    <p>Javascript</p>
                    <p>75%</p>
                </div>
                
                <div className='progress-line' data-percent="70%">
                    <span style={{width:"75%"}}></span>
                </div>
            </div>

            <div className='skills-item'>
                <div className='skill-info'>
                    <p>SQL</p>
                    <p>90%</p>
                </div>
                
                <div className='progress-line' data-percent="90%">
                    <span style={{width:"90%"}}></span>
                </div>
            </div>
        </div>
      </div>

            <div className='softSkills'>
            <h2>Soft Skills</h2>

            <ul>
                <li>PUblic speaking</li>
                <li>Leadership</li>
                <li>Time management</li>
                <li>Good commiunication</li>
                <li>Team work</li>
            </ul>
            </div>
    </div>
  )
}

export default Skills





