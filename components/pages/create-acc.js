import React, {useState,useEffect} from 'react'
import ReactFlagsSelect from 'react-flags-select';
// css
import '../styles/create-modal.css'
// icons
import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
const CreateAcc = () => {

  // useState
const [ navDown, setNavdown ] = useState(false);
const [ create,setCreate ] = useState(false);
const [ signup,setSignUp ] = useState(false);
const [selected, setSelected] = useState("");

// nav login btn
const closeCreate = () => {
    setCreate(false)
}

// create account btn
const signupAccount = () => {
  setSignUp(true)
}
// login account
const loginAcc = () => {
  setSignUp(false)
}
// useEffect
useEffect(() => {
  setTimeout(() => {
    setNavdown(true)
  }, 100);

  return () => {

  }
}, [])


  return (
    <div className="create-account-modal">
        <div className="create-account">
            <div className="account">
                <h1>Tasktify</h1>
                <div className="motto-modal">
                    <p>task done, pay fast</p>
                </div>
                <section className={`login-account ${signup}`}>
                  <div className="use-google-btn">
                      <button><FcGoogle id='google-icon'/>Continue using Google Account</button>
                  </div>
                  <p>Login in Tasktify Account</p>
                  <div className="input-login">
                  <input type="text" placeholder='Username'/>
                  <input type="text" placeholder='Password'/>
                  <button>Login</button>
                  </div>
                  <p>Don't have Tasktify Account?</p>
                  <li onClick={signupAccount}>Create Account Now</li>
                  <div className="create-foot">
                  <p>Connect with us at:</p>
                  <div className="foot-icons">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />
                      <img src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="" />
                  </div>
                  </div>
                </section>
                <section className={`create-account-now ${signup}`}>
                  <div className="signup">
                    <form action="">
                      <input type="text" placeholder='Email'/>
                      <div className="fill-name">
                        <input type="text" placeholder='First Name'/>
                        <input type="text" placeholder='Last Name'/>
                      </div>
                      <ReactFlagsSelect
                        selected={selected}
                        onSelect={(code) => setSelected(code)}
                        className='countries'
                        placeholder="Select Country"
                        searchable
                        selectedSize={10}
                        optionsSize={10}
                      />
                      <input type="integer" placeholder='Mobile no.' maxLength="11"/>
                      <div className="agree-create">
                        <input type="checkbox" name="" id="" />
                        <p>I understand and accept the <span>Terms and Conditions of Tasktify</span></p>
                      </div>
                      <button>Create Account</button>
                    </form>
                  </div>
                  <p>Already have an Account?</p>
                  <li onClick={loginAcc}>Login Account</li>
                  <p>Connect with us at:</p>
                  <div className="foot-icons">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />
                      <img src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="" />
                  </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default CreateAcc