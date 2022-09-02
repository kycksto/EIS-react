import React from 'react';

import { ChartsHeader, LineChart } from '../../../components/dashboard';
import KembaliBtn from '../../../components/dashboard/Charts/KembaliBtn';

const Line = () => (
  <div className="m-4 md:m-10 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="UPBJJ-UT" title="Statistik Produktivitas" />
    <div className="w-full">
      <LineChart data={'Perencanaan'} />
    </div>
    <KembaliBtn base={'E-Budgeting'}/>
  </div>
);

export default Line;
