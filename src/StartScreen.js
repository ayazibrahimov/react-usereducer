import React from 'react'

export default function StartScreen({questionsLength,dispatch}) {
  return (
    <div className='start'>
        <h2>Welcome to the React Quiz!</h2>
        <h3>{questionsLength} question to test your React mastery</h3>
        <button className='btn btn-ui' onClick={()=>dispatch({type:'active'}) }>Let's start</button>
        {/* <button className='btn btn-ui myBtn' onClick={()=> dispatch({type:'dataRestart'})} >Restart</button> */}
    </div>
  )
}
