import React, { useState } from "react";
// import { db } from "../../firebase-config";
// import { collection, addDoc } from "firebase/firestore";
// import Leaderboard from "../Leaderboard/Leaderboard";
import Form from "../Form/Form";

const QuizzPage = ({ data, results }) => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    score: 0,
  });

  // ########## SUGGESTION ##########
  const FormTitles_SUGGESTION = [
    ...data.map((entry) => entry.question),
    "Enter your name: ",
  ];

  // ########## OLD ##########
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
    "Enter your name: ",
  ];

  // ########## SUGGESTION ##########
  const isLastPage = page > data.length;

  // ########## OLD ##########
  const PageDisplay = () => {
    //start from 0 to match index for FormTitles
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
      // last page for name input
      return <Form formData={formData} setFormData={setFormData} />;
    }
  };

  const handleSubmitForm = () => {
    if (page === FormTitles.length - 1) {
      alert("FORM SUBMITTED");
      console.log(formData);
    } else {
      setPage((currPage) => currPage + 1);
    }
  };

  return (
    <section className="page-two">
      {/* <Leaderboard/>  */}
      <div className="form">
        <div className="form-container">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">
            {/* ########## SUGGESTION ########## */}
            {isLastPage ? (
              <Form formData={formData} setFormData={setFormData} />
            ) : (
              <Form
                formData={formData}
                setFormData={setFormData}
                answers={data[page]}
              />
            )}
            {/* ########## OLD ########## */}
            {/* {PageDisplay()} */}
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
