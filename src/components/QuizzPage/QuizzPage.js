import React, { useState } from "react";
// import { db } from "../../firebase-config";
// import { collection, addDoc } from "firebase/firestore";
// import Leaderboard from "../Leaderboard/Leaderboard";
// import ResultPage from "../ResultPage/ResultPage";
// import p1 from "../../assets/img/1.gif";
// import p2 from "../../assets/img/2.gif";
// import p3 from "../../assets/img/3.gif";
// import p4 from "../../assets/img/4.gif";
import Form from "../Form/Form";

const QuizzPage = ({ data, results }) => {
  // console.log("data:", data);
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    score: "",
  });

  const FormTitles = [
    data[0]?.question,
    data[1]?.question,
    data[2]?.question,
    data[3]?.question,
    data[4]?.question,
    data[5]?.question,
    data[6]?.question,
    data[7]?.question,
    data[8]?.question,
    data[9]?.question,
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <Form formData={formData} setFormData={setFormData} answers={data[0]} />
      );
    } else if (page === 1) {
      return (
        <Form formData={formData} setFormData={setFormData} answers={data[1]} />
      );
    } else if (page === 2) {
      return (
        <Form formData={formData} setFormData={setFormData} answers={data[2]} />
      );
    } else if (page === 3) {
      return (
        <Form formData={formData} setFormData={setFormData} answers={data[3]} />
      );
    } else if (page === 4) {
      return (
        <Form formData={formData} setFormData={setFormData} answers={data[4]} />
      );
    } else if (page === 5) {
      return (
        <Form formData={formData} setFormData={setFormData} answers={data[5]} />
      );
    } else if (page === 6) {
      return (
        <Form formData={formData} setFormData={setFormData} answers={data[6]} />
      );
    } else if (page === 7) {
      return (
        <Form formData={formData} setFormData={setFormData} answers={data[7]} />
      );
    } else if (page === 8) {
      return (
        <Form formData={formData} setFormData={setFormData} answers={data[8]} />
      );
    } else if (page === 9) {
      return (
        <Form formData={formData} setFormData={setFormData} answers={data[9]} />
      );
    } else {
      return <Form formData={formData} setFormData={setFormData} />;
    }
  };

  // still have error with uploading score for every q and a so, scrap this and do a multistep form and hopefullly gather all andswers before submit

  return (
    <section className="page-two">
      {/* <Leaderboard/>  */}
      <div className="form">
        {/* <div className="progressbar">
          <div
            style={{
              width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%",
            }}
          ></div>
        </div> */}
        <div className="form-container">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">{PageDisplay()}</div>
          <div className="footer">
            <button
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button
              onClick={() => {
                if (page === FormTitles.length) {
                  alert("FORM SUBMITTED");
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizzPage;

// initially i'm only loading first question and its 4 answers then incrementing index to load the next
// let QandA =
//   data.length > 0 ? (
//     <>
//       <h4 className="question">{data[index].question}</h4>

//       <div className="answer">
//         <input
//           type="radio"
//           id="a1"
//           name="answer"
//           value={data[index].answers[0]}
//           ref={answer1}
//         />
//         <label htmlFor="a1" className="answer1">
//           {data[index].answers[0]}
//         </label>
//       </div>
//       <div className="answer">
//         <input
//           type="radio"
//           id="a2"
//           name="answer"
//           value={data[index].answers[1]}
//           ref={answer2}
//         />
//         <label htmlFor="a2" className="answer2">
//           {data[index].answers[1]}
//         </label>
//       </div>
//       <div className="answer">
//         <input
//           type="radio"
//           id="a3"
//           name="answer"
//           value={data[index].answers[2]}
//           ref={answer3}
//         />
//         <label htmlFor="a3" className="answer3">
//           {data[index].answers[2]}
//         </label>
//       </div>
//       <div className="answer">
//         <input
//           type="radio"
//           id="a4"
//           name="answer"
//           value={data[index].answers[3]}
//           ref={answer4}
//         />
//         <label htmlFor="a4" className="answer4">
//           {data[index].answers[3]}
//         </label>
//       </div>
//     </>
//   ) : (
//     <div>Loading questions...</div>
//   );

// const storeInDb = async (...inputs) => {
//   console.log(inputs);
//   if (inputs.name === "" && +inputs.score === 0) return;
//   else {
//     try {
//       await addDoc(collection(db, "scores"), inputs);
//       // console.log("this ran!");
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   }
// };

// const showResultCategory = (score) => {
//   if (score > 0 && score <= 10) {
//     setResult({
//       img: p1,
//       title: results[3].title,
//       description: results[3].description,
//     });
//   } else if (score > 10 && score <= 20) {
//     setResult({
//       img: p2,
//       title: results[0].title,
//       description: results[0].description,
//     });
//   } else if (score > 20 && score <= 30) {
//     setResult({
//       img: p3,
//       title: results[2].title,
//       description: results[2].description,
//     });
//   } else if (score > 10 && score <= 40) {
//     setResult({
//       img: p4,
//       title: results[1].title,
//       description: results[1].description,
//     });
//   }
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (!showLastPage) {
//     let a1 = answer1.current.checked;
//     let a2 = answer2.current.checked;
//     let a3 = answer3.current.checked;
//     let a4 = answer4.current.checked;

//     if (a1 === true) {
//       setScore((prev) => prev + 1);
//     } else if (a2 === true) {
//       setScore((prev) => prev + 2);
//     } else if (a3 === true) {
//       setScore((prev) => prev + 3);
//     } else if (a4 === true) {
//       setScore((prev) => prev + 4);
//     } else return score;
//   }

//   setInputs({
//     name: userName,
//     score: score,
//   });
//   showResultCategory(inputs.score);
//   // if (inputs.score) {
//   //   storeInDb(inputs);
//   // }
// };

// storeInDb(inputs); // this doesn't work anymore

// useEffect(() => {
//   console.log("score:", score);
//   console.log("username:", userName);
//   // console.log("form inputs:", formInputs);
//   if (userName.length > 0) {
//     setShowResults(true);
//   }
// }, [score, userName]);

// const inputName = (
//   <div className="inputName ">
//     {/* <audio id="myAudio" src="./mp3/Loud_Bang.mp3"></audio> */}
//     <label htmlFor="name">Enter your name:</label>
//     <input
//       value={userName}
//       onChange={(e) => setUserName(e.target.value)}
//       type="text"
//       id="name"
//       name="name"
//       required
//       minLength="4"
//       maxLength="12"
//       size="18"
//     />
//   </div>
// );
// const formClasses = showResults ? "quizzForm disabled" : "quizzForm";
