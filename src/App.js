import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Footer, ThemeSettings } from './components/dashboard';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, ColorMapping, Editor } from './pages/dashboard';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import Home from './pages/Home';
import AppUserManage from "./pages/main/AppUserManage";
import BPPU from "./pages/main/BPPU";
import EAsset from "./pages/main/EAsset";
import EAudit from "./pages/main/EAudit";
import Ebudgeting from "./pages/main/Ebudgeting";
import EExpenditure from "./pages/main/EExpenditure";
import EHRPayroll from "./pages/main/EHRPayroll";
import EMR from "./pages/main/EMR";
import EProc from "./pages/main/EProc";
import ERevenue from "./pages/main/ERevenue";
import ESIGN from "./pages/main/ESIGN";
import SIAkun from "./pages/main/SIAkun";
import SIPPan from "./pages/main/SIPPan";
import Error from "./pages/main/Error";
import UangPersediaan from './pages/dashboard/UangPersediaan';


const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, [] );

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-slate-300 min-h-screen md:ml-72 w-full md:h-full '
                : 'bg-slate-300 dark:bg-main-dark-bg  w-full min-h-screen flex-2 md:h-full '
            }
          >

            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Home />)} />

                {/* Pages */}
                <Route exact path="/" element={<Home/>}/>
                <Route path="/AppUserManage" element={<AppUserManage/>}/>
                <Route path="/BPPU" element={<BPPU/>}/>
                <Route path="/E-Asset" element={<EAsset/>}/>
                <Route path="/E-Audit" element={<EAudit/>}/>
                <Route path="/E-Budgeting" element={<Ebudgeting/>}/>
                <Route path="/E-Expenditure" element={<EExpenditure/>}/>
                <Route path="/E-HRPayroll" element={<EHRPayroll/>}/>
                <Route path="/EMR" element={<EMR/>}/>
                <Route path="/E-Proc" element={<EProc/>}/>
                <Route path="/E-Revenue" element={<ERevenue/>}/>
                <Route path="/E-SIGN" element={<ESIGN/>}/>
                <Route path="/SI-Akun" element={<SIAkun/>}/>
                <Route path="/SI-PPan" element={<SIPPan/>}/>
                <Route path='*' element={<Error/>}/>
                <Route path="/Ecommerce" element={<Ecommerce/>} />

                {/* Laporan */}
                <Route path="/UangPersediaan" element={<UangPersediaan/>} />

                {/* Admin  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />

                {/* charts  */}
                <Route path="/Dashboard" element={<Ecommerce/>}/>
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />

              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
