import { Autocomplete, TextField } from "@mui/material";
import PropTypes from "prop-types";

const TextFieldMulti = ({
  label,
  labelStyle,
  stateLabel,
  state,
  setState,
  value,
}) => {
  return (
    <div>
      <div style={{ ...labelStyle }}>{label}</div>
      <Autocomplete
        value={value}
        multiple
        freeSolo
        options={[]}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="type keywords..."
            sx={{ minWidth: "230px" }}
          />
        )}
        onChange={(_, value) => setState({ ...state, [stateLabel]: value })}
      />
    </div>
  );
};
TextFieldMulti.propTypes = {
  label: PropTypes.string.isRequired,
  labelStyle: PropTypes.object,
  stateLabel: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired,
};

export default TextFieldMulti;
