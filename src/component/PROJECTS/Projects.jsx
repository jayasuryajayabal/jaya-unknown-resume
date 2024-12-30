import React from "react";
import { Link } from "react-router-dom";
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse, faMailBulk, faMailForward, faMailReply, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";



export default function Projects(){
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
<div className="skills"><div className="smallbox"></div>JAVASCRIPT</div>
<div className="skills"><div className="smallbox"></div>REACT.JS</div>
<div className="skills"><div className="smallbox"></div>WORD & EXCEL</div>

<div className="skills"><div className="smallbox"></div>GIT HUB</div>


</div>

<div className="pro_resumeeducation2">

<div className="launguage1"> 

<div className="upper1">launguage <br /></div>

<div className="skills1"><div className="smallbox"></div> ENGLISH</div>
<div className="skills1"><div className="smallbox"></div>TAMIL</div>
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

<div className="pro_foo">63790 - 50259</div>
  <div className="pro_foo">jayasurya1711@gmail.com</div>
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