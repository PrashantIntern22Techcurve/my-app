import React from "react";
import "./form.css";
import { useForm } from "react-hook-form";
import TextInput from "../Component/textInput";
import RadioButtonInput from "../Component/radioButtonInput";
import SelecteInput from "../Component/selecteInput";

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({});

  const Options = () => {
    const countries = ["Country 1", "Country 2", "Country 3"];

    const countryOptions = countries.map((country, index) => (
      <option key={index} value={country}>
        {country}
      </option>
    ));

    return countryOptions;
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="form-main-div">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <SelecteInput
            title={"Registered Country"}
            titleStyle={"form-input-label"}
            type={"text"}
            inlineStyle={{  minWidth: "100%" }}
            selectStyle={"form-input-border-style"}
            defaultOption={
              "Select the country in which your company is registered"
            }
            Options={Options}
            register={register}
            name={"selectedCountry"}
            errors={errors.selectedCountry}
          />

          <TextInput
            title={"Registered Capital (INR)"}
            titleStyle={"form-input-label"}
            type={"number"}
            inputStyle={`form-input-border-style`}
            placeholder={"Enter registered capital"}
            required={true}
            maxLength={20}
            minLength={5}
            name={"RegisteredCapital"}
            register={register}
            errors={errors}
          />

          <RadioButtonInput
            titleStyle="form-input-label"
            title="Any litigation/arbitration in process or pending?"
            divInputStyle="form-radio-btn-div"
            data={["Yes", "No"]}
            name="litigation Arbitration"
            required={true}
            watch={watch}
            register={register}
            inputStyle="form-input-border-style"
            inlineInputStyle={{ width: "93%" }}
            openInputBoxValue="Yes"
            setValue={setValue}
            errors={errors}
            errorsInput={errors.errorsInput}
            placeholder={"Enter name"}
          />
        </div>

        <div className="form-submit-btn">
          <button className="form-button-submit" type="submit">
            {"Submit"}{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
