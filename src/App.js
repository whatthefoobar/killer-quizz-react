import { useEffect, useState } from "react";
import "./App.css";
import Quizz from "./components/Quizz/Quizz";
// import SvgAnimation from "./components/SvgAnimation/SvgAnimation";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [quizzData, setQuizzData] = useState([]);
  const qnaCollectionRef = collection(db, "questions");

  useEffect(() => {
    const fetchQuizzData = async () => {
      const data = await getDocs(qnaCollectionRef);
      setQuizzData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchQuizzData();
  }, []);

  // console.log(quizzData);

  return (
    <div className="App">
      <Quizz data={quizzData} />
      {/* <SvgAnimation /> */}
    </div>
  );
}

export default App;
