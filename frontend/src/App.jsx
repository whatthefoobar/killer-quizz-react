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
      <h1>What serial killer would you be? take the test and find out</h1>

      <button onClick={startQuestionnaire}>Start</button>
    </div>
  );
  return <>{!isNext ? intro : <Questionnaire />}</>;
}

export default App;
