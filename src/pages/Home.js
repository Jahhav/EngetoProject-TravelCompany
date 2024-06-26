// Jan Havlát
import { useState } from "react";
import "./Home.css";
import exportData from "../data.json";
import Card from "../components/Card";
import Content from "../components/Content";
import { PiBookOpenText, PiPackageBold } from "react-icons/pi";
import { MdOutlineComputer } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";

const Home = () => {
  const { slogany, contentData } = exportData;

  const randomSlogan = () => {
    const randomIndex = Math.floor(Math.random() * slogany.length);
    return slogany[randomIndex].slogan;
  };

  const [content, setContent] = useState(contentData[0]);
  const [selectedTab, setSelectedTab] = useState(0);

  const { heading, text } = content;

  const handleTabClick = (index) => {
    setContent(contentData[index]);
    setSelectedTab(index);
  };

  return (
    <div className="body">
      <div className="heading-box">
        <h2 className="heading-title">Transportní společnost</h2>
        <h3 className="heading-slogan">{randomSlogan()}</h3>
        <img src={require("../img/truck-8656658.jpg")} alt="Truck"></img>
      </div>
      <div className="background">
        <div className="second-section">
          <h2>Výhody a přednosti naší společnosti</h2>
          <div className="card-container">
            <Card
              image={<TbTruckDelivery />}
              heading={"Rychlé doručení"}
              text={"Zaregistrujte si účet získejte prioritní odbavení."}
            />
            <Card
              image={<MdOutlineComputer />}
              heading={"Pokročilý nástroj pro odesílání"}
              text={"Usnadněte si odesílání zásilek s novým nástrojem."}
            />
            <Card
              image={<PiBookOpenText />}
              heading={"Přehledný systém"}
              text={"Adresáře, online fakturace a reportování."}
            />
            <Card
              image={<PiPackageBold />}
              heading={"Přeprava pro e-commerce"}
              text={
                "Zaregistrujte se a získej výhodný poměrem rychlosti a ceny."
              }
            />
          </div>
        </div>
        <Link to="/api" className="api-link">
          Tracker
        </Link>
        <div className="third-section">
          <div className="navigation-buttons">
            {contentData.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  handleTabClick(index);
                }}
                className={index === selectedTab ? "active" : ""}
              >
                {item.heading}
              </button>
            ))}
          </div>
          <Content heading={heading} text={text} />
        </div>
      </div>
    </div>
  );
};

export default Home;
