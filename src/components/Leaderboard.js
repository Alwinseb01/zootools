import React from 'react'

const leaderboard_data = [
  {
    email: 'paula.suarze@gmail.com',
    invites: 6500,
    country: 'USA'
  },
  {
    email: 'laura.kenet..3@yahoo.com',
    invites: 2300,
    country: 'Monaco'
  },
  {
    email: 'aaron.michael@arg.org',
    invites: 1200,
    country: 'Prague'
  },
  {
    email: 'jeremy.runner@aol.com',
    invites: 900,
    country: 'China'
  },
]

function Leaderboard() {
  return (
    <div className='w-10/12 bg-white rounded-lg shadow-md p-4 mr-3 p-8 my-4'>
      <h2 className='text-xl font-bold'>User Leaderboard</h2>
      <div className=' flex flex-row mt-6 justify-between	'>
        <div className='truncate'>
          <h5>Email</h5>
          {leaderboard_data.map((item, index) => {
            return (
              <div key={index} className='flex flex-row justify-start items-center mt-4'>
                <h5 className='mr-1'>{item.email}</h5>
                </div>
            )
          })}
        </div>

        <div>
          <h5>Friends Invited</h5>
          {leaderboard_data.map((item, index) => {
            return (
              <div key={index} className='flex flex-row justify-start items-center mt-4'>
                <h5 className='mr-1'>{item.invites}</h5>
                </div>
            )
          })}
        </div>

        <div>
          <h5>Country</h5>
          {leaderboard_data.map((item, index) => {
            return (
              <div key={index} className='flex flex-row justify-start items-center mt-4'>
                <h5 className='mr-1'>{item.country}</h5>
                </div>
            )
          })}
        </div>

      </div>
      <button className={'font-bold rounded-md mt-6 p-3 bg-gray-100 text-gray-900 hover:bg-gray-200'}>See Leaderboard</button>

    </div>
  )
}

export default React.memo(Leaderboard);