import React, { useState } from "react";
import PropTypes from "prop-types";

function ComponentB(status) {
  const [connected, setStatus] = useState(status);
  return (
    <div>
      <h2>{connected === false ? "OFFLINE" : "ONLINE"}</h2>
      <button onClick={() => setStatus(!connected)}>
        {connected === false ? "CONNECT" : "DISCONNECT"}
      </button>
    </div>
  );
}

ComponentB.propTypes = {
  estado: PropTypes.bool,
};

export default ComponentB;
