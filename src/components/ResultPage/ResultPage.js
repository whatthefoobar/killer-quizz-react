import React from "react";

const ResultPage = ({ result }) => {
  return (
    <div className="resultContainer">
      <div className="img">
        <img src={result.img} alt="result" />
      </div>

      <h3 className="resultHeader">{result.title}</h3>
      <p className="resultParagraph">{result.description}</p>
    </div>
  );
};

export default ResultPage;
