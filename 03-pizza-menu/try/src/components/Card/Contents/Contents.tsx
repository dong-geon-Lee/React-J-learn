import Skills from "../Skills/Skills";

interface Iprops {
  contents: {
    id: number;
    background: string;
    skill: string;
    color: string;
    emoji: string;
  }[];
}

const Contents = ({ contents }: Iprops) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
      {contents.map((skill) => (
        <Skills
          key={skill.id}
          background={skill.background}
          skill={skill.skill}
          color={skill.color}
          emoji={skill.emoji}
        />
      ))}
    </div>
  );
};

export default Contents;
