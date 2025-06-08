import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import "./Submitted.css"

const SubmittedDataPage = () => { 
const {state} = useLocation();
const navigate = useNavigate();
if(!state){
    return (
        <>
        <p>No data found</p>
        <button onClick={()=>(navigate('/'))}>Go back</button>
        </>
    )
}
  
    
  return (
    <>
    <div className="background-wrapper">
    <div className="animated-blob"></div>
    <div className="data-card">

    <h3 style={{textAlign:"center"}}>Submitted Data</h3>
    <ul>
        {Object.entries(state)
        .filter(([key]) => key !== 'showPassword') //filtering out the showPassword section 
        .map(([key, value]) => (
            <li key={key}>
                <strong>{key}:</strong> {value.toString()}
            </li>
        ))}

    </ul>
    <button className="back-btn" onClick={() => (navigate('/'))}>Back to form</button>
        </div>
    </div>
    </>
  )
}

export default SubmittedDataPage