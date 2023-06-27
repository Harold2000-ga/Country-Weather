import { useEffect, useState } from 'react'

export const Weather = ({ country }) => {
  const [weather, setWeather] = useState()

  useEffect(() => {
    const url = `https://api.weatherapi.com/v1/current.json?key=5bb844c98b1d44eabd8101033231604&q=${country}&aqi=no`
    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setWeather(response)
      })
      .catch(error => console.log(error))
  }, [country])

  return (
    <div>
      {weather !== undefined && (
        <>
          <div className='mt-10 text-center flex items-center gap-7'>
            <p className='text-4xl text-white'>{weather.current.temp_c} °C</p>
            <img className='w-30 h-30' src={weather.current.condition.icon} alt='weather' />
          </div>
          <div className='flex mt-10 items-center justify-start gap-4 text-white'>
            <div className='flex flex-col p-2 tracking-wider md:text-xl items-center gap-2'>
              <h3>Temp_F</h3>
              <p className='opacity-90'>{weather.current.temp_f}</p>
            </div>
            <div className='flex flex-col  px-6 border-x-2 justify-center  tracking-wider md:text-xl items-center gap-2'>
              <h3>Wind</h3>
              <p className='text-white'>{weather.current.wind_mph}/Mph</p>
            </div>
            <div className='flex flex-col p-2  tracking-wider md:text-xl items-center gap-2'>
              <h3 className=''>Humidity</h3>
              <p>{weather.current.humidity}</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
