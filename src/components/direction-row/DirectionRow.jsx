import ActiveButton from "./ActiveButton"; // Importing the ActiveButton component
import InactiveButton from "./InactiveButton"; // Importing the InactiveButton component
import "./DirectionRow.css"; // Importing CSS styles for the DirectionRow component

// Define the DirectionRow component
export default function DirectionRow({
  setLeft,
  setRight,
  setBottom,
  setTop,
  left,
  right,
  top,
  bottom,
}) {
  // Function to handle setting the right tooltip direction
  function handleRightTooltip() {
    setLeft(false); // Set left tooltip direction to false
    setBottom(false); // Set bottom tooltip direction to false
    setTop(false); // Set top tooltip direction to false
    setRight((prev) => !prev); // Toggle right tooltip direction
  }

  // Function to handle setting the left tooltip direction
  function handleLeftTooltip() {
    setBottom(false); // Set bottom tooltip direction to false
    setRight(false); // Set right tooltip direction to false
    setTop(false); // Set top tooltip direction to false
    setLeft((prev) => !prev); // Toggle left tooltip direction
  }

  // Function to handle setting the top tooltip direction
  function handleTopTooltip() {
    setLeft(false); // Set left tooltip direction to false
    setRight(false); // Set right tooltip direction to false
    setBottom(false); // Set bottom tooltip direction to false
    setTop((prev) => !prev); // Toggle top tooltip direction
  }

  // Function to handle setting the bottom tooltip direction
  function handleBottomTooltip() {
    setLeft(false); // Set left tooltip direction to false
    setRight(false); // Set right tooltip direction to false
    setTop(false); // Set top tooltip direction to false
    setBottom((prev) => !prev); // Toggle bottom tooltip direction
  }

  // Render the DirectionRow component
  return (
    <div className="direction-row">
      {" "}
      {/* Container for direction buttons */}
      {/* Conditional rendering of ActiveButton or InactiveButton for right direction */}
      {right ? (
        <ActiveButton fn={handleRightTooltip} text={"Right"} />
      ) : (
        <InactiveButton fn={handleRightTooltip} text={"Right"} />
      )}
      {/* Conditional rendering of ActiveButton or InactiveButton for top direction */}
      {top ? (
        <ActiveButton text={"Top"} fn={handleTopTooltip} />
      ) : (
        <InactiveButton text={"Top"} fn={handleTopTooltip} />
      )}
      {/* Conditional rendering of ActiveButton or InactiveButton for left direction */}
      {left ? (
        <ActiveButton fn={handleLeftTooltip} text={"Left"} />
      ) : (
        <InactiveButton fn={handleLeftTooltip} text={"Left"} />
      )}
      {/* Conditional rendering of ActiveButton or InactiveButton for bottom direction */}
      {bottom ? (
        <ActiveButton fn={handleBottomTooltip} text={"Bottom"} />
      ) : (
        <InactiveButton text={"Bottom"} fn={handleBottomTooltip} />
      )}
    </div> // Closing container div
  );
}
