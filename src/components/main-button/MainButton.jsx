import Tootip from "../tooltip/Tooltip"; // Importing the Tooltip component
import "./MainButton.css"; // Importing CSS styles for the MainButton component

// Define the Button component
export default function Button({
  top,
  bottom,
  left,
  right,
  setShowTooltip,
  showTooltip,
}) {
  return (
    <div className="container-inner">
      {/* Container for the button and tooltips */}
      {/* Rendering tooltip in the upper row if top direction is selected and tooltip is shown */}
      <div className="upperRow">{top && showTooltip ? <Tootip /> : null}</div>
      {/* Middle row containing the button */}
      <div className="middleRow">
        {/* Column 1: Render tooltip if left direction is selected and tooltip is shown */}
        <div className="col1">{left && showTooltip ? <Tootip /> : null}</div>

        {/* Column 2: Button triggering tooltip visibility */}
        <div className="col2">
          <button
            onMouseOver={() => {
              setShowTooltip(true); // Set tooltip visibility to true on mouseover
            }}
            onMouseLeave={() => {
              setShowTooltip(false); // Set tooltip visibility to false on mouseleave
            }}
            className="button" // CSS class for styling the button
          >
            Hover Over Me {/* Button text */}
          </button>
        </div>

        {/* Column 3: Render tooltip if right direction is selected and tooltip is shown */}
        <div className="col3">{right && showTooltip ? <Tootip /> : null}</div>
      </div>
      {/* Rendering tooltip in the lower row if bottom direction is selected and tooltip is shown */}
      <div className="lowerRow">
        {bottom && showTooltip ? <Tootip /> : null}
      </div>
    </div> // Closing container-inner div
  );
}
