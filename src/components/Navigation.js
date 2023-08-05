import { useState } from 'react';

export default function Navigation({ setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <Logo />
      <ul className={isOpen ? 'nav-list open' : 'nav-list close'}>
        <li
          className="nav-item"
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
            setActiveTab(0);
          }}
        >
          <a href="#projects">Projects</a>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
            setActiveTab(1);
          }}
        >
          About Me
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
      </ul>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}

function Logo() {
  return (
    <a className="logo" href="index.html">
      <h1>
        orville.<span>webdev</span>
      </h1>
    </a>
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
