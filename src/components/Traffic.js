import React from 'react'
import ProgressBar from './ProgressBar';

const data= [
  {
    site: 'Google',
    traffic: 30000,
  },
  {
    site: 'Twitter',
    traffic: 20000,
  },
  {
    site: 'Facebook',
    traffic: 10000,
  },
  {
    site: 'Linkedin',
    traffic: 5000,
  },
  { 
    site: 'Youtube',
    traffic: 3000,
  },
  {
    site: 'Other',
    traffic: 2000,
  },
];

function Traffic() {

  var total_traffic = data.reduce((a, b) => a + b.traffic, 0);
  return (
    <div className='w-10/12 bg-white rounded-lg shadow-md p-4 mr-3 p-8 my-4'>
      <div className='flex flex-col sm:flex-row justify-between items-center'>
        <h2 className='text-xl font-bold'>Traffic</h2>
        <div className='flex flex-row items-center'>     
          <button className={'font-bold rounded-md mt-6 p-3 bg-gray-100 text-gray-900 hover:bg-gray-200'}>Source</button>
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
      
    <button className={'font-bold rounded-md mt-6 p-3 bg-gray-100 text-gray-900 hover:bg-gray-200'}>See Traffic sources</button>

    </div>
  )
}

export default React.memo(Traffic);