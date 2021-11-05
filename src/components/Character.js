// Write your Character component here
import React, { useState } from 'react';
import styled from "styled-components";


const Style = styled.div`
border: 2px solid green;
margin-left: 20%;
margin-right:20%;
h2, p{
    color: ; black
    font-family: serif
}
`
export default function Character(data) {

return (
    <Style className='App'>
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



