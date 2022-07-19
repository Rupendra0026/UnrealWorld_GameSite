import React from 'react'
import MainNav from '../MainNav'
import './contact.css'


const Contactus = () => {
  return (
    <>
    <MainNav/>
    <div className="maincontact">
      <div className="contact">
        
        <div className="contactinputs">
        <h1 className='contacthead'>Lets get connected!!</h1>
          <input type="text" className='contactin' placeholder='Enter First Name' required/>
          <input type="text" className='contactin'placeholder='Enter Last Name' required/>
          <input type="text" className='contactin'placeholder='Enter phone number' required/>
          <input type="text" className='contactin'placeholder='Enter gmail'  required/>
          <textarea name="" id="" cols="15" rows="10" placeholder='Enter queries' className='onlycmnt'required></textarea>
          <input type="submit"  className='contactin'/>
        </div>
        </div>
    </div>
    </>
  )
}

export default Contactus