import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
const Task = ({text}) => {
    const date = new Date()
    const [process,setProcess] = useState(false)
    return ( 
        <>
                {process ? <p>Processing</p>:<p>{text}</p> }
                {process ? null : <span>{date.toLocaleDateString()}</span>}
                <FontAwesomeIcon id='check' icon={faSpinner}  onClick={()=> setProcess(!process)}/>
                {process && <Loader type='ball-beat' />}
        </>
     );
}
 
export default Task;