import React,{useState} from 'react'
// css
import '../styles/createTask.css'
// icons
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


const CreateTask = () => {
const [page,setPage] = useState("")
const [pageno,setPageno] = useState("1")

const nextBtn = () => {
    if (page === "") {
        setPage("second")
        setPageno("2")
    } 
    if (page === "second") {
        setPage("third")
        setPageno("3")
    }
}
const prevBtn = () => {
    if (page === "second") {
        setPage("")
        setPageno("1")
    } 
    if (page === "third"){
        setPage("second")
        setPageno("2")
    }
}

  return (
    <div className="createTask">
        <div className="crtTask-container">
            <section className='crtLeft'>
                <div className="crtTask-header">
                    <h1>Create Task to do</h1>
                </div>
                <h2>Fill this form to create a task</h2>
                <div className="crtTask-content">
                    <section className={`crtContent1 ${page}`}>
                        <p>Select Location</p>
                        <select name="" id="">
                            <option value="">Select Location</option>
                            <option value="Philippines">Philippines</option>
                        </select>
                        <p>Task to Create</p>
                        <select name="" id="">
                            <option value="">Select Task</option>
                            <option value="Philippines">Gardener</option>
                        </select>
                        <p>Mode of payment</p>
                        <select name="" id="">
                            <option value="">Mode of Payment</option>
                            <option value="Philippines">Gcash</option>
                        </select>
                    </section>
                    <section className={`crtContent2 ${page}`}>
                        <h1>Task Decription</h1>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Input Task details here...'></textarea>
                        <p>Make the Description more detailed and specific so that the tasker understand it easily</p>
                    </section>
                    <section className={`crtContent3 ${page}`}>
                        <h1>Task Payment</h1>
                        <p>Input your price range for the task you choose</p>
                        <input type="text" placeholder='₱150/hr'/>
                        <div className="termsCondition">
                            <input type="checkbox" />
                            <p>I understand the process of Tasktify and Accept their <span>Terms and Condition</span></p>
                        </div>
                        <div className="createNow">
                            <button>Create Task</button>
                        </div>
                    </section>
                </div>
                <div className="crt-task-btns">
                    <li onClick={prevBtn} className={`prevBtn ${page}`}><MdArrowBackIos/></li>
                    <li>{pageno}/3</li>
                    <li onClick={nextBtn} className={`nextBtn ${page}`}><MdArrowForwardIos/></li>
                </div>
            </section>
            <section className='crtRight'>
            </section>
        </div>
    </div>
  )
}

export default CreateTask