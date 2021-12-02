import React, { useState, useEffect } from "react";

export default function PersonalityTypes({
  Manipulative,
  Directive,
  Mean,
  Optimistic,
  Pessimistic,
  onSecondClicked
}) {
  return (
    <div>
      <button
        id="Manipulative"
        onClick={() => {
          onSecondClicked(0);
        }}
      >
        {Manipulative}
      </button>
      <button
        onClick={() => {
          onSecondClicked(1);
        }}
      >
        {Directive}
      </button>
      <button
        onClick={() => {
          onSecondClicked(2);
        }}
      >
        {Mean}
      </button>
      <button
        onClick={() => {
          onSecondClicked(3);
        }}
      >
        {Optimistic}
      </button>
      <button
        onClick={() => {
          onSecondClicked(4);
        }}
      >
        {Pessimistic}
      </button>
    </div>
  );
}
