import Avatar from "./Avatar/Avatar";
import Introduce from "./Introduce/Introduce";
import Skills from "./Skills/Skills";
import "./Card.css";

const Card = () => {
  const img =
    "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixdivb=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3432&q=80";
  const title = "Jonas Schmedtmann";
  const details = `Full-stack web developer and teacher at Udemy. When not coding or
  preparing a course. I like to play board games, to cook (and eat), or to
  just enjoy the Portuguese sun at the beach.`;

  return (
    <section className="containers">
      <Avatar img={img} />
      <Introduce title={title} details={details} />
      <Skills />
    </section>
  );
};

export default Card;
