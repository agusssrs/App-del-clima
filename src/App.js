import React, { useEffect, useState } from 'react';
import CardInfo from './components/CardInfo';
import GetApiInfo from './helpers/GetApiInfo';
import SearchBar from './components/SearchBar';
import './components/All.css'


const App = () => {
  const [data, setData] = useState ({
    main:'',
    city:'',
    country:'',
    temp:'',
    temp_max:'',
    temp_min:'',
    feels_like:''
  });

  const [city, setCity] = useState('')

  useEffect(()=>{
    GetApiInfo(city).then((data) => {
      

      setData((prevState) =>({
        ...prevState,
        icon:data.weather[0].icon,
        main:data.weather[0].main, 
        city:data.name,
        country:data.sys.country,
        temp:Math.round (data.main.temp),
        temp_max:Math.round (data.main.temp_max), 
        temp_min:Math.round (data.main.temp_min),
        feels_like:Math.round (data.main.feels_like)
      }))
    })
  },[city]);

  const handleSubmit = (e) =>{
    e.preventDefault()
    setCity(e.target[0].value)
    console.log(e.target[0].value)
    e.target.reset()
  }

  return (
    <>
      <SearchBar handleSubmit = {handleSubmit} />
      <CardInfo data={data}/>
      <section id='infoForUsers'>
        <div className='textInfo'>
          <span>Usa el buscador para encontrar la ciudad que quieras.</span>
          <span>Recomiendo al buscar la ciudad introduzcas el pais de esta manera: "Roma,IT".</span>
          <span>Luego de la coma, tendrás que poner las 2 primeras letras del pais al que te referís.</span>
        </div>
      </section>
    </>
  )
}

export default App
