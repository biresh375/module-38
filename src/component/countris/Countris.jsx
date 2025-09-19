import React, { use, useState } from "react";
import Country from "../country/Country";
import "./countries.css";
// import { Linter } from "eslint";

const Countris = ({ countriesPromise }) => {
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);
  const handleVisitedCountries = (country) => {
    // console.log("handle visiited country clicked", country);
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
  };

  const handleVisitedFlag = (flag) => {
    console.log("visited flag clicked", flag);
    const NewVisitedFlag = [...visitedFlag, flag];
    setVisitedFlag(NewVisitedFlag);
  };

  const countriesdata = use(countriesPromise);
  const countries = countriesdata.countries;

  return (
    <div>
      <h1>countries {countries.length}</h1>
      <h3>Total country visited: {visitedCountry.length}</h3>
      <ol>
        {visitedCountry.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>

      <div className="visited-flag">
        {visitedFlag.map((flag, index) => (
          <img key={index} src={flag}></img>
        ))}
      </div>

      <div className="counrties">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countris;
