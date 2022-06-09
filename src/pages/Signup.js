import React,{ useState } from 'react'
import axios from "axios"

export default  function Signup()

{
const[input, setInput] = useState(
  {
    Name :'',
    Email :'',
    PhoneNumber:'',
   
  }

)
function handleChange(event)
{
  const {name,value}=event.target;
  setInput(prevInput => {
    return{
      ...prevInput,
      [name] : value
    }
  })
}

function handleClick(event)
{
  event.preventDefault();
  const newNote={
    Name:input.Name,
    Email:input.Email,
    PhoneNumber:input.PhoneNumber,
   
  }
  axios.post("http://localhost:3001/create",newNote);
}

return(

    <React.Fragment>
       
<div className="container">
      <p>
        Don’t Hesitate To Ask
      </p>
      <h2 className="">
        FREE CONSULTATION
      </h2>
    </div>
    <div className="container">

      <div className="row">
        <div className="col-md-6 ">
          <form action="">
            <div className="contact_form-container">
              <div>
                <div>
                  <label>
                    Name
                    <input type="text" name="Name" value={input.Name} onChange={handleChange}/>
                  </label>
                </div>
                <div>
                  <label>
                    Email
                    <input type="email" name="Email" value={input.Email} onChange={handleChange} />
                  </label>
                </div>

                <div>
                  <label>
                    Phone Number
                    <input type="text" name="PhoneNumber" value={input.PhoneNumber} onChange={handleChange}/>
                  </label>
                </div>
              
                
                <div className="mt-5">
                  <button type="submit" onClick={handleClick}>
                    Send 
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="contact_img-box">
            <img src="assets/images/form-img.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  
    </React.Fragment>

)

}