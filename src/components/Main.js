import { useState } from 'react';
import myPhoto from '../images/myphoto.png';

export default function Main() {
  return (
    <div className="main">
      <Profile />
      <Projects />
    </div>
  );
}

function Profile() {
  return (
    <div className="container profile">
      <div className="container">
        <div className="profile-photo">
          <img src={myPhoto} alt="orville"></img>
        </div>
        <h3>ORVILLE MALIJAN</h3>
        <p>
          Hi there! My name is Orville. <br />
          I'm a web developer and a creative enthusiast.
        </p>
      </div>
      <div className="profile-details">
        <p>
          <span>🛠️ Tech Stack </span> I love bringing ideas to life through code
          and design through HTML, CSS, JavaScript, React, SASS, NodeJS
        </p>

        <p>
          <span>🎨 A Creative Flair</span> Beyond coding, I have strong design
          skills, proficiently working with video editing tools and Adobe
          Photoshop and Illustrator to bring a creative touch to projects.
        </p>
        <p>
          <span>💼 Seeking Opportunities</span> I'm actively seeking
          opportunities to contribute my expertise and collaborate with
          forward-thinking teams where I can also learn and grow to better
          myself.
        </p>
      </div>
    </div>
  );
}

function Projects() {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);

  function handleOpen1() {
    if (isOpen2) {
      setIsOpen2((isOpen2) => !isOpen2);
    }
    setIsOpen1((isOpen1) => !isOpen1);
  }

  function handleOpen2() {
    if (isOpen1) {
      setIsOpen1((isOpen1) => !isOpen1);
    }
    setIsOpen2((isOpen2) => !isOpen2);
  }

  return (
    <div className="container projects">
      <div className="category">
        <h1
          className={isOpen2 ? 'title-big dim' : 'title-big'}
          onClick={handleOpen1}
        >
          PROJECTS<span>🚀</span>
        </h1>
        <h1
          className={isOpen1 ? 'title-big dim' : 'title-big'}
          onClick={handleOpen2}
        >
          TECH STACK <span>💻</span>
        </h1>
      </div>

      <div className={isOpen1 || isOpen2 ? 'lists lightsOn' : 'lists'}>
        {isOpen1 && (
          <ul className="main-list">
            <ProjectItem>
              <a
                href="https://2hog-bbq.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                2Hog Barbeque Website
              </a>
            </ProjectItem>
            <ProjectItem>
              <a
                href="https://azure-hospital.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Azure Coast Medical Center Website
              </a>
            </ProjectItem>{' '}
            <ProjectItem>
              <a
                href="https://gigalist.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Gig-A-List
              </a>
            </ProjectItem>{' '}
            <ProjectItem>
              <a
                href="https://clinchem-quiz.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Clinical Chemistry Quiz
              </a>
            </ProjectItem>
          </ul>
        )}
        {isOpen2 && (
          <ul className="main-list">
            <li className="list-item">HTML</li>
            <li className="list-item">CSS</li>
            <li className="list-item">JavaScript</li>
            <li className="list-item">NodeJS</li>
            <li className="list-item">React</li>
            <li className="list-item">Git/GitHub</li>
          </ul>
        )}
        <div className={isOpen1 || isOpen2 ? 'floor lightsOn' : 'floor'}>
          <div
            className={isOpen1 || isOpen2 ? 'shadow lightsOn' : 'shadow'}
          ></div>
        </div>
      </div>
    </div>
  );
}

function ProjectItem({ children }) {
  return <li className="list-item">{children}</li>;
}
