
import { Suspense } from 'react';
import './App.css'
import Countris from './component/countris/Countris'



const countriesUrl= "https://openapi.programming-hero.com/api/all";

const countriesPromise= fetch(countriesUrl).then(res=>res.json());
// console.log(countriesPromise);




function App() {
  

  return (
    <>
      
      <Suspense fallback={<h1>Loading countries..........</h1>}>
        <Countris countriesPromise={countriesPromise}></Countris>
      </Suspense>
      
    </>
  )
}

export default App
