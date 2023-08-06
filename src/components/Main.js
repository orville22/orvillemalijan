import { useState } from 'react';
import myPhoto from '../images/myphoto.png';
import html5 from '../images/tech-stack/html.png';
import css from '../images/tech-stack/css.png';
import javascript from '../images/tech-stack/javascript.png';
import react from '../images/tech-stack/react.png';
import sass from '../images/tech-stack/sass.png';
import node from '../images/tech-stack/node.png';
import github from '../images/tech-stack/git-dark.png';
import youtube from '../images/tech-stack/youtube-dark.png';
import lines from '../images/vectors/lines.png';
import dots from '../images/vectors/dots.png';
import square from '../images/vectors/square-triangle.png';

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
    <div className="profile">
      <img className="bg-lines" src={lines} alt="lines"></img>
      <img className="bg-dots" src={dots} alt="abstract"></img>
      <img className="bg-square" src={square} alt="abstract"></img>

      <div className="profile-photo">
        <img src={myPhoto} alt="orville"></img>
      </div>
      <div className="profile-details">
        <h2>Front-End React Developer</h2>
        <p>
          Hi there! My name is Orville. <br />
          I'm a web developer and a creative enthusiast.
        </p>
        <div className="contact">
          <a
            href="https://github.com/orville22"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github logo"></img>
          </a>
          <a
            href="https://www.youtube.com/channel/UC5hKPqYSWLhs-eUQ4DxKeqw"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtube} alt="youtube logo"></img>
          </a>
        </div>
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
    <div className="projects" id="projects">
      <div className="wrapper">
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
            <ul className="tech-list">
              <li className="list-item">
                <img src={html5} alt="html5 logo"></img>
              </li>
              <li className="list-item">
                <img src={css} alt="css logo"></img>
              </li>
              <li className="list-item">
                <img src={javascript} alt="javascript logo"></img>
              </li>
              <li className="list-item">
                <img src={node} alt="nodejs logo"></img>
              </li>
              <li className="list-item">
                <img src={react} alt="react logo"></img>
              </li>
              <li className="list-item">
                <img src={sass} alt="sass logo"></img>
              </li>
            </ul>
          )}
          <div className={isOpen1 || isOpen2 ? 'floor lightsOn' : 'floor'}>
            <div
              className={isOpen1 || isOpen2 ? 'shadow lightsOn' : 'shadow'}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectItem({ children }) {
  return <li className="list-item">{children}</li>;
}
