import { useEffect, useState } from "react";
import "./DescriptionApi.css";

const DescriptionApi = ({ countryCode }) => {
  const [text, setText] = useState("");

  const textInDescription = () => {
    switch (countryCode) {
      case "cz":
        setText("Range 100 00 - 798 62");
        break;
      case "sk":
        setText("Range 010 01 - 992 01");
        break;
      case "us":
        setText("Range 00210 - 99950");
        break;
      default:
        setText("");
    }
  };

  useEffect(() => {
    textInDescription();
  }, [countryCode]);

  return (
    <div className="api-body">
      <div className="description-api">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default DescriptionApi;
