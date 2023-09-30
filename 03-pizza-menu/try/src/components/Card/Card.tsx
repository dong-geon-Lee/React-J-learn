import Avatar from "./Avatar/Avatar";
import Introduce from "./Introduce/Introduce";
import Contents from "./Contents/Contents";
import "./Card.css";

const Card = () => {
  const title = "Jonas Schmedtmann";
  const details = `Full-stack web developer and teacher at Udemy. When not coding or
  preparing a course. I like to play board games, to cook (and eat), or to
  just enjoy the Portuguese sun at the beach.`;
  const img =
    "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixdivb=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3432&q=80";
  const contents = [
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
    <section className="containers">
      <Avatar img={img} />
      <Introduce title={title} details={details} />
      <Contents contents={contents} />
    </section>
  );
};

export default Card;
