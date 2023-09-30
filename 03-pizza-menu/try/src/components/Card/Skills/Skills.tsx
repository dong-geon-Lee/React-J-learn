interface Iprops {
  background: string;
  skill: string;
  color: string;
  emoji: string;
}

const Skills = ({ background, skill, color, emoji }: Iprops) => {
  return (
    <div className="skill">
      <ul>
        <div>
          <li style={{ background: background, color: color }}>
            <label style={{ marginRight: "1rem" }}>{skill}</label>
            <span>{emoji}</span>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Skills;
