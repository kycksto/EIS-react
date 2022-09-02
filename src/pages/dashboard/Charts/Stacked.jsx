import React from 'react';

import { ChartsHeader, Stacked as StackedChart } from '../../../components/dashboard';
import KembaliBtn from '../../../components/dashboard/Charts/KembaliBtn';

const Stacked = () => (
  <div className="m-4 md:m-10 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="UPBJJ-UT" title="Revenue Breakdown" />
    <div className="w-full">
      <StackedChart />
    </div>
    <KembaliBtn base={'E-Budgeting'}/>
  </div>
);

export default Stacked;
