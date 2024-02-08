import React from "react";

const TextInput = ({
  title,
  titleStyle,
  type,
  inputStyle,
  placeholder,
  required,
  minLength,
  maxLength,
  name,
  register,
  errors,
}) => {
  const errorMessage = errors && errors[name]?.message;

  return (
    <div>
      <label className={titleStyle}>{title}</label>
      <br />
      <input
        type={type}
        className={inputStyle}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        name={name}
        {...register(`${name}`, {
          required: required && `${title} is required`,
          maxLength: {
            value: maxLength,
            message: `${title} should not exceed ${maxLength} characters.`,
          },
          minLength: {
            value: minLength,
            message: `${title} should have at least ${minLength} characters.`,
          },
        })}
      />
      {errorMessage && <span className="error-msg">{errorMessage}</span>}
    </div>
  );
};

export default TextInput;

