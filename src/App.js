import { useEffect, useState } from "react";
import "./App.css";
import Quizz from "./components/Quizz/Quizz";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [quizzData, setQuizzData] = useState([]);
  const [resultCategories, setResultCategories] = useState([]);
  const qnaCollectionRef = collection(db, "questions");
  const resultCategCollectionRef = collection(db, "result-categories");

  useEffect(() => {
    const fetchQuizzData = async () => {
      const data = await getDocs(qnaCollectionRef);
      setQuizzData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchQuizzData();
  }, []);

  useEffect(() => {
    const fetchResultCategories = async () => {
      const data = await getDocs(resultCategCollectionRef);
      setResultCategories(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    fetchResultCategories();
  }, []);

  return (
    <div className="App">
      <Quizz data={quizzData} results={resultCategories} />
      {/* <SvgAnimation /> */}
    </div>
  );
}

export default App;
