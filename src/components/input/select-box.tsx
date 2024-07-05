import axios from 'axios';
import React, { useState, useEffect, FC } from 'react';
import InformationCircleIcon from '@heroicons/react/24/outline/InformationCircleIcon';

interface Option {
  name: string;
  value: string;
}

interface SelectBoxProps {
  labelTitle: string;
  labelDescription?: string;
  defaultValue?: string;
  containerStyle?: string;
  placeholder: string;
  labelStyle?: string;
  selectBoxStyle?: string;
  options: Option[];
  updateKey: string;
  updateFormValue: (updateKey: string, value: string) => void; // Updated function signature
}

const SelectBox: FC<SelectBoxProps> = (props) => {
  const {
    labelTitle,
    labelDescription,
    defaultValue = '',
    containerStyle = '',
    placeholder,
    labelStyle = '',
    selectBoxStyle = '',
    options,
    updateKey,
    updateFormValue,
  } = props;

  const [value, setValue] = useState<string>(defaultValue);

  const updateValue = (newValue: string) => {
    console.log(newValue)
    updateFormValue(updateKey, newValue); // Pass both updateKey and value
    // setValue(newValue);
  };

  useEffect(() => {
      setValue(defaultValue)
  }, [defaultValue])

  return (
    <div className={`inline-block ${containerStyle}`}>
      <label className={`label ${labelStyle}`}>
        <div className="label-text">
          {labelTitle}
          {labelDescription && (
            <div className="tooltip tooltip-right" data-tip={labelDescription}>
              <InformationCircleIcon className="w-4 h-4" />
            </div>
          )}
        </div>
      </label>

      <select
        className={`select select-bordered w-full ${selectBoxStyle}`}
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      >
        <option disabled value="PLACEHOLDER">
          {placeholder}
        </option>
        {options.map((o, k) => (
          <option value={o.value || o.name} key={k}>
            {o.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
