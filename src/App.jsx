import Task from './task'
import { useState ,useEffect} from 'react'
import {faPlus,faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import CircularJSON from 'circular-json';
import './App.scss'
// import { compileString } from 'sass';

function App() {
  const [text,setText] = useState('');
  const [store,setStore] = useState([]);
  const [showtask,setShowTask] = useState(false)
  
//   useEffect(()=>{
//       const ts = localStorage.getItem('tasks')
//       if(ts){
//         try{
//           setStore(JSON.parse(ts)) 
//         }catch(e){
//           console.log(e.message)
//         }
//       }
// },[])

//   useEffect(()=>{
//       localStorage.setItem('tasks',JSON.stringify(store))
//   },[store])
  
  function showTask(){
      return setShowTask(true)
  }
  //delet task function 
  function deleteTask(idx){
    const newStore = [...store]
    newStore.splice(idx,1)
    setStore(newStore)
  }
  function addTask(){
    const task = <Task text={text.trim()}/>
    setStore([...store, task])
    setText('')
  }
  function check(){
    if(text === ''){
      alert('type something')
      return null
    }
    else{
      showTask()
      addTask()
    }
  }
  return (
    <>
      <div className='to-do-app'>
          <h1>to-do now</h1>
          <div className='add'>
            <input type='text' value={text} onChange={e=> setText(e.target.value)}/>
            <input type='button' value='Add Task' onClick={()=>check()}/>
            <FontAwesomeIcon icon={faPlus} onClick={()=>check()}/>
          </div>
          <div className='tasks'> 
            {
              showtask && store.map((item,idx)=>{
                return(
                  <div className='task' key={idx}>
                    {item}
                    <FontAwesomeIcon id='delete' icon={faTrash}  onClick={()=> deleteTask(idx)}/>
                  </div>
                )
              })
            }
          </div>
      </div>
    </>
  )
}
export default App
