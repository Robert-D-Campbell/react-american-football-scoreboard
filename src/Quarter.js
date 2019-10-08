import React, { useState } from "react";

const Quarter = () => {
  const [quarter, setQuarter] = useState(0);

  function quarterHandler() {
    if (quarter == 4) {
      setQuarter(0);
    } else {
      setQuarter(quarter + 1);
    }
    return;
  }

  return (
    <div className="quarter">
      <h3 className="quarter__title">Quarter</h3>
      <a onClick={() => quarterHandler()}>
        <div className="quarter__value">{quarter}</div>
      </a>
    </div>
  );
};

export default Quarter;
