import React, { useState } from 'react';

interface TextAreaProps {
  labelTitle: string;
  labelStyle?: string;
  containerStyle?: string;
  defaultValue?: string;
  placeholder?: string;
  updateFormValue: (updateType: string, value: string) => void;
  updateType: string;
}

function TextArea({
  labelTitle,
  labelStyle,
  containerStyle,
  defaultValue,
  placeholder,
  updateFormValue,
  updateType,
}: TextAreaProps): JSX.Element {
  const [value, setValue] = useState<string>(defaultValue || '');

  const updateTextAreaValue = (val: string): void => {
    setValue(val);
    updateFormValue(updateType, val);
  };

  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label">
        <span className={'label-text text-xs text-base-content ' + (labelStyle || '')}>{labelTitle}</span>
      </label>
      <textarea
        value={value}
        placeholder={placeholder || ''}
        onChange={(e) => updateTextAreaValue(e.target.value)}
        className="textarea textarea-bordered w-full"
      />
    </div>
  );
}

export default TextArea;