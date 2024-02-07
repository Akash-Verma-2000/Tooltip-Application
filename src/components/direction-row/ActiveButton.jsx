import "./DirectionRow.css"; // Importing CSS styles for the DirectionRow component

// Define the ActiveButton component
export default function ActiveButton({ text, fn }) {
  return (
    <>
      <button onClick={fn}>{text}</button> {/* Button element with text and onClick event handler */}
    </>
  );
}
