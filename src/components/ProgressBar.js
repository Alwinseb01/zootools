import React from 'react';
import { Progress } from '@ant-design/plots';

const ProgressBar = ({text, percent}) => {
//   const percent = 0.7;

  const textContainerStyle = {
    fontSize: '18px', // Adjust font size as needed
    color: 'black',    // Adjust text color
    zIndex: 5,
  };

  const config = {
    percent,
    color: ['rgba(254,213,0, 0.4)', 'rgba(255, 255, 255, 0.1)'],
  };

  return (
    <div className="relative h-full w-8/12 p-2">
      <Progress className="absolute top-0 left-0 w-full h-full rounded-lg" {...config}/>
      <div className="flex ml-2 items-center h-full" style={textContainerStyle}>
        {text}
      </div>
    </div>
  );
};

export default ProgressBar;