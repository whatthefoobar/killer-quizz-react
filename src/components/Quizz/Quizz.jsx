import { useEffect, useRef, useState } from "react";
import "./Quizz.css";

const Quizz = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showLastPage, setshowLastPage] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [userName, setUserName] = useState("");
  const [formInputs, setFormInputs] = useState({
    score: 0,
    name: "",
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

    setFormInputs({
      score: score,
      name: userName,
    });
  };

  useEffect(() => {
    console.log("score:", score);
    console.log("username:", userName);
    console.log("form inputs:", formInputs);
    if (formInputs.name.length > 0) {
      setShowResults(true);
    }
  }, [score, userName, formInputs]);

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
              <img
                src="https://www.viewhotels.jp/ryogoku/wp-content/uploads/sites/9/2020/03/test-img.jpg"
                alt="result"
              />
            </div>

            <h3 className="resultHeader">Result description here</h3>
            <p className="resultParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab,
              nam eius modi provident officiis molestiae blanditiis excepturi
              similique veritatis aspernatur ducimus ut quas ipsa. Voluptatum,
              dignissimos! Repellendus, quia exercitationem.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Quizz;
