import React, { Fragment, useState } from "react";
const Form = (props) => {
  const initialState = {
    name: "",
  };
  const [fields, setFields] = useState(initialState);
  const handleFieldsChange = (e) =>
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
    const handleSubmit=e=>{
	    props.addSatelite(fields)
	    e.preventDefault()
	    setFields(initialState)
    }
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Satélite: </label>
          <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChange}/>
        </div>
        <br />
        <input type="submit" />
      </form>
    </Fragment>
  );
};

export default Form;
