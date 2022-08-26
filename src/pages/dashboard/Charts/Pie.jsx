import React from 'react';

import { pieChartData } from '../../../data/dummy';
import { ChartsHeader, Pie as PieChart } from '../../../components/dashboard';
import KembaliBtn from '../../../components/dashboard/Charts/KembaliBtn';

const Pie = () => (
  <div className="m-4 md:m-10 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Pie" title="Project Cost Breakdown" />
    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
    </div>
    <KembaliBtn base={'E-Budgeting'}/>
  </div>
);

export default Pie;
