import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../../components/dashboard';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData, HeroUP, pieChartData, StatistikUP, TransaksiTerbaruUP } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import product9 from '../../data/product9.jpg';
import KembaliBtn from '../../components/dashboard/Charts/KembaliBtn';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const UangPersediaan = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-500 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 mr-1 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Laporan</p>
              <p className="text-2xl">Rabu, 26 Agustus</p> 
                                            {/*tanggal*/}
            </div>
            {/* <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button> */}
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Cetak"
              borderRadius="10px"
              // onClick={onClick}
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
                                                      {/*earning Data*/}
          {HeroUP.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center mt-10 ">
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-96 p-4 px-10 flex-row justify-center  gap-10">
            <div>
              <p className="text-2xl font-semibold ">Statistik</p>
                                                          {/*Penjualan Tahunan*/}
            </div>

            <div className="w-full">
              <Pie id="chart-pie" data={StatistikUP} legendVisiblity height="full"  />
                                                        {/*pie chart*/}

            </div>
          </div>

        <div>
          <div
            className=" rounded-2xl md:w-400 p-4 m-3 "
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">Bulan ini</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8">Rp.50.000.000</p>
                                                            {/*Pemasukan*/}

                <p className="text-gray-200">Pemasukan Bulanan</p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
                                                          {/*Area Data*/}

            </div>
          </div>

          <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Transaksi Terbaru</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button>
          </div>

          <div className="mt-10 ">
            {TransaksiTerbaruUP.map((item) => (
              <div key={item.title} className="flex justify-between mt-4 w-full">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{ background: item.iconBg }}
                    className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>

                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>

        </div>

        </div>
      </div>
      <div className='flex justify-center mt-10'>
        <KembaliBtn base={'E-Expenditure'}/>
      </div>
    </div>
  );
};

export default UangPersediaan;
