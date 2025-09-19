import React, { use } from 'react';
import Country from '../country/Country';

const Countris = ({countriesPromise}) => {
    const countriesdata = use(countriesPromise)
    const countries = countriesdata.countries
    

    return (
        <div>
            <h1>countries {countries.length}</h1>
            <Country countries={countries}></Country>
        </div>
    );
};

export default Countris;