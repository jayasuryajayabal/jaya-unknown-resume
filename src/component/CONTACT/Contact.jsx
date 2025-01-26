import React, { useState } from "react";
import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse, faMailBulk, faMailForward, faMailReply, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";


// const initialvalue ={firstname:"",
//   lastname:""
//   ,email:"",
// message:"",
// subject:"",}
// const [formvalues,setformvalues]=useState(initialvalue);
// // const[formerrors,setformerrors]=useState({});

 
// const handlechange=(e)=>{
//   const{name,value}=e.target;
//   setformvalues({...formvalues,[name]: value});
// };



export default function Contact(){

    return(
        <>
<div className="contacthead">
    <div className="topic"> <div className="span1"></div> let's talk</div>


    <div className="contactin">
        

        <form >
    <div className="contactput_one">
        <div className="contactput1">
            <div className="conname">first name</div>
            <input type="text" 
            name="name" 
          //  value={formvalues.username}
            placeholder="first name" 
             />
            
        </div> 

         <div className="contactput1">
        <div className="conname">last name</div>
        <input type="text" name="name"
         placeholder="last name"
        //  value={formvalues.lastname}
         /> 
        </div>      
        </div>

<div className="contactput_two">
        
<div className="contactput2">
        <div className="conname">e-mail</div>
        <input type="email" name="email"
         placeholder="example@gmail.com"
        //  value={formvalues.email} 
        />  
        
        </div>  

        <div className="contactput2">
        <div className="conname">subject</div>
        <input type="text" placeholder="subjects" 
        name="subject"
        // value={formvalues.subject}
       />  
        </div>  

        <div className="contactput2">
        <div className="conname">message</div>
        <input type="text" placeholder="type .." 
        name="message"
        // value={formvalues.message}
      />  <br /><br />


        <button className="con_btn">submit</button>
       
      
        </div>  
</div>
</form>
     

        


    </div>

</div>

        {/* footer */}

      
        <div className="Fthree">
            <div className="foo1">Call</div>
            <div className="foo1">E.Mail</div>
            <div className="foo1">contact</div>
          </div>

        <div className="F1three">

        <div className="foo">63790 - 50259 <FontAwesomeIcon icon={faPhone}/></div>
          <div className="foo">jayasurya1711@gmail.com <FontAwesomeIcon icon={faEnvelope}/></div>
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