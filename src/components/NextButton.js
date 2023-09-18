import React from 'react'

function NextButton({dispatch,answer,index,questionsLength}) {

    if(answer === null) return null;

  
    if(index < questionsLength-1){
      return <div>
       <button className='btn btn-ui' onClick={()=>dispatch({type:'nextQuestion'})}>Next</button>
     </div>
    }

    if(index === questionsLength-1){
      return <div>
      <button className='btn btn-ui' onClick={()=>dispatch({type:'dataFinish'})}>Finish</button>
    </div>
    }


}

export default NextButton