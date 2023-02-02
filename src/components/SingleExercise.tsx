import React from 'react';
import './style.css';
import { ExerciseData } from '../models';
import { ImPencil2 } from 'react-icons/im';
import { AiFillDelete } from 'react-icons/ai';
import { RiAddLine } from 'react-icons/ri';



interface Props {
  exerciseList: ExerciseData[];
  setExerciseList: React.Dispatch<React.SetStateAction<ExerciseData[]>>
  exercise: ExerciseData;
};

const SingleExercise = ({ exerciseList, setExerciseList, exercise }: Props) => {
  return (
    <form className="exercise__single">
      <h4 className='exercise__single--text'>{exercise.exercise}</h4>
      <h4 className='exercise__single--number'>{exercise.sets}</h4>
      <h4 className='exercise__single--number'>{exercise.repetition}</h4>
      <div>
        <span className='icon'>
          <ImPencil2 />
        </span>
        <span className='icon'>
          <AiFillDelete />
        </span>
        <span className='icon'>
          <RiAddLine />
        </span>
      </div>
    </form>
  )
}

export default SingleExercise