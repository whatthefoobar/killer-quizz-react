const Intro = () => {
  return (
    <section className="first-page">
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
    </section>
  );
};

export default Intro;
