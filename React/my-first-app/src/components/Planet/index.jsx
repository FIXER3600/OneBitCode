import React, { useState, useEffect } from "react";
import GrayImg from "../shared/gray_img/index";
import DescriptionWithLink from "../shared/description_with_link/DescriptionWithLink";
import Form2 from "../Planets/form";
import { useParams, useNavigate } from "react-router-dom";

async function getPlanet(id) {
  let res = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await res.json();
  return data;
}

const Planet = () => {
  const [satellites, setSatellite] = useState([{}]);
  const [planet, setPlanet] = useState({});

  let { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    getPlanet(id).then((data) => {
      setSatellite(data["satellites"]);
      setPlanet(data["data"]);   
  }, []);})

  const addSatelite = (new_satelite) => {
    setSatellite([...satellites, new_satelite]);
  };

  const goToPlanets = () => {
    navigate("/");
  };

  let title;
  if (planet.title_with_underline)
    title = (
      <h4>
        <u>{planet.namePlanet}</u>
      </h4>
    );
  else title = <h4>{planet.namePlanet}</h4>;

  return (
    <div onClick={() => planet.clickOnPlanet(planet.namePlanet)}>
      {title}
      <DescriptionWithLink desc={planet.desc} desc_url={planet.desc_url} />
      <GrayImg img_url={planet.img} gray={planet.gray} />
      <h4>Satélites</h4>
      <hr />
      <Form2 addSatelite={addSatelite} />
      <hr />
      <ul>
        {satellites.map((satelite, index) => {
          return <li key={index}>{satelite.name}</li>;
        })}
      </ul>
      <hr />
      <button onClick={goToPlanets}>Voltar</button>
    </div>
  );
}

export default Planet;
