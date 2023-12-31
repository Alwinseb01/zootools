import React from 'react'
import {Header, Participants, Insights, Leaderboard, Traffic, Location, Behaviour} from '../components';

function Dashboard() {
  return (
    <div className="h-full w-auto bg-pale-white flex flex-col items-center ">   
        <Header />
        <Participants />
        <Insights />
        <div className='flex flex-col items-center md:items-stretch h-auto md:flex-row w-full md:w-10/12'>  
            <Leaderboard />
            <Traffic />
        </div>
        <div className='flex flex-col items-center md:flex-row w-full self-center md:w-10/12'>
            <Location />
            <Behaviour />
        </div>
        
    </div>
  )
}

export default React.memo(Dashboard);