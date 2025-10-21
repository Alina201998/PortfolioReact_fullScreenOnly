import React from 'react'
import './About.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'
import { FaGithub } from 'react-icons/fa';

const About = () => {
    return (
        <div id="about" className='about'>
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a Front-End Developer passionate about building responsive, user-friendly web applications. I specialize in writing clean, efficient code using React, JavaScript, HTML, and CSS, focusing on seamless user experiences and modern web design practices. I enjoy solving complex problems and turning creative ideas into functional, interactive solutions.</p>

                        <p>Currently pursuing a degree in Computer Science, I am committed to continuous learning and expanding my skills toward full-stack development. My goal is to deliver impactful, well-designed solutions while staying up-to-date with evolving web technologies and best practices.</p>
                    </div>
                    <div className="portfolio-section">
                        <h2>See my progress</h2>

                        <a
                            href="https://github.com/Alina201998"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-button"
                        >
                            <FaGithub size={40} />
                        </a>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default About