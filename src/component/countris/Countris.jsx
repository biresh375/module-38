import React, { use, useState } from "react";
import Country from "../country/Country";
import "./countries.css";
// import { Linter } from "eslint";

const Countris = ({ countriesPromise }) => {
  const [visitedCountry, setVisitedCountry] = useState([]);
  const handleVisitedCountries = (country) => {
    console.log("handle visiited country clicked", country);
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
  };

  const countriesdata = use(countriesPromise);
  const countries = countriesdata.countries;

  return (
    <div>
      <h1>countries {countries.length}</h1>
      <h3>Total country visited: {visitedCountry.length}</h3>
      <ol>
        {visitedCountry.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}
          </li>
          
        ))}
      </ol>
      <div className="counrties">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countris;
