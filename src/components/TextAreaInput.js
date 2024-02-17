import React from "react";
import PropTypes from 'prop-types';

export default function TextAreaInput(props) {
  return (
    <>
      <label htmlFor={props.id} className="form-label">
        {props.text}
      </label>
      <textarea
        className="form-control"
        id={props.id}
        rows={props.rows}
        value={props.value}
        onChange={props.functionName}
        placeholder={props.text}
      ></textarea>
    </>
  );
}

TextAreaInput.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    rows: PropTypes.string.isRequired,
    value: PropTypes.any,
    functionName: PropTypes.func,
}

TextAreaInput.defaultProps = {
    id: 0,
    text: "Not Defined",
    rows: "Not Defined",
}