import React, { useState } from 'react';
import InputExercise from './InputExercise';


const ExerciseBox = () => {
  const [exercise, setExercise] = useState<string>('');
  const [sets, setSets] = useState<number>(0);
  const [repetition, setRepetition] = useState<number>(0);
  
  return (
    <main className="exerciseBox" >
      <InputExercise 
        exercise={exercise}
        setExercise={setExercise}
        sets={sets}
        setSets={setSets}
        repetition={repetition}
        setRepetition={setRepetition}
      />
    </main>
  )
}

export default ExerciseBox