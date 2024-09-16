import PropTypes from "prop-types";

const Tracker = ({
  label,
  labelStyle,
  trackValues,
  stateLabel,
  state,
  setState,
}) => {
  return (
    <div>
      <div style={{ ...labelStyle }}>{label}</div>
      <div className="radioContainer">
        {trackValues.map((value) => (
          <span
            key={value}
            onClick={() => setState({ ...state, [stateLabel]: value })}
            className={`radioDiv ${
              state[stateLabel] === value ? "selectedRadioDiv" : ""
            }`}
          >
            {typeof value === "string" ? value.charAt(0) : value}
          </span>
        ))}
      </div>
    </div>
  );
};
Tracker.propTypes = {
  label: PropTypes.string.isRequired,
  labelStyle: PropTypes.object,
  trackValues: PropTypes.array.isRequired,
  stateLabel: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
};

export default Tracker;
