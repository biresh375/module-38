import React, { use } from "react";
import Country from "../country/Country";
import "./countries.css";

const Countris = ({ countriesPromise }) => {
  const countriesdata = use(countriesPromise);
  const countries = countriesdata.countries;

  return (
    <div>
      <h1>countries {countries.length}</h1>
      <div className="counrties">
        {countries.map((country) => (
        <Country key={country.cca3.cca3} country={country}></Country>
      ))}

      </div>
    </div>
  );
};

export default Countris;
