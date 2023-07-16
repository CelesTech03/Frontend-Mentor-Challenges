import "./QR.css";
import QRImage from "./assets/images/image-qr-code.png";

const QR = () => {
  return (
    <>
      <div className="main-container">
        <div className="image-and-typography-container">
          <div className="image-and-typography-content">
            <img src={QRImage} />
            <h3>Improve your front-end skills by building projects</h3>
            <p>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/CelesTech03"
          target="_blank"
          rel="noreferrer"
        >
          Celi
        </a>
        .
      </div>
    </>
  );
};

export default QR;
