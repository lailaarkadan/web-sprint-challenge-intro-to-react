import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character'
import styled from 'styled-components';

const Title = styled.h1`
font-size: 2em;
    
     width: 80%;
     margin: 0 auto;
     color: #4f0744;
     font-family: 'Exo', sans-serif;
     padding: 50px;
     font-size: 65px;
`;


const App = () => {

  
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
      <Title className="Header">React Wars</Title>
    
      {characters.map((data, info) => {
        return(
          <Character key={info} name={data.name} gender={data.gender} height={data.height} mass={data.mass} birth_year={data.birth_year} eye_color={data.eye_color} hair_color={data.hair_color} skin_color={data.skin_color} />
        )
      })}
          </div>
  
  );
}

export default App;




