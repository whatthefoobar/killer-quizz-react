import React from "react";

const Leaderboard = () => {
  return (
    <>
      {/* modal btn that triggers leaderboard modal */}
      <button className="leaderboardBtn">Score leaderboard</button>
      {/* leaderboard modal */}
      <div id="leaderboardModal" className="modalBackground">
        <div className="modal-content">
          <span className="close">&times;</span>

          <ul className="leaderboard-list">
            <li className="leaderboard-list-item">Name: &nbsp Score:</li>
          </ul>
        </div>
      </div>{" "}
    </>
  );
};

export default Leaderboard;
