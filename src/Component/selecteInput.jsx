import React from "react";

const SelectInput = ({
  title,
  titleStyle,
  type,
  inlineStyle,
  selectStyle,
  defaultOption,
  Options,
  register,
  name,
  errors,
}) => {
  return (
    <div>
      <label className={titleStyle}>{title}</label>
      <br />
      <select
        type={type}
        style={{ ...inlineStyle }}
        className={selectStyle}
        {...register(`${name}`, {
          required: true,
        })}
     
      >
        <option className="new-vendor-dropdown-options" value="" hidden>
          {defaultOption}
        </option>
        {Options()}
      </select>
      <br />
      {errors && (
        <span className="error-msg">{`Please select the ${title}.`}</span>
      )}
    </div>
  );
};

export default SelectInput;


