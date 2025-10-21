import React from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.png';
import location_icon from '../../assets/location_icon.png';
import call_icon from '../../assets/call_icon.png';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "e0a0aa3d-acbd-4883-ba58-7bf535891702");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.mess);
        }
    };




    return (
        <div id="contact" className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>

            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>


                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="mail icon" />
                            <p>alinakip20@gmail.com</p>
                        </div>

                        <div className="contact-detail">
                            <img src={call_icon} alt="call icon" />
                            <p>+464-204-5881</p>
                        </div>

                        <div className="contact-detail">
                            <img src={location_icon} alt="location icon" />
                            <p>Chicago, IL</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" />

                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" />

                    <label htmlFor="message">Write your message here</label>
                    <textarea id="message" name="message" rows="8" placeholder="Enter your message"></textarea>

                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
