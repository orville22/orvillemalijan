import { useState } from 'react';

export default function Navigation({ setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <Logo />
      <ul className={isOpen ? 'nav-list open' : 'nav-list close'}>
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            Home
          </a>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          <a
            className="nav-link"
            href="https://github.com/orville22"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Page
          </a>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
            setActiveTab(1);
          }}
        >
          More About Me
        </li>
        <li
          className="nav-item"
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
            setActiveTab(2);
          }}
        >
          Contact
        </li>
        <li className="nav-item">
          <a
            href="https://www.youtube.com/channel/UC5hKPqYSWLhs-eUQ4DxKeqw"
            target="_blank"
            rel="noreferrer"
          >
            YouTube Channel
          </a>
        </li>
      </ul>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <h1>Orville M.</h1>
    </div>
  );
}

function Hamburger({ isOpen, setIsOpen }) {
  return (
    <div
      id="hamburger"
      className="nav-hamburger"
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    >
      <span id="span1" className={isOpen ? 'open' : ''}></span>
      <span id="span2" className={isOpen ? 'open' : ''}></span>
      <span id="span3" className={isOpen ? 'open' : ''}></span>
    </div>
  );
}
