import React from "react";

export default function GoalDialogue({
    GoalManip,
    GoalDirect,
    GoalMean,
    GoalOpt,
    GoalPess
}) {
    return (
        // Create the dialogue for pressing the goal oriented button
        <div>
            <h2 id="GoalManip">{GoalManip}</h2>
            <h2 id="GoalDirect">{GoalDirect}</h2>
            <h2 id="GoalMean">{GoalMean}</h2>
            <h2 id="GoalOpt">{GoalOpt}</h2>
            <h2 id="GoalPess">{GoalPess}</h2>
        </div>
    )
}