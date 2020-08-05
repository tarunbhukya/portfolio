import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


function App() {

  const [word, setWord]= useState("Tarun Bhukya");
  const [num, setNum] = useState(0);
  const words = ["Tarun Bhukya", "Software Developer", "FullStack Developer", "Android App Developer", "Rookie Devops", "Freelancer"];
  const [classWord, setClassWord] = useState("item hide");
 

  useEffect(() => {
    const interval = setInterval(() => {
      const index = num % words.length;
      setClassWord("item")
      setWord(words[index])
      setNum(num => num + 1)
      setTimeout(function () {
        setClassWord("item hide")
      }, 2500)
      console.log(num)
    }, 3000);
    return () => clearInterval(interval);
  }, [num, words]);
    

  return (
    <div>
      
      <section id="home" className="home home-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-12 col-xs-12">

              <div className="home-content">
                <div className="title-container">
                  <h2>I Am</h2>
                  <div className={classWord}><h2>{word}</h2></div>
                </div>
                <p>I'm a Software Developer with extensive experience on building FullStack Web Applications and Android Application.</p>
                <ul className="banner_social_link">	
                				
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
