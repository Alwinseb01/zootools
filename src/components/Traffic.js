import React from 'react'

function Traffic() {
  return (
    <div className='w-10/12 bg-white shadow-md p-4 my-4 ml-3'>
      <div className='flex flex-row justify-between items-center'>
        <h2 className='text-xl font-bold'>Traffic</h2>
        <div className='flex flex-row items-center'>     
          <button className={'font-bold rounded-md mt-6 p-3 bg-gray-100 text-gray-900 hover:bg-gray-200'}>Source</button>
          <button className={'font-bold rounded-md mt-6 p-3 text-gray-900 hover:bg-gray-200'}>City</button>

        </div>
      </div>
    </div>
  )
}

export default React.memo(Traffic);