import "./Quizz.css";
import QuizzPage from "../../pages/QuizzPage/QuizzPage";
import IntroPage from "../../pages/IntroPage/IntroPage";

const Quizz = ({ data, results }) => {
  // const formClasses = showResults ? "quizzForm disabled" : "quizzForm";
  // console.log("data from fb:", data);
  return (
    <div className="background-img">
      <IntroPage />
      <QuizzPage data={data} results={results} />
    </div>
  );
};

export default Quizz;
