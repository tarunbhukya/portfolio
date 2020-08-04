import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


function App() {


  return (
    <div>
      
      <section id="home" className="home home-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-12 col-xs-12">

              <div className="home-content">
                <strong>Hello !</strong>
                <h1>I Am Tarun Bhukya</h1>
                <p>I'm a Software Developer with extensive experience on building FullStack Web Applications and Android Application.</p>
                <ul class="banner_social_link">	
                				
									<li><a href="https://github.com/tarunbhukya"><FontAwesomeIcon icon={faGithubAlt} /></a></li>
                  <li><a href="https://www.facebook.com/bethtarun/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
									<li><a href="https://www.linkedin.com/in/tarun-kumar-bhukya-40168b85/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>

								</ul>
              </div>
             

            </div>
          </div>
        </div>
      </section>

		
    </div>
  );
}

export default App;
