import React,{useEffect,useState} from 'react'
// css
import './styles/help.css'
// icons
import { RiWechatPayFill } from "react-icons/ri";

const Help = () => {

// usestate
const [autoUp, setAutoup] = useState("")

  return (
    <div className="help">
        <RiWechatPayFill className="chat-icon"/>
        <div className="chat-support">
            <div className="chat-support-container">
                <div className="chat-support-content">

                </div>
            </div>
        </div>
    </div>
  )
}

export default Help