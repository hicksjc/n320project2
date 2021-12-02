import React, { useState, useEffect } from "react";

export default function PersonalityBehaviors({ Inspirational, GoalOriented }) {
  return (
    <div>
      <button onClick={()=>{console.log("I've been clicked", { Inspirational})}}>{Inspirational}</button>
      <button onClick={()=>{console.log("I've been clicked", { GoalOriented})}}>{GoalOriented}</button>
    </div>
  );
}
