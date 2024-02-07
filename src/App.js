import "../src/App.css"; // Importing CSS styles for the App component
import MainButton from "./components/main-button/MainButton"; // Importing the MainButton component
import DirectionRow from "./components/direction-row/DirectionRow"; // Importing the DirectionRow component
import { useState } from "react"; // Importing the useState hook from React

// Define the App component
export default function App() {

  // Define state variables for tooltip directions and visibility
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [top, setTop] = useState(false);
  const [bottom, setBottom] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Render the component
  return (
    <div className="container"> {/* Container to hold the components */}

      {/* DirectionRow component for selecting tooltip directions */}
      <DirectionRow
        left={left} // Prop to indicate if left direction is selected
        right={right} // Prop to indicate if right direction is selected
        top={top} // Prop to indicate if top direction is selected
        bottom={bottom} // Prop to indicate if bottom direction is selected
        setLeft={setLeft} // Function to update state for left direction selection
        setRight={setRight} // Function to update state for right direction selection
        setBottom={setBottom} // Function to update state for bottom direction selection
        setTop={setTop} // Function to update state for top direction selection
      />

      {/* MainButton component to trigger tooltip visibility */}
      <MainButton
        left={left} // Prop indicating if left direction is selected
        right={right} // Prop indicating if right direction is selected
        top={top} // Prop indicating if top direction is selected
        bottom={bottom} // Prop indicating if bottom direction is selected
        setShowTooltip={setShowTooltip} // Function to toggle tooltip visibility
        showTooltip={showTooltip} // Prop indicating if tooltip should be shown
      />

    </div> 
  );
}
