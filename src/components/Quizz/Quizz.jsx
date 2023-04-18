import "./Quizz.css";

import Intro from "../Intro/Intro";
import QuizzPage from "../QuizzPage/QuizzPage";

const Quizz = ({ data, results }) => {
  // const formClasses = showResults ? "quizzForm disabled" : "quizzForm";

  return (
    <div className="background-img">
      {/* <Intro /> */}
      <QuizzPage data={data} results={results} />
    </div>
  );
};

export default Quizz;
