import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import QuizzPage from "./pages/QuizzPage/QuizzPage";

function App() {
  const [quizzData, setQuizzData] = useState([]);
  const [resultCategories, setResultCategories] = useState([]);
  const qnaCollectionRef = collection(db, "questions");
  const resultCategCollectionRef = collection(db, "result-categories");

  useEffect(() => {
    const fetchQuizzData = async () => {
      const data = await getDocs(qnaCollectionRef);
      setQuizzData(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id, answer: "" }))
      );
    };
    fetchQuizzData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const fetchResultCategories = async () => {
      const data = await getDocs(resultCategCollectionRef);
      setResultCategories(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    fetchResultCategories();
    // eslint-disable-next-line
  }, []);

  // might build a router with the pages In question, not sure if needed for a small project
  // as of now i need an intro page with ian intro and a start button that leads to the quizz
  // once we go through all questions and we submit we should get to a result page
  return (
    <div className="App">
      <QuizzPage data={quizzData} results={resultCategories} />
    </div>
  );
}

export default App;
