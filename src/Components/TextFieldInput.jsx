import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const TextFieldInput = ({ label, labelStyle, onChange, ...props }) => {
  return (
    <div>
      <div style={{ ...labelStyle }}>{label}</div>
      <TextField
        onChange={(event) => {
          onChange(event.target.value);
        }}
        {...props}
      />
    </div>
  );
};
TextFieldInput.propTypes = {
  label: PropTypes.string.isRequired,
  labelStyle: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

export default TextFieldInput;
