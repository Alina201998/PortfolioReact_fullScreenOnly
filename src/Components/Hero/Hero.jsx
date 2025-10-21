// import React from 'react'
// import './Hero.css'
// import profile_img from '../../assets/profile_img.png'

// const Hero = () => {

//     const handleScroll = (sectionId) => {
//         const section = document.getElementById(sectionId);
//         if (section) {
//             section.scrollIntoView({ behavior: 'smooth' });
//         }
//     };
//     return (
//         <div id="home" className='hero'>
//             <img src={profile_img} alt="" />
//             <h1><span>I'm Alina Kiptenko,</span> frontend developer from USA</h1>
//             <p>
//                 <strong>Front-End:</strong> HTML5, CSS3, JavaScript, React.js, responsive design, and CSS Grid/Flexbox.<br />

//                 <strong>Back-End & Databases:</strong> Python, MySQL, and client-server database connections.<br />

//                 <strong>Tools & Workflow:</strong> Git/GitHub<br />

//                 <strong>UI/UX & Design:</strong> Creating user-friendly interfaces with gradients, hover effects, and interactive elements.<br />

//             </p>
//             <div className="hero-action">
//                 <div
//                     className="hero-connect"
//                     onClick={() => handleScroll("contact")}
//                 >
//                     Connect with me
//                 </div>
//                 <div
//                     className="hero-resume"
//                     onClick={() => window.open('/resume.pdf', '_blank')}
//                     style={{ cursor: 'pointer' }}
//                 >
//                     My Resume
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Hero


import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';

const Hero = () => {

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="home" className='hero'>
            <img src={profile_img} alt="Profile" />
            <h1>
                <span>I'm Alina,</span> frontend developer from USA
            </h1>


            <div className="hero-skills">
                <div className="skill-box">
                    <strong>Front-End:</strong> HTML5, CSS3, JavaScript, React.js, responsive design, CSS Grid/Flexbox, interactive components.
                </div>
                <div className="skill-box">
                    <strong>Back-End & Databases:</strong> Python, MySQL, client-server connections, basic backend logic.
                </div>
                <div className="skill-box">
                    <strong>Tools & Workflow:</strong> Git/GitHub, VS Code, browser developer tools, debugging, code optimization.
                </div>
                <div className="skill-box">
                    <strong>UI/UX & Design:</strong> Creating user-friendly interfaces with gradients, hover effects, and responsive layouts.
                </div>
            </div>

            <div className="hero-action">
                <div
                    className="hero-connect"
                    onClick={() => handleScroll("contact")}
                >
                    Connect with me
                </div>
                <div
                    className="hero-resume"
                    onClick={() => window.open('/resume.pdf', '_blank')}
                    style={{ cursor: 'pointer' }}
                >
                    My Resume
                </div>
            </div>
        </div>
    );
}

export default Hero;


