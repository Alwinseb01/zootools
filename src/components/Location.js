import React from 'react'
import ProgressBar from './ProgressBar';

const data= [
  {
    site: 'United States',
    traffic: 30000,
  },
  {
    site: 'Germany',
    traffic: 20000,
  },
  {
    site: 'Netherlands',
    traffic: 10000,
  },
  {
    site: 'India',
    traffic: 5000,
    
  },
  { 
    site: 'Japan',
    traffic: 3000,
  },
  {
    site: 'Other',
    traffic: 2000,
  },
];

function Location() {

  var total_traffic = data.reduce((a, b) => a + b.traffic, 0);
  return (
    <div className='w-10/12 bg-white shadow-md p-4 mr-3 p-8 my-4'>
      <div className='flex flex-row justify-between items-center'>
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
            <ProgressBar key={index} text={item.site} percent={item.traffic/total_traffic}/>
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