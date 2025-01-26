import React from "react";
import { Link } from "react-router-dom";
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse, faMailBulk, faMailForward, faMailReply, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";



export default function Skills(){
    return(
        <>
        {/* <h1> projects page <Link to='Aboutpage.jsx'>yo</Link> </h1>
        <h1></h1> */}

<div className="pro_topic"><div className="span1"></div>skills & launguage</div>

<div className="pro_topmain">

    
        <div className="pro_main">

            <div className="upper1">skill</div>


        <div className="pro_resumeeducation1">

<div className="skills"><div className="smallbox"></div> HTML</div>
<div className="skills"><div className="smallbox"></div>CSS</div>
<div className="skills"><div className="smallbox"></div>Javascript</div>
<div className="skills"><div className="smallbox"></div>React.js</div>
<div className="skills"><div className="smallbox"></div>Word & Excel</div>

<div className="skills"><div className="smallbox"></div>Git Hub</div>


</div>

<div className="pro_resumeeducation2">

<div className="launguage1"> 

<div className="upper1">language<br /></div>

<div className="skills1"><div className="smallbox"></div> English</div>
<div className="skills1"><div className="smallbox"></div>Tamil</div>
</div>
</div>

            
        </div>

 
        </div>




        
{/* footer */}



      




<div className="Ffour">
    <div className="pro_foo1">Call</div>
    <div className="pro_foo1">E.Mail</div>
    <div className="pro_foo1">contact</div>
  </div>

<div className="F1four">

<div className="pro_foo">63790 - 50259 <FontAwesomeIcon icon={faPhone}/> </div>
  <div className="pro_foo">jayasurya1711@gmail.com <FontAwesomeIcon icon={faEnvelope}/> </div>
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