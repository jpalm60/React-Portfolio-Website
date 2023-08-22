import React from 'react'
import './about.css'
import ME from '../../assets/POZV6099.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Tag" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            
            <article className='about__card'>
            <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Local Clients</small>
            </article>

            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
            </div>
            <p>
              I'm Joshua Palmer,<li>
                A recent graduate of the illustrious North Carolina A&t, where I recieved my BS in Computer Science.
                During my time at A&T, I trained with many software development tools & techniques, in which now, I plan to keep
                expanding on that knowledge. As for my career, I'm an software engineering professional with experience in creating secure cryptocurrency applications and customer loyalty UI's, in React.
                Strong understanding of computer networking, object-oriented programming, and web design.
                Currently working towards finding my ideal development company that I can work for and continue to expand on my learning knowledge of software development. 

              </li>
            </p>
            <a href="#contact" className='btn btn-primary'>Lets Talk</a>
          </div>
        </div>
      </section>

  )
}

export default About