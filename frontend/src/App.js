import "./App.css";
import Questionnaire from "./pages/Questionnaire";

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return <Questionnaire />;
}

export default App;
