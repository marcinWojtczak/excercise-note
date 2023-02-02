import './App.css';
import{ useState} from 'react';
import Header  from './components/Header';
import { ExerciseData } from './models';
import InputFields from './components/InputFields';
import ExerciseList from './components/ExerciseList';


const App = () => {

  //exercise data
  const [formData, setFormData] = useState<{exercise: string; sets: number|string; repetition: number|string}>(
    {exercise: '', sets: '', repetition: ''}
  );
  //array of exercise
  const [exerciseList, setExerciseList] = useState<ExerciseData[]>([])
  
  //add exercise data to array
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(formData) {
      setExerciseList([...exerciseList, {id: Date.now(), exercise: formData.exercise, sets: formData.exercise, repetition: formData.repetition}]);
      setFormData( {exercise:'', sets: '', repetition: ''})
    }
  }
  console.log(exerciseList)

  return (
    <div className="App">
      <Header />
      <main className="exerciseBox" >
        <InputFields 
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
        <ExerciseList/>
        {exerciseList.map((exercise) => (
          <li className="li">{exercise.exercise}</li>
        ))}
      </main>
      
    </div>
  );
}

export default App;
