import React from "react";
import GrayImg from "../../shared/gray_img/";
import DescriptionWithLink from "../../shared/description_with_link/DescriptionWithLink";

import {Link} from 'react-router-dom'

const Planet = (props) => {
  let title;
  if (props.title_with_underline)
    title = (
      <h4>
        <u>{props.namePlanet}</u>
      </h4>
    );
  else title = <h4>{props.namePlanet}</h4>;
  return (
    <div onClick={() => props.clickOnPlanet(props.namePlanet)}>
       <Link to={`/planet/${props.id}`}>{title}</Link>
      <DescriptionWithLink desc={props.desc} desc_url={props.desc_url} />
      <GrayImg img_url={props.img} gray={props.gray} />
     
    </div>
  );
};

export default Planet;
