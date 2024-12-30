import React from "react";
import "./Resume.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse, faMailBulk, faMailForward, faMailReply, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";




export default function RESUME(){

    return(
        <>
       


<div className="topmain">
<div className="topic"> <div className="span1"></div> education</div>
        <div className="resumemain">

        <div className="upper">cource</div>
               <div className="resumeeducation1">

               
        <div className="cource1">
            <div className="top1">cource</div>
            <div className="top1">institute</div>
            <div className="top1">location</div>
            <div className="top1">work experience</div>
        </div>
        <div className="cource2">
            <div className="top2">react.js</div>
            <div className="top2">credo systemz</div>
            <div className="top2">velachery , chennai</div>
            <div className="top2">fresher</div>
        </div>

               </div>


               <div className="upper">degree</div>
               <div className="resumeeducation1">
                
                <div className="cource1">
                    <div className="top1">degree</div>
                    <div className="top1">university</div>
                    <div className="top1">location</div>
                    <div className="top1"></div>
                </div>
               
                <div className="cource2">
                    <div className="top2">BCA</div>
                    <div className="top2">university of madras</div>
                    <div className="top2">cheppak, chennai</div>
                    <div className="top2"></div>
                </div>


               </div>
               <div className="upper">degree</div>
               <div className="resumeeducation1">
                
                <div className="cource1">
                    <div className="top1">degree</div>
                    <div className="top1">college name</div>
                    <div className="top1">university</div>
                    <div className="top1">percentage</div>
                </div>
                <div className="cource2">
                    <div className="top2">diploma in agriculture</div>
                    <div className="top2">VIA , pollchi</div>
                    <div className="top2">TNAU , coimbatore</div>
                    <div className="top2">75%</div>
                </div>
               </div>

<div className="upper">school</div>
               <div className="resumeeducation1">
                <div className="cource1">
                    <div className="top1">school name</div>
                    <div className="top1">location</div>
                    <div className="top1">sslc</div>
                    <div className="top1">hsc</div>
                </div>
                <div className="cource2">
                    <div className="top2">govt school</div>
                    <div className="top2">ullikkottai</div>
                    <div className="top2">75%</div>
                    <div className="top2">80%</div>
                </div>
               </div>

             




        </div>


{/* footer */}



      


        </div>

        <div className="Ftwo">
            <div className="foo1">Call</div>
            <div className="foo1">E.Mail</div>
            <div className="foo1">contact</div>
          </div>

        <div className="F1two">

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