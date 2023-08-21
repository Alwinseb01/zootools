import React from 'react'
import ProgressBar from './ProgressBar';

const data= [
  {
    site: 'United States',
    traffic: 30000,
    src: 'https://flagcdn.com/24x18/us.png',
  },
  {
    site: 'Germany',
    traffic: 20000,
    src: 'https://flagcdn.com/24x18/de.png',   
  },
  {
    site: 'Netherlands',
    traffic: 10000,
    src: 'https://flagcdn.com/24x18/nl.png',
  },
  {
    site: 'India',
    traffic: 5000,
    src: 'https://flagcdn.com/24x18/in.png',
    
  },
  { 
    site: 'Japan',
    traffic: 3000,
    src: 'https://flagcdn.com/24x18/jp.png',
  },
  {
    site: 'Other',
    traffic: 2000,
    src: '🌏',
  },
];

function Location() {

  var total_traffic = data.reduce((a, b) => a + b.traffic, 0);
  return (
    <div className='w-10/12 bg-white rounded-lg shadow-md p-4 mr-3 p-8 my-4'>
      <div className='flex flex-col sm:flex-row justify-between items-center'>
        <h2 className='text-xl font-bold'>Signup Location</h2>
        <div className='flex flex-row items-center'>     
          <button className={'font-bold rounded-md mt-6 p-3 bg-gray-100 text-gray-900 hover:bg-gray-200'}>Country</button>
          <button className={'font-bold rounded-md mt-6 p-3 text-gray-900 hover:bg-gray-200'}>City</button>

        </div>
      </div>
      <div className='p-4'>
      {data.map((item, index) => {
        return (
          <div className='flex flex-row justify-between items-center'>
            <ProgressBar key={index} text={item.site} percent={item.traffic/total_traffic} flag={item.src} />
            <h5>{item.traffic}</h5>
          </div>
        )
      })}
      </div>

    <button className={'font-bold rounded-md mt-6 p-3 bg-gray-100 text-gray-900 hover:bg-gray-200'}>See all countries</button>

    </div>
  )
}

export default React.memo(Location);