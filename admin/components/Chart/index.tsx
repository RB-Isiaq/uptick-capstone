'use client';

import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      colors={['#0E1933', '#2B4A99', '#A3BDFF']}
      series={[
        {
          data: [
            { id: 0, value: 120, label: 'Less than a year' },
            { id: 1, value: 111, label: 'Less than a year' },
            { id: 2, value: 98, label: 'Less than a year' },
          ],
        },
      ]}
      width={450}
      height={207}
    />
  );
}
