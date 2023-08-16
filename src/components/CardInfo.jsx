import React from 'react';
import './All.css'


const CardInfo = ({data}) => {

    const image = 
    data.icon === '01d' ?  'https://res.cloudinary.com/dhlrtodso/image/upload/v1692130981/01d_r8a0qp.png':
    data.icon === '01n' ? 'https://res.cloudinary.com/dhlrtodso/image/upload/v1692130981/01n_fjeiko.png':
    data.icon === '02d' ? 'https://res.cloudinary.com/dhlrtodso/image/upload/v1692130981/02d_mw5jrw.png':
    data.icon === '02n' ? 'https://res.cloudinary.com/dhlrtodso/image/upload/v1692130981/02n_erjztf.png':
    data.icon === '03d' ? 'https://res.cloudinary.com/dhlrtodso/image/upload/v1692130981/03d_gsccba.png':
    data.icon === '03n' ? 'https://res.cloudinary.com/dhlrtodso/image/upload/v1692130981/03n_vk7iti.png':
    data.icon === '04d' ? 'https://res.cloudinary.com/dhlrtodso/image/upload/v1692130982/04d_fxf8fn.png':
    data.icon === '04n' ? 'https://res.cloudinary.com/dhlrtodso/image/upload/v1692130982/04n_k2iaei.png':
    data.icon === '09d' ? 'https://res.cloudinary.com/dhlrtodso/image/upload/v1692130982/09d_ttci64.png':
    data.icon === '09n' ? 'https://res.cloudinary.com/dhlrtodso/image/upload/v1692130982/09n_nf2av3.png':
    data.icon === '10d' ? 'https://res.cloudinary.com/dhlrtodso/image/upload/v1692130982/10d_mt1rx8.png':
    data.icon === '10n' ? 'https://res.cloudinary.com/dhlrtodso/image/upload/v1692130982/10n_gqldzt.png':
    data.icon === '11d' ? 'https://res.cloudinary.com/dhlrtodso/image/upload/v1692130982/11d_lhpazw.png':
    data.icon === '11n' ? 'https://res.cloudinary.com/dhlrtodso/image/upload/v1692130983/11n_q3wdyu.png':
    data.icon === '13d' ? 'https://res.cloudinary.com/dhlrtodso/image/upload/v1692130982/13d_i72vgi.png':
    data.icon === '13n' ? 'https://res.cloudinary.com/dhlrtodso/image/upload/v1692130982/13n_fylieq.png':
    data.icon === '50d' ? 'https://res.cloudinary.com/dhlrtodso/image/upload/v1692130982/50d_msjntb.png':
    data.icon === '50n' ? 'https://res.cloudinary.com/dhlrtodso/image/upload/v1692130983/50n_rzhlvf.png':''

    

  return (
    <>
    <section id='info'>
        <div className="main">
            <img src={image}/>
            <h2>{data.temp}Cº</h2>
        </div>
        <div className='data'>
            <h3 className='weather'>{data.main}</h3>
            <h3 className='city'>{data.city}</h3>
            <h5 className='country'>{data.country}</h5>
            <h5 className='tempRange'>Temperatura maxima: {data.temp_max}Cº</h5>
            <h5 className='tempRange'>Temperatura minima: {data.temp_min}Cº</h5>
            <h5 className='tempRange'>Sensacion termica: {data.feels_like}Cº</h5>           
        </div>
    </section>
    </>
  )
}

export default CardInfo