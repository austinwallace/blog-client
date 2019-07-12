import React from "react";
import PropTypes from "prop-types";

const sayhello = name => (!!name ? <h3>Hello {name}</h3> : null);

const HomePage = props => {
  console.log("props are", props);
  return (
    <>
      <h2>Home page</h2>
      {sayhello(name)}
      <p>Hello {props.name}</p>
    </>
  );
};

export default HomePage;

HomePage.propTypes = {
  name: PropTypes.string
};
