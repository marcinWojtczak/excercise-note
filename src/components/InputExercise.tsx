import React from 'react'

interface Props {
  exercise: string;
  setExercise: React.Dispatch<React.SetStateAction<string>>;
  sets: number;
  setSets:  React.Dispatch<React.SetStateAction<number>>;
  repetition: number;
  setRepetition:  React.Dispatch<React.SetStateAction<number>>;
}

const InputExercise = ({ exercise, setExercise, sets, setSets, repetition, setRepetition }: Props) => {
  return (
    <form className="form">
      <input className="form__input--text input" type="input" placeholder="Add exercise"/>
      <input className="form__input--number input" type="input" placeholder="Number of sets"/>
      <input className="form__input--number input" type="input" placeholder="Number of repetition"/>
      <button className="form__button">Add</button>
    </form>
  )
}

export default InputExercise