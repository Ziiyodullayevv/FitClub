import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';


const Join = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x52xboj', 'template_xovtywh', form.current, 'AAB8nmVVN-2fhD19i')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="Join" id='join-us'>

        {/* left join parts: */}
        <div className="left-j">
            <hr />
            <div>
                <span>READY TO </span>
                <span className='stroke-text'>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY </span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>

        {/* right join parts: forms emailjs */}
        <div className="right-j">
            <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_name' placeholder='Enter your Email address' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join
