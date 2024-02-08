import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import "./input.css"

const RadioButtonInput = ({
  title,
  titleStyle,
  type,
  inputStyle,
  inlineInputStyle,
  name,
  register,
  errors,
  data,
  watch,
  divInputStyle,
  placeholder,
  maxLength,
  minLength,
  openInputBoxValue,
  setValue,
  errorsInput,
}) => {
  const handleDeleteInput = () => {
    setValue(name, "");
  };

  const displayErrorMessage = (fieldName) => {
    const error = errors && errors[fieldName] ? errors[fieldName] : errorsInput && errorsInput[fieldName];
    return error ? (
      <span className="error-msg">
        {error.message || `Please enter ${fieldName}.`}
      </span>
    ) : null;
  };

  return (
    <div>
      <label className={titleStyle}>{title}</label>
      <br />
      {watch(name) !== openInputBoxValue ? (
        <div className={divInputStyle}>
          {data.map((value, index) => (
            <React.Fragment key={index}>
              <input
                type="radio"
                value={value}
                {...register(name, {
                  required: true,
                })}
              />
              <span>{value}</span>
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div  style={{ display:"flex", gap: "10px", alignItems:"flex-end" }}>
          <input
            type={type}
            className={inputStyle}
            style={{
              ...inlineInputStyle,
              ...(errors && errors[name] ? { marginBottom: "0" } : {}),
            }}
            placeholder={placeholder}
            minLength={minLength}
            maxLength={maxLength}
            name={name}
            {...register(`${name}Specify`, {
              required: true,
              maxLength: {
                value: maxLength,
                message: `${title} should not exceed ${maxLength} characters.`,
              },
            })}
          />

          <button
            className="radio-input-del-btn"
            type="button"
            onClick={handleDeleteInput}
          >
            <RiDeleteBinLine />
          </button>
        </div>
      )}
      {displayErrorMessage(name)}
      {watch(name) === openInputBoxValue && displayErrorMessage(`${name}Specify`)}

    </div>
  );
};

export default RadioButtonInput;




