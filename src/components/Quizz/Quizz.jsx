import { useEffect, useRef, useState } from "react";
import "./Quizz.css";
import p1 from "../../assets/img/1.gif";
import p2 from "../../assets/img/2.gif";
import p3 from "../../assets/img/3.gif";
import p4 from "../../assets/img/4.gif";
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";

const Quizz = ({ data, results }) => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState("");
  const [showLastPage, setshowLastPage] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState({
    img: "",
    title: "",
    description: "",
  });

  let answer1 = useRef();
  let answer2 = useRef();
  let answer3 = useRef();
  let answer4 = useRef();

  // initially i'm only loading first question and its 4 answers then incrementing index to load the next
  let QandA =
    data.length > 0 ? (
      <>
        <h4 className="question">{data[index].question}</h4>

        <div className="answer">
          <input
            type="radio"
            id="a1"
            name="answer"
            value={data[index].answers[0]}
            ref={answer1}
          />
          <label htmlFor="a1" className="answer1">
            {data[index].answers[0]}
          </label>
        </div>
        <div className="answer">
          <input
            type="radio"
            id="a2"
            name="answer"
            value={data[index].answers[1]}
            ref={answer2}
          />
          <label htmlFor="a2" className="answer2">
            {data[index].answers[1]}
          </label>
        </div>
        <div className="answer">
          <input
            type="radio"
            id="a3"
            name="answer"
            value={data[index].answers[2]}
            ref={answer3}
          />
          <label htmlFor="a3" className="answer3">
            {data[index].answers[2]}
          </label>
        </div>
        <div className="answer">
          <input
            type="radio"
            id="a4"
            name="answer"
            value={data[index].answers[3]}
            ref={answer4}
          />
          <label htmlFor="a4" className="answer4">
            {data[index].answers[3]}
          </label>
        </div>
      </>
    ) : (
      <div>Loading questions...</div>
    );

  const loadNextQuestion = () => {
    if (index < 9) {
      setIndex((prev) => prev + 1);
    } else {
      setshowLastPage(true);
      return;
    }
  };

  const storeInDb = async (name, score) => {
    if (name === "" || score === 0) return;
    try {
      await addDoc(collection(db, "scores"), {
        name: name,
        score: score,
      });
      console.log("this ran!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const showResultCategory = (score) => {
    if (score > 0 && score <= 10) {
      setResult({
        img: p1,
        title: results[3].title,
        description: results[3].description,
      });
    } else if (score > 10 && score <= 20) {
      setResult({
        img: p2,
        title: results[0].title,
        description: results[0].description,
      });
    } else if (score > 20 && score <= 30) {
      setResult({
        img: p3,
        title: results[2].title,
        description: results[2].description,
      });
    } else if (score > 10 && score <= 40) {
      setResult({
        img: p4,
        title: results[1].title,
        description: results[1].description,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!showLastPage) {
      let a1 = answer1.current.checked;
      let a2 = answer2.current.checked;
      let a3 = answer3.current.checked;
      let a4 = answer4.current.checked;

      if (a1 === true) {
        setScore((prev) => prev + 1);
      } else if (a2 === true) {
        setScore((prev) => prev + 2);
      } else if (a3 === true) {
        setScore((prev) => prev + 3);
      } else if (a4 === true) {
        setScore((prev) => prev + 4);
      } else return score;
    }

    storeInDb(userName, score); // this doesn't work anymore
    showResultCategory(score);
  };

  useEffect(() => {
    console.log("score:", score);
    console.log("username:", userName);
    // console.log("form inputs:", formInputs);
    if (userName.length > 0) {
      setShowResults(true);
    }
  }, [score, userName]);

  const buttons = showLastPage ? (
    <button type="submit" id="resultBtn">
      Show Results
    </button>
  ) : (
    <button
      type="submit"
      className="bloody-click"
      id="nextBtn"
      onClick={loadNextQuestion}
    >
      Next
    </button>
  );

  const inputName = (
    <div className="inputName ">
      {/* <audio id="myAudio" src="./mp3/Loud_Bang.mp3"></audio> */}
      <label htmlFor="name">Enter your name:</label>
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        id="name"
        name="name"
        required
        minLength="4"
        maxLength="12"
        size="18"
      />
    </div>
  );
  const formClasses = showResults ? "quizzForm disabled" : "quizzForm";

  return (
    <div className="background-img">
      {/* <section className="first-page">
        <div className="intro">
          <h3 className="intro_header">
            Could you be a serial killer? <br />
            <br />
            Find out by answering a few questions.
          </h3>
        </div>
        <div className="startBtn">
          <audio
            id="myAudio1"
            src="/mp3/horror-creepy-noises/horror-creepy-noises.mp3"
          ></audio>
          <button>Press me</button>
        </div>
      </section> */}

      <section className="page-two">
        {/* modal btn that triggers leaderboard modal  */}
        {/* <button className="leaderboardBtn">Score leaderboard</button> */}
        {/* leaderboard modal  */}
        {/* <div id="leaderboardModal" className="modalBackground">
          <div className="modal-content">
            <span className="close">&times;</span>
           
            <ul className="leaderboard-list">
              <li className="leaderboard-list-item">Name: &nbsp Score:</li>
            </ul>
          </div>
        </div> */}

        <form className={formClasses} onSubmit={handleSubmit}>
          {!showLastPage && QandA}
          <div className="controlBtns">
            {showLastPage && inputName}

            {buttons}

            {/* <audio id="myAudio" src="./mp3/Loud_Bang.mp3"></audio> */}
          </div>
        </form>
        {showResults && (
          <div className="resultContainer">
            <div className="img">
              <img src={result.img} alt="result" />
            </div>

            <h3 className="resultHeader">{result.title}</h3>
            <p className="resultParagraph">{result.description}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Quizz;
