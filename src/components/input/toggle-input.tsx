import React, { useState } from "react";

export interface P {
  labelTitle: string;
  labelStyle?: string;
  type?: string;
  containerStyle?: string;
  defaultValue?: boolean;
  placeholder?: string;
  updateFormValue: (updateType: string, value: boolean) => void;
  updateType: string;
}

function ToggleInput(
  {
    labelTitle,
    labelStyle,
    type,
    containerStyle,
    defaultValue,
    placeholder,
    updateFormValue,
    updateType,
  }: P,
) {
  const [value, setValue] = useState(defaultValue);

  const updateToogleValue = () => {
    setValue(!value);
    updateFormValue(updateType, !value);
  };

  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label cursor-pointer">
        <span className={"label-text text-base-content " + labelStyle}>
          {labelTitle}
        </span>
        <input
          type="checkbox"
          className="toggle"
          checked={value}
          onChange={(e) => updateToogleValue()}
        />
      </label>
    </div>
  );
}

export default ToggleInput;
