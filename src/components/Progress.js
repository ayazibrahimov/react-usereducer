import React from 'react'

function Progress({index,questionsLength,points,overallPoints,answer}) {
  return (
    <div>
        <header className='progress'>
           
            <progress max={questionsLength} value={index + Number(answer !== null )} />

            <p>
               Question <strong>{index+1}</strong> / {questionsLength}
            </p>

            <p><strong>Points:{points}</strong> / {overallPoints} </p>
        </header>
    </div>
  )
}

export default Progress