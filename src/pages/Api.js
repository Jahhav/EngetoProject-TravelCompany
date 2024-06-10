// Jan Havlát
import { useState } from "react";
import "./Api.css";
import { Link } from "react-router-dom";
import DescriptionApi from "../components/DescriptionApi";

const Api = () => {
  const [formData, setFormData] = useState({
    state: "",
    city: "",
    zipCode: "",
    cities: [],
  });

  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://api.zippopotam.us/${formData.state}/${formData.zipCode}`
      );
      if (response.ok) {
        const data = await response.json();
        const placeNames = data.places.map((place, index) => ({
          name: place["place name"].replace(/ x\)/g, ""),
          id: index + 1,
        }));
        setFormData((prevFormData) => ({
          ...prevFormData,
          cities: placeNames,
          city: data.places[0].state,
        }));
        setError("");
      } else {
        setError("Chyba: Zadaná kombinace PSČ a země nebyla nalezena.");
      }
    } catch (error) {
      setError("Chyba při načítání dat.");
    }
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    await fetchData();
  };

  const handleZipCodeChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");

    if (
      (formData.state === "cz" || formData.state === "sk") &&
      value.length > 3
    ) {
      value = value.slice(0, 3) + " " + value.slice(3);
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      zipCode: value,
    }));
  };

  const handleStateChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      state: e.target.value,
      zipCode: "",
    }));
  };

  return (
    <div className="body-api">
      <h1>Zip Code tracker</h1>
      <div className="main-container">
        <form onSubmit={formSubmitHandler}>
          <input
            type="text"
            onChange={handleZipCodeChange}
            value={formData.zipCode}
            placeholder="např. 612 00"
          ></input>
          <select value={formData.state} onChange={handleStateChange}>
            <option value="">Vyber zemi</option>
            <option value="cz">Česko</option>
            <option value="sk">Slovensko</option>
            <option value="us">USA</option>
          </select>
          <button>Submit</button>
        </form>
        <div className="range-description">
          <DescriptionApi countryCode={formData.state} />
        </div>
      </div>
      <div className="second-container main-container">
        {error && <p className="error">{error}</p>}
        {!error && (
          <>
            <h3>{formData.city}</h3>
            <div className="cities">
              {formData.cities.map((city) => {
                return <p key={city.id}>{city.name}</p>;
              })}
            </div>
          </>
        )}
      </div>
      <Link to="/transport-company-project" className="api-link">
        Zpět
      </Link>
    </div>
  );
};

export default Api;
