import React, { useReducer, useState } from "react";
import Form from "../../components/Form/Form";
import { INITIAL_STATE, formInputReducer } from "../../util/formReducer";
// import { db } from "../../firebase-config";
// import { collection, addDoc } from "firebase/firestore";
// import Leaderboard from "../Leaderboard/Leaderboard";

const QuizzPage = ({ data, results }) => {
  const [state, dispatch] = useReducer(formInputReducer, INITIAL_STATE);
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    score: 0,
  });

  const FormTitles = [
    ...data.map((entry) => entry.question),
    "Enter your name: ",
  ];

  const isLastPage = page > data.length;

  const handleSubmitForm = (data) => {
    // here we will calc score and update formData to send to fb
    // need to pass handleSubmit as prop
    if (page === FormTitles.length - 1) {
      dispatch({ type: "GET_SCORE", questions: data });
      // setFormData(...state);
      alert("FORM SUBMITTED");
      console.log(state);
    } else {
      setPage((currPage) => currPage + 1);
    }
  };

  return (
    <section className="background-img">
      {/* <Leaderboard/>  */}
      <div className="form">
        <div className="form-container">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">
            {isLastPage ? (
              <Form
                formData={formData}
                setFormData={setFormData}
                handleSubmitForm={handleSubmitForm}
              />
            ) : (
              <Form
                formData={formData}
                setFormData={setFormData}
                data={data}
                page={page}
              />
            )}
          </div>

          <div className="footer">
            <button
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button onClick={handleSubmitForm}>
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizzPage;
