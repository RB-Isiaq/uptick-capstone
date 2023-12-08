'use client';

import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie({
  lessThanOne,
  oneToTwo,
  aboveTwo,
}: {
  lessThanOne: number;
  oneToTwo: number;
  aboveTwo: number;
}) {
  return (
    <div className=" -ml-[100px]">
      <PieChart
        colors={['#0E1933', '#2B4A99', '#A3BDFF']}
        series={[
          {
            data: [
              { id: 0, value: lessThanOne, label: 'Less than a year' },
              { id: 1, value: oneToTwo, label: '1 to 2 years' },
              { id: 2, value: aboveTwo, label: 'More than 2 years' },
            ],
          },
        ]}
        width={450}
        height={180}
      />
    </div>
  );
}
