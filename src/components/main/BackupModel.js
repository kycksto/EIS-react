import BackupCube from './BackupCube.js'

function BackupModel() {
    return (
<>
   <BackupCube position={[ 0, 2, 0 ]} onClick={'/'} btntext={'Blank'}/>
   <BackupCube position={[ 0, 0, 2 ]} onClick={'/BPPU'} btntext={'BPPU'}/>
   <BackupCube position={[ 0, -2, 0 ]} onClick={'/'} btntext={'Blank'}/>
   <BackupCube position={[ 0, 0, -2 ]} onClick={'/EAudit'} btntext={'E-Audit'}/>
   <BackupCube position={[ 2, 0, 0 ]} onClick={'/E-Budgeting'} btntext={'E-Budgeting'}/>
   <BackupCube position={[ 2, 0, 2 ]} onClick={'/EExpenditure'} btntext={'E-Expenditure'}/>
   <BackupCube position={[ -2, 0, 2 ]} onClick={'/EHRPayroll'} btntext={'E-HR & Payroll'}/>
   <BackupCube position={[ 2, 0, -2 ]} onClick={'/EMR'} btntext={'E-MR'}/>
   <BackupCube position={[ 0, -2, 2 ]} onClick={'/EProc'} btntext={'E-Proc'}/>
   <BackupCube position={[ 0, 2, 2 ]} onClick={'/ERevenue'} btntext={'E-Revenue'}/>
   <BackupCube position={[ 0, 2, -2 ]} onClick={'/ESIGN'} btntext={'E-SIGN'}/>
   <BackupCube position={[ 0, -2, -2 ]} onClick={'/Panutan'} btntext={'Panutan'}/>
   <BackupCube position={[ -2, 2, 0 ]} onClick={'/SIAkun'} btntext={'SI-Akun'}/>
   <BackupCube position={[ -2, -2, 0 ]} onClick={'/SIPPan'} btntext={'SI-PPan'}/>
   <BackupCube position={[ 2, 2, 0 ]} onClick={'/'} btntext={'Universitas Terbuka'}/>
   <BackupCube position={[ 2, -2, 0 ]} onClick={'/AppUserManage'} btntext={'App User & Management'}/>
   <BackupCube position={[ -2, -2, 2 ]} onClick={'/EAsset'} btntext={'E-Asset'}/>
   <BackupCube position={[ 2, 2, 2 ]} onClick={'/'} btntext={'blank'}/>
   <BackupCube position={[ -2, 2, 2 ]} onClick={'/'} btntext={'blank'}/>
   <BackupCube position={[ 2, -2, 2 ]} onClick={'/'} btntext={'blank'}/>
   <BackupCube position={[ -2, -2, -2 ]} onClick={'/'} btntext={'blank'}/>
   <BackupCube position={[ -2, 2, -2 ]} onClick={'/'} btntext={'blank'}/>
   <BackupCube position={[ 2, 2, -2 ]} onClick={'/'} btntext={'blank'}/>
   <BackupCube position={[ -2, 0, -2 ]} onClick={'/'} btntext={'blank'}/>
   <BackupCube position={[ 2, -2, -2 ]} onClick={'/'} btntext={'blank'}/>
   <BackupCube position={[ -2, 0, 0 ]} onClick={'/'} btntext={'blank'}/>
 </>

    )
  }  
  export default BackupModel