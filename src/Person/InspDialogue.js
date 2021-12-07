import React from "react";

export default function InspDialogue({
  InspManip,
  InspDirect,
  InspMean,
  InspOpt,
  InspPess
}) {
  return (
    <div>
      <h2 id="InspManip">{InspManip}</h2>
      <h2 id="InspDirect">{InspDirect}</h2>
      <h2 id="InspMean">{InspMean}</h2>
      <h2 id="InspOpt">{InspOpt}</h2>
      <h2 id="InspPess">{InspPess}</h2>
    </div>
  );
}
