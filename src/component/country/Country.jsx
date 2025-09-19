import React from "react";
import "./country.css";

const Country = ({ country }) => {
  console.log(country);
  return (
    <div className="country">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h1>Name: {country.name.common}</h1>
      <h4>population : {country.population.population}</h4>
      <h4>
        Language :{" "}
        {country.languages.languages?.eng ?? (
          <span style={{ color: "red" }}>"not defiend"</span>
        )}
      </h4>
      <h4>Capital : {country.capital.capital[0] ?? "not defiend"}</h4>
      <p>
        Area : {country.area.area}{" "}
        {country.area.area > 300000 ? "Big country" : "samall country"}
      </p>
    </div>
  );
};

export default Country;
