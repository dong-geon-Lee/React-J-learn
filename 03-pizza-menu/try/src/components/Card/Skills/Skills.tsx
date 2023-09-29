interface Iprops {
  id: number;
  background: string;
  skill: string;
  color: string;
  emoji: string;
}

const Skills = () => {
  const contents: Iprops[] = [
    {
      id: 1,
      background: "blue",
      skill: "HTML+CSS",
      color: "#fff",
      emoji: "⭐️",
    },
    {
      id: 2,
      background: "orangered",
      skill: "JavaScript",
      color: "#fff",
      emoji: "💯",
    },
    {
      id: 3,
      background: "orange",
      skill: "Web Design",
      color: "#fff",
      emoji: "💫",
    },
    {
      id: 4,
      background: "aqua",
      skill: "Git and GitHub",
      color: "#fff",
      emoji: "🍇",
    },
    { id: 5, background: "green", skill: "React", color: "#fff", emoji: "💥" },
    { id: 6, background: "pink", skill: "Svelte", color: "#fff", emoji: "📘" },
  ];

  return (
    <div className="skill">
      <ul className="skill__list">
        {contents.map((contents) => (
          <div key={contents.id}>
            <li
              style={{ background: contents.background, color: contents.color }}
            >
              <label>{contents.skill}</label>
              <span>{contents.emoji}</span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
