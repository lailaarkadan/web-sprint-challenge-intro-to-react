// Write your Character component here
import React, { useState } from 'react';
import styled from "styled-components";


const Style = styled.div`
box-sizing: border-box;
padding: 0.5rem;
border-radius: 8px;
display: flex;
flex-direction: column;
justify-content: center;
border: solid #1d6e46;
margin-left: 20%;
margin-right:20%;
color: 
#4f0b44;
font-family: 'Exo', sans-serif;
padding: 50px;
transition: transform .9s ease-in-out;
    &:hover {
     transform: scale(1.5) rotate(360deg);
        background: #a19193;
      }
`




export default function Character(data) {

    return (
   
   <Style >
        <h2>{data.name}</h2>  
        <h4>Gender: {data.gender}</h4>
        <h4>Height: {data.height}</h4>
        <h4>Mass: {data.mass}</h4>
        <h4>BirthYear: {data.birth_year}</h4>
        <h4>Eye Color: {data.eye_color}</h4>
        <h4>Hair Color: {data.hair_color}</h4>
        <h4>Skin Color: {data.skin_color}</h4>
  </Style>
)
}



