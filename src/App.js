import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character'



const App = () => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        setCharacters(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    
      {characters.map((data, info) => {
        return(
          <Character key={info} name={data.name} gender={data.gender} height={data.height} mass={data.mass} birth_year={data.birth_year} eye_color={data.eye_color} hair_color={data.hair_color} skin_color={data.skin_color} />
        )
      })}
          </div>
  
  );
}

export default App;
// .map is giving me an error - map not defined



