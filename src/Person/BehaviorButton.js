import React, { useState, useEffect } from "react";
import PersonalityTypes from "./TypeButton";

export default function PersonalityBehaviors({
  Inspirational,
  GoalOriented,
  onThirdClicked
}) {
  return (
    <div>
      <button
        onClick={() => {
          onThirdClicked(0);
        }}
      >
        {Inspirational}
      </button>
      <button
        onClick={() => {
          console.log("I've been clicked", { GoalOriented });
          onThirdClicked(1);
        }}
      >
        {GoalOriented}
      </button>
    </div>
  );
}
