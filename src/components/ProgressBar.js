import React from 'react';
import ReactDOM from 'react-dom';
import { Progress } from '@ant-design/plots';

const ProgressBar = () => {
  const percent = 0.7;
  const text = `${Math.round(percent * 100)}%`;

  const textContainerStyle = {
    fontSize: '18px', // Adjust font size as needed
    color: '#000',    // Adjust text color
  };

  const config = {
    percent,
    color: ['#5B8FF9', '#E8EDF3'],
  };

  return (
    <div className="relative h-16 w-64">
      <Progress className="absolute top-0 left-0 w-full h-full" {...config} />
      <div className="flex justify-center items-center h-full" style={textContainerStyle}>
        {text}
      </div>
    </div>
  );
};

export default ProgressBar;