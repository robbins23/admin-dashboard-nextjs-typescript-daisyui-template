"use Client"
import React, { useEffect, useState } from 'react';
import XCircleIcon from '@heroicons/react/24/outline/XCircleIcon'

interface InputTagsProps {
  labelTitle: string;
  labelStyle?: string;
  containerStyle?: string;
  defaultValue: string[];
  placeholder?: string;
  updateFormValue: (updateKey: string, value: string[]) => void; // Updated function signature
  updateKey: string;
}

function InputTags({
  labelTitle,
  labelStyle,
  containerStyle,
  defaultValue,
  placeholder,
  updateFormValue,
  updateKey,
}: InputTagsProps): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [tags, setTags] = useState<string[]>(defaultValue);

  const updateInputValue = (val: string): void => {
    console.log("hwewew")
    setValue(val);
    // updateFormValue(updateKey, val); // Pass both updateKey and value
  };

  useEffect(() => {
    if (value.includes(',')) {
        const newTags = value.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
        setTags([...tags, ...newTags]);
        setValue('');
    }
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission if this input is in a form
      if(value.trim()!= ""){
        setTags([...tags, value.trim()]);
      }
      setValue('');
    }
  };

  useEffect(() => {
    updateFormValue(updateKey, tags); // Pass both updateKey and value
  }, [tags])

  const handleTagRemove = (index: number): void => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };


  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label">
        <span className={'label-text text-xs text-base-content ' + (labelStyle || '')}>{labelTitle}</span>
      </label>
      <p>
        {
            tags.map((t, k) => (
                <div key={k} className="badge badge-ghost mr-2 hover:badge-neutral cursor-pointer" onClick={() => handleTagRemove(k)}>{t}<XCircleIcon className='ml-1 w-4 h-4 '/></div>
            ))
        }
      </p>
      <input
        type={'text'}
        value={value}
        placeholder={placeholder || ''}
        onChange={(e) => updateInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="input input-bordered w-full mt-2"
      />
    </div>
  );
}

export default InputTags;
