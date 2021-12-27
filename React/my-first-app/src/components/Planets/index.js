import React, { Fragment, useState, useEffect } from "react";
import Planet from "../Planets/planet";
import Form from "../Planet/form";

async function getPlanets() {
  let res = await fetch("http://localhost:3000/api/planets.json");
  let data = await res.json();
  return data;
}

const Planets = () => {
  const [planets, setPlanets] = useState([
    {
      id: "mars",
      namePlanet: "Mars",
      desc: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the 'Red Planet'.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/220px-OSIRIS_Mars_true_color.jpg",
      desc_url: "https://en.wikipedia.org/wiki/Mars",
    },
  ]);
const addPlanet=(new_planet)=>{
setPlanets([...planets,new_planet])
}
  useEffect(()=>{
    getPlanets().then((data)=>{
          setPlanets(
            data['planets']
          )
        })
  },[])

  const clickOnPlanet = (namePlanet) => {
    console.log(`Clicou no planeta ${namePlanet}`);
  };

  const removeLast = () => {
    let new_planets = [...planets];
    new_planets.pop();
    setPlanets(new_planets);
  };
  const duplicateLastPlanet = () => {
    let last_planet = planets[planets.length - 1];
    setPlanets([...planets, last_planet]);
  };

  return (
    <Fragment>
      <h3>Planet List</h3>
      <hr/>
      <Form addPlanet={addPlanet}/>
      <hr/>
      <button onClick={removeLast}>Remove Last</button>
      <button onClick={duplicateLastPlanet}>Duplicate Last</button>
      {planets.map((planet, index) => (
        <Planet
          key={index}
          namePlanet={planet.namePlanet}
          title_with_underline={planet.title_with_underline}
          desc={planet.desc}
          desc_url={planet.desc_url}
          img={planet.img}
          gray={planet.gray}
          clickOnPlanet={clickOnPlanet}
          id={planet.id}
        />
      ))}
    </Fragment>
  );
};
export default Planets;
