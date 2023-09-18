import React from 'react'

function FinishScreen({points,overallPoints,dispatch}) {

    let percentage = (points / overallPoints) * 100



  return (
    <div className='result'>
        <p> Your score is <strong> {points} out of {overallPoints}</strong> ({Math.ceil(percentage)} %) </p>
        <div>
        <button className='btn btn-ui myBtn' onClick={()=> dispatch({type:'dataRestart'})} >Restart</button>
        </div>
    </div>
  )
}


export default FinishScreen;
