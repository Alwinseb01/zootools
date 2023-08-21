import React from 'react'
import { TeamOutlined } from '@ant-design/icons';
import { ParticipantsGraph } from './ParticipantsGraph';

function Participants() {
  return (
    <div className='w-10/12 bg-white shadow-md p-4 mt-8 p-8 my-4'>
      <div className='flex flex-row space-x-2'>
        <h2 className='text-2xl font-bold'>100,000</h2> 
        <TeamOutlined className='text-lg'  />
      </div>
      <h3 className='text-xl'>Participants</h3>

      <ParticipantsGraph />

    </div>
  )
}

export default React.memo(Participants);