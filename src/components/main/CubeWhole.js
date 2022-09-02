import { AiFillReconciliation, AiFillCar, AiFillWallet, AiFillFund, AiFillDollarCircle, AiFillFilePpt, AiFillBook, AiFillCodeSandboxSquare, AiFillEdit, AiFillIdcard, AiFillContainer, AiFillMedicineBox, AiFillSchedule, AiFillFolderAdd } from 'react-icons/ai';
import BackupModel from './BackupModel';
import Marker from './Marker'

function Cube() {
    
    return (
        <>
        <BackupModel/>
        {/* Front side */}
        <group scale={[1.86,1.86,1.86]} >
        <group rotation={[0, 0, 0]}> 
        <Marker position={[0,0,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/AppUserManage'} target="_self" rel="noopener noreferrer">
                <AiFillCodeSandboxSquare className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>AppUserManage</p>
            </a>
        </Marker>

        <Marker position={[0,1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/E-Budgeting'} target="_self" rel="noopener noreferrer">
                <AiFillWallet className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>E-Budgeting</p>
            </a>
        </Marker>

        <Marker position={[0,-1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/E-Revenue'} target="_self" rel="noopener noreferrer">
                <AiFillFund className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>E-Revenue</p>
            </a>
        </Marker>

        <Marker position={[1.08,0,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/E-Proc'} target="_self" rel="noopener noreferrer">
                <AiFillMedicineBox className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>E-Proc</p>
            </a>
        </Marker>

        <Marker position={[1.08,1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/SI-Akun'} target="_self" rel="noopener noreferrer">
                <AiFillBook className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>SI-Akun</p>
            </a>
        </Marker>

        <Marker position={[1.08,-1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/E-Asset'} target="_self" rel="noopener noreferrer">
                <AiFillContainer className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>E-Asset</p>
            </a>
        </Marker>

        <Marker position={[-1.08,0,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/E-SIGN'} target="_self" rel="noopener noreferrer">
                <AiFillEdit className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>E-SIGN</p>
            </a>
        </Marker>

        <Marker position={[-1.08,1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/E-Expenditure'} target="_self" rel="noopener noreferrer">
                <AiFillCar className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5  '>E-Expenditure</p>
            </a>
        </Marker>

        <Marker position={[-1.08,-1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/E-MR'} target="_self" rel="noopener noreferrer">
                <AiFillReconciliation className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>E-MR</p>
            </a>
        </Marker>
        </group>

        {/* Right side */}
        <group rotation={[0, Math.PI / 2, 0]}> 
        <Marker position={[0,0,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/AppUserManage'} target="_self" rel="noopener noreferrer">
                <AiFillCodeSandboxSquare className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>AppUserManage</p>
            </a>
        </Marker>

        <Marker position={[0,1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/SI-PPan'} target="_self" rel="noopener noreferrer">
                <AiFillFolderAdd className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>SI-PPan</p>
            </a>
        </Marker>

        <Marker position={[0,-1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/Panutan'} target="_self" rel="noopener noreferrer">
                <AiFillFilePpt className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>Panutan</p>
            </a>
        </Marker>

        <Marker position={[1.08,0,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/E-Audit'} target="_self" rel="noopener noreferrer">
                <AiFillSchedule className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>E-Audit</p>
            </a>
        </Marker>

        <Marker position={[1.08,1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/BPPU'} target="_self" rel="noopener noreferrer">
                <AiFillDollarCircle className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>BPPU</p>
            </a>
        </Marker>

        <Marker position={[1.08,-1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/E-HRPayroll'} target="_self" rel="noopener noreferrer">
                <AiFillIdcard className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>E-HR Payroll</p>
            </a>
        </Marker>

        <Marker position={[-1.08,0,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/E-Proc'} target="_self" rel="noopener noreferrer">
                <AiFillMedicineBox className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>E-Proc</p>
            </a>
        </Marker>

        <Marker position={[-1.08,1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/SI-Akun'} target="_self" rel="noopener noreferrer">
                <AiFillBook className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>SI-Akun</p>
            </a>
        </Marker>

        <Marker position={[-1.08,-1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/E-Asset'} target="_self" rel="noopener noreferrer">
                <AiFillContainer className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>E-Asset</p>
            </a>
        </Marker>
        </group>

        {/* Left side */}
        <group rotation={[0, -Math.PI / 2, 0]}> 
        <Marker position={[0,0,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/AppUserManage'} target="_self" rel="noopener noreferrer">
                <AiFillCodeSandboxSquare className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>AppUserManage</p>
            </a>
        </Marker>

        <Marker position={[0,1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/SI-PPan'} target="_self" rel="noopener noreferrer">
                <AiFillFolderAdd className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>SI-PPan</p>
            </a>
        </Marker>

        <Marker position={[0,-1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/Panutan'} target="_self" rel="noopener noreferrer">
                <AiFillFilePpt className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>Panutan</p>
            </a>
        </Marker>

        <Marker position={[1.08,0,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/E-SIGN'} target="_self" rel="noopener noreferrer">
                <AiFillEdit className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>E-SIGN</p>
            </a>
        </Marker>

        <Marker position={[1.08,1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/E-Expenditure'} target="_self" rel="noopener noreferrer">
                <AiFillCar className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 '>E-Expenditure</p>
            </a>
        </Marker>

        <Marker position={[1.08,-1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/E-MR'} target="_self" rel="noopener noreferrer">
                <AiFillReconciliation className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>E-MR</p>
            </a>
        </Marker>

        <Marker position={[-1.08,0,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/E-Proc'} target="_self" rel="noopener noreferrer">
                <AiFillMedicineBox className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>E-Proc</p>
            </a>
        </Marker>

        <Marker position={[-1.08,1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/SI-Akun'} target="_self" rel="noopener noreferrer">
                <AiFillBook className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>SI-Akun</p>
            </a>
        </Marker>

        <Marker position={[-1.08,-1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/E-Asset'} target="_self" rel="noopener noreferrer">
                <AiFillContainer className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>E-Asset</p>
            </a>
        </Marker>
        </group>

        {/* Back side */}
        <group rotation={[0, Math.PI / 1, 0]}> 
        <Marker position={[0,0,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/AppUserManage'} target="_self" rel="noopener noreferrer">
                <AiFillCodeSandboxSquare className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>AppUserManage</p>
            </a>
        </Marker>

        <Marker position={[0,1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/E-Budgeting'} target="_self" rel="noopener noreferrer">
                <AiFillWallet className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>E-Budgeting</p>
            </a>
        </Marker>

        <Marker position={[0,-1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/E-Revenue'} target="_self" rel="noopener noreferrer">
                <AiFillFund className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>E-Revenue</p>
            </a>
        </Marker>

        <Marker position={[1.08,0,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/E-Proc'} target="_self" rel="noopener noreferrer">
                <AiFillMedicineBox className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>E-Proc</p>
            </a>
        </Marker>

        <Marker position={[1.08,1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/SI-Akun'} target="_self" rel="noopener noreferrer">
                <AiFillBook className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>SI-Akun</p>
            </a>
        </Marker>

        <Marker position={[1.08,-1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/E-Asset'} target="_self" rel="noopener noreferrer">
                <AiFillContainer className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>E-Asset</p>
            </a>
        </Marker>

        <Marker position={[-1.08,0,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/E-Audit'} target="_self" rel="noopener noreferrer">
                <AiFillSchedule className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>E-Audit</p>
            </a>
        </Marker>

        <Marker position={[-1.08,1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/BPPU'} target="_self" rel="noopener noreferrer">
                <AiFillDollarCircle className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>BPPU</p>
            </a>
        </Marker>

        <Marker position={[-1.08,-1.08,1.7]} >
            <a className='hover flex flex-wrap justify-center pb-2'  href={'/E-HRPayroll'} target="_self" rel="noopener noreferrer">
                <AiFillIdcard className='w-3 h-3 justify-center'/>
                <p className='text-xxs mt-0.5 font-semibold '>E-HR Payroll</p>
            </a>
        </Marker>
        </group>
        </group>
      {/* </mesh> */}
      </>
    )
}

export default Cube