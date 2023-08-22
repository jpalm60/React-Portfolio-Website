import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
      <article className="service">
          <div className="service__head">
            <h3>Network Security</h3>
          </div>

          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon' />
              <p>
                Knowledge of product quality assurance and debugging (PPI/DPI)
              </p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>
                Experience with public/private key hashing using CIA triad, for added security.
              </p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>
              Creating a virtual private network (VPN)
              </p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>
              Experience with protocols in the OSI model 
              </p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>
              Use of Advanced Endpoint Detection
              </p>
            </li>
          </ul>
        </article>
        {/*END OF FIRST SERVICE*/}<article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon' />
              <p>
              Web app development within the framework of Python/Java/Javascript.
              </p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>
              Web product deisgn, web applications architecture and user appeal to the project specifications.
              Optimizing for both web functionallity and also mobile viewing
              </p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>
              Maintenance and support for web applicaitons that have been released,
              including broken links and scripts to adding new features, to keep app up to date.
              </p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>
              AWS web hosting experience with container
              </p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>
              User-friendly optimization for relatable search engines and speed/time pixel rendering
              </p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>
              Redesign of company template and functionality, under companies set parameters
              </p>
            </li>
          </ul>
        </article>
        {/*END OF SECOND SERVICE*/}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon' />
              <p>
              Experience with creating Logo design and details
              </p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>
              Marketing E-Commerce site advertising company products 
              </p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>
              Knowledge of creating functional user/company cryptocurrencies and NFT's
              </p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>
              Creation of professional product demos for customer viewing
              </p>
            </li>
          </ul>
        </article>
        {/*END OF LAST SERVICE*/}
      </div>
      </section>
  )
}

export default Services