import "./Intro.css";

const Intro = () => {
  return (
    <div className="main-container">
      <div className="intro-container">
        <div className="intro-top">
          <p className="p-body">
            Hi! I’m Sara Woods — <br></br>a multidisciplinary{" "}
            <span className="weight-700">
              designer, illustrator, and web developer.
            </span>
            <br></br>
            <br></br>With a focus on creativity and precision, I create graphics
            and websites that grab attention. Do you have a project in mind?
            Let’s chat!<br></br>
            <br></br>
          </p>
          <div className="arrow-email">
            <svg
              className="mr-4 arrow"
              width="166"
              height="72"
              viewBox="0 0 166 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3C12.3659 23.2425 24.7402 38.3733 48.7216 41.3641C67.2322 43.6726 94.245 36.8382 98.6474 15.4377C101.033 3.83968 87.799 4.40825 81.3047 8.43053C69.2377 15.9043 63.688 34.7376 68.9547 47.7581C78.6064 71.6194 107.33 73.3408 128.5 65.5C138.5 61 154.104 52.0346 161.5 54.5"
                stroke="#C36CE2"
                strokeWidth="4"
                strokeLinecap="square"
              />
              <path
                d="M150 40.9751C152.945 44.5502 155.518 47.4173 159.417 51.1912C160.767 52.4982 161.807 53.3384 162.94 54.469"
                stroke="#C36CE2"
                strokeWidth="4"
                strokeLinecap="square"
              />
              <path
                d="M162.219 55.1816C159.199 58.694 158.492 59.4447 155 62.5C153.794 63.5551 150.156 67.3934 149 68.5"
                stroke="#C36CE2"
                strokeWidth="4"
                strokeLinecap="square"
              />
            </svg>
            <p className="email-top-margin p-body weight-500">
              sarawoodsdesign@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
