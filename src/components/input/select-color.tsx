import axios from 'axios';
import React, { useState, useEffect, FC } from 'react';
import InformationCircleIcon from '@heroicons/react/24/outline/InformationCircleIcon';
import CheckCircleIcon from '@heroicons/react/24/solid/CheckCircleIcon';

interface Option {
  name: string;
  value: string;
}

interface SelectColorProps {
  labelTitle: string;
  labelDescription?: string;
  defaultValue?: string;
  containerStyle?: string;
  placeholder: string;
  labelStyle?: string;
  SelectColorStyle?: string;
  options: Option[];
  updateKey: string;
  updateFormValue: (updateKey: string, value: string) => void; // Updated function signature
}

const SelectColor: FC<SelectColorProps> = (props) => {
  const {
    labelTitle,
    labelDescription,
    defaultValue = '',
    containerStyle = '',
    placeholder,
    labelStyle = '',
    SelectColorStyle = '',
    options,
    updateKey,
    updateFormValue,
  } = props;

  const [value, setValue] = useState<string>(defaultValue);

  const updateValue = (newValue: string) => {
    updateFormValue(updateKey, newValue); // Pass both updateKey and value
    setValue(newValue);
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
      <div className=" mx-auto bg-white p-4 rounded-lg shadow-md">
        <div className='grid grid-cols-5 gap-4'>
              {
                  options.map((o,k) => {
                    return (<div key={k} className=' w-12 h-12 rounded-full cursor-pointer flex items-center justify-center' style={{backgroundColor : o.value}} onClick={() => updateValue(o.value)}>{value == o.value ? <CheckCircleIcon className='w-6 h-6 text-slate-600' /> : ""}</div>)
                  })
              }
        </div>
      </div>

      </div>

      
  );
};

export default SelectColor;
