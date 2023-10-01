import Accordion from "./components/Accordion";
import { faqs } from "./data/data";

const App = () => {
  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <Accordion key={index} num={index} faq={faq} />
      ))}
    </div>
  );
};

export default App;
