import styled from 'styled-components'
import { CityComponent } from './components/CityComponent';
import { WeatherComponent } from './components/WeatherInfoComponent';
import { useState } from 'react';
import axios from 'axios';


const Api_Key = "3b0ad80c59d54b1682e669d706834fea";

const Container = styled.div`
display:flex;
flex-direction: column;
margin: auto;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
padding: 20px 10px;
border-radius: 4px;
width: 380px;
background: white;
font-family: 'Montserrat', sans-serif;
`;
const AppLabel = styled.span`
color: black;
font-size: 18px;
font-weight: bold
`;




function App() {

  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();


  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`);
    
    updateWeather(response.data);
  
  }

  return (
 <Container>
 <AppLabel>React Weather App</AppLabel>
 
 {weather ? <WeatherComponent weather = {weather}/> :<CityComponent updateCity = {updateCity} fetchWeather = {fetchWeather}/>}
  

</Container> 



  );
}

export default App;
