import "./DirectionRow.css"; // Importing CSS styles for the InactiveButton component

// Define the InactiveButton component
export default function InactiveButton({ text, fn }) {
  return (
    <>
      <button onClick={fn} className="disable-button"> {/* Button element with onClick event handler and CSS class */}
        {text} {/* Text content of the button */}
      </button>
    </>
  );
}
