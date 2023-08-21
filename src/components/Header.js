import React from 'react'

function Header() {

  const time= [
    {
      time: '1h',
      selected: false
    },
    {
      time: '24d',
      selected: false
    },
    {
      time: '30d',
      selected: true
    },
    {
      time: '60d',
      selected: false
    },
  ]

  return (
    <div className='w-10/12 justify-between flex flex-row py-5'>
        <h1 className='text-2xl font-bold'>Summer refferal competition</h1>
        <div className=' flex bg-white shadow-md w-auto h-10 rounded-md justify-center items-center'>
          {
            time.map((item, index) => {
              return (
                <button key={index} className={`text-sm font-bold rounded-md h-6 w-9 m-3 hover:bg-gray-200 ${item.selected ? 'bg-gray-200 text-gray-500' : 'bg-gray-100 text-gray-400'}`}>{item.time}</button>
              )
            })
          }
        </div>  
    </div>
  )
}

export default React.memo(Header);