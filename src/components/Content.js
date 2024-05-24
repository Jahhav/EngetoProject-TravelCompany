import "./Content.css";

const Content = ({ heading, text }) => {
  return (
    <div className="content-container">
      <h1>{heading}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Content;
