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
      <button id="Manipulative" onClick={()=>{onSecondClicked()}}>{Manipulative}</button>
      <button onClick={()=>{onSecondClicked()}}>{Directive}</button>
      <button onClick={()=>{onSecondClicked()}}>{Mean}</button>
      <button onClick={()=>{onSecondClicked()}}>{Optimistic}</button>
      <button onClick={()=>{onSecondClicked()}}>{Pessimistic}</button>
    </div>
  );
}
