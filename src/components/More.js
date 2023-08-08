import guitar from '../images/guitar.png';
import macbook from '../images/macbook.png';

export default function More({ activeTab, setActiveTab }) {
  return (
    <div className="container about">
      <div className="text-container">
        <div className="title">
          <h1>Work{'<'}</h1>
          <h1>{'>'}Play</h1>
        </div>
        <p>
          I am a web developer based in Melbourne. Creating and building
          aesthetically pleasing websites is not just a skill, but a passion
          that drives me consistently to elevate every project I undertake.
        </p>
        <p>When I'm not coding, I play guitar and make music videos. 🎸</p>
        <button onClick={() => setActiveTab(2)}>Let's connect</button>
        <quote>
          "When you do what you love, you'll never have to work a single day in
          your life."
        </quote>
      </div>
      <div className="image-container">
        <img id="guitar" src={guitar}></img>
        <img id="macbook" src={macbook}></img>
      </div>
    </div>
  );
}
