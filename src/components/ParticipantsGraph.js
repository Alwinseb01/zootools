import React from 'react';
import { TinyColumn } from '@ant-design/plots';

const CustomTooltip = ({ x, data, position }) => {
    const tooltipStyle = {
        position: 'absolute',
        left: `${position}px`,
        bottom: '100%',
        transform: 'translateX(-50%)',
        // ... other styles
      };
    return (
      <div style={tooltipStyle}  className="bg-white border  p-2 rounded shadow-md text-base flex flex-col justify-items-center">
        <div className='flex flex-row'>
        <h5 className='font-bold'> {data[0]?.data?.y} </h5> <h5 className='ml-2'> Signups</h5>
        </div>
        <h5 className='text-sm text-gray-400 self-center'>August {x} </h5>
        <div className="tooltip-pointer absolute w-2 h-2 bg-white rotate-45 bottom-0 left-1/2 transform -translate-x-1/2"></div>
      </div>
    );
  };

export const ParticipantsGraph = () => {
  const data = [100, 200, 100, 200, 400, 500, 600, 200, 400, 300, 400, 300, 500, 600, 600, 500, 700, 900, 1200, 1000, 1200, 1400, 1600, 2000, 1800, 2000, 2200, 2000, 2400, 2700, 3000];
  const config = {
    height: 120,
    autoFit: true,
    data,
    tooltip: {
        customContent: function (x, data) {
            return <CustomTooltip x={x} data={data} position={x} />; 
          },
      },
    color: '#fed500',
    columnStyle: {
        radius: [6, 6, 6, 6], 
      },
    annotations: [
        {
          type: 'line',
          start: ['min', 'mean'],
          end: ['max', 'mean'],
          style: {
            stroke: 'rgba(0, 0, 0, 0.25)',
            lineDash: [4, 4],
          },
        },
        {
          type: 'line',
          start: ['min', 'max'], 
          end: ['max', 'max'],   
          style: {
            stroke: 'rgba(0, 0, 0, 0.25)',
            lineDash: [4, 4],
            zIndex: -1,
          },
        },
        {
          type: 'line',
          start: ['min', 'min'], 
          end: ['max', 'min'],  
          style: {
            stroke: 'rgba(0, 0, 0, 0.25)',
            lineDash: [4, 4],
            zIndex: -1,
        },
        },
      ],
  };

  return <TinyColumn {...config}  />;
};

