import { useRef, useState } from "react";
import "./Quizz.css";

const Quizz = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const answer1 = useRef();
  const answer2 = useRef();
  const answer3 = useRef();
  const answer4 = useRef();
  const name = useRef();

  // console.log(data);
  let QandA; // initially i'm only loading first question and its 4 answers then moving the index load the next

  QandA =
    data.length > 0 ? (
      <>
        <h4 className="question">{data[index].question}</h4>

        <div className="answer">
          <input
            type="radio"
            id="a1"
            name="answer"
            value="answer 1"
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
            value="answer 2"
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
            value="answer 3"
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
            value="answer 4"
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
    if (index > 9) {
      return;
    } else {
      setIndex((prev) => prev + 1);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let a1 = answer1.current.value;
    let answer1Input = +a1;
    let a2 = answer2.current.value;
    let answer2Input = +a2;
    let a3 = answer3.current.value;
    let answer3Input = +a3;
    let a4 = answer4.current.value;
    let answer4Input = +a4;

    console.log(answer1Input, answer2Input, answer3Input, answer4Input);
  };

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
        <form className="quizzForm" onSubmit={handleSubmit}>
          {QandA}
          <div className="controlBtns">
            {index === 9 && (
              <div className="inputName ">
                {/* <audio id="myAudio" src="./mp3/Loud_Bang.mp3"></audio> */}
                <label htmlFor="name">Enter your name:</label>
                <input
                  ref={name}
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength="4"
                  maxLength="12"
                  size="18"
                />
              </div>
            )}

            {index === 9 ? (
              <button type="submit" id="resultBtn">
                Show Results
              </button>
            ) : (
              <button
                type="button"
                className="bloody-click"
                id="mextBtn"
                onClick={loadNextQuestion}
              >
                Next
              </button>
            )}

            {/* <audio id="myAudio" src="./mp3/Loud_Bang.mp3"></audio> */}
          </div>
        </form>
        {/* <div className="resultContainer disabled">
          <div className="img">
           
            <img src="./img/1.gif" alt="" />
          </div>

          <h3 className="resultHeader">Result description here</h3>
          <p className="resultParagraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab,
            nam eius modi provident officiis molestiae blanditiis excepturi
            similique veritatis aspernatur ducimus ut quas ipsa. Voluptatum,
            dignissimos! Repellendus, quia exercitationem.
          </p>
        </div> */}
      </section>
    </div>
  );
};

export default Quizz;
