import React from 'react';
import arrow_down from '..//assets/arrow_down.PNG';
import arrow_up from '..//assets/arrow_up.PNG';
import bulb from '..//assets/bulb.PNG';


const insight_data = [
  {
    src: arrow_down,
    bold: "Signups are slowing down.",
    txt: "-5% new than last week"
  },
  {
    src: arrow_up,
    bold: "80%",
    txt: "of your signups were invited by other members"
  },
  {
    src: bulb,
    bold: "80%",
    txt: "of your signups were invited by a friend"
  },
  {
    src: bulb,
    bold: "80%",  
    txt: "of your signups were invited by a friend"
  },
]


function Insights() {
  return (
    <div className='w-10/12 bg-white shadow-md p-4 mt-8 p-8 my-4'>
      <h2 className='text-2xl font-bold'>ZooTools Insights</h2>
      <h3 className='text-xl'>Making analytics simple and actionable</h3>

    

      <div className='flex flex-col md:flex-row md:justify-start mt-6'>
        <div className='md:w-1/2 ml-2 '>
        <h3 className='text-xl font-bold'>Summary</h3>

        <div className='mt-3'>
        {insight_data.map((item, index) => {
          return (
            <div key={index} className='flex flex-row justify-start items-center mt-4'>
              <img src={item.src} alt="" className='w-6 h-6 mr-2'/>
             
                <h3 className='font-bold mr-1'>{item.bold}</h3>
                <h5 className=''>{item.txt}</h5>
            
            </div>
          )
        })}

      </div>


        </div>
        <div className='md:w-1/2 ml-2 mt-4'>
        <h3 className='text-xl font-bold mb-4'>Recommendation</h3>
        <h5 className='font-bold mb-4'>Make sure to promote and <a href="" onClick={""} className='underline'>share your form</a></h5>
        <h5 className='font-bold mb-4'>Congrats! This is huge. Keep giving rewards for your users</h5>

        </div>
      </div>

    </div>
  )
}

export default React.memo(Insights);