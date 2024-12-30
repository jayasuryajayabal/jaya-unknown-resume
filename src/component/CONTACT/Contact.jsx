import React, { useState } from "react";
import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse, faMailBulk, faMailForward, faMailReply, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";


const Handlesubmit=()=>{
        // onsubmit=e.target.value
        // preventdefault
        alert("Are You Submit This Form")
        alert('Sussessfully Submited The Form')
       
        }
 


export default function Contact(){
    return(
        <>
<div className="contacthead">
    <div className="topic"> <div className="span1"></div> let's talk</div>


    <div className="contactin">
        
    <div className="contactput_one">
        <div className="contactput1">
            <div className="conname">first name</div>
            <input type="text" placeholder="first name" />
        </div> 

        <div className="contactput1">
        <div className="conname">last name</div>
        <input type="text" placeholder="last name" />  
        </div>     
        </div>

<div className="contactput_two">
        
<div className="contactput2">
        <div className="conname">enter the e-mail</div>
        <input type="email" placeholder="e-mail" />  
        </div>  

        <div className="contactput2">
        <div className="conname">enter the subject</div>
        <input type="text" placeholder="subjects" />  
        </div>  

        <div className="contactput2">
        <div className="conname">enter the message</div>
        <input type="text" placeholder="type .." />  <br /><br />


        <button className="con_btn" onClick={Handlesubmit}>submit</button>
       
      
        </div>  
</div>

     

        


    </div>

</div>

        {/* footer */}

      
        <div className="Fthree">
            <div className="foo1">Call</div>
            <div className="foo1">E.Mail</div>
            <div className="foo1">contact</div>
          </div>

        <div className="F1three">

        <div className="foo">63790 - 50259</div>
          <div className="foo">jayasurya1711@gmail.com</div>
          <div className="foo_icon">

          <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedinIn} />
        <FontAwesomeIcon icon={faInstagram} />

          </div>
        </div>

 


        </>
    )
}