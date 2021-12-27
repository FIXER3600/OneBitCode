import React, { Fragment, useState } from "react";

const Form = (props) => {
  const initialState = {
    namePlanet: "",
    desc: "",
    desc_url: "",
    img: "",
  };
  const [fields, setFields] = useState(initialState);
  const handleFieldsChange = (e) =>
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  const handleSubmit = (e) => {
    props.addPlanet(fields);
    e.preventDefault();
    setFields(initialState);
  };
 /* const addSatelite=(new_satelite)=>{
	setSatelite([...satellite,new_satelite])
  }*/
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            type="text"
            name="namePlanet"
            value={fields.namePlanet}
            onChange={handleFieldsChange}
          />
        </div>
        <div>
          <label htmlFor="desc">Descrição:</label>
          <textarea
            id="desc"
            type="text"
            name="desc"
            value={fields.desc}
            onChange={handleFieldsChange}
          />
        </div>
        <div>
          <label htmlFor="desc_url">Saiba Mais:</label>
          <textarea
            id="desc_url"
            type="text"
            name="desc_url"
            value={fields.desc_url}
            onChange={handleFieldsChange}
          />
        </div>
        <div>
          <label htmlFor="img">URL Img:</label>
          <textarea
            id="img"
            type="text"
            name="img"
            value={fields.img}
            onChange={handleFieldsChange}
          />
        </div>
        <br />
        <input type="submit" />
      </form>
    </Fragment>
  );
};

export default Form;
