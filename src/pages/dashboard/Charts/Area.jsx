import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, SplineAreaSeries, Legend } from '@syncfusion/ej2-react-charts';
import { ChartsHeader } from '../../../components/dashboard';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../../data/dummy';
import { useStateContext } from '../../../contexts/ContextProvider';
import KembaliBtn from '../../../components/dashboard/Charts/KembaliBtn';

const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="UPBJJ-UT" title="Statistik Jumlah Pengadaan Barang" />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
      <KembaliBtn base={'E-Budgeting'}/>
    </div>
  );
};

export default Area;
