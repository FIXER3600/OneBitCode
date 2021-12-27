import React, { Fragment } from "react";

const DescriptionWithLink = (props) => {
  if(!props.desc)
  return null
  if(props.desc_url){
    return (
      <Fragment>
        <p>{props.desc}</p>
        <p>
          <a target="_blank" href={props.desc_url}>
            Saiba Mais
          </a>
        </p>
      </Fragment>
    );
  }else{
    return (
      <Fragment>
        <p><u>{props.desc}</u></p>
      </Fragment>
    );
  }
 
};
export default DescriptionWithLink;
