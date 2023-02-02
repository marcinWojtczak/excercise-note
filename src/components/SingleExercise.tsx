import React from 'react';
import './style.css';

interface Props {
  formData: {exercise: string; sets: number|string; repetition: number|string};
  setFormData: React.Dispatch<React.SetStateAction<{
    exercise: string;
    sets: number | string;
    repetition: number | string;
  }>>
};

const SingleExercise = ({ formData, setFormData }: Props) => {
  return (
    <div>
      <h1>formData</h1>
    </div>
  )
}

export default SingleExercise