import React, { useState, useEffect } from "react";
//import PersonalityList from "./PersonalityList";
import PersonalityBehaviors from "./BehaviorButton";
import PersonalityTypes from "./TypeButton.js";
import InspDialogue from "./InspDialogue.js";

export default function PersonQuote() {
  const [Personalities, setPersonalities] = useState([]);
  const [PersonalityType, setPersonalityType] = useState([]);
  const [Behaviors, setBehaviors] = useState([]);
  const [showSecondTypes, setShowSecondTypes] = useState(false);
  const [InspirationalDialogue, setShowInspDialogue] = useState([]);
  //const [currentText, setCurText] = useState("");
  const [selectedPersonalityType, setSelectedPersonType] = useState("");
  const [showThirdTypes, setShowThirdTypes] = useState(false);
  //const [showDialogue, setShowDialogue] = useState(false);
  useEffect(() => {
    fetch("data/data.json")
      .then((response) => response.json())
      .then((data) => {
        //set the data
        setPersonalities(data);
        setPersonalityType(data.Personalities[0].PersonalityType);
        //console.log(data.Personalities[0].PersonalityBehaviors);
        setBehaviors(data.Personalities[0].PersonalityBehaviors);
        // setShowDialogue should retrieve user input based on the two
        // Buttons clicked. It should know that Manipulation was clicked first
        // And Inspirational was clicked second and display the dialogue according to that data.
        //setShowDialogue(data.Peronslities[0].InspirationalDialogue);
        setShowInspDialogue(data.Personalities[0].InspirationalDialogue);
      });
  }, []);

  //let personalityBehaviors =

  // const PB = Behaviors.map((Per, key) => {

  //  console.log(Per);
  //  });
  return (
    <div>
      <PersonalityTypes
        Manipulative={PersonalityType[0]}
        Directive={PersonalityType[1]}
        Mean={PersonalityType[2]}
        Optimistic={PersonalityType[3]}
        Pessimistic={PersonalityType[4]}
        onSecondClicked={(PType) => {
          console.log(PType);
          setSelectedPersonType(PType);
          showSecondClicked();
        }}
      />
      {showSecondTypes && (
        <PersonalityBehaviors
          Inspirational={Behaviors[0]}
          GoalOriented={Behaviors[1]}
          onThirdClicked={(PDialogue) => {
            console.log(PDialogue);
            setShowThirdTypes(PDialogue);
            showInspirationalDialogue();
          }}
        />
      )}
      {InspDialogue && (
        <InspDialogue
          InspManip={InspirationalDialogue[0]}
          InspDirect={InspirationalDialogue[1]}
          InspMean={InspirationalDialogue[2]}
          InspOpt={InspirationalDialogue[3]}
          InspPess={InspirationalDialogue[4]}
        />
      )}
    </div>
  );

  function showSecondClicked() {
    setShowSecondTypes(true);
  }
  function showInspirationalDialogue() {
    setShowThirdTypes(true);
  }
}
