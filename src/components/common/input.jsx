import React from "react";

const Input = ({ name, label, value, handleChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type="text"
        className="form-control"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
{
}
