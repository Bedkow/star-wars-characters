import React, { useState, useEffect } from 'react';

import { render } from 'react-dom';

import axios from 'axios';

import './style.css';

const App = () => {
  let [r, setR] = useState(null);
  let [counter, setCounter] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${counter}`)
      .then(function (response) {
        // success
        let r = response.data;
        setR(r);
      })
      .catch(function (error) {
        // error
        console.log(error);
      });
  }, [counter]);

  return (
    <div className="bg-gray-900 h-screen text-yellow-300">
      <div className="flex flex-col justify-center items-center">
        <p className="uppercase font-black tracking-widest text-xl">
          may the force be with you
        </p>
        {!r && counter && <div className="animate-bounce">Loading</div>}
      </div>
      {!counter && (
        <div className="flex justify-center items-center">
          <button
            className="p-1 border-2 rounded-full border-yellow-300 bg-gray-700"
            onClick={() => setCounter(1)}
          >
            Start
          </button>
        </div>
      )}

      {r && counter && (
        <div className="flex flex-col items-center">
          <div>Full Name: {r.name}</div>
          <div>Height: {r.height}</div>
          <div>Mass: {r.mass}</div>
          <div>Gender: {r.gender}</div>
          <div>Hair color: {r.hair_color}</div>
          <div className="flex justify-center items-center">
            <button
              className="p-1 border-2 rounded-full border-yellow-300 bg-gray-700"
              onClick={() => {
                if (counter > 1) {
                  setCounter(counter - 1);
                }
              }}
            >
              {`<`} Previous
            </button>
            <button
              className="p-1 border-2 rounded-full border-yellow-300 bg-gray-700"
              onClick={() => {
                if (counter < 82) {
                  setCounter(counter + 1);
                }
              }}
            >
              Next {`>`}
            </button>
            <button
              className="p-1 border-2 rounded-full border-yellow-300 bg-gray-700"
              onClick={() => setCounter(null)}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

render(<App />, document.getElementById('root'));

/* 

# SW APP

## About

Build a simple app that allows users to browse the Star Wars characters.
Please use provided endpoint https://swapi.dev/api/people/1.
To get information about certain characters replace 1 with another number, 

https://swapi.dev/api/people/1
https://swapi.dev/api/people/2
https://swapi.dev/api/people/3

etc 

## Functionlities

- as a user, I would like to click on the 'next button to see info related to the next character 
- as a user, I would like to click on the 'prev' button to see info related to the previous character  
- as a user, I would like to see selected info related to characters (name, height, mass, gender, hair_color )

## Additional info 

Please use provided packages/tools to solve the tasks

- https://ramdajs.com/docs/#
- https://axios-http.com/
- https://tailwindcss.com/docs/installation#using-tailwind-via-cdn 

Please note that tailwind was installed via CDN

HF!!

*/
