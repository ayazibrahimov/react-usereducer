import { useReducer } from "react";


const initialState = { count:0 , step:1  }

function reducers(state,action){

  console.log(state);

  switch(action.type){
    case 'inc':
      return {...state, count:state.count + state.step}
    case 'dec':
       return {...state, count:state.count - state.step}  
    case 'dispatch':
      return {...state, step:action.payload}  
    case 'setCount':
       return {...state, count:action.payload }
    case 'reset':
       return {...initialState}   
      
     default:
      throw new Error('Sehfi duzelt')
  }



}


function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);



  const [ state, dispatch ] = useReducer(reducers, initialState)

  const {count,step} = state



  const date = new Date('30 May 1998')
  date.setDate(date.getDate() + count)



  function dec(){
    // setCount((count)=>count-step)
    dispatch({type:'dec'})
  }

  function inc(){
    // setCount((count)=>count+step)
    dispatch({type:'inc'})
    
  }



  function defineStep(e){
    // setStep(Number(e.target.value))

    dispatch({type:'dispatch', payload:Number(e.target.value)})

  }


  function defineCount(e){
    // setCount(Number(e.target.value))
    dispatch({type:'setCount', payload:Number(e.target.value)})
  }


  function reset(){
    // setStep(1)
    // setCount(0)
    dispatch({type:'reset'})
  }
  

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button 
        onClick={dec}
        >-</button>
        <input 
        value={count}
         onChange={defineCount}
          />
        <button
         onClick={inc}
         >+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button 
        onClick={reset}
        >Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
