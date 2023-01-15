import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";
import ComponentB from "./component_b";

function componentA({ contact }) {
  return (
    <div>
      <h2>{contact.name}</h2>
      <h2>{contact.surname}</h2>
      <h3>{contact.email}</h3>
      <ComponentB status={true} />
    </div>
  );
}

componentA.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default componentA;
