import {useEffect, useReducer} from "react";
// import DataCounter from "./DateCounter";
import Header from './Header'
import Main from "./Main";
import Error from './Error'
import Loader from './Loader'
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Timer from "./components/Timer";




const initialState = {
  questions:[],
  status:'loading',
  index:0,
  answer:null,
  points: 0
}



function reducer(state, action){

  switch(action.type){
    case 'dataReceived':
      return {
        ...state,
        questions:action.payload,
        status:'ready'
      }
    case 'dataFailed':
      return {
        ...state,
        status:'error'
      }  
      case 'active':
        return{
          ...state,
          status :'active',
          timerCount: 6666
        }
      case 'selectedAnswer': 

      const curretnCuestion = state.questions.at(state.index)

      return{
        ...state,
        answer:action.payload,
        points: action.payload === curretnCuestion.correctOption
          ? state.points + curretnCuestion.points 
          : state.points
      }

      case 'nextQuestion' :
        return{
          ...state,
          index: state.index + 1,
          answer: null
        }
        case 'dataFinish':
        return{
          ...state,
          status:'finished'
        }
        case 'dataRestart':
          return{
            ...state,
            index:0,
            status:'ready',
            answer:null,
            points: 0
          }

      default:
        throw new Error('Sehfi düzəlt')

  }

}



function App() {

  const [{status,questions,answer,index,points,timerCount},dispatch] = useReducer(reducer, initialState)


  // console.log(questions);

  //  let overallPoints = 0

  //  questions.map(data=>{
  //    return overallPoints+=data.points
  //  })


  let overallPoints = questions.reduce((prev,cur)=> prev+cur.points,0)

  const questionsLength = questions.length

  useEffect(()=>{
    
    fetch('http://localhost:7272/questions')
    .then(res=>res.json())
    .then(data=>dispatch({type:"dataReceived",payload:data }))
    .catch(err=>dispatch({type:"dataFailed"}))

  }, [])


  // function handleClickData(){
  //   dispatch({type:'active'})

  return (
    <div className="app">
       <Header />


      <Main>
        {status === 'loading' &&   <Loader />}
        {status === 'error'   &&   <Error />}
        {status === 'ready'   &&   <StartScreen dispatch={dispatch} questionsLength={questionsLength} />}
        {status === 'active'  &&   
        
           <>
            <Progress index={index} questionsLength={questionsLength} points={points} overallPoints={overallPoints} answer={answer} />
            <Question question={questions[index]} dispatch={dispatch} answer={answer} /> 
            <Timer timerCount={timerCount} />
            <NextButton dispatch={dispatch} index={index} questionsLength={questionsLength} answer={answer} />
            
           </>
        }

        {status === 'finished' &&  <FinishScreen 
        points={points} 
        overallPoints={overallPoints}
        dispatch={dispatch}
        /> }
        
      </Main>


    </div>
  );
}

export default App;
