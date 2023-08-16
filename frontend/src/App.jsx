import { useState } from "react";
import "./App.css";
import Questionnaire from "./pages/Questionnaire";

function App() {
  const [isNext, setIsNext] = useState(false);
  const startQuestionnaire = () => {
    setIsNext(true);
  };
  const intro = (
    <div className="start-page">
      <h3>
        We all have bad days and problems and most of us are good deep down
        inside, however all of us have the potential to snap at any times if not
        held in check.Here is a test for you to see how much you have in comon
        with popular coulture serial killers from media and real life.
      </h3>

      <h1>What serial killer would you be? take the test and find out</h1>

      <button onClick={startQuestionnaire}>Start</button>
    </div>
  );
  return <>{!isNext ? intro : <Questionnaire />}</>;
}

export default App;
