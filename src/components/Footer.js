import github from '../images/tech-stack/git-dark.png';
import youtube from '../images/tech-stack/youtube-dark.png';
import linkedin from '../images/tech-stack/linkedin.png';

export default function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <a href="https://github.com/orville22" target="_blank" rel="noreferrer">
          <img src={github} alt="github logo"></img>
        </a>
        <a
          href="https://www.youtube.com/channel/UC5hKPqYSWLhs-eUQ4DxKeqw"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtube} alt="youtube logo"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/orville-malijan-8148b1286/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin logo"></img>
        </a>
      </div>
      <div className="copyright">Copyright 2023. All rights reserved</div>
    </div>
  );
}
