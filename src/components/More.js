export default function More({ activeTab, setActiveTab }) {
  return (
    <div className="container section">
      <h1>More About Me</h1>
      <h3>
        For the past decade, I've honed my skills as a Clinical Chemistry
        Scientist in the field of pathology, contributing to healthcare
        services. Now, I'm on an exciting journey to transition into the world
        of web development, where I can leverage my unique experiences and
        skills.
      </h3>
      <div className="grid">
        <p>
          <span>🧪 Analytical Mindset</span> As a seasoned scientist, I possess
          a highly analytical and detail-oriented approach. I excel in
          problem-solving and critical thinking, skills that are invaluable in
          the world of web development, where precision and efficiency are
          paramount.
        </p>
        <p>
          <span>🔬 Methodical and Organized</span> My experience in pathology
          has instilled in me a strong sense of organization and methodical work
          habits. I thrive in structuring projects and managing tasks
          effectively, ensuring seamless development processes.
        </p>
        <p>
          <span>💡 Continuous Learning</span> Working in the scientific field,
          I've embraced a culture of constant learning and staying up-to-date
          with the latest advancements. I bring this same enthusiasm to web
          development, always eager to explore new technologies and best
          practices.
        </p>
        <p>
          <span>📊 Data-Driven Decision Making</span> In the world of clinical
          chemistry, data is key, and I've become proficient in interpreting and
          utilizing data for informed decision-making. This skill translates
          seamlessly into web development, where data-driven insights enhance
          user experiences and performance.
        </p>
        <p>
          <span>🎵 Harmony and Creativity</span> Beyond my professional
          expertise, I have a deep passion for music. Playing musical
          instruments and creating music videos has nurtured my creative spirit
          and an eye for aesthetics, which I love incorporating into web design.
        </p>
        <p>
          <span>🎓 The Power of Adaptation</span> My experience as a scientist
          has taught me the value of adaptability and resilience. I thrive in
          fast-paced environments and am adept at adjusting to new technologies
          and methodologies.
        </p>
        <p>
          <span>🤝 Collaborative Nature</span> As a scientist, collaboration is
          essential, working with diverse teams to achieve common goals. I bring
          this collaborative spirit to web development, where teamwork and
          effective communication lead to exceptional results.{' '}
        </p>
        <p>
          <span>🚀 Embracing New Beginnings</span> Transitioning to web
          development marks a new chapter in my journey, and I'm thrilled to
          bring my unique blend of skills to contribute positively to the
          digital landscape.{' '}
        </p>
        <p>
          I'm excited to embrace the opportunities that lie ahead, combining my
          scientific expertise, creative flair, and web development skills to
          make a meaningful impact.
        </p>{' '}
        <p></p>
        <p></p>
        <button onClick={() => setActiveTab(2)}>Let's connect</button>
      </div>
    </div>
  );
}
