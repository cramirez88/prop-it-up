
import './App.css';
import PersonalCard from './components/PersonCard'

function App() {
  return (
    <div>
      <PersonalCard 
      lname = {'Doe'}
      fname = {'Jane'}
      age = {42}
      hairColor = {'Black'}
      />
      <PersonalCard 
      lname = {'Smith'}
      fname = {'John'}
      age = {88}
      hairColor = {'Brown'}
      />
      <PersonalCard 
      lname = {'Fillmore'}
      fname = {'Millard'}
      age = {50}
      hairColor = {'Brown'}
      />
      <PersonalCard 
      lname = {'Smith'}
      fname = {'Maria'}
      age = {62}
      hairColor = {'Brown'}
      />
    </div>
  )
}

export default App;
