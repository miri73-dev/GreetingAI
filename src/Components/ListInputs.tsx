import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../App';
import Inputs from './Inputs'; // ודא שהנתיב נכון
import { setEvent, setDetail, setWriting, setAtmosphere, setStyle } from '../Slices/clickInputSlice';

interface InputData {
  label: string;
  placeholder: string;
}

const ListInputs: React.FC = () => {
  const dataInputs = useSelector((state: RootState) => state.dataSlice.dataInputs);
  const dispatch = useDispatch();

  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

  const handleChange = (label: string) => (value: string) => {
    setInputValues(prevValues => ({
      ...prevValues,
      [label]: value
    }));

    // שליחת האקשן המתאים ל-Redux
    switch (label) {
      case 'the Event':
        dispatch(setEvent(value));
        break;
      case 'Detail':
        dispatch(setDetail(value));
        break;
      case 'type of writing':
        dispatch(setWriting(value));
        break;
      case 'Choose atmosphere':
        dispatch(setAtmosphere(value));
        break;
      case 'Choose Style':
        dispatch(setStyle(value));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {dataInputs.map((input: InputData, index: number) => (
        <Inputs
          key={index}
          label={input.label}
          placeholder={input.placeholder}
          value={inputValues[input.label] || ''}
          onChange={handleChange(input.label)} // וודא שהפונקציה המתאימה מועברת
        />
      ))}
    </div>
  );
};

export default ListInputs;
