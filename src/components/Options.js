import React from 'react'

function Options({question,dispatch,answer}) {

  const hasAnswer = answer !== null


  return (
    <div>
       <div className='options'> 
            {question.options.map((option,index)=>(
               <button 
                 className={`btn btn-option ${index === answer ? 'answer' : '' } 
                  ${ hasAnswer
                     ? index === question.correctOption 
                      ? 'correct' 
                      : 'wrong'  
                     : ''} ` }
                 key={Math.random()}
                 disabled={hasAnswer}
                 onClick={()=>dispatch({type:'selectedAnswer', payload:index})}
                 >{option}</button>
            ))}
      </div>
    </div>
  )
}

export default Options;