import React, { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountries,handleVisitedFlag }) => {
  // console.log(country);
  // console.log(handleVisitedCountries);
  const [visited, setVisited] = useState(false);

  const handleClick = () => {
    // setVisited(visited? false: true);
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    setVisited(!visited);
    handleVisitedCountries(country);
  };
  return (
    <div className={`country ${visited && "visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h1>Name: {country.name.common}</h1>
      <h4>population : {country.population.population}</h4>
      <h4>
        Language :{"  "}
        {country.languages.languages?.eng ?? (
          <span style={{ color: "red" }}>"not defiend"</span>
        )}
      </h4>
      <h4>Capital : {country.capital.capital[0] ?? "not defiend"}</h4>
      <p>
        Area : {country.area.area}{" "}
        {country.area.area > 300000 ? "Big country" : "samall country"}
      </p>
      <button
        onClick={handleClick}
        style={{
          fontSize: "20px",
          padding: "10px 20px",
          border: "1px solid green",
          borderRadius: "10px",
        }}
      >
        {visited ? "visited" : "not visited"}
      </button>
      <button onClick={()=>{handleVisitedFlag(country.flags.flags.png)}}
        style={{
          fontSize: "20px",
          padding: "10px 20px",
          border: "1px solid green",
          borderRadius: "10px",
          marginTop:"10px"
        }}
      >
        visited flag
      </button>
    </div>
  );
};

export default Country;
