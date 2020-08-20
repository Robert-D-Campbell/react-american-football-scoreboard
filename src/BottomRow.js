import React from "react";
import "./App.css";
import Down from "./Down";
import ToGo from "./ToGo";
import BallOn from "./BallOn";
import Quarter from "./Quarter";

const BottomRow = () => {
  return (
    <div className="bottomRow">
      <Down />
      <ToGo />
      <BallOn />
      <Quarter />
    </div>
  );
};

export default BottomRow;
