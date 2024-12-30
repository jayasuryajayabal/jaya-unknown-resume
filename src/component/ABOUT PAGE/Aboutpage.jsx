import React from "react";
import './Aboutpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse, faMailBulk, faMailForward, faMailReply, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";



export default function Aboutpage() {
  return (<>

    <div className="header">

      <div className="main">

        <div className="box">
          <div className="box1">
            <img src="src/assets/js pic.jpg" alt="" />
            <h2>JAYASURYA</h2>
            <h3>react.js developer</h3>
            <div className="span"></div>
            <div className="container">
            <div className="body_icon">

<FontAwesomeIcon icon={faFacebook} />
<FontAwesomeIcon icon={faTwitter} />
<FontAwesomeIcon icon={faLinkedinIn} />
<FontAwesomeIcon icon={faInstagram} />

</div>    
              </div>
          
          </div>
          <div className="box2">
            <h1>Hello !</h1>
            <h2>Here's who I am & what I do</h2>
            <div className="btn">
              {/* <button> <Link to='RESUME'></Link>/button> */}
              <button className="abo_btn" ><a href="public/Jayasurya jayabal Resume .pdf">Resume</a> </button>


            </div>
            <p>Hi, I'm Jayasurya!

Innovator | Problem-Solver | Tech Enthusiast

I'm driven by a passion to craft innovative
 solutions that make a real impact. With a solid
  foundation in HTML, CSS, JavaScript, and React.js.
   I'm ready to bring my skills to the table and 
   contribute to exciting projects. With excellent time 
   management skills and a commitment to delivering 
   high-quality work.

Let's build something amazing together!</p>
          </div>

        </div>

      </div>

      {/* footer */}


      <div className="F">
        <div className="foo1">Call</div>
        <div className="foo1">E.Mail</div>
        <div className="foo1">contact</div>
      </div>

      <div className="F1">

        <div className="foo"> 63790 - 50259 <FontAwesomeIcon icon={faPhone} /></div>
        <div className="foo">jayasurya1711@gmail.com <FontAwesomeIcon icon={faEnvelope}/></div>
        <div className="foo_icon">

        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedinIn} />
        <FontAwesomeIcon icon={faInstagram} />
       
        </div>
      </div>


    </div>
  </>)
}
