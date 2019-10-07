import React, { useState } from "react";

const Quarter = () => {
  //   function quarterHandler(quarter) {
  //     if (quarter == 4) {
  //       quarter = 0;
  //     } else {
  //       quarter + 1;
  //     }
  //     return;
  //   }
  const [quarter, setQuarter] = useState(0);

  return (
    <div className="quarter">
      <h3 className="quarter__title">Quarter</h3>
      <a onClick={() => setQuarter(quarter + 1)}>
        <div className="quarter__value">{quarter}</div>
      </a>
    </div>
  );
};

export default Quarter;
